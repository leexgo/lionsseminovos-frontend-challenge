import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bgHiglight =
  "data-[highlighted]:bg-transparent data-[highlighted]:text-red-600 focus:bg-transparent";

const Navbar = () => {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-black/95 backdrop-blur
        supports-[backdrop-filter]:bg-transparent
        h-16 md:h-20
        [--navbar-height:4rem]
        md:[--navbar-height:5rem]
      "
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/lions.svg" alt="logo lions" width={72} height={22} />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          <Link href="#" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            Catálogo
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            Sobre
          </Link>
        </nav>

        <Button className="hidden md:flex">Fale Conosco</Button>

        {/* Menu Mobile */}
        <span className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="icon-lg">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-screen bg-black/10 text-white backdrop-blur-md border-none"
              align="center"
            >
              <DropdownMenuGroup className="flex flex-col gap-2 p-4 items-center">
                <DropdownMenuLabel className="hover:text-red-600">
                  Home
                </DropdownMenuLabel>
                <DropdownMenuItem className={bgHiglight}>
                  Sobre
                </DropdownMenuItem>
                <DropdownMenuItem className={bgHiglight}>
                  Catálogo
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
