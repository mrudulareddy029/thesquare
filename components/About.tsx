"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="aboutus"
      className="relative w-full bg-white border-x-[4px] md:border-x-[10px] border-[#CDE244] py-12 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 xl:max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0">
          
          {/* LEFT COLUMN: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-12 xl:pr-24">
            <div className="relative z-10">
              {/* HEADING */}
              <h1 className="uppercase text-primary font-gotham font-light text-[28px] leading-tight md:text-[40px] lg:text-[50px] lg:leading-[1.2] tracking-normal mb-6">
                Welcome to <br className="hidden lg:block" /> The Square
              </h1>

              {/* PARAGRAPH */}
              <p className="text-left text-[#212529] font-gotham text-base md:text-lg lg:text-[15px] leading-relaxed lg:leading-[24px] mb-8">
                It's an intriguing invitation to explore a new dimension of luxury
                living, where boundaries are pushed and expectations exceeded.
                Experience a cosmopolitan community at "The Square".
              </p>

              {/* DECORATIVE IMAGE (LG+) */}
              <div className="hidden xl:block absolute -bottom-20 -left-10 w-[150px] h-[120px] z-0 opacity-50">
                <Image
                  src="/about-image.png"
                  alt="Pattern"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER (LG+) */}
          <div className="hidden lg:block w-[1px] bg-[#CDE244] self-stretch" />

          {/* RIGHT COLUMN: Image Area */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-12">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/5] max-h-[600px] overflow-hidden ">
              <Image
                src="/about.webp"
                alt="About The Square Luxury Villa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}