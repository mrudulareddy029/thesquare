"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  
  const scrollShadow = isSolid 
    ? "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[25px] before:bg-gradient-to-b before:from-black/15 before:to-transparent before:pointer-events-none before:z-0" 
    : "";

  const navbarBackground = isSolid 
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5" 
    : "bg-transparent";

  const textColor = isSolid ? "text-black" : "text-white";
  const logoFilter = isSolid ? "none" : "brightness-0 invert";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] font-gotham transition-all duration-300">
      
      {/* 1. Main Navbar Header */}
      <div className={`relative ${navbarBackground} ${scrollShadow} h-[70px] min-[1440px]:h-[78.8px] transition-colors duration-300`}>
        {/* Changed max-w to [2400px] or full to allow expansion on 2560px screens */}
        <div className="mx-auto h-full px-4 md:px-10 min-[1440px]:px-12 min-[1920px]:px-24 max-w-[2400px] flex items-center justify-between relative z-10">
          
          {/* LEFT: Nav Links */}
          <ul className="hidden lg:flex items-center justify-start lg:order-1 list-none p-0 m-0 gap-x-2 min-[1440px]:gap-x-4 min-[1920px]:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center">
                <Link 
                  href={link.href} 
                  className={`px-2 min-[1440px]:px-3 py-2 text-[14px] min-[1440px]:text-[15px] min-[1920px]:text-[17px] font-normal hover:text-primary ${textColor} transition-colors duration-300 whitespace-nowrap`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CENTER: LOGO */}
          <div className="flex-shrink-0 lg:order-2">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/the-square-ira-realty-logo.png"
                alt="Logo"
                width={106}
                height={50}
                className={`h-[35px] md:h-[40px] min-[1440px]:h-[50px] min-[1920px]:h-[60px] w-auto object-contain transition duration-300 ${logoFilter}`}
                priority
              />
            </Link>
          </div>

          {/* RIGHT: Desktop Section */}
          <div className="flex items-center justify-end lg:order-3"> 
            <div className="hidden lg:flex items-center gap-3 min-[1440px]:gap-6 min-[1920px]:gap-10">
              <div className={`flex flex-col items-end gap-[2px] transition-colors duration-300 ${textColor}`}>
                <p className="m-0 p-0 text-[12px] min-[1440px]:text-[14px] min-[1920px]:text-[16px] leading-none font-light whitespace-nowrap opacity-80">Email: info@irarealty.in</p>
                <p className="m-0 p-0 text-[12px] min-[1440px]:text-[14px] min-[1920px]:text-[16px] leading-none font-light whitespace-nowrap">Call Us: +91 9121 777 777</p>
              </div>

              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full px-4 min-[1440px]:px-5 min-[1920px]:px-8 py-2 text-[12px] min-[1440px]:text-[13px] min-[1920px]:text-[15px] border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white h-[34px] min-[1920px]:h-[44px]"
              >
                Contact now
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button 
              className="lg:hidden p-2 outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-black" />
              ) : (
                <Menu className={`w-8 h-8 ${textColor}`} />
              )}
            </button>
          </div>
        </div>

        {/* 2. COMPACT MOBILE DROPDOWN */}
        <div className={`
          lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-in-out z-50 overflow-hidden
          ${isMobileMenuOpen ? "max-h-[500px] opacity-100 translate-y-0 shadow-lg visible" : "max-h-0 opacity-0 -translate-y-4 invisible pointer-events-none"}
        `}>
          <div className="flex flex-col p-5 gap-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black text-[16px] font-normal border-b border-gray-50 pb-2 active:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-2 space-y-4">
               <div className="flex flex-col gap-1">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Connect with us</p>
                  <p className="text-black text-[15px] font-medium leading-tight">+91 9121 777 777</p>
                  <p className="text-black text-[15px] font-medium leading-tight">info@irarealty.in</p>
               </div>
               
               <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#8E9F3D] text-white py-3.5 rounded-full font-medium text-[15px] shadow-sm active:scale-95 transition-transform"
              >
                Schedule a Site Visit <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}