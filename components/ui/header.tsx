"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-amber-400 p-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2 basis-1 grow">
        {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">
                Sign In
              </button>
            </Link>
          )}

          <a href="https://www.facebook.com/profile.php?id=61564215452432">
            <Image
              className="w-8 hover:scale-105"
              src="/icons/icons8-facebook.svg"
              width={40}
              height={40}
              alt="facebook icon"
            />
          </a>
          <a href="https://www.instagram.com/cricketbounc/">
            <Image
              className="w-8 hover:scale-105"
              src="/icons/icons8-instagram.svg"
              width={40}
              height={40}
              alt="instagram icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCY_pRAyhPu98hcduzQl6fqw">
            <Image
              className="w-8 hover:scale-105"
              src="/icons/icons8-youtube.svg"
              width={40}
              height={40}
              alt="youtube icon"
            />
          </a>
          <a href="https://www.tiktok.com/@BOUNCE_UNCCH">
            <Image
              className="w-8 hover:scale-105"
              src="/icons/tiktok-svgrepo-com.svg"
              width={40}
              height={40}
              alt="tiktok icon"
            />
          </a>
          <a href="https://x.com/CricketBOUNC">
            <Image
              className="w-8 hover:scale-105"
              src="/icons/x-social-media-black-icon.svg"
              width={40}
              height={40}
              alt="x (twitter) icon"
            />
          </a>
          
        </div>

        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Cricket logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </div>

        <nav className="flex flex-row items-center basis-1 grow justify-end gap-4">
          <Link href="/" className="hover:text-white font-cricketfont">
            Home
          </Link>
          <Link href="/about/council" className="hover:text-white">
            About
          </Link>
          <Link href="/resources" className="hover:text-white">
            Resources
          </Link>
          <Link href="/socials" className="hover:text-white">
            Socials
          </Link>

          

          <div ref={dropdownRef} className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-2xl hover:text-white focus:outline-none"
            >
              ☰
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-amber-500 rounded shadow-md transition-opacity duration-300 z-50">
                <ul>
                  <li>
                    <Link href="/burger-menu/rules">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Cricket Rules
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/gallery">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Gallery
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/socials">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Socials
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/faq">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        FAQ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/contact">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Contact Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/burger-menu/supportbounc">
                      <span
                        className="block px-4 py-2 hover:bg-amber-600"
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
}
