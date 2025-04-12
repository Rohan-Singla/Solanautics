import Hero from "./components/Hero";
import DashPreview from "./components/Features";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white w-full">
        <main className="flex-1">
          <Hero />
          <DashPreview/>
        </main>
      </div>
    </>
  );
}
