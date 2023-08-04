// ControlPanel.tsx
import { ActionIcon, Button, Group, Stack } from '@mantine/core';
import React from 'react';
import {
  ArrowNarrowDown,
  ArrowNarrowLeft,
  ArrowNarrowRight,
  ArrowNarrowUp,
} from 'tabler-icons-react';

type Props = {
  dispatch: React.Dispatch<any>;
  gameEnded: boolean;
};

const ControlPanel: React.FC<Props> = ({ dispatch, gameEnded }) => {
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
      <Stack>
        <h2>Control Panel</h2>
        <Group>
          <ActionIcon onClick={handleMoveUp} disabled={gameEnded} size="xl">
            <ArrowNarrowUp size="5rem" />
          </ActionIcon>
          <ActionIcon onClick={handleMoveDown} disabled={gameEnded} size="xl">
            <ArrowNarrowDown size="5rem" />
          </ActionIcon>
          <ActionIcon onClick={handleMoveLeft} disabled={gameEnded} size="xl">
            <ArrowNarrowLeft size="5rem" />
          </ActionIcon>
          <ActionIcon onClick={handleMoveRight} disabled={gameEnded} size="xl">
            <ArrowNarrowRight size="5rem" />
          </ActionIcon>
        </Group>
        <Button onClick={handleRestartGame}>リスタート</Button>
      </Stack>
    </div>
  );
};

export default ControlPanel;
