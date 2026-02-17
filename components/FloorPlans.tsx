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
  
  // STATE: Track which image is currently enlarged (null means lightbox is closed)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentPlan = PLAN_CONFIG[activeTab];

  // HELPER: Close the lightbox
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section
      id="plans"
      className="relative overflow-hidden z-20 bg-ira-bg bg-[url('/facing-bg.png')] bg-cover bg-center rounded-none lg:rounded-t-[50px] mt-0 lg:-mt-[35px]"
    >
      <div className="py-[32px] lg:py-[56px] xl:py-[72px]">
        <div className="w-full px-4 md:px-10 lg:px-16 xl:px-20 mx-auto">

          {/* ================= UPPER SECTION ================= */}
          <div className="flex flex-col xl:flex-row items-center relative ">

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

          <div className="hidden xl:block w-full h-[55px]"></div>

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
          <div className="w-full  mx-auto px-4 ">
            <div className="bg-white rounded-none p-6 md:p-[51.837px] shadow-lg border border-gray-100">
              
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

              {/* IMAGES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 border-[0.8px] border-solid border-[#8D6554] p-4 md:p-[35.763px] rounded-none">
                {currentPlan.images.map((src, i) => (
                  <div 
                    key={`${activeTab}-${i}`} 
                    className="w-full relative h-[300px] md:h-[400px] lg:h-[480px] cursor-pointer group"
                    onClick={() => setSelectedImage(src)} // Sets the image to be enlarged
                  >
                    <Image 
                      src={src} 
                      alt={`${activeTab} Plan`} 
                      fill 
                      className="object-contain object-bottom rounded-[12px] transition-transform duration-300 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[12px]">
                         <span className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Click to Zoom</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX / MODAL ================= */}
      {/* Renders only when an image is selected */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox} // Click background to close
        >
          {/* Close Button - Top Right */}
          <button 
            className="absolute top-6 right-6 z-[10000] text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all border border-white/20"
            onClick={(e) => {
              e.stopPropagation(); // Prevents double-firing with background click
              closeLightbox();
            }}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Enlarged Image Container */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <Image
              src={selectedImage}
              alt="Enlarged Floor Plan"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}