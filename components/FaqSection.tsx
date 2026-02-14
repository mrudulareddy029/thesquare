"use client";

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is The Square Adibatla project?",
    answer: "The Square is a premium gated community in Adibatla offering 131 luxury 4 BHK duplex villas. Spread across 13.5 acres, it features HMDA & RERA approved villas with home automation, 25,000 sq ft clubhouse, and world-class amenities. Each villa has a built-up area of 3700 sq ft on plots ranging from 267 to 330 sq yards."
  },
  {
    question: "Is the project RERA approved?",
    answer: "Yes, The Square is both HMDA and RERA approved (P02400005775), ensuring complete legal compliance and transparency. This guarantees that the project meets all regulatory standards and provides buyers with legal security."
  },
  {
    question: "How far is TCS Campus from The Square?",
    answer: "TCS Campus Adibatla is just 10 minutes away from The Square. The project is also close to other major IT hubs including Foxconn Facility (8 mins), Tata Aerospace (10 mins), and Fab City (15 mins)."
  },
  {
    question: "What are the villa specifications?",
    answer: "Each villa is a 4 BHK luxury duplex with 3700 sq ft built-up area on plots of 267-330 sq yards. Features include provision for elevator, terrace garden, two car parking spaces, 100% Vastu compliance, and both east and west facing options."
  },
  {
    question: "What amenities are provided?",
    answer: "The Square features a 25,000 sq ft clubhouse with swimming pool, fully-equipped gym, landscaped gardens, 40' & 30' wide internal BT roads, comprehensive security systems, and various recreational facilities."
  },
  {
    question: "How can I schedule a site visit?",
    answer: "Call us at +91 9121 777 777 or email info@irarealty.in to schedule a convenient time to visit and experience the luxury lifestyle at The Square, Adibatla."
  },
  {
    question: "What schools are nearby?",
    answer: "Top schools nearby include Sri Gayatri Jr College (4 mins), Narayana Jr College (8 mins), Sloka International School (11 mins), Delhi Public School Nadergul (17 mins), Aga Khan Academy (20 mins), and Manchester Global School (25 mins)."
  },
  {
    question: "When will the villas be ready for possession at the square?",
    answer: "The villas at The Square are progressing well and nearing completion. We are committed to timely delivery as per our approved project schedule. Our model villa is already ready for viewing, which demonstrates our commitment to quality construction and project timelines. We recommend booking your site visit to see the construction progress and quality firsthand. For exact possession dates, please connect with our sales team."
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section 
      style={{ background: 'linear-gradient(135deg, #e5ebc8, #dbe4b5)' }}
      className="py-12 lg:py-[70px] rounded-t-[30px] lg:rounded-t-[50px] overflow-hidden" 
      id="faq"
    >
      <div className="w-full max-w-[920px] px-5 lg:px-0 mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mx-auto mb-8 lg:mb-[40px]">
          <h2 className="text-[rgb(106,138,44)] font-gotham font-light text-[22px] leading-[26.4px] lg:text-[28px] lg:leading-[33.6px] tracking-[1px] mb-[6px] uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-[rgb(95,107,69)] font-gotham font-normal text-[14px] leading-[21px]">
            Everything you need to know about The Square, Adibatla
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4 font-gotham">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;
            
            return (
              <div 
                key={index} 
                className={`rounded-[10px] overflow-hidden transition-all duration-300 bg-white border-none ${
                  isActive ? 'shadow-sm' : ''
                }`}
              >
                <button
                  id={headerId}
                  aria-expanded={isActive}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between p-4 lg:px-[22px] lg:py-[18px] text-left transition-colors duration-300 focus:outline-none border-none ${
                    isActive ? 'bg-[rgb(106,138,44)]' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className={`tracking-tight pr-4 text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] ${
                    isActive ? 'text-white' : 'text-[rgb(33,37,41)]' 
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* ICON */}
                  <span className={`flex-shrink-0 w-6 h-6 lg:w-[28px] lg:h-[28px] flex items-center justify-center rounded-full border-none transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-[rgb(106,138,44)]' 
                      : 'bg-[rgb(106,138,44)] text-white'
                  }`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* ANSWER CONTENT */}
                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-in-out bg-white ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 lg:px-[22px] py-4 lg:py-[20px] text-[rgb(74,74,74)]">
                      <p className="font-gotham font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-start">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}