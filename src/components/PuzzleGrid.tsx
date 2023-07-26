interface Props {
  width: number; // グリッドの幅（セル数）
  height: number; // グリッドの高さ（セル数）
  puzzleData: string[][]; // パズルの盤面データ（ロボット位置、壁、ゴールなど）
}

const getCellColor = (cell: string) => {
  switch (cell) {
    case 'wall':
      return 'gray';
    case 'goal':
      return 'green';
    // 他のセルに対する処理を追加
    default:
      return 'white';
  }
}

const PuzzleGrid = ({ width, height, puzzleData }: Props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 50px)`, // グリッドの列数（50pxはグリッドのセルサイズ）
        gridTemplateRows: `repeat(${height}, 50px)`, // グリッドの行数
        gap: '1px', // セル間の余白
        border: '1px solid black', // グリッドの枠線
      }}
    >
      {puzzleData.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: getCellColor(cell), // セルの色（壁、ゴールなどに応じて変更）
            }}
          />
        ))
      )}
    </div>
  );
};

export default PuzzleGrid;
