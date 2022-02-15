import { useMemo } from 'react';
import { DistrictInfo } from '../types/District';

type props = {
  districts: DistrictInfo[];
  visibleDistrictIndices: number[];
  reset: VoidFunction;
};

export default function ProgressText({
  districts,
  visibleDistrictIndices,
  reset,
}: props) {
  const totalArea = useMemo(() => {
    return districts.reduce((acc, curr) => acc + curr.area, 0);
  }, [districts]);
  const totalVisibleArea = visibleDistrictIndices.reduce(
    (accumulator, current) => accumulator + districts[current].area,
    0
  );
  const percentage = (totalVisibleArea / totalArea) * 100;
  if (visibleDistrictIndices.length > 0) {
    return (
      <div className="px-4 text-center">
        You named{' '}
        <span className="text-violet-400 underline">
          {visibleDistrictIndices.length}
        </span>{' '}
        districts, covering{' '}
        <span className="text-violet-400 underline">
          {percentage.toFixed(2)}%
        </span>{' '}
        area of Nepal.{' '}
        <span
          className="cursor-pointer text-violet-400 underline"
          onClick={reset}
        >
          Reset
        </span>
      </div>
    );
  } else {
    return <></>;
  }
}
