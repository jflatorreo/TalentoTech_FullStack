import React, { useState } from 'react';
import socket from '../socket';

function Challenge({ challenge, playerName }) {
    const [solution, setSolution] = useState('');

    const submitSolution = () => {
        socket.emit('solveChallenge', playerName, solution);
    };

    return (
        <div className="challenge">
            <h3>Reto</h3>
            <p>{challenge.description}</p>
            <textarea
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Escriba su respuesta"
            />
            <button onClick={submitSolution}>Enviar</button>
        </div>
    );
}

export default Challenge;