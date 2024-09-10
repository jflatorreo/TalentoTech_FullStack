import React from 'react';

function CardDeck({ isCurrentTurn, conceptCardsDrawn, maxConceptCards, onDrawConceptCard, onDrawChallengeCard }) {
    return (
        <div className="card-deck">
            <button
                onClick={onDrawConceptCard}
                disabled={!isCurrentTurn || conceptCardsDrawn >= maxConceptCards}
            >
                Robar Carta de Concepto ({conceptCardsDrawn}/{maxConceptCards})
            </button>
            <button
                onClick={onDrawChallengeCard}
                disabled={!isCurrentTurn}
            >
                Robar Carta de Reto
            </button>
        </div>
    );
}

export default CardDeck;