import React, { useState, useCallback, useEffect } from 'react';
import PlayerBoard from './PlayerBoard';
import PlayerHand from './PlayerHand';
import CardDeck from './CardDeck';
import ChallengeModal from './ChallengeModal';
import AdminPanel from './AdminPanel';
import socket from '../socket';

function GameRoom({ gameState, playerName }) {
    const [showChallengeModal, setShowChallengeModal] = useState(false);
    const [challengeSolution, setChallengeSolution] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [isCurrentTurn, setIsCurrentTurn] = useState(false);



    useEffect(() => {
        if (gameState) {
            setIsAdmin(playerName === 'Admin');
            setCurrentPlayer(playerName === 'Admin' ? null : gameState.players.find(player => player.name === playerName));
            setIsCurrentTurn(!isAdmin && gameState.currentPlayerIndex !== null &&
                gameState.players[gameState.currentPlayerIndex].name === playerName);
        }
    }, [gameState, playerName, isAdmin]);

    const startGame = useCallback(() => {
        socket.emit('startGame');
    }, []);

    const handleDrawConceptCard = useCallback(() => {
        if (isCurrentTurn) {
            socket.emit('drawConceptCard', playerName);
        }
    }, [isCurrentTurn, playerName]);

    const handleDrawChallengeCard = useCallback(() => {
        if (isCurrentTurn) {
            socket.emit('drawChallengeCard', playerName);
            setShowChallengeModal(true);
        }
    }, [isCurrentTurn, playerName]);

    const handleSolveChallenge = useCallback(() => {
        socket.emit('solveChallenge', playerName, challengeSolution);
        setShowChallengeModal(false);
        setChallengeSolution('');
    }, [playerName, challengeSolution]);

    if (!gameState) return <div>Waiting for game to start...</div>;

    return (
        <div>
            <h2>Sala de Juego</h2>
            {!gameState.gameStarted && gameState.players.length >= 2 && isAdmin && (
                <button onClick={startGame}>Start Game</button>
            )}
            {gameState.gameStarted && !isAdmin && (
                <>
                    <PlayerBoard player={currentPlayer} />
                    <PlayerHand
                        hand={currentPlayer ? currentPlayer.hand : []}
                        playerName={playerName}
                        isCurrentTurn={isCurrentTurn}
                        gameStarted={gameState.gameStarted}
                    />
                    <CardDeck
                        isCurrentTurn={isCurrentTurn}
                        onDrawConceptCard={handleDrawConceptCard}
                        onDrawChallengeCard={handleDrawChallengeCard}
                    />
                    {gameState.currentChallenge && (
                        <div className="challenge">
                            <h3>Current Challenge</h3>
                            <p>{gameState.currentChallenge.description}</p>
                        </div>
                    )}
                </>
            )}
            {isAdmin && <AdminPanel gameState={gameState} />}
            <ChallengeModal
                show={showChallengeModal}
                challenge={gameState.currentChallenge}
                solution={challengeSolution}
                onSolutionChange={setChallengeSolution}
                onSubmit={handleSolveChallenge}
                onClose={() => setShowChallengeModal(false)}
            />
        </div>
    );
}

export default GameRoom;