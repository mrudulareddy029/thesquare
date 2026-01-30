'use client';

import React from 'react';
import Image from 'next/image';

/* ================= STATIC DATA ================= */
const EDUCATION = [
  { name: "Sri Gayatri Jr College", time: "04 Mins" },
  { name: "Narayana Jr College", time: "08 Mins" },
  { name: "Sloka Intl. School", time: "11 Mins" },
  { name: "TISS University", time: "15 Mins" },
  { name: "Delhi Public School, Nadergul", time: "17 Mins" },
  { name: "Aga Khan Academy", time: "20 Mins" },
  { name: "20 Engg. Colleges nearby", time: "20 Mins" },
  { name: "Manchester Global School", time: "25 Mins" },
  { name: "GMR School of Business", time: "27 Mins" },
  { name: "GMR Chinmaya Vidyalaya", time: "30 Mins" },
];

const WORKPLACES = [
  { name: "Adibatla Aerospace SEZ", time: "08 Mins" },
  { name: "Foxconn Facility, Kongara Kalan", time: "08 Mins" },
  { name: "TCS Campus, Adibatla", time: "10 Mins" },
  { name: "Tata Aerospace", time: "10 Mins" },
  { name: "Tata Sikorsky", time: "13 Mins" },
  { name: "Fab City", time: "15 Mins" },
  { name: "RCI / ARCI", time: "20 Mins" },
  { name: "Hardware Park", time: "20 Mins" },
  { name: "Rajiv Gandhi Intl. Airport", time: "25 Mins" },
  { name: "Proposed Pharma City", time: "35 Mins" },
];

const CONNECTIVITY = [
  { name: "Bonguluru ORR Exit No 12", time: "10 Mins" },
  { name: "ORR Exit No 14", time: "11 Mins" },
  { name: "Tukkuguda", time: "12 Mins" },
  { name: "Ibrahimpatnam", time: "18 Mins" },
  { name: "Srisailam Highway", time: "19 Mins" },
  { name: "LB Nagar Circle", time: "30 Mins" },
  { name: "DRDO Apollo Hospital", time: "35 Mins" },
  { name: "Gachibowli / Financial District", time: "50 Mins" },
];

/* ================= MAIN COMPONENT ================= */
export default function Location() {
  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1: MAP */}
      <section className="relative w-full py-10 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/location_background1.webp" 
            alt="Pattern" 
            fill
            priority
            className="object-cover pointer-events-none"
          />
        </div>

        <div className="container mx-auto relative z-10 px-4 lg:max-w-[1320px]">
          <div className="w-full flex flex-col items-center lg:h-[770px]">
            {/* Fluid container on mobile, fixed 1116x714 on lg+ */}
            <div className="w-full relative bg-white/5 backdrop-blur-sm mt-8 md:mt-12 lg:mt-14 p-3 md:p-8 lg:p-[60px] lg:w-[1116px] lg:h-[714px]">
              {/* Decorative Corners - Laptop Only */}
              <div className="hidden lg:block absolute top-0 left-0 w-24 h-24 border-t-[1.6px] border-l-[1.6px] border-black z-20" />
              <div className="hidden lg:block absolute bottom-0 right-0 w-24 h-24 border-b-[1.6px] border-r-[1.6px] border-black z-20" />

              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full">
                <Image 
                  src="/location.webp" 
                  alt="Location Map" 
                  fill
                  className="object-contain lg:object-fill"
                  sizes="(max-width: 1024px) 100vw, 1116px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILS */}
      <section className="relative w-full text-ira-dark font-gotham overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/location_background2.webp" 
            alt="Pattern" 
            fill
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-white/40 z-0" />

        <div className="container mx-auto relative z-10 px-4 lg:max-w-[1320px]">
          <div className="w-full flex flex-col items-center pt-10 md:pt-12 lg:pt-14 pb-16 md:pb-24 lg:pb-40">
            
            <div className="text-center w-full lg:w-[1116px]">
              <h2 className="text-primary font-light uppercase text-2xl md:text-3xl lg:text-[42px] leading-tight mb-4 lg:mb-2">
                Prime Location
              </h2>
              <p className="text-ira-dark font-light mx-auto text-sm md:text-base lg:text-[15px] leading-relaxed max-w-[825px] mb-4">
                Imagine living in a global address at Hyderabad’s South, as a bold new frontier is expanding fast with enviable infrastructure.
                Adibatla is becoming an eminently desirable place to settle down.
              </p>
            </div>

            {/* Responsive Grid: Stacks on small, 2-cols on medium, 3-cols on large */}
            <div className="w-full mt-8 md:mt-12 lg:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-[24px]">
                <LocationCard title="EDUCATIONAL INSTITUTIONS" icon="/education.webp" items={EDUCATION} />
                <LocationCard title="WORK PLACES" icon="/workPlace.webp" items={WORKPLACES} />
                <LocationCard title="CONNECTIVITY" icon="/connectivity.webp" items={CONNECTIVITY} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= SUB-COMPONENT ================= */
function LocationCard({ title, icon, items }: { title: string, icon: string, items: { name: string, time: string }[] }) {
  return (
    <div className="bg-white shadow-[0px_4px_10px_0px_rgba(89,89,89,0.25)] flex flex-col items-center w-full min-h-[424px] py-8 md:py-6 lg:py-3 px-6 lg:px-[25px]">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-[98px] lg:h-[97px]">
          <Image src={icon} alt={title} fill className="object-contain" sizes="(max-width: 1024px) 80px, 98px" />
        </div>
        <h3 className="w-full text-base md:text-lg lg:text-[20px] font-light text-[#8D6554] text-center uppercase tracking-wide p-4 lg:h-[72px] flex items-center justify-center">
          {title}
        </h3>
      </div>
      
      <ul className="w-full space-y-2 md:space-y-1.5 lg:space-y-1 mt-4 md:mt-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center w-full gap-4 h-auto lg:h-[21px]">
            <span className="text-ira-dark text-xs sm:text-sm lg:text-[13px] font-light truncate">
              {item.name}
            </span>
            <span className="text-primary text-xs sm:text-sm lg:text-[13px] font-light whitespace-nowrap">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}