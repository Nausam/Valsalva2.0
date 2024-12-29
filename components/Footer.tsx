import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/logo.png" // Replace with your logo path
            alt="Logo"
            width={50}
            height={50}
            className="invert"
          />
          <div className="flex justify-center mt-6 space-x-4 ">
            {/* Social Icons */}
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-black transition-colors duration-500 ease-in-out hover:text-white invert w-10 h-10"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="mt-6 text-center lg:text-left">
            <p className="text-sm font-medium">Phone Number</p>
            <a href="tel:+6589490741" className="text-sm underline">
              +960 123 1234
            </a>
            <p className="text-sm">WhatsApp Only</p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="text-center lg:text-left">
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Join Our Team
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Warranty Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Equipment Care Instructions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Authorized Dealers
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Newsletter Signup */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">SIGN UP AND SAVE</h3>
          <p className="text-sm mb-6">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-white text-black text-sm"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 text-sm font-bold rounded-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-sm border-t border-gray-700 pt-6">
        <p>
          © 2024 <span className="font-bold">VALSALVA</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
