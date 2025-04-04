import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import DashPreview from "./components/Dash-Preview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white w-full">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <DashPreview/>
        </main>
        <Footer/>
      </div>
    </>
  );
}
