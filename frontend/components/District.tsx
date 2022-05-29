import { COLORS } from 'app/constants';

type props = {
  province: number;
  shape: string;
};

export default function District({ province, shape }: props) {
  return (
    <path
      className="svg-property animate-draw-path"
      stroke={'#000'}
      fill={COLORS[province - 1]}
      d={shape}
    />
  );
}
