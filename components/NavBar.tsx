"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

function NavBar() {
  const [isNavbar, setIsNavbar] = useState(false);

  const pathname = usePathname();

  const routes = [
    {
      href: `/aktualnosci`,
      label: "Aktualności",
      active: pathname === `/aktualnosci`,
    },
    {
      href: `/o-mnie`,
      label: "O mnie",
      active: pathname === `/o-mnie`,
    },
    {
      href: `/oferta`,
      label: "Oferta",
      active: pathname === `/oferta`,
    },
    {
      href: `/cennik`,
      label: "Cennik",
      active: pathname === `/cennik`,
    },
    {
      href: `/wspolpraca`,
      label: "Współpraca",
      active: pathname === `/wspolpraca`,
    },
    {
      href: `/regulamin`,
      label: "Regulamin",
      active: pathname === `/regulamin`,
    },
    {
      href: `/kontakt`,
      label: "Kontakt",
      active: pathname === `/kontakt`,
    },
  ];

  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 border-b">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" rel="preload" as="">
            <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setIsNavbar(!isNavbar)}
            >
              {isNavbar ? (
                <X className="h-4 w-4" size={30} />
              ) : (
                <Menu
                  className="h-4 w-4 focus:border-none active:border-none"
                  size={30}
                />
              )}
            </button>
          </div>
        </div>
        <div
          className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isNavbar ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            {routes.map((route) => (
              <li
                key={route.href}
                className="text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-primary"
              >
                <Link
                  key={route.href}
                  href={route.href}
                  rel="preload"
                  as={route.href}
                  onClick={() => setIsNavbar(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
