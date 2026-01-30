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
    title: "The Square Villas",
    type: "4 BHK Villas",
    location: "ADIBATLA",
    rera: "RERA NO. P01100002811",
    status: "UNDER CONSTRUCTION",
    image: "/the-square-luxury-apartments-exterior.jpg",
    link: "https://thesquare.irarealty.in/",
  },
  {
    title: "Moonglade Apartments",
    type: "3 & 4 BHK Apartments",
    location: "KOKAPET",
    rera: "RERA NO. P02400009267",
    status: "UNDER CONSTRUCTION",
    image: "/moonglade.webp",
    link: "https://beseen.moonglade.life/",
  },
  {
    title: "IRA Aspiration",
    type: "3 & 4 BHK Apartments",
    location: "KOLLUR",
    rera: "RERA NO. P01100002880",
    status: "HANDOVER IN PROGRESS",
    image: "/aspiration.webp",
    link: "https://aspiration.irarealty.in/",
  },
];

export default function OurProjects() {
  return (
    <section className="bg-white py-10 px-5 xl:px-[80px] md:py-[90px]">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-left mb-[50px]">
          <h2 className="text-[32px] leading-[38.4px] md:text-[48px] md:leading-[57.6px] font-gotham font-normal text-[#7FA61A] w-full mb-3">
            Building Homes. Nurturing Communities.
          </h2>
          <p className="text-gray-500 font-gotham font-light text-sm md:text-base leading-[27.2px] md:max-w-[760px]">
            At IRA Realty, we’re redefining real estate with transparency, trust,
            and transformative design.
          </p>
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-[36px] justify-items-center items-start">
          {PROJECTS_DATA.map((project, index) => {
            const isTargeted = index === 0 || index === 2;

            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                /* RESPONSIVE CARD LOGIC:
                   - Mobile: Full width (w-full)
                   - xl Screen: Exact width [402.663px] and height [395px] or [419px]
                */
                className={`group relative flex flex-col bg-[#7FA61A] rounded-[30px] shadow-lg p-[10px] overflow-hidden transition-all duration-300 w-full
                  ${isTargeted 
                    ? "xl:w-[402.663px] xl:h-[395px]" 
                    : "xl:w-[402.66px] xl:min-h-[419px]"
                  }`}
              >
                {/* IMAGE WRAPPER */}
                <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden rounded-[20px] shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 382px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-[18px] left-1/2 transform -translate-x-1/2 z-10 w-max">
                    <span className="bg-[#8D6554] text-white text-[10px] sm:text-[12px] leading-[18px] font-gotham font-normal uppercase tracking-[0.6px] py-[6px] px-[14px] sm:px-[18px] text-center block rounded-sm shadow-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT AREA */}
                <div 
                  className={`flex flex-row justify-between items-start text-white flex-grow mx-auto mt-[15px] sm:mt-[22px] w-full px-2 sm:px-4
                    ${isTargeted 
                      ? "xl:w-[350.663px] xl:h-[67px] xl:px-0" 
                      : "xl:w-[350.663px] xl:px-0 xl:pb-[26px]"
                    }
                  `}
                >
                  
                  {/* Left Division: Title & Type */}
                  <div 
                    className={`flex flex-col justify-start
                      ${isTargeted ? "w-[60%] xl:w-[168.387px] xl:h-[67px]" : "w-[60%]"}
                    `}
                  >
                    <h3 
                      className={`font-gotham font-normal leading-[1.1] tracking-tight text-white flex items-start
                        ${isTargeted 
                          ? "text-[18px] sm:text-[20px] xl:h-[24px] mb-[6px]" 
                          : "text-[20px] sm:text-[22px] min-h-[40px] sm:min-h-[48px] mb-[6px]"
                        }
                      `}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/95 text-[12px] sm:text-[14px] font-light leading-[21px]">
                      {project.type}
                    </p>
                  </div>

                  {/* Right Division: Location & RERA */}
                  <div 
                    className={`flex flex-col text-right items-end justify-start min-w-0
                      ${isTargeted ? "w-[40%] xl:h-[67px]" : "w-[40%]"}
                    `}
                  >
                    <div className="mb-[4px] sm:mb-[6px] flex items-center justify-end pt-[3px]">
                      <p className="text-[12px] sm:text-[14px] font-gotham font-light uppercase tracking-wider leading-none text-white">
                        {project.location}
                      </p>
                    </div>
                    
                    <div className="flex items-start justify-end overflow-hidden">
                      <p className="text-white/90 text-[10px] sm:text-[12px] uppercase font-light leading-[1.3] text-right break-words">
                        {project.rera}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}