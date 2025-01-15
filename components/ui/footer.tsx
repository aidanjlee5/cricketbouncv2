import React from 'react';
import Link from 'next/link'
import logo from './stamp2.png';  // Ensure the path is correct
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link href="/burger-menu/contact">Contact Us</Link>
          <Link href="/burger-menu/faq">FAQ</Link>
          <Link href="/burger-menu/socials">Socials</Link>
          <Link href="/burger-menu/supportbounct">Support BOUNC</Link>
        </div>
        <div className="footer-center">
          <Link href="/" className="footer-logo">cricketbounc.com</Link>
          <Image src="/logo.png" alt="Designed by Ishan Joshi" className="footer-img" />
        </div>
        <div className="footer-signup">
          <Link href="/bcl/signup">Sign Up/Login</Link>
          <p className="footer-rights">2024 BOUNC®. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

