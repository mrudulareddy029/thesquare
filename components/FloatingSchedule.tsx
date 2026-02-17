"use client";

import React from "react";
import { useContactModal } from "@/components/ContactProvider";

export default function FloatingSchedule() {
  const { openModal } = useContactModal();

  return (
    <button
      onClick={openModal}
      className="
        fixed z-[2147483647]
        right-0 top-[45%] top-1/2 -translate-y-1/2
        pointer-events-auto
        bg-[#93AA2B] text-white
        rounded-l-[14px]
        shadow-lg
        h-[140px] w-[32px]
        md:h-[170px] md:w-[38px]
        lg:h-[190px] lg:w-[42px]
        flex items-center justify-center
        border border-white/20
        hover:brightness-110 transition-all duration-300
      "
      aria-label="Schedule a Site Visit"
    >
      <span className="font-gotham font-[400] text-[12px] md:text-[13px] lg:text-[14px] tracking-wide whitespace-nowrap -rotate-90">
        Schedule a Site Visit
      </span>
    </button>
  );
}
