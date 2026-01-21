import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white">
      <main className="flex-1">
        <Hero />
        <About />
      </main>
    </div>
  );
}
