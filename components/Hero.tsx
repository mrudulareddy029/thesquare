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
      className="relative w-full group overflow-hidden h-screen"
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
              <div className="absolute top-0 left-0 w-full h-[120px] md:h-[180px] bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none md:hidden" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT OVERLAY CONTAINER */}
      <div
        className="
          absolute z-20 flex flex-col
          
          /* MOBILE: Positioned lower */
          inset-x-0 top-[48px] 
          pt-[110px] px-[32px]
          
          /* TABLET RESET */
          md:top-0 md:bottom-0 md:justify-end md:pt-0 md:px-20 md:pb-12
          
          /*---- DESKTOP (Laptops) */
          lg:justify-start lg:pt-[480px] lg:px-[210px] lg:pb-0
          
          /* --- 1440px+ FIGMA SPECS --- */
          min-[1440px]:pl-[191px] 
          min-[1440px]:pt-[450px]
          
          pointer-events-none
        "
      >
        <div className="pointer-events-auto w-full max-w-[90%] md:max-w-none">
          {/* TS RERA */}
          <span
            className="block text-white/90 font-gotham font-light tracking-widest drop-shadow-md mb-2
            text-[12px] 
            md:text-[14px] 
            lg:text-[16px]
            min-[1440px]:text-[18px] min-[1440px]:mb-4
          "
          >
            TS RERA: P02400005775
          </span>

          {/* HEADING */}
          <h1
            className="
              text-white font-gotham uppercase drop-shadow-lg text-start
              font-[300]
              tracking-normal

              /* MOBILE */
              text-[24px] leading-tight mb-[8px] max-w-[256px] min-h-[115px]
              
              /* TABLET */
              md:text-[40px] md:max-w-none md:w-auto md:h-auto md:mb-4
              
              /* LAPTOP */
              lg:text-[64px] lg:mb-[8px]
              
              /* --- 1440px+ SCREEN --- */
              min-[1440px]:text-[64px]
              leading-[72px]
              min-[1440px]:max-w-[1299px]
              min-[1440px]:mb-[16px]
            "
          >
            Discover Luxury 4 BHK Villas in <br className="hidden md:block" />
            Adibatla&apos;s Best Gated Community
          </h1>

          {/* PARAGRAPH */}
          <p
            className="
              text-white/95 font-gotham font-[300] drop-shadow-md tracking-tight text-start
              
              /* MOBILE */
              text-[16px] leading-[1.4] mb-[20px] max-w-[256px]
              
              /* TABLET */
              md:text-[20px] md:leading-[1.5] md:mb-6 md:max-w-none
              
              /* LAPTOP */
              lg:text-[28px] lg:mb-[20px]

              /* --- 1440px+ SCREEN --- */
              min-[1440px]:text-[32px]
              min-[1440px]:mb-[40px]
            "
          >
            Luxurious Villas in Adibatla, Hyderabad
          </p>

          {/* MAIN CTA BUTTON */}
          <button
            onClick={openModal}
            className="
              inline-flex items-center justify-between rounded-full bg-[#93AA28] text-white
              transition-all duration-300 hover:brightness-110 font-normal shadow-lg
              
              /* MOBILE */
              w-[162px] h-[30px] px-[15px] text-[11.5px] whitespace-nowrap tracking-tight
              
              /* DESKTOP */
              md:w-fit md:h-10 md:px-6 md:py-2 md:text-[14px] md:border-0 md:justify-center md:gap-2
              lg:px-[20px] lg:py-[5px] lg:h-[42px] lg:leading-[30px] lg:gap-3

              /* --- 1440px+ SCREEN --- */
              min-[1440px]:h-[55px]
              min-[1440px]:px-[35px]
              min-[1440px]:text-[18px]
            "
          >
            Schedule a Site Visit
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-[14px] h-[14px] md:h-4 md:w-4 lg:h-[18px] lg:w-[18px] min-[1440px]:w-[22px] min-[1440px]:h-[22px]"
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
