"use client";
import { Socials } from "@/constants/index";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-40 backdrop-blur-md fixed top-0 w-full shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#about-me" className="flex items-center">
              <Image
                src="/NavLogo.svg"
                alt="logo"
                width={40}
                height={40}
                className="cursor-pointer animate-pulse"
              />
              <span className="font-bold ml-2 hidden md:block text-gray-300">
                Hex Dev
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#about-me">Sobre Nosotros</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Proyectos</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menú</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden transition-transform duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about-me">Sobre Nosotros</MobileNavLink>
            <MobileNavLink href="#skills">Skills</MobileNavLink>
            <MobileNavLink href="#projects">Proyectos</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink for desktop menu
const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </a>
  );
};

// Custom NavLink for mobile menu
const MobileNavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </a>
  );
};

export default Navbar;
