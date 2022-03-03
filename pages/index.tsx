import NepalMap from 'components/NepalMap';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="mt-8 mb-4 flex flex-col items-center justify-center space-y-6">
      {/* Hero */}
      <div className="space-y-2 px-4">
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
          <div className="button-primary">Casual</div>
        </Link>
        <Link href="/hardcore">
          <div className="button-primary">Hardcore</div>
        </Link>
      </div>
      <NepalMap />
    </div>
  );
}
