// components/PlayerHand.js

import React from 'react';
import socket from '../socket';

function PlayerHand({ hand, playerName, isCurrentTurn, gameStarted }) {
    const playCard = (cardIndex, category) => {
        if (isCurrentTurn && gameStarted) {
            socket.emit('playCard', playerName, cardIndex, category);
        }
    };

    const discardCard = (cardIndex) => {
        if (isCurrentTurn && gameStarted) {
            socket.emit('discardCard', playerName, cardIndex);
        }
    };

    if (!hand || hand.length === 0) {
        return <div>Sin Cartas en la Mano</div>;
    }

    return (
        <div className="player-hand">
            <h3>Mano</h3>
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
                            Jugar Carta
                        </button>
                        <button
                            onClick={() => discardCard(index)}
                            disabled={!isCurrentTurn || !gameStarted}
                        >
                            Descartar Carta
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerHand;