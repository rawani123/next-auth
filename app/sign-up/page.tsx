"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.email && user.password && user.username) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);
  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg shadow-black">
        <h1 className=" flex text-2xl justify-center items-center font-bold">
          Sign up
        </h1>
        <div className="flex flex-col my-4">
          <label className="font-bold"> Username</label>
          <input
            type="text"
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
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
        <button className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed": "bg-[#ff6984]"} w-full py-1 my-2 rounded-md text-white`}>
          Signup
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href={"/login"} className="font-bold">
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
