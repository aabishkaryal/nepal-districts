type props = {
  province: number;
  shape: string;
};

const colors: string[] = Array(7)
  .fill('hsl(_)')
  .map((c) => c.replace(/_/g, `${Math.floor(Math.random()*360)}, 100%, 50%`));

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
