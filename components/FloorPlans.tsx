'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const PLAN_CONFIG = {
  East: {
    id: '01',
    images: ['/facing4.png', '/facing6.png', '/facing5.png'],
  },
  West: {
    id: '02',
    images: ['/facing1.webp', '/facing3.webp', '/facing2.webp'],
  },
};

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState<'East' | 'West'>('East');
  const currentPlan = PLAN_CONFIG[activeTab];

  return (
    <section
      id="plans"
      className="relative overflow-hidden z-20 bg-ira-bg bg-[url('/facing-bg.png')] bg-cover bg-center rounded-none lg:rounded-t-[50px] mt-0 lg:-mt-[35px]"
    >
      <div className="py-[40px] lg:py-[71.675px] xl:py-[100.8px]">
        <div className="mx-auto px-4 lg:px-[12px] lg:max-w-[1024px] xl:max-w-[1320px]">

          {/* ================= UPPER SECTION ================= */}
          {/* Flex direction changes to column on mobile/tablet, row on laptop */}
          <div className="flex flex-col xl:flex-row items-center relative min-h-auto xl:min-h-[685px]">

            {/* LEFT IMAGE COLUMN */}
            <div className="w-full xl:w-5/12 mb-12 xl:mb-0 flex justify-center xl:justify-start">
              <div 
                className="relative shadow-2xl overflow-visible 
                           w-full max-w-[525.987px] aspect-[526/589]
                           xl:w-[525.987px] xl:h-[588.763px] 
                           xl:m-0 xl:p-0"
              >
                {/* TOP-RIGHT DECOR: Only visible on laptop to maintain layout integrity */}
                <div 
                  className="hidden xl:block absolute pointer-events-none z-30"
                  style={{
                    width: '40.975px',
                    height: '42px',
                    top: '-42px',
                    right: '0px',
                    left: '525.987px'
                  }}
                >
                  <Image src="/rect-line.png" alt="top decor" fill className="object-contain" sizes="41px" />
                </div>

                {/* BOTTOM-RIGHT DECOR: Only visible on laptop */}
                <div 
                  className="hidden xl:block absolute pointer-events-none z-30"
                  style={{
                    width: '40.975px',
                    height: '42px',
                    bottom: '-42px',
                    right: '0px',
                    left: '525.987px'
                  }}
                >
                  <Image src="/rect-line2.png" alt="bottom decor" fill className="object-contain" sizes="41px" />
                </div>

                <Image
                  src="/exude.webp"
                  alt="Exude Luxury"
                  fill
                  className="object-cover rounded-[20px] xl:rounded-none"
                  sizes="(max-width: 1280px) 100vw, 526px"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT COLUMN: Pixel-locked on XL, fluid on smaller devices */}
            <div 
              className="w-full xl:w-[758px] xl:h-[685px] relative 
                         xl:mt-[-48.125px] xl:mb-[-48.12px] xl:ml-auto
                         flex flex-col justify-center text-center xl:text-left"
            >
              {/* PIXEL-PERFECT FRAME: Only visible on laptop */}
              <div
                className="
                  hidden xl:block
                  absolute
                  top-[146.375px]    
                  bottom-[66.387px]  
                  left-[277.200px]   
                  right-[30.913px]
                  w-[461.888px]      
                  h-[376px]          
                  pointer-events-none
                  z-0
                "
              >
                <Image src="/recangular-box.png" alt="frame background" fill className="object-fill" />
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 flex flex-col items-center xl:items-start h-full justify-center">
                <h1 className="w-full xl:max-w-[758px] text-[28px] md:text-[40px] xl:text-[50px] font-gotham font-light uppercase tracking-normal text-primary leading-[1.2] px-4 py-6 xl:pt-[189.5px] xl:pl-[189.5px] xl:pr-[37.9px] xl:pb-0">
                  Where Every Square Foot Defines Luxury Living
                </h1>

                <p className="font-light leading-[1.3125] text-[#212529]
                              w-full px-4 mb-8
                              xl:w-[568.500px] xl:h-[42px] 
                              xl:pl-[189.500px] xl:pb-[189.500px] 
                              xl:mb-[16px] xl:box-content">
                  Explore our 4 BHK villas featuring smart home automation, spacious layouts, and premium finishes.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden xl:block w-full h-[60px]"></div>

          {/* LOWER SECTION TABS */}
          <div className="flex justify-center gap-3 mb-[30px] md:mb-[50px] flex-wrap px-4">
            <button
              onClick={() => setActiveTab('East')}
              className={`h-[44px] min-w-[150px] md:min-w-[169.29px] px-[20px] py-[10px] rounded-full text-sm md:text-base transition-all ${
                activeTab === 'East' ? 'bg-[#93aa28] text-white shadow-md' : 'bg-white text-[#93aa28] border border-[#93aa28]'
              }`}
            >
              East Facing Villa
            </button>

            <button
              onClick={() => setActiveTab('West')}
              className={`h-[44px] min-w-[150px] md:min-w-[175.31px] px-[20px] py-[10px] rounded-full text-sm md:text-base transition-all ${
                activeTab === 'West' ? 'bg-[#93aa28] text-white shadow-md' : 'bg-white text-[#93aa28] border border-[#93aa28]'
              }`}
            >
              West Facing Villa
            </button>
          </div>

          {/* FLOOR PLAN CARD: Responsive grid for images */}
          <div className="w-full xl:w-[1296px] mx-auto px-4 xl:px-0">
            <div className="bg-white rounded-[20px] xl:rounded-[12px] p-6 md:p-[51.837px] shadow-lg border border-gray-100">
              <h2 className="font-gotham font-light text-[#8D6554] leading-none text-[40px] md:text-[60px] mb-2">
                {currentPlan.id}
              </h2>

              <h5 className="font-medium text-primary text-[18px] md:text-[23px] mb-6">
                {activeTab} Facing Villa
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 border-[0.8px] border-solid border-[#8D6554] p-4 md:p-[35.763px]">
                {currentPlan.images.map((src, i) => (
                  <div key={`${activeTab}-${i}`} className="w-full flex justify-center">
                    <Image 
                      src={src} 
                      alt={`${activeTab} Plan`} 
                      width={400} 
                      height={300} 
                      className="w-full h-auto object-contain rounded-[12px] " 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}