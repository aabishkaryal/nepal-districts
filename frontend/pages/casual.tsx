import { FormEvent, useEffect, useRef, useState } from 'react';

import DistrictData from 'data/districts.json';

import DistrictMap from 'components/DistrictMap';
import ProgressText from 'components/ProgressText';

export default function Home() {
  const [visibleDistrictIndices, setVisibleDistrictIndices] = useState<
    number[]
  >(() => {
    if (typeof window !== 'undefined') {
      return localStorage.visibleDistrictIndices
        ? JSON.parse(localStorage.visibleDistrictIndices)
        : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      'visibleDistrictIndices',
      JSON.stringify(visibleDistrictIndices)
    );
  }, [visibleDistrictIndices]);

  const [error, setError] = useState('');

  const inputElementRef = useRef<HTMLInputElement>(null);

  const addDistrict = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElementRef.current?.value) {
      const userInput = inputElementRef.current.value;
      const districtIndex = DistrictData.findIndex(
        (d) => d.name.toLowerCase() === userInput.toLowerCase()
      );
      if (visibleDistrictIndices.includes(districtIndex)) {
        setError(
          `${DistrictData[districtIndex].name} has already been submitted.`
        );
      } else if (districtIndex >= 0) {
        inputElementRef.current.value = '';
        setVisibleDistrictIndices([...visibleDistrictIndices, districtIndex]);
        setError('');
      } else {
        setError(`No district named ${userInput}`);
      }
    }
  };

  const resetProgress = () => {
    setVisibleDistrictIndices([]);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-10">
      <h1 className="px-4 text-center text-xl font-bold sm:text-2xl md:text-3xl">
        How many districts of Nepal can you name?
      </h1>

      <form
        onSubmit={addDistrict}
        className="flex w-full flex-col items-center justify-center space-y-4 px-6"
      >
        <input
          ref={inputElementRef}
          type="text"
          placeholder="Try 'Kathmandu' or 'kathmandu'"
          className="w-full max-w-[320px] rounded-md border-2 border-orange-500 px-4 py-2 transition-all"
        />
        {error != '' && (
          <div className="w-full text-center text-sm text-red-500">{error}</div>
        )}
      </form>

      <DistrictMap
        districts={DistrictData}
        visibleDistrictIndices={visibleDistrictIndices}
      />
      <ProgressText
        districts={DistrictData}
        visibleDistrictIndices={visibleDistrictIndices}
        reset={resetProgress}
      />
    </div>
  );
}
