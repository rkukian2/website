"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/95 backdrop-blur-md border-b border-[#33353F]">
      <div className="container mx-auto px-4 py-2 lg:py-3 flex flex-wrap items-center justify-between">
        {/* Logo with solid background */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-14 h-14 bg-transparent rounded-lg overflow-hidden border border-[#33353F]">
            <Image
              src="/images/rk.png"
              alt="Logo"
              layout="fill" // Ensures the image takes up the full container
              objectFit="cover" // Fills the container properly without empty space
              priority
              className="opacity-100"
              style={{ filter: "contrast(1.2) brightness(1.1)" }} // Improves visibility
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;