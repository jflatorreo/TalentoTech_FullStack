import React from 'react';

function CardDeck({ isCurrentTurn, onDrawConceptCard, onDrawChallengeCard }) {
    return (
        <div className="card-deck">
            <button onClick={onDrawConceptCard} disabled={!isCurrentTurn}>Draw Concept Card</button>
            <button onClick={onDrawChallengeCard} disabled={!isCurrentTurn}>Draw Challenge Card</button>
        </div>
    );
}

export default CardDeck;