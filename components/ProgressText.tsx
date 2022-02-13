import { DistrictInfo } from '../types/District';

type props = {
  districts: DistrictInfo[];
  visibleDistrictIndices: number[];
};

export default function ProgressText({
  districts,
  visibleDistrictIndices,
}: props) {
  const totalArea = visibleDistrictIndices.reduce(
    (accumulator, current) => accumulator + districts[current].area,
    0
  );
  if (visibleDistrictIndices.length > 0) {
    return (
      <div>
        You named {visibleDistrictIndices.length} districts, with a total area
        of {totalArea}.
      </div>
    );
  } else {
    return <></>;
  }
}
