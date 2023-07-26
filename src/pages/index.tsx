import PuzzleGrid from '@/components/PuzzleGrid';
import Robot from '@/components/Robot';

const MyRobozzleGame = () => {
  // 仮想のパズルデータ（例として二次元配列を使用）
  const puzzleData = [
    ['wall', 'wall', 'wall', 'wall', 'wall'],
    ['wall', '', '', '', 'wall'],
    ['wall', '', 'goal', '', 'wall'],
    ['wall', '', '', '', 'wall'],
    ['wall', 'wall', 'wall', 'wall', 'wall'],
  ];

  return (
    // <Center h="100vh">
    <div>
      <PuzzleGrid width={5} height={5} puzzleData={puzzleData} />
      <Robot x={1} y={1} direction="down" />
    </div>
    // </Center>
  );
};

export default MyRobozzleGame;
