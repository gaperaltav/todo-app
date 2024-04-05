"use client";

import { useSearchParams } from "next/navigation";
import { TodoList } from "./todo-list/page";
import { useEffect, useState } from "react";
import Login from "./login/page";

export default function Home() {
  const [ isLogedIn, setIsLogedIn ] = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if(code){
      setIsLogedIn(true)
    }
  }, [code]);

  return (<>
    {isLogedIn ? <TodoList /> : <Login />}
  </>
  )
}
