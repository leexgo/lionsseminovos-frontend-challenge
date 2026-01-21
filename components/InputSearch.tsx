import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function InputSearch() {
  return (
    <>
      <div className="w-full max-w-4xl bg-white p-3 rounded-2xl shadow-2xl ring-1 ring-white/10">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="relative w-full md:flex-1">
            <Input
              type="text"
              placeholder="Digite marca ou modelo..."
              className="h-12 w-full border-slate-200 bg-slate-50 focus-visible:ring-red-500 pl-4 text-base"
            />
          </div>

          <div className="w-full md:w-48">
            <div className="relative h-12">
              <select
                className="
                    h-full w-full appearance-none rounded-md border border-slate-200 
                    bg-slate-50 px-3 py-2 text-sm text-slate-700 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                  "
              >
                <option value="">Ano (Min)</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto h-12 px-8 bg-red-600 hover:bg-red-700 text-base font-semibold shadow-md transition-all active:scale-95"
          >
            <Search className="mr-2 h-5 w-5" />
            Buscar
          </Button>
        </div>
      </div>
    </>
  );
}
