"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { useContactModal } from "@/components/ContactProvider";

const slides = [
  {
    src: "/slider1.png",
    alt: "Exterior view of The Square luxury 4 BHK villas in Adibatla",
  },
  {
    src: "/slider2.webp",
    alt: "Modern interior design of luxury duplex villa",
  },
];

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      id="slider-section"
      className="relative w-screen left-1/2 -translate-x-1/2 group overflow-hidden h-screen"
    >
      {/* BACKGROUND SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((s, index) => (
          <SwiperSlide key={index} className="!h-full">
            <div className="relative w-full h-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Gradients for text readability */}
              <div className="absolute top-0 left-0 w-full h-[150px] md:h-[250px] bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT OVERLAY CONTAINER */}
      <div
        className="
          absolute z-20 inset-0
          flex flex-col
          justify-start md:justify-center
          /* ADJUSTED lg:pt-56 to lg:pt-32 to prevent bottom cutting */
          pt-20 sm:pt-24 md:pt-48 lg:pt-32 min-[1440px]:pt-64
          px-6 sm:px-12 md:px-20
          lg:px-[120px] xl:px-[180px] min-[1440px]:px-[191px]
          pointer-events-none
        "
      >
        {/* ADJUSTED lg:mt-40 to lg:mt-20 for better vertical fit at 1024px */}
        <div className="pointer-events-auto w-full max-w-[1440px] mt-24 md:mt-32 lg:mt-20 min-[1440px]:mt-48">
          {/* TS RERA */}
          <span
            className="
              block text-white/90 font-gotham font-light tracking-widest drop-shadow-md mb-2
              text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] 2xl:text-[22px]
            "
          >
            TS RERA: P02400005775
          </span>

          {/* HEADING */}
          <h1
            className="
              text-white font-gotham uppercase drop-shadow-lg text-start
              font-[300] tracking-normal
              text-[26px] leading-[1.2]
              sm:text-[34px]
              md:text-[44px]
              lg:text-[54px]
              min-[1440px]:text-[64px]
              mb-4 max-w-[95%] sm:max-w-[85%] lg:max-w-[1100px] 2xl:max-w-[1299px]
            "
          >
            Discover Luxury 4 BHK Villas in <br className="hidden md:block" />
            Adibatla&apos;s Best Gated Community
          </h1>

          {/* PARAGRAPH */}
          <p
            className="
              text-white/95 font-gotham font-[300] drop-shadow-md tracking-tight text-start
              text-[16px] sm:text-[20px] lg:text-[28px] min-[1440px]:text-[32px]
              mb-8 md:mb-12
            "
          >
            Luxurious Villas in Adibatla, Hyderabad
          </p>

          {/* MAIN CTA BUTTON */}
          <button
            onClick={openModal}
            className="
              inline-flex items-center justify-center rounded-full bg-[#93AA28] text-white
              transition-all duration-300 hover:scale-105 active:scale-95 font-normal shadow-lg
              h-[46px] px-8 text-[13px]
              md:h-[54px] md:px-10 md:text-[16px]
              min-[1440px]:h-[60px] min-[1440px]:px-[40px] min-[1440px]:text-[18px]
              gap-3
            "
          >
            Schedule a Site Visit
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}