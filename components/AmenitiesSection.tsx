"use client";

import React, { useMemo, useRef, useState } from "react";
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
  { icon: "/eight.png", label: "Entrance &\n Exit Plaza" },
  { icon: "/nine.png", label: "Multipurpose\n Hall" },
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
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);

  const totalPages = useMemo(() => Math.ceil(AMENITIES.length / perView), [perView]);

  const visibleAmenities = useMemo(() => {
    const start = amenityPage * perView;
    return AMENITIES.slice(start, start + perView);
  }, [amenityPage, perView]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const getCardStyle = (index: number) => {
    const total = images.length;
    if (index === activeIndex) return "z-30 opacity-100 scale-100 translate-x-0 rotate-0 shadow-2xl";
    if (index === (activeIndex + 1) % total || index === (activeIndex - 1 + total) % total)
      return "z-20 opacity-0 scale-95 translate-x-0 rotate-0";
    return "z-10 opacity-0 scale-90";
  };

  const nextAmenitiesDesktop = () => setAmenityPage((p) => (p + 1) % totalPages);
  const prevAmenitiesDesktop = () => setAmenityPage((p) => (p - 1 + totalPages) % totalPages);

  const scrollMobile = (direction: "left" | "right") => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "right" ? 260 : -260, behavior: "smooth" });
  };

  return (
<section
  id="amenities"
  className="relative bg-white overflow-hidden w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-8 md:py-16">
          <div className="container mx-auto px-4 lg:px-0 lg:w-[91.66%] lg:max-w-none">
        {/* ✅ PUSH LEFT & RIGHT (DESKTOP) */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-20">

          {/* ✅ IMAGE COLUMN FIXED WIDTH */}
<div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:w-[520px] xl:w-[520px] aspect-[440/320] flex-shrink-0 flex items-center justify-center">
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
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority={index === activeIndex}
                  />
                </div>
              ))}
            </div>

            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 sm:w-12 sm:h-12 lg:w-[12%] lg:h-auto lg:aspect-square flex items-center justify-center cursor-pointer"
>
              <span className="text-white text-3xl lg:text-5xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">‹</span>
            </button>

            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 sm:w-12 sm:h-12 lg:w-[12%] lg:h-auto lg:aspect-square flex items-center justify-center cursor-pointer"
>
              <span className="text-white text-3xl lg:text-5xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">›</span>
            </button>
          </div>

          {/* ✅ RIGHT TEXT COLUMN WIDER */}
<div className="w-full lg:max-w-full lg:ml-[80px] lg:text-left flex flex-col justify-center text-center lg:text-left">
            {/* ✅ EXACT 2 LINES + 60PX */}
            <h2
              className="
                font-gotham font-normal text-primary uppercase
                leading-[1] tracking-normal mb-4
                text-[26px] md:text-[36px] lg:text-[60px]
                max-w-[777px]
              "
            >
              AMENITIES ABUNDANT <br />
              AND SPACES PROLIFIC
            </h2>

            <div className="text-black text-[14px] md:text-[18px] leading-relaxed font-normal font-gotham px-2 lg:px-0">
              <p className="block min-[1440px]:hidden">
                From a 4-level exclusive clubhouse to landscaped gardens, The Square offers amenities that make every moment rewarding experience.
                Unleash your energies and live life to the fullest
              </p>

              <div className="hidden min-[1440px]:block">
                <p>From a 4-level exclusive clubhouse to landscaped</p>
                <p>gardens, The Square offers amenities that make every </p>
                <p>moment rewarding experience. Unleash your energies</p>
                <p>and live life to the fullest</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM ICON SCROLLER (UNCHANGED) --- */}
        <div className="mt-8 md:mt-14 w-full">
          <div className="relative w-full">
            <button
              type="button"
              onClick={() => {
                scrollMobile("left");
                prevAmenitiesDesktop();
              }}
              className="absolute -left-1 md:left-0 top-[25px] md:top-[31px] z-20 w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full border border-[#93AA28] bg-white text-[#93AA28] flex items-center justify-center transition active:scale-95 hover:bg-[#93AA28] hover:text-white"
              aria-label="Previous amenities"
            >
              <span className="text-xl md:text-2xl font-light leading-none relative -left-[1px]">‹</span>
            </button>

            <div className="mx-[10px] md:mx-[30px]">
              <div ref={mobileScrollRef} className="lg:hidden overflow-x-auto scroll-smooth no-scrollbar">
                <div className="flex gap-4 md:gap-6 items-start px-1 pb-4">
                  {AMENITIES.map((a, idx) => (
                    <div key={idx} className="flex-shrink-0 w-[90px] md:w-[130px] flex flex-col items-center text-center">
                      <div className="relative w-[45px] h-[45px] md:w-[62px] md:h-[62px]">
                        <Image src={a.icon} alt={a.label} fill className="object-contain" />
                      </div>
                      <p className="mt-3 text-[11px] md:text-[13px] leading-[1.2] text-[#2C2C2C] font-gotham whitespace-pre-line">
                        {a.label.trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-6 gap-0 items-start">
                  {visibleAmenities.map((a, idx) => (
                    <div key={`${amenityPage}-${idx}`} className="flex flex-col items-center text-center min-h-[115px] min-[1440px]:h-[180px] min-[1440px]:justify-start">
                      <div className="relative w-[50px] h-[50px] md:w-[62px] md:h-[62px] flex-shrink-0">
                        <Image src={a.icon} alt={a.label} fill className="object-contain" />
                      </div>
                      <p className="mt-2 text-[12px] xl:text-[14px] leading-[1.2] text-[#2C2C2C] font-gotham whitespace-pre-line min-[1440px]:text-[20px] min-[1440px]:leading-[20px] min-[1440px]:w-[149px] min-[1440px]:h-[78px] min-[1440px]:mt-1 min-[1440px]:flex min-[1440px]:items-center min-[1440px]:justify-center">
                        {a.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                scrollMobile("right");
                nextAmenitiesDesktop();
              }}
              className="absolute -right-1 md:right-0 top-[25px] md:top-[31px] z-20 w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full border border-[#93AA28] bg-white text-[#93AA28] flex items-center justify-center transition active:scale-95 hover:bg-[#93AA28] hover:text-white"
              aria-label="Next amenities"
            >
              <span className="text-xl md:text-2xl font-light leading-none relative left-[1px]">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
