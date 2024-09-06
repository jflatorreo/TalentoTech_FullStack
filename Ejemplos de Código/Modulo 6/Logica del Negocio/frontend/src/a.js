// App.js
import React, { useState, useEffect } from 'react';
import GameRoom from './components/GameRoom';
import PlayerList from './components/PlayerList';
import socket from './socket';

function App() {
    const [gameState, setGameState] = useState(null);
    const [playerName, setPlayerName] = useState('');
    const [isJoined, setIsJoined] = useState(false);

    useEffect(() => {
        socket.on('gameState', (newGameState) => {
            setGameState(newGameState);
        });

        socket.on('gameStarted', (newGameState) => {
            setGameState(newGameState);
        });

        socket.on('gameWon', (winnerName) => {
            alert(`${winnerName} has won the game!`);
        });

        return () => {
            socket.off('gameState');
            socket.off('gameStarted');
            socket.off('gameWon');
        };
    }, []);

    const joinGame = () => {
        if (playerName) {
            socket.emit('joinGame', playerName);
            setIsJoined(true);
        }
    };

    const startGame = () => {
        socket.emit('startGame');
    };

    if (!isJoined) {
        return (
            <div className="App">
                <h1>FullStack Logic Master</h1>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button onClick={joinGame}>Join Game</button>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>FullStack Logic Master</h1>
            <PlayerList players={gameState ? gameState.players : []} />
            {gameState && !gameState.gameStarted && (
                <button onClick={startGame}>Start Game</button>
            )}
            {gameState && gameState.gameStarted && (
                <GameRoom gameState={gameState} playerName={playerName} />
            )}
        </div>
    );
}

export default App;
