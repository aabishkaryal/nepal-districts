import DistrictData from '../data/districts.json'
import District from './District'

export default function DistrictMap() {
  return (
    <div className="w-full max-w-[1024px] px-6">
      <svg viewBox="0 0 1026.077 519.136" className="w-full">
        <g transform="translate(-52.379 -15.971)">
          {DistrictData.map((district) => (
            <District {...district} key={district.zip} />
          ))}
        </g>
      </svg>
    </div>
  )
}
