type props = {
  shape: string;
};

export default function District({ shape }: props) {
  return (
    <path
      className="svg-property animate-draw-path"
      stroke={'#000'}
      fill="#fff"
      d={shape}
    />
  );
}
