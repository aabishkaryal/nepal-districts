import DistrictMap from '../components/DistrictMap'

export default function Home() {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      Can you name all the districts in Nepal?
      <DistrictMap />
    </div>
  )
}
