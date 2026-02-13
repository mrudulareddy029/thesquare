"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/* ================= STATIC DATA ================= */
const NAV_LINKS = [
  { label: "About Us", href: "#plans", isBold: false }, 
  { label: "Home", href: "/", isBold: false }, 
  { label: "Contact us", href: "#contact", isBold: false }, 
  { label: "FAQs", href: "#faq", isBold: false }, 
  { label: "Privacy Policy", href: "/privacy-policy", isBold: false },
];

/* ================= MAIN COMPONENT ================= */
export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Top Spacer - Desktop Only */}
      <div className="hidden lg:block w-full max-w-[1440px] h-[60px] mx-auto bg-transparent" />

      <footer className="bg-white font-sans w-full overflow-x-hidden border-t border-gray-100">
        
        {/* Main Footer Container */}
        <div className="w-full lg:max-w-[1440px] mx-auto">
          
          {/* Inner Content Wrapper */}
          <div className="w-full px-6 lg:px-0 lg:w-[1320px] lg:mx-auto flex flex-col items-center">
            
            <div className="flex flex-col lg:flex-row w-full lg:w-[1296px] lg:-mx-3">
              
              {/* LEFT COLUMN: Logos and Navigation */}
              <div className="w-full lg:w-[756px] flex flex-col lg:flex-row lg:border-r border-[#7a8b44]/30">
                
                <div className="w-full lg:w-[566px] flex flex-col items-center lg:items-start pt-10 lg:pt-0">
                  {/* Logos Group */}
                  <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-10 mb-10 lg:mb-[173px]">

                    <img 
                      src="/iralogo.webp" 
                      alt="IRA" 
                      className="w-[160px] lg:w-[143px] h-auto object-contain lg:mt-2.5" 
                    />
                    <img 
                      src="/the-square-ira-realty-logo.png" 
                      alt="Square" 
                      className="w-[120px] lg:w-[106px] h-auto object-contain" 
                    />
                  </div>
                  

                  {/* Navigation links */}
                  <nav className="w-full lg:max-w-[542px] mb-8 lg:mb-4 lg:pt-8">
                    <ul className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-0">
                      {NAV_LINKS.map((link, index) => (
                        <li key={index}>
                          <Link 
                            href={link.href} 
                            className={`${
                              link.isBold 
                                ? 'text-xl lg:text-[15px] text-[rgb(89,119,26)] font-medium' 
                                : 'text-lg lg:text-[12px] text-[#7a8b44] font-light'
                            } whitespace-nowrap leading-none hover:text-[rgb(89,119,26)] transition-all`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Bird Image Column */}
                <div className="flex justify-center items-end w-full lg:w-[190px] mb-10 lg:mb-0">
                  <img 
                    src="/footer1.webp" 
                    alt="Birds" 
                    className="w-[121px] lg:w-full h-auto lg:h-[295px] object-contain object-bottom" 
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Address & Contact */}
              <div className="w-full lg:w-[540px] flex items-center lg:items-end justify-center lg:justify-start lg:pl-[50px] pb-10 lg:pb-2">
                <div className="w-full max-w-[500px] flex flex-col">
                  <p className="text-[#8B4513] font-light mb-2 lg:mb-4 text-base">Address:</p>
                  <div className="text-black font-light leading-relaxed text-base">
                    {/* ✅ Financial District line fixed to whitespace-nowrap for desktop */}
                    <p className="lg:whitespace-nowrap">4-49/2, Besides Anvaya Conventions Road, Financial District,</p>
                    <p>Vattinagulapally,</p>
                    <p> Hyderabad - 500 032, Telangana</p>
                    
                    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 mt-6 lg:mt-5">
                      <p className="flex items-center">
                        <span className="text-[#8B4513] font-normal mr-2">Phone:</span>
                        <a href="tel:+918001345345" className="hover:underline">+91 8001345345</a>
                      </p>
                      <p className="flex items-center">
                        <span className="text-[#8B4513] font-normal mr-2">Email:</span>
                        <a href="mailto:info@irarealty.in" className="hover:underline">info@irarealty.in</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-6 mt-8 lg:mt-5">
                    <span className="text-[#8B4513] font-normal text-base whitespace-nowrap">Let's Connect:</span>
                    <div className="flex gap-6 items-center">
                      <PhoneIcon /> 
                      <WhatsappIcon /> 
                      <FacebookIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-full h-[60px] bg-transparent" />

          {/* DISCLAIMER */}
          <div className="w-full lg:w-[1296px] mx-auto text-center mb-6 px-6 border-t border-gray-100 lg:border-none pt-6 lg:pt-0">
            <p className="text-gray-500 font-light text-[10px] lg:text-[11px] leading-relaxed lg:whitespace-nowrap">
              Disclaimer: "This is purely a conceptual presentation and not a legal offering. The promoters reserve the right to make changes in elevation, specifications, and plans as deemed fit."
            </p>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="w-full bg-[#1a1a1a]">
          <div className="max-w-[1440px] mx-auto flex items-center justify-center py-4 lg:h-12">
            <span className="text-white font-light uppercase tracking-[0.2em] text-xs lg:text-sm">
              ©2026 IRAREALTY
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ================= ICONS ================= */

const PhoneIcon = () => (
  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="22" width="22" className="cursor-pointer hover:text-[rgb(89,119,26)] transition-colors">
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="22" width="22" className="cursor-pointer hover:text-[#25D366] transition-colors">
    <path d="M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="22" width="22" className="cursor-pointer hover:text-[#1877F2] transition-colors">
    <path d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22" />
  </svg>
);