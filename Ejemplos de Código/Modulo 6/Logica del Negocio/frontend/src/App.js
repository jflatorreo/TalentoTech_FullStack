import React, { useState, useEffect } from 'react';
import GameRoom from './components/GameRoom';
import PlayerList from './components/PlayerList';
import socket from './socket';

function App() {
  const [gameState, setGameState] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    socket.on('gameState', (newGameState) => {
      setGameState(newGameState);
    });

    socket.on('gameJoined', (joinedPlayerName) => {
      if (joinedPlayerName === playerName) {
        setIsJoined(true);
      }
    });

    return () => {
      socket.off('gameState');
      socket.off('gameJoined');
    };
  }, [playerName]);

  const joinGame = () => {
    if (playerName) {
      socket.emit('joinGame', playerName);
    }
  };

  if (!isJoined) {
    return (
        <div className="App">
          <h1>FullStack Master</h1>
          <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Nombre"
          />
          <button onClick={joinGame}>Entrar</button>
          {gameState && <PlayerList players={gameState.players} />}
        </div>
    );
  }

  return (
      <div className="App">
        <h1>FullStack Master</h1>
        <PlayerList players={gameState ? gameState.players : []} />
        <GameRoom gameState={gameState} playerName={playerName} />
      </div>
  );
}

export default App;