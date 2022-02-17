import React from 'react';
import { DistrictInfo } from '../types/District';
import District from './District';
import Modal from './Modal';

type props = {
  districts: DistrictInfo[];
  visibleDistrictIndices: number[];
};

export default function DistrictMap({
  districts,
  visibleDistrictIndices,
}: props) {

  const [modalState, setModalState] = React.useState<null | React.MouseEvent<SVGPathElement>>(null)

  return (
    <div className="w-full max-w-[1024px] px-6">
      {
        modalState &&
        <Modal data={modalState} />
      }
      <svg viewBox="0 0 1026.077 519.136" className="w-full">
        <g transform="translate(-52.379 -15.971)">
          {visibleDistrictIndices.map((index) => (
            <District id={index} {...districts[index]} key={districts[index].zip} onMouseOver={(event) => setModalState(event)} onMouseOut={() => setModalState(null)} />
          ))}
        </g>
      </svg>
    </div>
  );
}
