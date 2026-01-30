'use client';

import React from 'react';
import Image from 'next/image';

const HIGHLIGHTS_DATA = [
  'HMDA & RERA Approved Luxury Villa Project',
  '13.5 Acres of Land',
  'Majestic Entrance Gate',
  '131 East & West Facing Duplex Villas',
  'Plot Sizes: 267, 300, 330 Sq Yd',
  'Built-Up Area: 3700 Sft for All Villas',
  'Provision for Home Automation',
  'Two Car Parking Spaces for Each Villa',
  "40' & 30' Wide Internal BT Roads",
  '100% Vastu',
  'Avenue Plantation, Street Lighting, Jogging Track',
  '24-hr Water Supply, Parks & Play Areas',
  '24x7 Power Back-up',
];

export default function Highlights() {
  return (
    <section id="highlights" className="w-full">
      
      {/* ================= MOBILE / SMALL SCREENS ================= */}
      <div className="block md:hidden bg-white">
        <div className="w-full aspect-[16/9] relative overflow-hidden">
          <Image
            src="/highlight.webp"
            alt="The Square Project Highlights Showcase"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="px-6 py-8">
          <h2 className="text-[20px] font-gotham font-normal tracking-[2px] uppercase text-primary">
            Project Highlights
          </h2>

          <ul className="mt-6 space-y-4">
            {HIGHLIGHTS_DATA.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span className="text-base leading-6 text-ira-dark font-gotham font-normal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= DESKTOP / LARGE SCREENS ================= */}
      <div className="hidden md:block relative w-full overflow-hidden z-10 h-[615.75px] -mt-[62px] -mb-[14.4px]">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <Image
            src="/highlight.webp"
            alt="Aerial view of Adibatla luxury villa project"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* HEADING CONTAINER */}
        <div className="absolute top-[40px] left-[60px] right-[-60px] px-[100.8px] z-10">
          <h1 className="text-[36px] font-gotham font-normal uppercase tracking-[2px] text-white">
            Project Highlights
          </h1>
        </div>

        {/* LIST CONTAINER - Strictly applying bottom-50 position */}
        <div className="absolute right-[60px] bottom-[50px] w-[330.05px] h-[364px] z-10">
          <ul className="h-full flex flex-col justify-between m-0 p-0">
            {HIGHLIGHTS_DATA.map((item) => (
              <li 
                key={item} 
                className="flex items-center w-[330.05px] h-[22px]"
              >
                {/* BULLET POINT: Computed 6.112px container with reduced 4px bullet */}
                <div className="flex items-center justify-center w-[6.112px] h-[22px] m-0 p-0 flex-shrink-0">
                  <span className="w-[4px] h-[4px] rounded-full bg-secondary shadow-[0_0_8px_rgba(163,198,68,0.5)]" />
                </div>
                
                {/* TEXT CONTENT: Applying a 10px margin to clear the bullet container */}
                <span className="ml-[10px] text-[14px] font-gotham font-normal tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}