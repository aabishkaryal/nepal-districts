import NepalMap from 'components/NepalMap';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="flex flex-col justify-center">
      {/* Hero */}
      <div className="my-8 space-y-2 px-4">
        <h1 className="bold text-justify text-3xl">
          How well do you know Nepal?
        </h1>
        <p className="text-xs text-gray-500">
          This is a little fun website to test how well you know the geography
          of Nepal.
        </p>
      </div>
      {/* Call to action */}
      <div className="flex w-full flex-nowrap justify-evenly">
        <Link href="/casual">
          <div className="w-[115px] rounded-md bg-blue-500 px-3 py-1 text-center text-xl text-white shadow-sm">
            Casual
          </div>
        </Link>
        <Link href="/hardcore">
          <div className="w-[115px] rounded-md bg-blue-500 px-3 py-1 text-center text-xl text-white shadow-sm">
            Hardcore
          </div>
        </Link>
      </div>
    </div>
  );
}
