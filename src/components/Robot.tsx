interface Props {
  x: number; // ロボットのx座標
  y: number; // ロボットのy座標
  direction: 'up' | 'down' | 'left' | 'right'; // ロボットの向き
}

const getRotationAngle = (direction: string) => {
  switch (direction) {
    case 'up':
      return 0;
    case 'down':
      return 180;
    case 'left':
      return -90;
    case 'right':
      return 90;
    default:
      return 0;
  }
}

const Robot = ({ x, y, direction }: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x * 50}px`, // 仮想のグリッド上でロボットの座標を設定（50pxはグリッドのセルサイズ）
        top: `${y * 50}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'blue', // ロボットの色
        transform: `rotate(${getRotationAngle(direction)}deg)`, // ロボットの向きに応じて回転
      }}
    />
  );
};

export default Robot;
