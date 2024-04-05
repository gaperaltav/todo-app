
'use client';

import { signInWithGoogle } from './actions';

export default function Login() {
  const onClickGoogleLogin = async () => await signInWithGoogle();

  return (
    <>
      <div className="flex flex w-[100%] justify-center">
        <div className="w-[300px]">
          <h1 className="text-[20px] text-center">Login</h1>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              className="border border-gray-300"
              name=""
              id="email"
            />
            <input
              type="password"
              className="border border-gray-300"
              name=""
              id="password"
            />
            <button
              type="button"
              className="dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-[#fff]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      OR
      <button
        type="button"
        className="dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-[#fff]"
        onClick={onClickGoogleLogin}
      >
        Login with google
      </button>
    </>
  );
}
