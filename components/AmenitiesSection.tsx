"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

const images = [
  "/profile.webp",
  "/profile2.webp",
  "/profile3.webp",
  "/profile4.webp",
  "/profile5.webp",
];

const AMENITIES = [
  { icon: "/one.png", label: "Clubhouse\n(25,000+ Sft,\n4 Levels)" },
  { icon: "/two.png", label: "Indoor Games\nEnclave Badminton\nCourt" },
  { icon: "/three.png", label: "Gym" },
  { icon: "/four.png", label: "Creche" },
  { icon: "/five.png", label: "Yoga & Meditation\nHall" },
  { icon: "/six.png", label: "Banquet Hall" },
  { icon: "/seven.png", label: "Guest Rooms" },
  { icon: "/eight.png", label: "Entrance & \n Exit Plaza" },
  { icon: "/nine.png", label: "Multipurpose \n Hall" },
  { icon: "/ten.png", label: "Provision for\n Grocery store" },
  { icon: "/eleven.png", label: "Swimming Pool" },
  { icon: "/twelve.png", label: "Skating Rink" },
  { icon: "/thirteen.png", label: "Seating" },
  { icon: "/fourteen.png", label: "Amphi-theatre" },
  { icon: "/fifteen.png", label: "Multipurpose \n Hall" },
  { icon: "/sixteen.png", label: "Pet Walking\n Zone" },
  { icon: "/seventeen.png", label: "Cricket Net" },
  { icon: "/eighteen.png", label: "Pathway" },
];

export default function AmenitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const perView = 6;
  const [amenityPage, setAmenityPage] = useState(0);

  const totalPages = useMemo(() => {
    return Math.ceil(AMENITIES.length / perView);
  }, [perView]);

  const visibleAmenities = useMemo(() => {
    const start = amenityPage * perView;
    return AMENITIES.slice(start, start + perView);
  }, [amenityPage, perView]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const getCardStyle = (index: number) => {
    const total = images.length;
    if (index === activeIndex) {
      return "z-30 opacity-100 scale-100 translate-x-0 rotate-0 shadow-2xl";
    } else if (index === (activeIndex + 1) % total || index === (activeIndex - 1 + total) % total) {
      return "z-20 opacity-0 scale-95 translate-x-0 rotate-0";
    } else {
      return "z-10 opacity-0 scale-90";
    }
  };

  const nextAmenities = () => setAmenityPage((p) => (p + 1) % totalPages);
  const prevAmenities = () =>
    setAmenityPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section
      id="amenities"
      className="relative bg-white overflow-hidden mx-auto w-full max-w-[1440px] py-[40px] md:py-[80px]"
    >
      <div className="container mx-auto px-6 lg:px-0 lg:w-[91.66%] lg:max-w-none">
        
        {/* --- TOP SECTION: CAROUSEL & TEXT --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          
          {/* IMAGE COLUMN */}
          <div className="relative w-full max-w-[440px] lg:max-w-none lg:w-[480px] xl:w-[520px] aspect-[440/320] flex-shrink-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out rounded-[20px] overflow-hidden bg-gray-100 shadow-xl ${getCardStyle(index)}`}
                >
                  <Image
                    src={src}
                    alt={`Amenity ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority={index === activeIndex}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Buttons (White Arrows with Drop Shadow) */}
            <button
              onClick={prevSlide}
              className="absolute left-[5%] top-1/2 -translate-y-1/2 z-[60] w-[12%] aspect-square bg-transparent rounded-full flex items-center justify-center active:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-white text-3xl lg:text-5xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[60] w-[12%] aspect-square bg-transparent rounded-full flex items-center justify-center active:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-white text-3xl lg:text-5xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">›</span>
            </button>
          </div>

          {/* TEXT CONTENT */}
          <div className="w-full lg:max-w-[480px] text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[28px] lg:text-[clamp(28px,2.5vw,42px)] font-gotham font-normal text-primary leading-tight tracking-tight mb-4 uppercase">
              Amenities Abundant <br className="hidden md:block" />
              and Spaces Prolific
            </h2>
            <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed font-normal font-gotham">
              <p>From a 4-level exclusive clubhouse to landscaped</p> 
              <p>gardens, The offers amenities that make every </p>
             <p> moment rewarding experience.Unleash your energies</p>
             <p> and live life to the fullest</p>
            </p>
          </div>
        </div>

        {/* --- BOTTOM ICON SCROLLER --- */}
        <div className="mt-12 md:mt-24 w-full">
          <div className="relative w-full">
            
            {/* Left arrow (Transparent with Green Border/Text) - MATCHES image_a45d7c.png */}
            <button
              type="button"
              onClick={prevAmenities}
              className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-[34px] h-[34px] rounded-full border border-[#93AA28] bg-white text-[#93AA28] flex items-center justify-center transition active:scale-95 hover:bg-[#93AA28] hover:text-white"
              aria-label="Previous amenities"
            >
              <span className="text-2xl font-light leading-none relative -left-[1px]">‹</span>
            </button>

            {/* Responsive Icons Grid */}
            <div className="mx-[30px] md:mx-[52px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-start">
                {visibleAmenities.map((a, idx) => (
                  <div key={`${amenityPage}-${idx}`} className="flex flex-col items-center text-center">
                    <div className="relative w-[50px] h-[50px] md:w-[62px] md:h-[62px]">
                      <Image src={a.icon} alt={a.label} fill className="object-contain" />
                    </div>
                    <p className="mt-3 text-[11px] md:text-[12px] leading-[1.2] text-[#2C2C2C] font-gotham whitespace-pre-line">
                      {a.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow (Transparent with Green Border/Text) - MATCHES image_a45d7c.png */}
            <button
              type="button"
              onClick={nextAmenities}
              className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-[34px] h-[34px] rounded-full border border-[#93AA28] bg-white text-[#93AA28] flex items-center justify-center transition active:scale-95 hover:bg-[#93AA28] hover:text-white"
              aria-label="Next amenities"
            >
              <span className="text-2xl font-light leading-none relative left-[1px]">›</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}