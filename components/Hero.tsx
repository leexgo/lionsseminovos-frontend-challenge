import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[550px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="
            absolute inset-0 
            bg-[url('https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-19645-mobile.webp')] 
            md:bg-[url('https://dmmfmlu2mykln.cloudfront.net/site/home/carrossel/foto-19645-desktop.webp')] 
            bg-cover bg-center bg-no-repeat
          "
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
          Encontre o carro ideal <br className="hidden md:block" />
          <span className="text-red-400">sem complicações.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Semi-novos inspecionados, com garantia e as melhores taxas de
          financiamento do mercado.
        </p>
      </div>
    </section>
  );
}
