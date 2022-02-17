import React from "react";

type onMouseOver ={
  pageX: number;
  pageY: number;
  id: string;
}

type props = {
  province: number;
  shape: string;
  id: number,
  onMouseOver?: ({pageX, pageY, id}:onMouseOver) => void,
  onMouseOut?: () => void
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
      onMouseOver={(event:React.MouseEvent<SVGPathElement>) => {
        const {pageX, pageY, currentTarget:{id}} = event;
        onMouseOver && onMouseOver({pageX, pageY, id});
      }}
      onMouseOut={() => onMouseOut && onMouseOut()}
    />
  );
}
