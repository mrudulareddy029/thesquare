"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useContactModal } from "@/components/ContactProvider";

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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { openModal } = useContactModal();

  const handleToggle = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* SECTION 1: MAP */}
      <section className="relative w-full py-8 md:py-12 lg:py-0 overflow-hidden">
        <div className="container mx-auto relative z-10 px-4 lg:max-w-[1320px]">
          <div className="w-full flex flex-col items-center lg:h-[770px]">
            <div className="w-full relative bg-white/5 backdrop-blur-sm mt-4 md:mt-12 lg:mt-14 p-2 md:p-8 lg:p-[60px] lg:w-[1116px] lg:h-[714px]">
              <div className="hidden md:block absolute top-0 left-0 w-24 h-24 border-t-[1.6px] border-l-[1.6px] border-black z-20" />
              <div className="hidden md:block absolute bottom-0 right-0 w-24 h-24 border-b-[1.6px] border-r-[1.6px] border-black z-20" />
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full -translate-y-4 lg:-translate-y-6">
  <Image
    src="/location.webp"
    alt="Location Map"
    fill
    className="object-contain lg:object-fill"
    sizes="(max-width: 768px) 100vw, 1116px"
    priority
  />
</div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRIME LOCATION */}
      <section
  className="relative w-full text-ira-dark font-gotham overflow-visible pt-6 md:pt-[60px] lg:pt-[80px] z-20"
      >
        {/* Responsive Background Logic */}
        <div className="absolute top-[20px] left-0 right-0 lg:right-80 bottom-0 z-0">
          <Image
            src="/green.png"
            alt="Geometric background"
            fill
            className="object-cover object-bottom translate-y-10 lg:translate-y-20 pointer-events-none"
          />
        </div>

        {/* Responsive Watermark Logic */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-visible">
  <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 
                  md:top-[-160px] md:left-[70px] md:translate-x-0 
                  w-[100vw] md:w-[1400px] aspect-square md:h-[1400px]">
    <Image
      src="/map.png"
      alt="Map watermark"
      fill
      className="opacity-[0.04] object-contain"
    />
  </div>
</div>


        <div className="absolute inset-0 z-[2] bg-white/5" />

        <div className="container mx-auto relative z-10 px-4 lg:max-w-[1320px]">
          <div className="w-full flex flex-col items-center pt-8 md:pt-16 pb-12 md:pb-32">
            <div className="text-center w-full lg:w-[1116px] px-2 md:px-0">
              <h2 className="text-[#94aa29] font-light uppercase text-2xl md:text-3xl lg:text-[42px] leading-tight mb-4 tracking-wide">
                Prime Location
              </h2>
              <p className="text-ira-dark font-light mx-auto text-sm md:text-base lg:text-[15px] leading-relaxed max-w-[825px] mb-6">
                Imagine living in a global address at Hyderabad’s South, as a
                bold new frontier is expanding fast with enviable
                infrastructure. Adibatla is becoming an eminently desirable
                place to settle down.
              </p>
            </div>

            <div className="w-full mt-6 md:mt-10 px-0 lg:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                <LocationCard
                  title="EDUCATIONAL INSTITUTIONS"
                  icon="/education.webp"
                  items={EDUCATION}
                  open={activeCard === 0}
                  onToggle={() => handleToggle(0)}
                />
                <LocationCard
                  title="WORK PLACES"
                  icon="/workPlace.webp"
                  items={WORKPLACES}
                  open={activeCard === 1}
                  onToggle={() => handleToggle(1)}
                />
                <LocationCard
                  title="CONNECTIVITY"
                  icon="/connectivity.webp"
                  items={CONNECTIVITY}
                  open={activeCard === 2}
                  onToggle={() => handleToggle(2)}
                />
              </div>

              <div className="w-full flex justify-center mt-12 md:mt-16">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-3 bg-[#94aa29] text-white rounded-full h-[52px] px-8 text-base font-medium shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all active:scale-95"
                >
                  Schedule a Site Visit
                  <svg
                    viewBox="0 0 512 512"
                    className="w-[18px] h-[18px]"
                    fill="currentColor"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= CONTROLLED LOCATION CARD ================= */
function LocationCard({
  title,
  icon,
  items,
  open,
  onToggle,
}: {
  title: string;
  icon: string;
  items: { name: string; time: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-md w-full h-fit border border-gray-100 rounded-sm overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 lg:px-6 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 lg:gap-4 overflow-hidden">
          <div className="relative w-10 h-10 lg:w-[60px] lg:h-[60px] flex-shrink-0">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <h3 className="text-[14px] lg:text-[18px] font-medium text-[#8D6554] uppercase text-left leading-tight">
            {title}
          </h3>
        </div>
        <span
          className={`w-7 h-7 lg:w-[30px] lg:h-[30px] rounded-full bg-[#94aa29] text-white flex-shrink-0 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="p-6 border-t border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="space-y-3 list-none">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-start gap-4 border-b border-gray-50 pb-1 last:border-0 last:pb-0"
              >
                <span className="text-[13px] text-gray-700 leading-tight">
                  {item.name}
                </span>
                <span className="text-[#94aa29] text-[13px] font-medium whitespace-nowrap">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
