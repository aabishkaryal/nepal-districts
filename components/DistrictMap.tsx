import { DistrictInfo } from 'types/DistrictInfo';
import District from 'components/District';

type props = {
  districts: DistrictInfo[];
  visibleDistrictIndices: number[];
};

export default function DistrictMap({
  districts,
  visibleDistrictIndices,
}: props) {
  return (
    <div className="w-full max-w-[1024px] px-6">
      <svg viewBox="0 0 1026.077 519.136" className="w-full">
        <g transform="translate(-52.379 -15.971)">
          {visibleDistrictIndices.map((index) => (
            <District {...districts[index]} key={districts[index].zip} />
          ))}
        </g>
      </svg>
    </div>
  );
}
