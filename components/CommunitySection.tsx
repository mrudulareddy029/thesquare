"use client";

import React from 'react';
import Image from 'next/image';

const COMMUNITY_IMAGE = "/the-square-luxury-apartments-exterior.jpg";

export default function CommunitySection() {
  return (
    <section
      className="w-full relative h-auto lg:h-[520px] overflow-hidden"
      id="community"
    >
      
      {/* BACKGROUND IMAGE */}
      <div className="relative w-full h-[280px] sm:h-[350px] lg:absolute lg:inset-0 lg:h-full">
        <Image
          src={COMMUNITY_IMAGE}
          alt="The Square luxury villas exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full px-6 py-12 bg-white text-center 
        lg:absolute lg:inset-0 lg:bg-transparent 
        lg:flex lg:flex-col lg:justify-center lg:items-center 
        lg:py-0 lg:px-0">

        {/* BLURRED ELLIPSE OVERLAY (Desktop Only) */}
        <div className="hidden lg:block absolute 
          w-[75%] 
          max-w-[1200px] 
          h-[200px] 
          bg-black/70 
          rounded-full 
          blur-[110px] 
          z-[-1]">
        </div>

        <h2 className="font-gotham font-light uppercase tracking-widest mb-4 lg:mb-[20px] 
          w-full lg:max-w-[800px] xl:max-w-[900px] mx-auto 
          text-[24px] md:text-[28px] leading-tight text-[#7FA61A] 
          lg:text-white lg:text-[clamp(28px,2.5vw,36px)] lg:leading-[46px]">
          A Community That Resonates <br className="hidden md:block" /> 
          With Your Lifestyle
        </h2>

        <p className="font-gotham font-light w-full lg:max-w-[760px] xl:max-w-[860px] mx-auto 
          text-[16px] leading-[26px] text-gray-600 
          lg:text-white lg:leading-relaxed lg:opacity-90">
          The Square is a serene sanctuary in an evolving global neighbourhood.
          From the finest finishes to the most innovative amenities, you will
          find everything you need to make your dream lifestyle a reality.
        </p>

      </div>
    </section>
  );
}
