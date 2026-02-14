"use client";

import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  type: string;
  location: string;
  rera: string;
  status: string;
  image: string;
  link: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: "IRA ASPIRATION",
    type: "3 & 4 BHK Apartment",
    location: "KOLLUR",
    rera: "RERA NO. P01100002880",
    status: "HANDOVER IN PROGRESS",
    image: "/aspiration.webp",
    link: "https://aspiration.irarealty.in/",
  },
  {
    title: "IRA THE SQUARE",
    type: "4 BHK Villas",
    location: "ADIBATLA",
    rera: "RERA NO. P01100002811",
    status: "UNDER CONSTRUCTION",
    // TIP: Rename your file in /public to 'the-square.jpg' if it still doesn't show
    image: "/the-square-luxury-apartments-exterior.png", 
    link: "https://thesquare.irarealty.in/",
  },
  {
    title: "MOONGLADE APARTMENTS",
    type: "3 & 4 BHK Apartment",
    location: "KOKAPET",
    rera: "RERA NO. P02400009267",
    status: "UNDER CONSTRUCTION",
    image: "/moonglade.webp",
    link: "https://beseen.moonglade.life/",
  },
];

export default function OurProjects() {
  return (
    <section className="bg-white py-10 px-5 xl:px-[80px] md:py-[90px]">
      <div className="max-w-[1280px] mx-auto w-full">
        
        <div className="text-left mb-[40px] md:mb-[50px]">
          <h2 className="text-[32px] leading-[1.2] md:text-[48px] font-normal text-[#7FA61A] mb-3 uppercase">
            Building Homes. Nurturing Communities.
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed md:max-w-[760px]">
            At IRA Realty, we’re redefining real estate with transparency, trust,
            and transformative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[30px] justify-items-center">
          {PROJECTS_DATA.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-[#7FA61A] rounded-[24px] shadow-lg p-[10px] overflow-hidden transition-all duration-300 w-full max-w-[390px]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 370px"
                  className="object-cover transition-transform duration-500 "
                  // Forces mobile to load this image immediately
                  priority={index < 2} 
                />

                <div className="absolute bottom-0 right-0 z-10">
                  <span className="bg-[#8D6554] text-white text-[10px] md:text-[11px] font-normal uppercase tracking-wide py-[8px] px-[23px] block">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col text-white mt-4 px-2 pb-2">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className="font-bold text-[17px] md:text-[19px] leading-tight uppercase">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="relative w-[12px] h-[16px]">
                      <Image src="/Subtract.png" alt="loc" fill className="object-contain" />
                    </div>
                    <p className="text-[13px] font-bold tracking-wider uppercase">
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-1">
                  <p className="text-[13px] font-light opacity-90">
                    {project.type}
                  </p>
                  <p className="text-[9px] md:text-[10px] font-light uppercase tracking-wider">
                    {project.rera}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}