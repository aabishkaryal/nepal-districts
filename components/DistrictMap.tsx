import React from 'react';
import { DistrictInfo } from '../types/District';
import District from './District';
import Modal from './Modal';

type props = {
  districts: DistrictInfo[];
  visibleDistrictIndices: number[];
};

type onMouseOver ={
  pageX: number;
  pageY: number;
  id: string;
  isEmpty?: boolean;
}


const initialModalState ={
  pageX: 0,
  pageY: 0,
  id: '',
  isEmpty: true,
}

export default function DistrictMap({
  districts,
  visibleDistrictIndices,
}: props) {

  const [modalState, setModalState] = React.useState<onMouseOver>(initialModalState)

  return (
    <div className="w-full max-w-[1024px] px-6">
      {
        !modalState.isEmpty &&
        <Modal {...modalState} />
      }
      <svg viewBox="0 0 1026.077 519.136" className="w-full">
        <g transform="translate(-52.379 -15.971)">
          {visibleDistrictIndices.map((index) => (
            <District id={index} {...districts[index]} key={districts[index].zip} onMouseOver={setModalState} onMouseOut={() => setModalState(initialModalState)} />
          ))}
        </g>
      </svg>
    </div>
  );
}
