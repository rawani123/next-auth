"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

const LoginPage = () => {
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.email && user.password) {
      setDisable(false);
    }else{
      setDisable(true)
    }
  }, [user]);

  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg shadow-black">
        <h1 className=" flex text-2xl justify-center items-center font-bold">
          Login
        </h1>
        <div className="flex flex-col my-4">
          <label className="font-bold"> Email</label>
          <input
            type="email"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="font-bold"> Password</label>
          <input
            type="password"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          className={`${
            disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#ff6984]"
          } w-full py-1 my-2 rounded-md text-white`}
        >
          Login
        </button>
        <p className="mt-4">
          Dont have an account?{" "}
          <Link href={"/sign-up"} className="font-bold">
            Signup{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
