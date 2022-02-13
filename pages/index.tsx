import DistrictMap from '../components/DistrictMap'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-10">
      <h1 className="px-4 text-center text-xl font-bold sm:text-2xl md:text-3xl">
        How many districts of Nepal can you name?
      </h1>

      <input
        type="text"
        placeholder="Try 'Kathmandu' or 'kathmandu'"
        className="w-full max-w-[320px] rounded-md border-2 border-orange-500 px-4 py-2 transition-all"
      />

      <DistrictMap />
    </div>
  )
}
