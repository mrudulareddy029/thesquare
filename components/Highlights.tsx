'use client';

import React from 'react';
import Image from 'next/image';

// Data for the 4 Key Statistics
const STATS = [
  {
    label: '13.5 Acres',
    subLabel: 'of land',
    icon: (
      <div className="relative w-[28px] h-[28px] flex-shrink-0">
        <Image
          src="/icon-1.png"
          alt="13.5 Acres"
          fill
          className="object-cover scale-[1.95]"
          sizes="28px"
        />
      </div>
    ),
  },
  {
    label: '131 East & West',
    subLabel: 'facing Duplex Villas',
    icon: (
      <div className="relative w-[28px] h-[28px] flex-shrink-0">
        <Image
          src="/icon-2.png"
          alt="131 Villas"
          fill
          className="object-cover scale-[1.95]"
          sizes="28px"
        />
      </div>
    ),
  },
  {
    label: 'Plot sizes',
    subLabel: '267, 300, 330 Sq Yd',
    icon: (
      <div className="relative w-[28px] h-[28px] flex-shrink-0">
        <Image
          src="/icon-3.png"
          alt="Plot Sizes"
          fill
          className="object-cover scale-[1.95]"
          sizes="28px"
        />
      </div>
    ),
  },
  {
    label: 'Built-up area',
    subLabel: '3700 Sft for all Villas',
    icon: (
      <div className="relative w-[28px] h-[28px] flex-shrink-0">
        <Image
          src="/icon-4.png"
          alt="Built-up Area"
          fill
          className="object-cover scale-[1.95]"
          sizes="28px"
        />
      </div>
    ),
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="w-full flex flex-col">
      {/* ================= 1. IMAGE SECTION (Top) ================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[1440/615]  rounded-t-[30px] lg:rounded-t-[50px] overflow-hidden">

        <Image
          src="/highlight.webp"
          alt="The Square Project Highlights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================= 2. STATS BOXES SECTION (After Image) ================= */}
      <div className="w-full bg-gray-50 py-12 px-4 md:px-0">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="
                  flex items-center 
                  bg-white 
                  rounded-lg 
                  shadow-sm border border-gray-100
                  p-5
                  w-full md:w-[280px] lg:w-[300px]
                  hover:shadow-md transition-shadow duration-300
                "
              >
                {/* Green Icon Box */}
                <div className="flex-shrink-0 bg-[#7A8F3D] rounded-md p-3 mr-4 text-white">
                  {stat.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-[#2C2C2C] font-gotham font-medium text-[16px] leading-tight mb-1">
                    {stat.label}
                  </span>
                  <span className="text-[#6A8A2C] font-gotham font-normal text-[16px]">
                    {stat.subLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}