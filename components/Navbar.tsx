"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/components/ContactProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  const onScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#aboutus" },
    { name: "Amenities", href: "#amenities" },
    { name: "Projects", href: "#projects" },
    { name: "Contact us", href: "#contact" },
  ];

  const isSolid = isScrolled || isMobileMenuOpen;

  // Background logic: Solid green when scrolled, semi-transparent when at top
  const navbarBackground = isSolid
    ? "bg-[#6A8A2C] backdrop-blur-md shadow-md border-b border-white/10"
    : "bg-[#6a8a2c5c]";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] font-gotham transition-all duration-300">
      <div className={`relative ${navbarBackground} transition-all duration-500`}>
        {/* Container Breakdown:
            - h-[70px] on mobile, h-[110px] on 1440px+
            - px fluidly scales from 4 (mobile) to 20 (ultra-wide)
        */}
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-8 xl:px-12 2xl:px-20 max-w-[2400px] h-[70px] md:h-[90px] min-[1440px]:h-[110px]">
          
          {/* --- LEFT SECTION (Links) --- */}
          <div className="hidden lg:flex flex-1 justify-start">
            <ul className="flex items-center gap-x-2 xl:gap-x-4 2xl:gap-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="px-2 py-2 whitespace-nowrap font-gotham font-normal text-white hover:text-white/70 text-[13px] xl:text-[15px] 2xl:text-[20px] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CENTER SECTION (Logos) --- */}
          <div className="flex items-center justify-center gap-4 md:gap-6 xl:gap-8 flex-shrink-0 mx-4">
            <Link href="/" className="flex items-center gap-4 md:gap-6 xl:gap-8">
              {/* IRA Logo Container */}
                <div className="relative w-[90px] h-[45px] md:w-[100px] md:h-[48px] lg:w-[112px] lg:h-[53px]">
                <Image
                  src="/ira-logo-1.png"
                  alt="IRA Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              
              {/* Vertical Divider */}
              <div className="w-[1px] h-8 bg-white/30 hidden md:block" />
              
              {/* The Square Logo Container */}
              <div className="relative h-[50px] w-[90px] md:h-[65px] md:w-[110px] xl:h-[78px] xl:w-[134px] 2xl:h-[85px] 2xl:w-[150px]">
                <Image
                  src="/the-square-ira-realty-logo.png"
                  alt="The Square Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
          </div>

          {/* --- RIGHT SECTION (Contact & Button) --- */}
          <div className="flex flex-1 justify-end items-center gap-4">
            {/* Desktop View */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a
                href="tel:+918001345345"
                className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
              >
                <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
                   <Image 
                     src="/call-icon.png" 
                     alt="Call" 
                     fill 
                     className="object-contain brightness-0 invert" 
                   />
                </div>
                <span className="text-[12px] xl:text-[14px] 2xl:text-[18px] font-light whitespace-nowrap">
                  +91 8001345345
                </span>
              </a>

              <button
                onClick={openModal}
                className="
                  px-6 xl:px-8 h-[40px] xl:h-[50px] 2xl:h-[54px]
                  rounded-full border-[1.5px] border-white
                  text-white text-[14px] xl:text-[16px] 2xl:text-[20px]
                  flex items-center justify-center whitespace-nowrap
                  hover:bg-white hover:text-[#6A8A2C] transition-all duration-300
                "
              >
                Enquire now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#6A8A2C] shadow-2xl transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-screen opacity-100" 
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="flex flex-col p-6 gap-6 bg-[#6A8A2C]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-light border-b border-white/10 pb-3"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <a href="tel:+918001345345" className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 relative">
                  <Image 
                    src="/call-icon.png" 
                    alt="Call" 
                    fill 
                    className="brightness-0 invert object-contain" 
                  />
                </div>
                <span className="text-lg">+91 8001345345</span>
              </a>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
                className="w-full bg-white text-[#6A8A2C] py-4 rounded-full font-bold text-center text-lg active:scale-95 transition-transform"
              >
                Enquire now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}