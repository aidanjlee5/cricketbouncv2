"use client";

import React from 'react';
import { Link } from 'react-router-dom';
const logo = './logo.png';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-orange-500 p-4">
      <div className="flex flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="BOUNC Logo" className="h-10 mr-4" />
          <h1 className="text-xl font-bold">
            BOUNC® Bowlers &amp; Batters at UNC-Chapel Hill
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <div className="relative group">
            <Link to="/about" className="hover:text-gray-200">About</Link>
            <div className="absolute left-0 mt-1 w-40 bg-orange-600 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/about/council" className="block px-4 py-2 hover:bg-orange-700">The Council</Link>
              <Link to="/about/motives" className="block px-4 py-2 hover:bg-orange-700">Motives</Link>
              <Link to="/about/constitution" className="block px-4 py-2 hover:bg-orange-700">Constitution</Link>
            </div>
          </div>
          <Link to="/bcl" className="hover:text-gray-200">BCL</Link>
          <Link to="/videos" className="hover:text-gray-200">Videos</Link>
          <div className="relative group">
            <span className="cursor-pointer text-2xl hover:text-gray-200">☰</span>
            <div className="absolute right-0 mt-1 w-48 bg-orange-600 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/burger-menu/rules" className="block px-4 py-2 hover:bg-orange-700">Cricket Rules</Link>
              <Link to="/burger-menu/gallery" className="block px-4 py-2 hover:bg-orange-700">Gallery</Link>
              <Link to="/burger-menu/socials" className="block px-4 py-2 hover:bg-orange-700">Socials</Link>
              <Link to="/burger-menu/faq" className="block px-4 py-2 hover:bg-orange-700">FAQ</Link>
              <Link to="/burger-menu/contact" className="block px-4 py-2 hover:bg-orange-700">Contact Us</Link>
              <Link to="/burger-menu/supportbounc" className="block px-4 py-2 hover:bg-orange-700">Support BOUNC</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
