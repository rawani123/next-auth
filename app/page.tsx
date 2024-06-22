"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={logoutHandler}
        className="bg-zinc-800 px-2 py-1 rounded-md text-white"
      >
        Logout
      </button>
    </>
  );
}
