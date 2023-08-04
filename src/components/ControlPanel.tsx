// ControlPanel.tsx
import React from 'react';

type Props = {
  dispatch: React.Dispatch<any>;
};

const ControlPanel: React.FC<Props> = ({ dispatch }) => {
  const handleMoveUp = () => {
    dispatch({ type: 'MOVE_ROBOT', payload: { row: -1, col: 0 } });
  };
  const handleMoveDown = () => {
    dispatch({ type: 'MOVE_ROBOT', payload: { row: 1, col: 0 } });
  };
  const handleMoveLeft = () => {
    dispatch({ type: 'MOVE_ROBOT', payload: { row: 0, col: -1 } });
  };
  const handleMoveRight = () => {
    dispatch({ type: 'MOVE_ROBOT', payload: { row: 0, col: 1 } });
  };

  const handleRestartGame = () => {
    dispatch({ type: 'RESTART_GAME' });
  };

  return (
    <div>
      <h2>Control Panel</h2>
      <button onClick={handleMoveUp}>Move Up</button>
      <button onClick={handleMoveDown}>Move Down</button>
      <button onClick={handleMoveLeft}>Move Left</button>
      <button onClick={handleMoveRight}>Move Right</button>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default ControlPanel;
