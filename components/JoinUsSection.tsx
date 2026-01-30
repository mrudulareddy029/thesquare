"use client";

import React from 'react';
import Image from 'next/image';

const JOIN_IMAGE = "/join1.webp";

const ArrowIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    className="w-3 h-3 group-hover:translate-x-1 transition-transform" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
  </svg>
);

export default function JoinUsSection() {
  return (
    /* Background restored to bg-secondary */
    <section 
      className="w-full bg-secondary min-h-[600px] lg:h-[914px] flex items-center py-12 lg:py-0 overflow-hidden" 
      id="join-us"
    >
      <div className="mx-auto w-full px-6 lg:px-0 lg:w-[91.66vw] lg:max-w-[1320px] h-full">
        <div className="flex flex-col lg:flex-row h-full items-center gap-0">
          
          {/* LEFT COLUMN: TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-[5vw] xl:pr-20 text-white py-10 lg:py-0">
            <div className="mb-6 lg:mb-8">
              <h1 className="font-gotham font-light text-white uppercase tracking-normal
                             text-[28px] leading-[1.2]
                             sm:text-[36px]
                             lg:text-[3.47vw] xl:text-[50px] lg:leading-[1.3]">
                <span className="block">JOIN US AT THE</span>
                <span className="block">SQUARE</span>
              </h1>
            </div>
            
            <p className="text-white font-light leading-[26px] mb-8 lg:mb-[36px] w-full font-gotham
                          text-[15px]
                          lg:text-[1.11vw] xl:text-[15px]">
              Come, join and discover the essence of vibrant living at <br className="hidden lg:block" />
              The Square, where luxury harmonizes with nature. <br className="hidden lg:block" />
              Begin your journey towards a redefined lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[24px]">
              <a href="#contact" className="group w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A1A1A] text-white rounded-[30px] px-[30px] py-[14px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="font-gotham font-bold text-sm tracking-wide">Schedule a Site Visit</span>
                  <ArrowIcon />
                </button>
              </a>

              <a href="tel:+919121777777" className="group w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-[30px] py-[14px] bg-transparent border border-white text-white rounded-[30px] hover:bg-white hover:text-secondary transition-all duration-300">
                  <span className="font-gotham font-bold text-sm tracking-wide">Contact Us</span>
                  <ArrowIcon />
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE */}
          <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-full relative px-3 mt-8 lg:mt-0">
             <div className="relative w-full h-full rounded-[20px] lg:rounded-none overflow-hidden">
               <Image 
                 src={JOIN_IMAGE} 
                 alt="The Square Luxury Living" 
                 fill
                 className="object-cover" 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 660px"
                 priority
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}