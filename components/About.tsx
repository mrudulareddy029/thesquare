"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about-section"
      className="relative w-full bg-white border-x-[4px] md:border-x-[9.6px] border-[#CDE244] py-12 lg:py-[57.6px] overflow-hidden lg:overflow-visible"
    >
      <div className="container mx-auto px-4 lg:max-w-[1320px] h-full">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[619.24px] items-center">

          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-1/2 relative lg:border-r lg:border-[#CDE244] h-full flex items-center">
            <div className="relative z-10 w-full h-auto py-4 lg:py-0">

              {/* HEADING: Pixel-locked on LG+, Fluid on Mobile */}
              <h1
                className="
                  uppercase text-primary font-gotham font-light
                  text-[28px] leading-[33.6px]
                  lg:text-[50px] lg:leading-[60px]
                  lg:w-[444.662px] lg:h-[120px]
                  lg:pl-[38.1px] lg:pr-[152.438px]
                  lg:pt-[158.8px] lg:pb-[19.05px]
                  tracking-normal mb-4 lg:mb-2 box-content
                "
              >
                Welcome to The Square
              </h1>

              {/* PARAGRAPH: Pixel-locked on LG+, Fluid on Mobile */}
              <p
                className="
                  text-left text-[rgb(33,37,41)] font-gotham
                  text-base leading-relaxed
                  lg:text-[15px] lg:leading-[24px]
                  lg:w-[635.2px] lg:h-[96px]
                  lg:pl-[44.462px] lg:pr-[215.962px]
                  mb-8 lg:mb-[16px] max-w-md lg:max-w-none
                  box-border
                "
              >
                It's an intriguing invitation to explore a new
                dimension if luxury living, where boundaries are
                pushed and expectations exceeded. Experience a 
                cosmopolitan community at "The square".
              </p>

              {/* DECORATIVE IMAGE: Visible only on Laptop */}
              <div className="hidden lg:block absolute top-[417.85px] left-[-82px] w-[150px] h-[121.6px] z-0">
                <Image
                  src="/aboutbackground.webp"
                  alt="Pattern"
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image Area */}
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0 lg:pl-[20px]">

            {/* OUTER BOX: Pixel-locked on LG+ */}
            <div className="relative w-full max-w-[500px] lg:w-[496.401px] lg:h-[555.639px] lg:p-[24.813px] lg:transform lg:-translate-x-[60px]">

              {/* INNER IMAGE BOX */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:w-[446.775px] lg:h-[506.013px] overflow-hidden rounded-lg lg:rounded-none">
                <Image
                  src="/about.webp"
                  alt="About The Square Luxury Villa"
                  fill
                  sizes="(max-width:1024px) 100vw, 446.775px"
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}