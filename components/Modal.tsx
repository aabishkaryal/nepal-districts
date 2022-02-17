import DistrictData from '../data/districts.json';

type props ={
  pageX: number;
  pageY: number;
  id: string;
  isEmpty?: boolean;
}

type districtDetails = {
  label: string;
  value: string | number;
}

export default function Modal({pageX, pageY, id}:props) {
  const district = DistrictData[parseInt(id)]

  const districtDetails: districtDetails[] = [
    {
      label: "Elevation",
      value: district.elevation
    },
    {
      label: "Area",
      value: `${district.area.toLocaleString('en-Us')} km²`
    },
    {
      label: "Province",
      value: district.province
    },
    {
      label: "Population",
      value: district.population
    }
  ]

  return (
    <div style={{
      top: pageY,
      left: pageX,
    }} className="max-w-md w-56 absolute py-2 px-4 bg-white shadow-lg rounded-lg ">
      <header>
        <h1 className="font-bold text-gray-800 ">{district.name}</h1>
      </header>
      <main className="mt-1">
        {
          districtDetails.map((district: any, index: number) => (
            <p key={index}><span className="font-semibold">{district.label}</span>: {district.value}</p>
          ))
        }
      </main>
    </div>
  )
}