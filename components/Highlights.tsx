'use client';

import React from 'react';
import Image from 'next/image';

const STATS = [
  {
    label: '13.5 Acres',
    subLabel: 'of land',
    icon: '/icon-1.png',
  },
  {
    label: '131 East & West',
    subLabel: 'facing Duplex Villas',
    icon: '/icon-2.png',
  },
  {
    label: 'Plot sizes',
    subLabel: '267, 300, 330 Sq Yd',
    icon: '/icon-3.png',
  },
  {
    label: 'Built-up area',
    subLabel: '3700 Sft for all Villas',
    icon: '/icon-4.png',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="w-full flex flex-col">
      
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[1440/615] rounded-t-[30px] md:rounded-t-[50px] overflow-hidden">
        <Image
          src="/highlight.webp"
          alt="The Square Project Highlights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="w-full bg-white py-[40px] md:py-[50px] px-4 md:px-10">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] lg:gap-[30px]">

          {STATS.map((stat, index) => (
            <div
              key={index}
              className="
                w-full min-h-[110px] md:h-[117px]
                bg-white
                rounded-[8px]
                shadow-[0px_4px_20px_rgba(0,0,0,0.06)]
                flex items-center
                px-[20px] md:px-[24px]
                py-4 md:py-0
              "
            >
              
              {/* Green Icon Box */}
              <div className="relative w-[50px] h-[50px] md:w-[61px] md:h-[61px] mr-[15px] md:mr-[20px] flex-shrink-0">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-[4px] md:gap-[10px]">
                <span className="text-[18px] md:text-[24px] font-normal text-[#2C2C2C] leading-tight md:leading-[26px]">
                  {stat.label}
                </span>
                <span className="text-[16px] md:text-[22px] font-normal text-[#6A8A2C] leading-tight md:leading-[22px]">
                  {stat.subLabel}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}