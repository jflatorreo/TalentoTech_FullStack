import React from 'react';
import socket from '../socket';

function AdminPanel({ gameState }) {
    const handleAcceptChallenge = () => {
        socket.emit('adminDecision', true);
    };

    const handleRejectChallenge = () => {
        socket.emit('adminDecision', false);
    };

    return (
        <div className="admin-panel">
            <h3>Admin Panel</h3>
            <h4>Players:</h4>
            <ul>
                {gameState.players.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>
            {gameState.pendingChallenge && (
                <div>
                    <h4>Current Challenge:</h4>
                    <p>{gameState.currentChallenge?.description}</p>
                    <h4>Player's Solution:</h4>
                    <p>{gameState.pendingChallenge.solution}</p>
                    <button onClick={handleAcceptChallenge}>Accept Solution</button>
                    <button onClick={handleRejectChallenge}>Reject Solution</button>
                </div>
            )}
            {!gameState.gameStarted && gameState.players.length >= 2 && (
                <button onClick={() => socket.emit('startGame')}>Start Game</button>
            )}
        </div>
    );
}

export default AdminPanel;