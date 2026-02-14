'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const PLAN_CONFIG = {
  East: {
    id: '01',
    title: 'EAST FACING VILLA',
    details: [
      { label: 'Plot sizes 267', highlight: 'Sq.Yds. to 330 Sq.Yds.' },
      { label: 'Provision for', highlight: 'Elevator' },
      { label: 'Built-up area of', highlight: '3700 Sft' },
      { label: '4-BHK Luxury', highlight: 'Duplex Villas + Terrace Garden' },
    ],
    images: ['/facing1.png', '/facing2.png', '/facing3.png'],
  },
  West: {
    id: '02',
    title: 'WEST FACING VILLA',
    details: [
      { label: 'Plot sizes ', highlight: ' 267 Sq.Yds. to 330 Sq.Yds.' },
      { label: 'Provision for', highlight: 'Elevator' },
      { label: 'Built-up area of', highlight: '3700 Sft' },
      { label: '4-BHK Luxury', highlight: 'Duplex Villas + Terrace Garden' },
    ],
    images: ['/facing4.png', '/facing5.png', '/facing6.png'],
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
          <div className="flex flex-col xl:flex-row items-center relative min-h-auto xl:min-h-[685px]">

            {/* LEFT IMAGE COLUMN */}
            <div className="w-full xl:w-5/12 mb-12 xl:mb-0 flex justify-center xl:justify-start">
              <div 
                className="relative shadow-2xl overflow-visible 
                           w-full max-w-[525.987px] aspect-[526/589]
                           xl:w-[525.987px] xl:h-[588.763px] 
                           xl:m-0 xl:p-0"
              >
                <div className="hidden xl:block absolute pointer-events-none z-30" style={{ width: '40.975px', height: '42px', top: '-42px', right: '0px', left: '525.987px' }}>
                  <Image src="/rect-line.png" alt="top decor" fill className="object-contain" sizes="41px" />
                </div>

                <div className="hidden xl:block absolute pointer-events-none z-30" style={{ width: '40.975px', height: '42px', bottom: '-42px', right: '0px', left: '525.987px' }}>
                  <Image src="/rect-line2.png" alt="bottom decor" fill className="object-contain" sizes="41px" />
                </div>

                <Image
                  src="/floor.png"
                  alt="Exude Luxury"
                  fill
                  className="object-cover rounded-[20px] xl:rounded-none"
                  sizes="(max-width: 1280px) 100vw, 526px"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT COLUMN */}
            <div className="w-full xl:w-[758px] xl:h-[685px] relative xl:mt-[-48.125px] xl:mb-[-48.12px] xl:ml-auto flex flex-col justify-center text-center xl:text-left">
              <div className="hidden xl:block absolute top-[146.375px] bottom-[66.387px] left-[277.200px] right-[30.913px] w-[461.888px] h-[376px] pointer-events-none z-0">
                <Image src="/recangular-box.png" alt="frame background" fill className="object-fill" />
              </div>

              <div className="relative z-10 flex flex-col items-center xl:items-start h-full justify-center">
                <h1 className="w-full xl:max-w-[758px] text-[28px] md:text-[40px] xl:text-[50px] font-gotham font-light uppercase tracking-normal text-primary leading-[1.2] px-4 py-6 xl:pt-[189.5px] xl:pl-[189.5px] xl:pr-[37.9px] xl:pb-[10px]">
                  Where Every Square Foot exudes Luxury 
                </h1>

                <div className="font-normal leading-[1.3125] text-[#212529] w-full px-4 mb-8 xl:w-[568.500px] xl:h-[42px] xl:pl-[189.500px] xl:pb-[189.500px] xl:mb-[16px] xl:box-content">
                <p>Step into east and west facing duplex villas that display the finest</p>
                <p>space planning, where a symphony of indoors and outdoors charms </p>
                <p>you with thoughtful additions and meticulous craftsmanship."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block w-full h-[60px]"></div>

          {/* LOWER SECTION TABS */}
          <div className="flex justify-start gap-3 mb-[30px] md:mb-[50px] flex-wrap px-4">
            <button
              onClick={() => setActiveTab('East')}
              className={`h-[44px] min-w-[150px] md:min-w-[169.29px] px-[20px] py-[10px] rounded-full text-sm md:text-base uppercase transition-all ${
                activeTab === 'East'
                  ? 'bg-[#93aa28] text-white shadow-md'
                  : 'bg-white text-[#93aa28] border border-[#93aa28]'
              }`}
            >
              East Facing Villa
            </button>

            <button
              onClick={() => setActiveTab('West')}
              className={`h-[44px] min-w-[150px] md:min-w-[175.31px] px-[20px] py-[10px] rounded-full text-sm md:text-base uppercase transition-all ${
                activeTab === 'West'
                  ? 'bg-[#93aa28] text-white shadow-md'
                  : 'bg-white text-[#93aa28] border border-[#93aa28]'
              }`}
            >
              West Facing Villa
            </button>
          </div>

          {/* ================= FLOOR PLAN CARD ================= */}
          <div className="w-full xl:w-[1296px] mx-auto px-4 xl:px-0">
            <div className="bg-white rounded-[20px] xl:rounded-[12px] p-6 md:p-[51.837px] shadow-lg border border-gray-100">
              
              {/* HEADER SECTION */}
              <div className={`flex flex-col ${activeTab === 'West' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-end justify-between gap-8 mb-8 border-b border-gray-100 pb-8 lg:border-none lg:pb-0`}>
                
                {/* Heading 01 / 02 */}
                <div className={`${activeTab === 'West' ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h2 className="font-gotham font-normal text-[#8D6554] leading-none text-[60px] md:text-[80px]">
                    {currentPlan.id}
                  </h2>
                  <h5 className="font-bold text-[#7A8F3D] text-[20px] md:text-[24px] tracking-wide uppercase mt-[-5px] md:mt-[-10px]">
                    {currentPlan.title}
                  </h5>
                </div>

                {/* Details List */}
                <div className="w-full lg:w-auto">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-3">
                    {currentPlan.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[15px] md:text-[16px] text-gray-700 font-gotham">
                        <span className="text-[#2C2C2C] mt-2 w-1.5 h-1.5 rounded-full bg-[#2C2C2C] flex-shrink-0" />
                        <span>
                          {item.label} <span className="text-[#7A8F3D] font-medium">{item.highlight}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGES GRID - UPDATED FOR ALIGNMENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 border-[0.8px] border-solid border-[#8D6554] p-4 md:p-[35.763px] rounded-xl">
                {currentPlan.images.map((src, i) => (
                  // FIX: Set a fixed height container so all 3 items align perfectly
                  <div key={`${activeTab}-${i}`} className="w-full relative h-[300px] md:h-[400px] lg:h-[480px]">
                    <Image 
                      src={src} 
                      alt={`${activeTab} Plan`} 
                      fill // Uses parent container height
                      // object-contain ensures the image fits in the box without being cropped
                      // object-bottom ensures they align at the 'floor' level
                      className="object-contain object-bottom rounded-[12px]" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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