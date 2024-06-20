import React from "react";

const page = () => {
  return (
    <div className="flex bg-[#669bbc] min-h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg shadow-black">
        <h1 className=" flex text-2xl justify-center items-center font-bold">Login</h1>
        <div className="flex flex-col my-4">
            <label className="font-bold" > Email</label>
            <input type="email" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
        </div>
        <div className="flex flex-col my-4">
            <label className="font-bold" > Password</label>
            <input type="password" className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1" />
        </div>
        <button className="bg-[#ff6984] w-full py-1 my-2 rounded-md text-white">Login</button>
      </div>
    </div>
  );
};

export default page;
