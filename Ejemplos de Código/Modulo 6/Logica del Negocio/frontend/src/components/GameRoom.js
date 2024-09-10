import React, { useState, useCallback, useEffect } from 'react';
import PlayerBoard from './PlayerBoard';
import PlayerHand from './PlayerHand';
import CardDeck from './CardDeck';
import ChallengeModal from './ChallengeModal';
import AdminPanel from './AdminPanel';
import WinnersList from './WinnersList';
import socket from '../socket';

function GameRoom({ gameState, playerName }) {

    const [showChallengeModal, setShowChallengeModal] = useState(false);
    const [challengeSolution, setChallengeSolution] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [isCurrentTurn, setIsCurrentTurn] = useState(false);

    useEffect(() => {
        if (gameState) {
            setIsAdmin(playerName === 'Admin');
            setCurrentPlayer(playerName === 'Admin' ? null : gameState.players.find(player => player.name === playerName));
            setIsCurrentTurn(!isAdmin && gameState.currentPlayerIndex !== null &&
                gameState.players[gameState.currentPlayerIndex].name === playerName);
        }
    }, [gameState, playerName, isAdmin]);

    useEffect(() => {
        socket.on('gameWon', (winnerName) => {
            alert(`${winnerName} has won the game!`);
        });

        socket.on('gameOver', (winners) => {
            alert(`Game over! Winners: ${winners.join(', ')}`);
        });

        return () => {
            socket.off('gameWon');
            socket.off('gameOver');
        };
    }, []);

    const startGame = useCallback(() => {
        socket.emit('startGame');
    }, []);

    const handleDrawConceptCard = useCallback(() => {
        if (isCurrentTurn && gameState.conceptCardsDrawn < gameState.maxConceptCards) {
            socket.emit('drawConceptCard', playerName);
        }
    }, [isCurrentTurn, playerName, gameState.conceptCardsDrawn, gameState.maxConceptCards]);

    const handleDiscardCard = useCallback((cardIndex) => {
        if (isCurrentTurn) {
            socket.emit('discardCard', playerName, cardIndex);
        }
    }, [isCurrentTurn, playerName]);

    const handleEndTurn = useCallback(() => {
        if (isCurrentTurn) {
            socket.emit('endTurn', playerName);
        }
    }, [isCurrentTurn, playerName]);

    const handleDrawChallengeCard = useCallback(() => {
        if (isCurrentTurn) {
            socket.emit('drawChallengeCard', playerName);
            setShowChallengeModal(true);
        }
    }, [isCurrentTurn, playerName]);

    const handleSolveChallenge = useCallback(() => {
        socket.emit('solveChallenge', playerName, challengeSolution);
        setShowChallengeModal(false);
        setChallengeSolution('');
    }, [playerName, challengeSolution]);

    if (!gameState) return <div>Esperando a iniciar el Juego...</div>;

    return (
        <div>
            <h2>Game Room</h2>
            {!gameState?.gameStarted && gameState?.players.length >= 2 && isAdmin && (
                <button onClick={startGame}>Start Game</button>
            )}
            {gameState?.gameStarted && !isAdmin && (
                <>
                    <PlayerBoard player={currentPlayer} />
                    <PlayerHand
                        hand={currentPlayer ? currentPlayer.hand : []}
                        playerName={playerName}
                        isCurrentTurn={isCurrentTurn}
                        gameStarted={gameState?.gameStarted}
                        onDiscardCard={handleDiscardCard}
                    />
                    <CardDeck
                        isCurrentTurn={isCurrentTurn}
                        conceptCardsDrawn={gameState?.conceptCardsDrawn}
                        maxConceptCards={gameState?.maxConceptCards}
                        onDrawConceptCard={handleDrawConceptCard}
                        onDrawChallengeCard={handleDrawChallengeCard}
                    />
                    {gameState?.currentChallenge && (
                        <div className="challenge">
                            <h3>Current Challenge</h3>
                            <p>{gameState.currentChallenge.description}</p>
                        </div>
                    )}
                    {isCurrentTurn && (
                        <button onClick={handleEndTurn}>End Turn</button>
                    )}
                </>
            )}
            {isAdmin && <AdminPanel gameState={gameState} />}
            <WinnersList winners={gameState.winners} />
            <ChallengeModal
                show={showChallengeModal}
                challenge={gameState.currentChallenge}
                solution={challengeSolution}
                onSolutionChange={setChallengeSolution}
                onSubmit={handleSolveChallenge}
                onClose={() => setShowChallengeModal(false)}
            />
        </div>
    );
}

export default GameRoom;