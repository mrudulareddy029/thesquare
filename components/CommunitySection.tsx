"use client";

import React from 'react';
import Image from 'next/image';

const COMMUNITY_IMAGE = "/community.png";

export default function CommunitySection() {
  return (
    <section className="w-full relative bg-white" id="community">
      
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-auto aspect-[4/3] lg:aspect-auto lg:h-[750px]">
        
        <Image
          src={COMMUNITY_IMAGE}
          alt="The Square luxury villas exterior"
          fill
          priority
          sizes="100vw"
          className="object-contain lg:object-cover lg:object-[center_70%]"
        />

        {/* --- DESKTOP TEXT OVERLAY --- */}
        <div className="hidden lg:flex absolute inset-0 flex-col justify-end items-center text-center lg:pb-64 px-4">
          
          {/* 1. OVERLAY FIX: 
              - Removed the bottom gradient (cars are now clear).
              - Added this 'blur box' centered behind the text only.
          */}
          <div className="absolute bottom-[25%] w-[80%] max-w-[1000px] h-[300px] 
                          bg-black/50 rounded-[100%] blur-[90px] z-0 pointer-events-none" />

          <div className="relative z-10"> 
             <h2 className="font-gotham font-normal uppercase tracking-widest mb-4 
               text-white text-[42px] leading-tight drop-shadow-lg">
               A Community That Resonates <br />
               With Your Lifestyle
             </h2>
             
             {/* 2. TEXT FIX: 
                 - Used single <p> with <br> tags.
                 - No gaps between lines.
                 - Starts and stops exactly where you wanted.
             */}
             <div className="font-gotham font-light max-w-[1000px] mx-auto 
               text-[18px] leading-tight text-white/95 drop-shadow-md">
               <p>
                 The Square is a serene sanctuary in an evolving global neighbourhood. From the
                 <br className="hidden lg:block" />
                 finest finishes to the most innovative amenities, you will find everything you need
                 <br className="hidden lg:block" />
                 to make your dream lifestyle a reality.
               </p>
             </div>
          </div>
        </div>

      </div>

      {/* --- MOBILE TEXT BLOCK (Unchanged) --- */}
      <div className="block lg:hidden w-full bg-white px-6 py-4 text-center">
        <h2 className="font-gotham font-normal uppercase tracking-widest mb-3 
          text-[#7FA61A] text-[22px] leading-tight">
          A Community That Resonates 
          With Your Lifestyle
        </h2>
        
        <div className="font-gotham font-normal text-[14px] leading-normal text-gray-600 space-y-4">
          <p>The Square is a serene sanctuary in an evolving global neighbourhood. From the
          finest finishes to the most innovative amenities, you will find everything you need 
          to make your dream lifestyle a reality.</p>
        </div>
      </div>

    </section>
  );
}