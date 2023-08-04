/* eslint-disable no-case-declarations */
import Board from '@/components/Board';
import ControlPanel from '@/components/ControlPanel';
import React, { useEffect, useReducer } from 'react';

// State type
type State = {
  board: string[][];
  robot: { row: number; col: number };
  goal: { row: number; col: number };
  gameEnded: boolean;
};

// Action type
type Action =
  | { type: 'MOVE_ROBOT'; payload: { row: number; col: number } }
  | { type: 'END_GAME' }
  | { type: 'RESTART_GAME' };
// Returns a random goal position within the board
const getRandomGoalPosition = () => {
  const max = 5;
  const row = Math.floor(Math.random() * max);
  const col = Math.floor(Math.random() * max);
  return { row, col };
};

// Initial state
const initialState: State = {
  board: Array.from({ length: 5 }, () => Array(5).fill('Empty')),
  robot: { row: 4, col: 0 },
  goal: getRandomGoalPosition(),
  gameEnded: false,
};

// Reducer function
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'MOVE_ROBOT':
      // Calculate new position
      const newRow = state.robot.row + action.payload.row;
      const newCol = state.robot.col + action.payload.col;

      // Ensure the robot doesn't move outside the board
      if (
        newRow >= 0 &&
        newRow < state.board.length &&
        newCol >= 0 &&
        newCol < state.board[0].length
      ) {
        return {
          ...state,
          robot: { row: newRow, col: newCol },
        };
      }
      return state;
    case 'END_GAME':
      return {
        ...state,
        gameEnded: true,
        goal: getRandomGoalPosition(), // Set new goal position
      };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // ロボットがゴールに到達したらゲームを終了する
    if (
      state.robot.row === state.goal.row &&
      state.robot.col === state.goal.col
    ) {
      dispatch({ type: 'END_GAME' });
    }
  }, [state.robot, state.goal]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1>RoboZZle Game</h1>
      <Board state={state} />
      <ControlPanel dispatch={dispatch} />
      {state.gameEnded && <p>Game Over!</p>}
    </div>
  );
};

export default Game;
