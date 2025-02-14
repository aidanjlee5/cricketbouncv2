"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded border shadow-md transition-opacity duration-300 z-50">
          <ul>
            <li>
              <Link href="/burger-menu/rules">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Cricket Rules
                </a>
              </Link>
            </li>
            <li>
              <Link href="/burger-menu/gallery">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
              </Link>
            </li>
            <li>
              <Link href="/burger-menu/socials">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Socials
                </a>
              </Link>
            </li>
            <li>
              <Link href="/burger-menu/faq">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/burger-menu/contact">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/burger-menu/supportbounc">
                <a
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Support BOUNC
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
