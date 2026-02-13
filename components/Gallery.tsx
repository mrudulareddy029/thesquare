"use client";

import React from "react";
import Image from "next/image";

/* ================= GALLERY COMPONENT ================= */
export default function Gallery() {
  const IMAGES = {
    leftTall: "/gallery-1.png",      
    centerTop: "/gallery-2.png",     
    centerBottom: "/gallery-3.png",  
    rightTall: "/gallery-4.png",     
  };

  return (
    <section id="gallery" className="w-full bg-white pb-10 md:pb-16">
      
      {/* 1. TITLE */}
      <div className="w-full flex justify-center pt-10 md:pt-16 pb-8 md:pb-12">
        <h2 className="font-gotham font-light uppercase text-primary text-2xl md:text-[42px] tracking-[0.3em] text-center">
          GALLERY
        </h2>
      </div>

      {/* 2. RESPONSIVE GRID CONTAINER */}
      <div className="w-full px-4 md:px-0 overflow-hidden">
        
        {/* MOBILE: grid-cols-1 (Simple stack so images keep their shape)
          DESKTOP: md:grid-cols-[1.8fr_2fr_1fr] (Your custom layout)
        */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_2fr_1fr] gap-4 md:gap-2 h-auto md:h-[650px] lg:h-[800px]">

          {/* 1st IMAGE: LEFT TALL */}
          <div className="relative h-[450px] md:h-full group overflow-hidden rounded-sm">
            <Image
              src={IMAGES.leftTall}
              alt="Gallery Left"
              fill
              className="object-cover transition-transform duration-700 "
              sizes="(max-width: 768px) 100vw, 35vw"
              priority
            />
          </div>

          {/* 2nd & 3rd IMAGES: CENTER STACK */}
          <div className="grid grid-rows-2 gap-4 md:gap-2 h-[600px] md:h-full">
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src={IMAGES.centerTop}
                alt="Gallery Center Top"
                fill
                className="object-cover transition-transform duration-700 "
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative group overflow-hidden rounded-sm">
              <Image
                src={IMAGES.centerBottom}
                alt="Gallery Center Bottom"
                fill
                className="object-cover transition-transform duration-700 "
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* 4th IMAGE: RIGHT TALL - NOW FULL WIDTH ON MOBILE */}
          <div className="relative h-[450px] md:h-full group overflow-hidden rounded-sm">
            <Image
              src={IMAGES.rightTall}
              alt="Gallery Right"
              fill
              className="object-cover transition-transform duration-700 "
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}