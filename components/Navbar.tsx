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
    { name: "Floor Plans", href: "#plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Contact us", href: "#contact" },
  ];

  const isSolid = isScrolled || isMobileMenuOpen;

  const navbarBackground = isSolid
    ? "bg-[#6A8A2C] backdrop-blur-md shadow-sm border-b border-white/10"
    : "bg-[#6a8a2c5c]";

  const textColor = "text-white";
  const logoFilter = "brightness-0 invert";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] font-gotham transition-all duration-300">
      {/* MAIN NAVBAR */}
      <div
        className={`relative ${navbarBackground} h-[70px] min-[1440px]:h-[78.8px] transition-colors duration-300`}
      >
        <div className="mx-auto h-full px-4 md:px-10 min-[1440px]:px-12 min-[1920px]:px-24 max-w-[2400px] flex items-center justify-between relative z-10">
          
          {/* LEFT NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-x-4 min-[1920px]:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-2 py-2 text-[14px] min-[1920px]:text-[17px] font-normal hover:text-white/80 ${textColor}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* LOGO */}
          {/* LOGOS CENTER */}
{/* LOGOS CENTER */}
<div className="flex items-center justify-center gap-6 min-[1440px]:gap-8">
  <Link href="/" className="flex items-center gap-6 min-[1440px]:gap-8">

    {/* IRA LOGO - FIRST */}
    <Image
      src="/ira-logo-1.png"   // 👈 your IRA logo filename
      alt="IRA Realty Logo"
      width={90}
      height={50}
      className={`h-[30px] md:h-[35px] min-[1440px]:h-[45px] w-auto object-contain ${logoFilter}`}
      priority
    />

    {/* THE SQUARE LOGO - SECOND */}
    <Image
      src="/the-square-ira-realty-logo.png"
      alt="The Square Logo"
      width={106}
      height={50}
      className={`h-[35px] md:h-[40px] min-[1440px]:h-[50px] w-auto object-contain ${logoFilter}`}
    />

  </Link>
</div>



          {/* RIGHT SECTION */}
          <div className="flex items-center">
            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* PHONE ICON + NUMBER */}
              <a
                href="tel:+919121777777"
                className={`flex items-center gap-2 ${textColor}`}
              >
                <Image
  src="/call-icon.png"
  alt="Call"
  width={28}
  height={28}
  className="w-7 h-7 min-[1440px]:w-7 min-[1440px]:h-7 object-contain brightness-0 invert"
/>

                <span className="text-[12px] min-[1440px]:text-[14px] min-[1920px]:text-[16px] font-light whitespace-nowrap">
                  +91 9121 777 777
                </span>
              </a>

              {/* ENQUIRE BUTTON */}
              <button
                onClick={openModal}
                className="rounded-full px-5 py-2 text-[13px] border border-white text-white hover:bg-white hover:text-[#6A8A2C] transition-all duration-300"
              >
                Enquire now
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className={`w-8 h-8 ${textColor}`} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-5 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black text-[16px] border-b pb-2"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CONTACT */}
            <div className="pt-4 space-y-4">
              <a
                href="tel:+919121777777"
                className="flex items-center gap-2"
              >
                <Image
                  src="/call-icon.png"
                  alt="Phone"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-black text-[15px] font-medium">
                  +91 9121 777 777
                </span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full bg-[#6A8A2C] text-white py-3 rounded-full font-medium"
              >
                Schedule a Site Visit →
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
