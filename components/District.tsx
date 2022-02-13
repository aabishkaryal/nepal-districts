type props = {
  name: string
  shape: string
}

export default function District({ name, shape }: props) {
  return (
    <path className="" stroke="#000" strokeWidth="1px" fill="#fff" d={shape} />
  )
}
