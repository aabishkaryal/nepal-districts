type props = {
  shape: string;
};

export default function District({ shape }: props) {
  return <path stroke={'#000'} fill="#fff" d={shape} />;
}
