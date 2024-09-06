import React from 'react';

function PlayerBoard({ player }) {
    if (!player) return null;

    return (
        <div className="player-board">
            <h3>{player.name} (Puntaje: {player.score})</h3>
            <div className="stack">
                {['frontend', 'backend', 'database', 'infrastructure'].map(category => (
                    <div key={category} className={category}>
                        <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                        {player.stack[category].map((card, index) => (
                            <div key={index} className="card">{card.title}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerBoard;