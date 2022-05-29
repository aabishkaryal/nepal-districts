import Image from 'next/image';
import Link from 'next/link';

import { VscGithub } from 'react-icons/vsc';
export default function Header() {
  return (
    <div className="z-10 flex h-14 flex-nowrap items-center justify-between px-4 py-2 shadow-md">
      <Link href="/">
        <div className="relative h-10 w-8 cursor-pointer">
          <Image
            src="/Flag_of_Nepal.svg"
            alt="Flag of Nepal"
            width="71.57"
            height="87.24"
            layout="responsive"
          />
        </div>
      </Link>
      <div className="flex flex-nowrap items-center space-x-4">
        <Link href="/contributors">
          <div className="text-xl">Contributors</div>
        </Link>
        <Link href="https://github.com/aabishkaryal/nepal-districts">
          <VscGithub className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
