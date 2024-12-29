

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-teal-500 to-indigo-600 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wide">
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Blog
          </span>
          <span className="ml-1 text-white">Sphere</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="text-3xl text-white lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full lg:static lg:w-auto lg:flex lg:space-x-8 bg-gradient-to-b from-indigo-700 to-indigo-900 lg:bg-transparent py-4 lg:py-0 lg:shadow-none shadow-md`}
          role="menu"
        >
          <Link
            href="/"
            className="block px-4 py-2 text-white text-lg font-medium hover:text-yellow-400 transition-transform transform hover:scale-110"
            role="menuitem"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-white text-lg font-medium hover:text-yellow-400 transition-transform transform hover:scale-110"
            role="menuitem"
          >
            About
          </Link>
          <Link
            href="#NewPost"
            className="block px-4 py-2 text-white text-lg font-medium hover:text-yellow-400 transition-transform transform hover:scale-110"
            role="menuitem"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-white text-lg font-medium bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-400/50"
            role="menuitem"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
