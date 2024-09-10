import React from 'react';
import socket from '../socket';

function PlayerHand({ hand, playerName, isCurrentTurn, gameStarted, onDiscardCard }) {
    const playCard = (cardIndex, category) => {
        if (isCurrentTurn && gameStarted) {
            socket.emit('playCard', playerName, cardIndex, category);
        }
    };

    return (
        <div className="player-hand">
            <h3>Hand</h3>
            <div className="cards">
                {hand.map((card, index) => (
                    <div key={index} className="card">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                        <p>Category: {card.category}</p>
                        <p>Points: {card.points}</p>
                        <button
                            onClick={() => playCard(index, card.category)}
                            disabled={!isCurrentTurn || !gameStarted}
                        >
                            Play Card
                        </button>
                        <button
                            onClick={() => onDiscardCard(index)}
                            disabled={!isCurrentTurn || !gameStarted}
                        >
                            Discard Card
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerHand;