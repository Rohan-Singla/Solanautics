import Hero from "./components/Hero";
import DashPreview from "./components/Features";
import Howitworks from "./components/Howit-works";
import Upcomingplans from "./components/Upcoming-plans";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white w-full">
        <main className="flex-1">
          <Hero />
          <DashPreview/>
          <Howitworks/>
          <Upcomingplans/>
        </main>
      </div>
    </>
  );
}
