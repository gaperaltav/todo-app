"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
  const { data } = useSession();
  return (
    <div className="w-[100] px-6 flex justify-between p-[10px] mb-[10px] bg-[#fff] h-[70px]">
      <div className="flex">
        <a href="#" className="content-center" onClick={() => signOut()}>
          <Image
            src={`/icons/logout.svg`}
            alt="tu amo"
            width="20"
            height="20"
          />
        </a>
        <div className="content-center mx-2">
          <h1 className="font-bold">TODO APP</h1>
        </div>
        
      </div>

      <div className="flex">
        <p className="content-center  mr-2">
          Hi! <strong>{` ${data?.user?.name}`}</strong>
        </p>
        <Image
          className="w-12 h-12 rounded-full"
          src={data?.user?.image ?? `/icons/user.svg`}
          alt="user photo"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
}
