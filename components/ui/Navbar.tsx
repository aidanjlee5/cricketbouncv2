"use client";

import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center gap-6 mt-4 md:mt-0">
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/bcl">
        BCL
      </Link>
      <Link href="/videos">
        Videos
      </Link>
      <Dropdown />
    </nav>
  );
};

export default Navbar;
