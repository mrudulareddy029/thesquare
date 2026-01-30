"use client";

import React from "react";
import Image from "next/image";

const features = [
  { title: "Smart Lighting", icon: "/smart_light.webp" },
  { title: "Fans", icon: "/fan.webp" },
  { title: "Air Conditioner", icon: "/ac.webp" },
  { title: "Mobile App Enabled", icon: "/mobile.webp" },
  { title: "Smart Lock System", icon: "/lock.webp" },
  { title: "Motion Sensor For Bathrooms", icon: "/sensor.webp" },
  { title: "Mesh Network", icon: "/mesh_network.webp" },
  { title: "Light Dimmer", icon: "/light_dimmer.webp" },
  { title: "Universal IR Blaster", icon: "/ir.webp" },
];

export default function SmartHomeSection() {
  return (
    <section className="relative w-full bg-secondary z-30 -mt-[25px] overflow-hidden rounded-t-[40px] lg:rounded-t-[42px] py-8 lg:py-16" id="automation">
      
      {/* 1. HEADER CONTAINER */}
      <div className="mx-auto relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1440px]">
        <div className="flex flex-col items-center w-full lg:w-[1296px]">
          
          {/* HEADING: Using Tailwind arbitrary values for exact design matching */}
          <h2 className="font-gotham font-light text-white uppercase text-center w-full 
                         pt-[clamp(20px,5vw,64px)] text-[clamp(20px,6vw,42px)] leading-tight
                         flex items-center justify-center min-h-auto">
            4 BHK Luxury Villas With Home Automation
          </h2>

          <div className="w-full h-[10px] mb-2" />

          {/* PARAGRAPH */}
          <p className="text-white/90 font-gotham font-light w-full max-w-full lg:max-w-[1042px] flex flex-col items-center">
            <span className="block w-full text-[14px] lg:text-[17px] leading-relaxed lg:leading-[22px]">
              Experience a tech-enabled lifestyle with smart home features in our 4 BHK villas in Adibatla. 
              Enjoy convenience, security, and luxury at the touch of a button.
            </span>
          </p>
        </div>
      </div>

      {/* 2. IMAGES GRID */}
      <div className="relative container mx-auto px-4 lg:max-w-[1320px] z-10 mt-8 lg:mt-16">
        {/* Background Frame - Using arbitrary attributes to handle visibility logic if needed */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 -z-10 hidden lg:block w-full h-[90%]" data-frame="active">
          <Image src="/rectangular.png" alt="frame" fill className="object-contain" sizes="1320px" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch w-full">
          {/* Left Large Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[500px] lg:h-[763px] lg:pl-8">
            <Image 
              src="/firstimage.webp" 
              alt="Smart Home Automation" 
              fill 
              className="object-cover rounded-sm" 
              sizes="(max-width: 1024px) 100vw, 638px" 
              priority 
            />
          </div>

          {/* Right Column Stack */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:h-[763px]">
            <div className="relative w-full h-[250px] lg:flex-1">
              <Image src="/secondimage.webp" alt="Kitchen Automation" fill className="object-cover rounded-sm" sizes="(max-width: 1024px) 100vw, 626px" />
            </div>
            <div className="relative w-full h-[250px] lg:flex-1">
              <Image src="/thirdimage.webp" alt="Living Room Automation" fill className="object-cover rounded-sm" sizes="(max-width: 1024px) 100vw, 626px" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURE BOX GRID */}
      <div className="relative z-10 mt-12 lg:mt-20 px-4">
        <div className="mx-auto w-full max-w-[1036px] border-[0.8px] border-white/80 p-3 md:p-[20px]">
          <div className="mx-auto w-full bg-white border-[0.8px] border-[#7FA61A]/70">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col sm:flex-row items-center justify-center text-center gap-3 px-2 py-4 lg:py-6 border-b border-r border-[#7FA61A]/10 last:border-r-0 lg:border-b-0"
                  data-feature-item="true"
                >
                  <div className="relative w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0">
                    <Image src={feature.icon} alt={feature.title} fill className="object-contain" sizes="48px" />
                  </div>
                  <span className="text-[#222] font-gotham font-light text-[11px] lg:text-[13px] tracking-wide leading-tight">
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