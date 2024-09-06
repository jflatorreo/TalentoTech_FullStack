import React from 'react';

function PlayerList({ players }) {
    return (
        <div className="player-list">
            <h2>Jugadores</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - Score: {player.score}
                        {player.name === players[players.currentPlayerIndex]?.name && " (Current Turn)"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;