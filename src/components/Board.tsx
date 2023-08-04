import React from 'react';

type Props = {
  state: {
    board: string[][];
    robot: { row: number; col: number };
    goal: { row: number; col: number };
  };
};

const Board: React.FC<Props> = ({ state }) => {
  return (
    <div>
      <h2>Board</h2>
      {state.board.map((row, i) => (
        <div style={{ display: 'flex' }} key={i}>
          {row.map((cell, j) => (
            <div
              style={{
                height: '50px',
                width: '50px',
                border: '1px solid black',
                backgroundColor:
                  state.robot.row === i && state.robot.col === j
                    ? 'blue'
                    : state.goal.row === i && state.goal.col === j
                    ? 'green'
                    : 'white',
              }}
              key={j}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
