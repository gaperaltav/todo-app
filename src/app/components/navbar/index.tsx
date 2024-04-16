"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
  const { data } = useSession();
  console.log({ data });
  return (
    <div className="w-[100] mx-6 flex justify-between p-[10px] mb-[10px]">
      <div>
        <a href="#" className="underline" onClick={() => signOut()}>
          <Image
            src={`/icons/logout.svg`}
            alt="tu amo"
            width="20"
            height="20"
          />
        </a>
      </div>

      <div className="flex">
        <p className="mr-1">
          Hi! <strong>{` ${data?.user?.name}`}</strong>
        </p>
        <Image
          className="rounded-full"
          src={data?.user?.image ?? `/icons/user.svg`}
          alt="tu amo"
          width="28"
          height="28"
        />
      </div>
    </div>
  );
}
