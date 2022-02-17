import React from "react";

type props = {
  province: number;
  shape: string;
  id: number,
  onMouseOver: (event: React.MouseEvent<SVGPathElement>) => void
  onMouseOut: (event: React.MouseEvent<SVGPathElement>) => void
};

const colors: string[] = Array(7)
  .fill('hsl(_)')
  .map((c) => c.replace(/_/g, `${Math.floor(Math.random()*360)}, 100%, 50%`));

export default function District({ province, shape, id, onMouseOver, onMouseOut }: props) {
  return (
    <path
      id={String(id)}
      className="svg-property animate-draw-path cursor-pointer"
      stroke={'#000'}
      fill={colors[province - 1]}
      d={shape}
      onMouseOver={(event) => onMouseOver && onMouseOver(event)}
      onMouseOut={(event) => onMouseOut && onMouseOut(event)}
    />
  );
}
