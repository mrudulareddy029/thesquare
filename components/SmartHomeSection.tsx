"use client";

import React from "react";
import Image from "next/image";

const features = [
  { title: "Smart Lighting", icon: "/smart_light.png" },
  { title: "Fans", icon: "/fan.png" },
  { title: "Air Conditioner", icon: "/ac.png" },
  { title: "Mobile App Enabled", icon: "/mobile.png" },
  { title: "Smart Lock System", icon: "/lock.png" },
  { title: "Motion Sensor For Bathrooms", icon: "/sensor.png" },
  { title: "Mesh Network", icon: "/mesh_network.png" },
  { title: "Light Dimmer", icon: "/light_dimmer.png" },
  { title: "Universal IR Blaster", icon: "/ir.png" },
];

export default function SmartHomeSection() {
  return (
    <section
      className="relative w-full bg-secondary z-30 -mt-[25px] overflow-hidden rounded-t-[40px] lg:rounded-t-[42px] py-12 lg:py-20"
      id="automation"
    >
      {/* 1. HEADER - Responsive text clamps */}
      <div className="mx-auto relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1440px]">
        <div className="flex flex-col items-center w-full lg:w-[1296px]">
          <h2 className="font-gotham font-light text-white uppercase text-center w-full 
                         text-[24px] sm:text-[32px] lg:text-[42px] leading-tight tracking-wide">
            Connect with smart solutions at your home
          </h2>

          <div className="w-full h-[10px] mb-4" />

          <p className="text-white/90 font-gotham font-light w-full max-w-[900px]">
            <span className="block text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              <p>Enjoy your home living with smart home automation empowered by cutting-edge</p>
               <p>technology. Enhance home life with smart automation for comfort, convenience, and security.</p>
            </span>
          </p>
        </div>
      </div>

      {/* 2. IMAGES GRID - Handles stack on mobile, side-by-side on desktop */}
      <div className="relative container mx-auto px-6 lg:max-w-[1320px] z-10 mt-10 lg:mt-20">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 -z-10 hidden lg:block w-full h-[90%]">
          <Image src="/rectangular.png" alt="frame" fill className="object-contain opacity-50" sizes="1320px" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch w-full">
          <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[450px] lg:h-[763px]">
            <Image
              src="/firstimage.png"
              alt="Smart Home Automation"
              fill
              className="object-cover rounded-xl lg:rounded-sm"
              sizes="(max-width: 1024px) 100vw, 638px"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:h-[763px]">
            <div className="relative w-full h-[220px] sm:h-[300px] lg:flex-1">
              <Image src="/secondimage.png" alt="Kitchen" fill className="object-cover rounded-xl lg:rounded-sm" />
            </div>
            <div className="relative w-full h-[220px] sm:h-[300px] lg:flex-1">
              <Image src="/thirdimage.png" alt="Living Room" fill className="object-cover rounded-xl lg:rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURE BOX GRID - Responsive Grid (1 col -> 2 col -> 5 col) */}
      <div className="relative z-10 mt-16 lg:mt-24 px-6">
        <div className="w-full flex justify-center mb-10">
          <h3 className="text-white font-gotham font-normal uppercase tracking-[3px] text-[16px] lg:text-[22px] text-center">
            Connect with smart solutions at home
          </h3>
        </div>

        <div className="mx-auto w-full max-w-[1100px] border border-white p-2 sm:p-4">
          <div className="w-full bg-white rounded-lg lg:rounded-none overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-6 py-8 border-b border-gray-100 
                             sm:even:border-l lg:border-l lg:first:border-l-0 lg:border-b-0 
                             "
                >
                  <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-[#222] font-gotham font-medium text-[13px] lg:text-[14px] leading-snug">
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