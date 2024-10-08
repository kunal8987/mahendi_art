"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

const menuItems = [
  {
    name: "Home",
    href: "hero",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Wedding",
    href: "wedding",
  },
  {
    name: "Baby",
    href: "baby",
  },
  {
    name: "Arabic",
    href: "arabic",
  },
  {
    name: "Designs",
    href: "design",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" container top-0 sticky w-full shadow-lg bg-red-300 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Image
            className="rounded-b-full object-cover"
            src="https://i.ibb.co/QF82FLD/Roshani.jpg"
            width={70}
            height={70}
            alt="logo"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1500}
                  className="text-lg cursor-pointer font-os font-semibold text-gray-800 hover:text-gray-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block"></div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-red-300 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Image
                      className=" rounded-full object-cover"
                      src="https://i.ibb.co/QF82FLD/Roshani.jpg"
                      width={70}
                      height={70}
                      alt="Random"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1500}
                        key={item.name}
                        className="-m-3 flex cursor-pointer items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-md font-os font-bold text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
