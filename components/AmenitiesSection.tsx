"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/profile.webp",
  "/profile2.webp",
  "/profile3.webp",
  "/profile4.webp",
  "/profile5.webp",
];

export default function AmenitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCardStyle = (index: number) => {
    const total = images.length;
    if (index === activeIndex) {
      return "z-30 opacity-100 scale-100 translate-x-0 rotate-0 shadow-2xl";
    } else if (index === (activeIndex + 1) % total) {
      return "z-20 opacity-0 scale-95 translate-x-0 rotate-0";
    } else if (index === (activeIndex - 1 + total) % total) {
      return "z-20 opacity-0 scale-95 translate-x-0 rotate-0";
    } else {
      return "z-10 opacity-0 scale-90";
    }
  };

  return (
    <section
      id="amenities"
      className="relative bg-white overflow-hidden mx-auto w-full max-w-[1440px] py-[80px]"
    >
      {/* 1. CONTAINER: Fluid Percentage to maintain design at 1320px */}
      <div className="container mx-auto px-6 lg:px-0 lg:w-[91.66%] lg:max-w-none">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 h-auto">
          
          {/* 3. LEFT SIDE: Proportional Image Container */}
          <div className="relative w-full max-w-[440px] lg:max-w-none lg:w-[33.33%] aspect-[440/320] flex-shrink-0 flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`
                    absolute top-0 left-0 w-full h-full 
                    transition-all duration-500 ease-in-out
                    rounded-[20px] overflow-hidden 
                    bg-gray-100 shadow-xl
                    ${getCardStyle(index)}
                  `}
                >
                  <Image
                    src={src}
                    alt={`Amenity ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={index === activeIndex}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-[5%] top-1/2 -translate-y-1/2 z-[60] w-[12%] aspect-square bg-transparent rounded-full flex items-center justify-center active:bg-[#7FA61A] transition-all cursor-pointer"
            >
              <span className="text-black text-xl lg:text-2xl font-normal">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[60] w-[12%] aspect-square bg-transparent rounded-full flex items-center justify-center active:bg-[#7FA61A] transition-all cursor-pointer"
            >
              <span className="text-black text-xl lg:text-2xl font-normal">›</span>
            </button>
          </div>

          {/* 4. RIGHT SIDE CONTENT: RESTORED ORIGINAL HEADING & PARAGRAPH */}
          <div className="w-full lg:w-[35%] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[28px] lg:text-[clamp(28px,2.5vw,36px)] font-gotham font-light text-primary leading-tight tracking-tight mb-4">
              Amenities Abundant <br className="hidden md:block" />
              and Spaces Prolific
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed font-light font-gotham mt-1">
              From a 4-level exclusive clubhouse to landscaped gardens, The
              Square offers amenities that make every moment rewarding.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}