"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const logo = "/logo.png";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <nav className="flex gap-4 items-center">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <div className="relative group">
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <div className="absolute left-0 mt-1 w-40 bg-orange-600 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href="/about/council"
                className="block px-4 py-2 hover:bg-orange-700"
              >
                The Council
              </Link>
              <Link
                href="/about/motives"
                className="block px-4 py-2 hover:bg-orange-700"
              >
                Motives
              </Link>
              <Link
                href="/about/constitution"
                className="block px-4 py-2 hover:bg-orange-700"
              >
                Constitution
              </Link>
            </div>
          </div>
          <Link href="/bcl" className="hover:text-gray-200">
            BCL
          </Link>
          <Link href="/videos" className="hover:text-gray-200">
            Videos
          </Link>

          {/* Burger Menu Dropdown */}
          <div ref={dropdownRef} className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-2xl hover:text-gray-200 focus:outline-none"
            >
              ☰
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-orange-600 rounded shadow-md transition-opacity duration-300 z-50">
                <ul>
                  <li>
                    <Link href="/burger-menu/rules">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Cricket Rules
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/gallery">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Gallery
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/socials">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Socials
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/faq">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        FAQ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/contact">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Contact Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/supportbounc">
                      <span
                        className="block px-4 py-2 hover:bg-orange-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Support BOUNC
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
