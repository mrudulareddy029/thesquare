"use client";

import React from "react";
import Image from "next/image";

const features = [
  { title: "Smart \nLighting", icon: "/smart_light.png" },
  { title: "Fans", icon: "/fan.png" },
  { title: "Air \nConditioner", icon: "/ac.png" },
  { title: "Mobile\n App\n Enabled", icon: "/mobile.png" },
  { title: "Smart Lock\n System", icon: "/lock.png" },
  { title: "Motion\n Sensor\n For Bathrooms", icon: "/sensor.png" },
  { title: "Mesh \nNetwork", icon: "/mesh_network.png" },
  { title: "Light \nDimmer", icon: "/light_dimmer.png" },
  { title: "Universal IR \nBlaster", icon: "/ir.png" },
];

export default function SmartHomeSection() {
  return (
    <section
      className="relative w-full bg-secondary z-30 -mt-[25px] overflow-visible rounded-t-[50px] lg:rounded-t-[42px] py-12 lg:py-20 shadow-sm"
      id="automation"
    >
      {/* 1. HEADER */}
      <div className="mx-auto relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1440px] min-[1440px]:max-w-[1700px]">
        <div className="flex flex-col items-center w-full lg:w-[1296px] min-[1440px]:w-[1622px]">
          
          {/* MAIN HEADING (Top) */}
          <h2 className="
  font-gotham font-light text-white uppercase
  text-[24px] sm:text-[32px] lg:text-[47px]
  xl:text-[54px] 2xl:text-[60px]
  leading-[1.1]
  tracking-[2px]
  2xl:whitespace-nowrap
">

  
 
  Connect with smart solutions at your home
</h2>

          <div className="w-full h-[10px] mb-4 min-[1440px]:mb-6" />

          {/* PARAGRAPH */}
          <div className="
            text-white/90 font-gotham font-light w-full 
            max-w-full 
            min-[1440px]:max-w-[1107px] 
            min-[1440px]:w-[1107px]
          ">
            <div className="
              block text-center
              text-[14px] sm:text-[16px] lg:text-[24px] leading-relaxed
              min-[1440px]:text-[24px]      
              min-[1440px]:leading-[24px]    
              min-[1440px]:font-normal      
              min-[1440px]:tracking-normal   
            ">
              <p>Enjoy your home living with smart home automation empowered by cutting-edge</p>
               <p>technology. Enhance home life with smart automation for comfort, convenience, and security</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. IMAGES GRID */}
      <div className="relative mx-auto px-6 lg:max-w-[1320px] min-[1440px]:max-w-[1622px] z-10 mt-10 lg:mt-20">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 -z-10 hidden lg:block w-full h-[90%]">
          <Image src="/rectangular.png" alt="frame" fill className="object-contain opacity-50" sizes="1320px" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch w-full">
         <div className="w-full lg:w-1/2 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[763px] min-[1440px]:h-[850px]">
            <Image
              src="/firstimage.png"
              alt="Smart Home Automation"
              fill
              className="object-cover rounded-xl lg:rounded-sm mt-7 lg:mt-10"
              sizes="(max-width: 1024px) 100vw, 638px"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:h-[763px] min-[1440px]:h-[850px]">
<div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-1">
              <Image src="/secondimage.png" alt="Kitchen" fill className="object-cover rounded-xl lg:rounded-sm mt-7 lg:mt-10" />
            </div>
<div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-1">
              <Image src="/thirdimage.png" alt="Living Room" fill className="object-cover rounded-xl lg:rounded-sm mt-7 lg:mt-10" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURE BOX GRID */}
      <div className="relative z-10 mt-16 lg:mt-24 px-6">
        <div className="w-full flex justify-center mb-10">
          
          {/* HEADING (With Figma Specs) */}
          <h3 className="
            text-white font-gotham uppercase text-center
            
            /* Default Mobile/Tablet Styles */
            font-normal tracking-[3px] text-[16px] lg:text-[24px]
            
            /* --- 1440px+ SCREEN (Matches Figma) --- */
            min-[1440px]:text-[24px]        /* Size: 24px */
            min-[1440px]:leading-[70px]     /* Line height: 70px */
            min-[1440px]:font-bold          /* Weight: 700 (Bold) */
            min-[1440px]:tracking-normal    /* Spacing: 0% */
            min-[1440px]:w-[573px]          /* Width: 573px */
            min-[1440px]:h-[70px]           /* Height: 70px */
            
            mx-auto
          ">
            Connect with smart solutions at home
          </h3>
        </div>

        {/* --- ADJUSTMENT 1: REDUCED WIDTH --- */}
        <div className="mx-auto w-full max-w-[950px] min-[1440px]:max-w-[1250px] border border-white p-2 sm:p-4">
          <div className="w-full bg-white rounded-lg lg:rounded-none overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  // --- ADJUSTMENT 2: REDUCED PADDING ---
                  className="flex items-center gap-4 px-4 py-5 border-b border-gray-100 
                             sm:even:border-l lg:border-l lg:first:border-l-0 lg:border-b-0 
                             "
                >
                  <div className="relative w-10 h-10 lg:w-12 lg:h-12 min-[1440px]:w-14 min-[1440px]:h-14 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-[#222] font-gotham font-medium text-[13px] lg:text-[14px] min-[1440px]:text-[16px] leading-snug whitespace-pre-line ">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}