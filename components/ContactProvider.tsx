"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { X } from "lucide-react"; // Make sure you have lucide-react or use an SVG

// 1. Create the Context
const ContactContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

// 2. Custom Hook for other components to use
export const useContactModal = () => useContext(ContactContext);

// 3. The Provider Component
export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* --- MODAL UI STARTS HERE --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Modal Container */}
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden font-gotham relative animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h4 className="text-xl font-semibold text-gray-800">Contact Us</h4>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <form className="space-y-4">
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" placeholder="Name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6A8A2C] focus:ring-2 focus:ring-[#6A8A2C]/20 outline-none transition-all placeholder:text-gray-400" />
                  <input name="email" placeholder="E-Mail" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6A8A2C] focus:ring-2 focus:ring-[#6A8A2C]/20 outline-none transition-all placeholder:text-gray-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input name="phone" placeholder="Phone Number" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6A8A2C] focus:ring-2 focus:ring-[#6A8A2C]/20 outline-none transition-all placeholder:text-gray-400" />
                   <div className="relative">
                      <input type="text" placeholder="Select Date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6A8A2C] outline-none" />
                   </div>
                </div>

                {/* Consent & Button */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 h-4 w-4 text-[#6A8A2C] border-gray-300 rounded focus:ring-[#6A8A2C]" />
                    <span className="text-xs text-gray-500">I authorize representatives of IRA Square to contact me.</span>
                  </label>
                </div>

                <button type="submit" className="w-full mt-6 bg-[#6A8A2C] hover:bg-[#5a7625] text-white font-bold py-4 rounded-full shadow-lg transition-all active:scale-[0.98]">
                  Book a Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}