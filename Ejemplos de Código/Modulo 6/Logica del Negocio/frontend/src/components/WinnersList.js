import React from 'react';

function WinnersList({ winners }) {
    if (!winners || winners.length === 0) return null;

    return (
        <div className="winners-list">
            <h3>Winners</h3>
            <ul>
                {winners.map((winner, index) => (
                    <li key={index}>{winner}</li>
                ))}
            </ul>
        </div>
    );
}

export default WinnersList;
