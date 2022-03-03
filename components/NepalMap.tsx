import DistrictData from 'data/districts.json';
import District from 'components/District';

export default function NepalMap() {
  return (
    <div className="w-full max-w-[1024px] px-2 sm:px-4 md:px-6">
      <svg viewBox="0 0 1026.077 519.136" className="w-full">
        <g transform="translate(-52.379 -15.971)">
          {DistrictData.map((district) => (
            <District {...district} key={district.zip} />
          ))}
        </g>
      </svg>
    </div>
  );
}
