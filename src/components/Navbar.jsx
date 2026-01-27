import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0B3D91] text-white font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 font-bold text-2xl">
            Logo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
            <a href="/packages" className="hover:text-gray-300">
              Packages
            </a>
            <a href="/international" className="hover:text-gray-300">
              International
            </a>
            <a href="/app" className="hover:text-gray-300">
              App
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pt-2 pb-4 space-y-2 font-sans flex flex-col gap-2">
          <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
            <a href="/packages" className="hover:text-gray-300">
              Packages
            </a>
            <a href="/international" className="hover:text-gray-300">
              International
            </a>
            <a href="/app" className="hover:text-gray-300">
              App
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
        </div>
      )}
    </nav>
  );
}
