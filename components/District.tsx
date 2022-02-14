type props = {
  province: number;
  shape: string;
};

const colors: string[] = Array(7)
  .fill('#')
  .map((c) => c + Math.random().toString(16).substring(2,8));

export default function District({ province, shape }: props) {
  return (
    <path
      className="svg-property animate-draw-path"
      stroke={'#000'}
      fill={colors[province-1]}
      d={shape}
    />
  );
}
