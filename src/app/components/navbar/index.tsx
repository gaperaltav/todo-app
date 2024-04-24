"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const { data } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-[100] px-6 flex justify-between p-[10px] mb-[10px] bg-[#fff] h-[70px]">
      <div className="flex">
        <a
          href="#"
          className="content-center"
          title="Sing Out"
          onClick={() => signOut()}
        ></a>
        <div className="content-center mx-2">
          <h1 className="font-bold">TODO APP</h1>
        </div>
      </div>

      <div className="relative">
        <a
          className="bg-white block flex hover:text-gray-500"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <p className="content-center mr-2  ">
            Hi! <strong>{` ${data?.user?.name}`}</strong>
          </p>
          <Image
            className="w-12 h-12 rounded-full border-2 border-gray-300 focus:outline-none hover:border-sky-600"
            src={data?.user?.image ?? `/icons/user.svg`}
            alt="user photo"
            width="35"
            height="38"
          />
        </a>
        {showMenu && (
          <div className="absolute bg-white rounded-lg py-4 px-1 shadow-xl text-[14px] w-40 ml-8">
            <a
              href="#"
              className="block mt-1 px-4 hover:text-gray-500 flex"
              onClick={() => signOut()}
            >
              <Image
                src={`/icons/logout.svg`}
                alt="logout icon"
                width="20"
                height="20"
              />
              <span className="ml-1">Sign out</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
