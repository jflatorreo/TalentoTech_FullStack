import React from 'react';

function ChallengeModal({ show, challenge, solution, onSolutionChange, onSubmit, onClose }) {
    if (!show) return null;

    return (
        <div className="modal">
            <h3>Challenge</h3>
            <p>{challenge?.description}</p>
            <textarea
                value={solution}
                onChange={(e) => onSolutionChange(e.target.value)}
                placeholder="Enter your solution here"
            />
            <button onClick={onSubmit}>Submit Solution</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default ChallengeModal;