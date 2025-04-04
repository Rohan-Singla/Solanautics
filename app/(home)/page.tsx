import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar/>

        <main className="flex-1">
<Hero/>
          </main>
      </div>
    </>
  );
}
