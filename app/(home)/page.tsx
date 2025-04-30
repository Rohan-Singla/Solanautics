import Hero from "./components/Hero";
import DashPreview from "./components/Features";
import Meetteam from "./components/Meet-team";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col bg-black text-white w-full">
        <main className="flex-1">
          <Hero />
          <DashPreview />
          <Meetteam />
        </main>
      </div>
      <Footer />
    </>
  );
}
