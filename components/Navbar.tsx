"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/user.actions";
import MobileNavigation from "./MobileNavigation";
import { navItems } from "@/constants";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

export default function Navbar({ fullName, avatar, email }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="User Avatar"
              width={23}
              height={30}
            />
            <span className="text-3xl font-extrabold text-black tracking-wide">
              VALSALVA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-700 hover:text-black transition-colors duration-300 font-medium text-md"
              >
                {item.name}
              </Link>
            ))}
            {fullName ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <Image
                    src={avatar}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {/* User Info */}
                    <div className="flex items-center space-x-3 px-4 py-4 border-b border-gray-200">
                      <Image
                        src={avatar}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full border border-gray-300"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold text-base">
                          {fullName}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {email}
                        </p>
                      </div>
                    </div>

                    {/* Logout Button */}
                    <button
                      type="button"
                      onClick={async () => await signOutUser()}
                      className="flex items-center w-full px-4 py-3 space-x-3 text-gray-800 hover:bg-indigo-100 transition-colors duration-200"
                    >
                      <Image
                        src="/assets/icons/logout.svg"
                        alt="Logout Icon"
                        width={24}
                        height={24}
                      />
                      <span className="font-medium text-sm">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                type="button"
                onClick={() => redirect("/sign-in")}
                className="button"
              >
                <span className="font-medium text-sm">Login</span>
              </Button>
            )}
          </div>

          <MobileNavigation fullName={fullName} avatar={avatar} email={email} />
        </div>
      </div>
    </nav>
  );
}
