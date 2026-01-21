import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
            <span>Lions</span>
          </div>
          <p className="text-sm text-slate-400">
            Sua melhor opção para compra, venda e troca de veículos semi-novos.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="hover:text-red-400">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-red-400">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (xx) xxxxx-xxxx
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Av. Rio, 1000 - RJ
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Horário</h4>
          <p className="text-sm">Seg - Sex: 09h às 18h</p>
          <p className="text-sm">Sáb: 09h às 13h</p>
        </div>
      </div>
      <Separator className="my-8 bg-slate-400" />
      <div className="container mx-auto px-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lions Seminovos Todos os direitos
        reservados. Desenvolvido por{" "}
        <span>
          <Link
            href="https://www.linkedin.com/in/goalex29/"
            className="hover:text-red-400 style-none"
          >
            Alex Gomes
          </Link>
        </span>
      </div>
    </footer>
  );
}
