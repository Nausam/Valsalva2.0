"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

import { signOutUser } from "@/lib/actions/user.actions";
import { navItems } from "@/constants";
import Button from "./Button";
import MobileNavigation from "./MobileNavigation";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const NavBar = ({ fullName, avatar, email }: Props) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { y: currentScrollY } = useWindowScroll();

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-full "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-8">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link href="/">
              <Image
                src="/assets/images/logo_white.png"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>

            <Link href="/customize">
              <Button
                id="product-button"
                title="Customize"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <Link key={index} href={item.url} className="nav-hover-btn">
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
                      className="rounded-full border-2 border-white"
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg">
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
                <Link href="/sign-in">
                  <Button
                    id="product-button"
                    title="Login"
                    rightIcon={<TiLocationArrow />}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                  />
                </Link>
              )}
            </div>

            <MobileNavigation
              fullName={fullName}
              avatar={avatar}
              email={email}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
