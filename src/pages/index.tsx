import Board from '@/components/Board';
import ControlPanel from '@/components/ControlPanel';
import React from 'react';

const Game: React.FC = () => {
  return (
    <div>
      <h1>RoboZZle Game</h1>
      <Board />
      <ControlPanel />
    </div>
  );
};

export default Game;
