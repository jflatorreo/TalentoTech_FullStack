const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Add this line

const app = express();
app.use(cors());  // Add this line to enable CORS for all routes

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",  // Add this block
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3001;

// Game state
let gameState = {
    players: [],
    admin: null,
    conceptDeck: [],
    challengeDeck: [],
    currentChallenge: null,
    pendingChallenge: null,
    currentPlayerIndex: null,
    gameStarted: false,
};

// Game logic
const initializeGame = () => {
    gameState.conceptDeck = generateConceptDeck();
    gameState.challengeDeck = generateChallengeDeck();
};

const addPlayer = (playerName) => {
    if (playerName === 'Admin' && !gameState.admin) {
        gameState.admin = { name: 'Admin' };
        return true;
    } else if (playerName !== 'Admin' && gameState.players.length < 54 && !gameState.players.find(p => p.name === playerName)) {
        gameState.players.push({
            name: playerName,
            stack: {
                frontend: [],
                backend: [],
                database: [],
                infrastructure: [],
            },
            hand: [],
            score: 0,
        });
        return true;
    }
    return false;
};

const generateConceptDeck = () => {
    try {
        const rawData = fs.readFileSync(path.join(__dirname, 'conceptCards.json'), 'utf8');
        const conceptCards = JSON.parse(rawData);
        return conceptCards.map(card => ({
            ...card,
            type: 'concept'
        }));
    } catch (error) {
        console.error('Error al leer el archivo de cartas de concepto:', error);
        return [];
    }
};

const generateChallengeDeck = () => {
    try {
        const rawData = fs.readFileSync(path.join(__dirname, 'challengeCards.json'), 'utf8');
        const challengeCards = JSON.parse(rawData);
        return challengeCards.map(card => ({
            ...card,
            type: 'challenge'
        }));
    } catch (error) {
        console.error('Error al leer el archivo de cartas de desafío:', error);
        return [];
    }
};

const drawCard = (deckType) => {
    const deck = gameState[`${deckType}Deck`];
    if (deck.length > 0) {
        return deck.pop();
    }
    return null;
};

const startGame = () => {
    if (gameState.players.length >= 2 && !gameState.gameStarted) {
        gameState.gameStarted = true;
        gameState.currentPlayerIndex = 0;
        gameState.players.forEach(player => {
            player.hand = [];
            for (let i = 0; i < 5; i++) {
                const card = drawCard('concept');
                if (card) {
                    player.hand.push(card);
                }
            }
        });
        return true;
    }
    return false;
};

const getCurrentPlayer = () => {
    if (gameState.currentPlayerIndex !== null && gameState.players[gameState.currentPlayerIndex]) {
        return gameState.players[gameState.currentPlayerIndex];
    }
    return null;
};

const playCard = (playerName, cardIndex, category) => {
    const player = gameState.players.find(p => p.name === playerName);
    if (player && player.hand[cardIndex]) {
        const card = player.hand[cardIndex];
        if (card.category === category) {
            player.hand.splice(cardIndex, 1);  // Remover la carta de la mano
            player.stack[category].push(card);
            player.score += card.points;
            return true;
        }
    }
    return false;
};

const discardCard = (playerName, cardIndex) => {
    const player = gameState.players.find(p => p.name === playerName);
    if (player && player.hand[cardIndex]) {
        player.hand.splice(cardIndex, 1);  // Remover la carta de la mano
        return true;
    }
    return false;
};

const solveChallenge = (playerName, solution) => {
    const player = gameState.players.find(p => p.name === playerName);
    if (player && gameState.currentChallenge) {
        // In a real implementation, we'd have a more sophisticated way to evaluate solutions
        const success = Math.random() < 0.7; // 70% chance of success for this example
        if (success) {
            player.score += 5; // Bonus points for solving a challenge
        }
        gameState.currentChallenge = null;
        return success;
    }
    return false;
};

const checkWinCondition = (player) => {
    return player.stack.frontend.length >= 3 &&
        player.stack.backend.length >= 3 &&
        player.stack.database.length >= 2 &&
        player.stack.infrastructure.length >= 2;
};


const nextTurn = () => {
    if (gameState.players.length > 0) {
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    }
};

// Socket.io event handlers
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinGame', (playerName) => {
        console.log('joinGame');
        if (addPlayer(playerName)) {
            socket.emit('gameJoined', playerName);
            console.log('joined');
            io.emit('gameState', gameState);
        } else {
            socket.emit('joinError', 'Unable to join game');
        }
    });

    socket.on('startGame', () => {
        if (startGame()) {
            io.emit('gameState', gameState);
        } else {
            socket.emit('startError', 'Unable to start game');
        }
    });

    socket.on('drawConceptCard', (playerName) => {
        console.log(`Player ${playerName} is drawing a concept card`);
        const player = gameState.players.find(p => p.name === playerName);
        if (player && gameState.players[gameState.currentPlayerIndex].name === playerName) {
            const card = drawCard('concept');
            if (card) {
                console.log(`Drew card: ${JSON.stringify(card)}`);
                player.hand.push(card);
                nextTurn();
                io.emit('gameState', gameState);
            } else {
                console.log('No more concept cards in the deck');
            }
        } else {
            console.log(`It's not ${playerName}'s turn or player not found`);
        }
    });

    socket.on('drawChallengeCard', (playerName) => {
        if (gameState.players[gameState.currentPlayerIndex].name === playerName) {
            const card = drawCard('challenge');
            if (card) {
                gameState.currentChallenge = card;
                io.emit('gameState', gameState);
            }
        }
    });

    socket.on('solveChallenge', (playerName, solution) => {
        if (gameState.currentChallenge) {
            gameState.pendingChallenge = { playerName, solution };
            io.emit('gameState', gameState);
        }
    });

    socket.on('adminDecision', (isAccepted) => {
        if (gameState.pendingChallenge) {
            const player = gameState.players.find(p => p.name === gameState.pendingChallenge.playerName);
            if (player) {
                if (isAccepted) {
                    player.score += 5; // Bonus points for solving a challenge
                }
                gameState.currentChallenge = null;
                gameState.pendingChallenge = null;
                nextTurn();
                io.emit('gameState', gameState);
            }
        }
    });

    socket.on('playCard', (playerName, cardIndex, category) => {
        if (playCard(playerName, cardIndex, category)) {
            const player = gameState.players.find(p => p.name === playerName);
            if (checkWinCondition(player)) {
                io.emit('gameWon', playerName);
            } else {
                io.emit('gameState', gameState);
            }
        }
    });

    socket.on('discardCard', (playerName, cardIndex) => {
        if (discardCard(playerName, cardIndex)) {
            io.emit('gameState', gameState);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        // Implement logic to remove player from game if needed
    });
});

// Initialize game when server starts
initializeGame();

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));