import React from 'react';
import Link from 'next/link'
import logo from './stamp2.png';  // Ensure the path is correct
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white py-2.5 text-center w-full shrink-0 mt-12">
      <div className="flex justify-between items-center flex-wrap max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col items-start flex-grow text-lg pl-2.5">
          <Link href="/burger-menu/contact">Contact Us</Link>
          <Link href="/burger-menu/faq">FAQ</Link>
          <Link href="/burger-menu/socials">Socials</Link>
          <Link href="/burger-menu/supportbounct">Support BOUNC</Link>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow-2 text-center p-0">
          <Link href="/" className="footer-logo">cricketbounc.com</Link>
          <Image src="/logo.png" alt="Designed by Ishan Joshi" className="footer-img" width={50} height={50} />
        </div>
        <div className="flex flex-col items-end flex-grow text-right">
          <Link href="/bcl/signup">Sign Up/Login</Link>
          <p className="text-sm text-white text-right">2024 BOUNC®. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

