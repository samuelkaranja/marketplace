import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md text-[#333] bg-[#eeefe9] border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl underline cursor-pointer">
          KEMONK
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-3 border-l border-white first:border-l-0 text-sm"
          >
            Login
          </Link>
          <a href="#help" className="px-3 border-l border-white text-sm">
            Help
          </a>
          <a href="#contact" className="px-3 border-l border-white text-sm">
            Contact Us
          </a>
          <Link
            to="/cart"
            className="px-3 border-l border-white flex items-center gap-1 text-sm"
          >
            <FiShoppingCart size={20} />
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-3">
          <a href="#login" className="border-t border-white pt-2">
            Login
          </a>
          <a href="#help" className="border-t border-white pt-2">
            Help
          </a>
          <a href="#contact" className="border-t border-white pt-2">
            Contact Us
          </a>
          <a
            href="#cart"
            className="border-t border-white pt-2 flex items-center gap-1"
          >
            <FiShoppingCart size={20} />
            Cart
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
