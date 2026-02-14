"use client";

import { createContext, useContext, useState, ReactNode, ChangeEvent, useRef } from "react";
import { X, Calendar } from "lucide-react";

// 1. Context Creation
const Contact = createContext({
  openModal: () => {},
  closeModal: () => {},
});

// 2. Custom Hook
export const useContactModal = () => useContext(Contact);

// 3. Main Provider Component
export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const dateInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => setIsOpen(true);
  
  const closeModal = () => {
    setIsOpen(false);
    setErrors({});
    setFormData({ name: "", email: "", phone: "", date: "" });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
      if (value.length === 10) setErrors((prev) => ({ ...prev, phone: false }));
    }
  };

  const handleDateClick = () => {
    if (dateInputRef.current) dateInputRef.current.showPicker();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (formData.phone.length < 10) newErrors.phone = true;
    if (!formData.date) newErrors.date = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted Successfully:", formData);
      closeModal();
    }
  };

  return (
    <Contact.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white w-full max-w-[600px] rounded-[25px] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header Area */}
            <div className="flex items-center justify-between px-10 pt-10 pb-5">
              <h4 className="text-[34px] font-bold text-[#7ca232] leading-none">Contact Us</h4>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-8 h-8" strokeWidth={2.5} />
              </button>
            </div>

            {/* Light Green Form Body */}
            <div className="bg-[#faffec] px-10 py-10">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      placeholder="Name" 
                      className={`w-full px-5 py-3.5 rounded-xl bg-white outline-none shadow-sm transition-all ${errors.name ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-[#7ca232]'}`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({...formData, name: e.target.value});
                        if(e.target.value) setErrors(prev => ({...prev, name: false}));
                      }}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1.5 font-medium">Please enter Name</p>}
                  </div>
                  
                  <div className="relative">
                    <input 
                      placeholder="E-Mail" 
                      type="email"
                      className={`w-full px-5 py-3.5 rounded-xl bg-white outline-none shadow-sm transition-all ${errors.email ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-[#7ca232]'}`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if(e.target.value) setErrors(prev => ({...prev, email: false}));
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1.5 font-medium">Please enter E-Mail</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      placeholder="Phone Number" 
                      type="text"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-5 py-3.5 rounded-xl bg-white outline-none shadow-sm transition-all ${errors.phone ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-[#7ca232]'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1.5 font-medium">Please enter valid Phone Number</p>}
                  </div>
                  
                  <div className="relative">
                    <div 
                      onClick={handleDateClick}
                      className={`relative flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white shadow-sm cursor-pointer transition-all ${errors.date ? 'ring-1 ring-red-500' : 'focus:ring-1 focus:ring-[#7ca232]'}`}
                    >
                      <span className={formData.date ? "text-gray-800" : "text-gray-400"}>
                        {formData.date || "Select Date"}
                      </span>
                      <Calendar className="w-5 h-5 text-black" />
                      <input 
                        type="date" 
                        ref={dateInputRef}
                        className="absolute inset-0 opacity-0 pointer-events-none" 
                        onChange={(e) => {
                          setFormData({...formData, date: e.target.value});
                          if(e.target.value) setErrors(prev => ({...prev, date: false}));
                        }}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-[11px] mt-1.5 font-medium">Please select Date</p>}
                  </div>
                </div>

                {/* FINAL CHECKBOX FIX */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group relative">
                    {/* The actual input covers the entire label area so it is always clickable */}
                    <input 
                      type="checkbox" 
                      className="appearance-none absolute inset-0 w-full h-full cursor-pointer z-50 peer" 
                      defaultChecked 
                    />

                    <div className="relative mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center">
                      {/* Visual Border Box */}
                      <div className="absolute inset-0 border border-black rounded-[2px] bg-white transition-all peer-checked:bg-white" />
                      
                      {/* Black SVG Checkmark */}
                      <svg 
                        className="w-3 h-3 text-black scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none z-10 stroke-[4px]" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <span className="text-[11px] leading-tight text-gray-600 select-none pr-4">
                      I authorize representatives of IRA Square to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#7ca232] hover:bg-[#6a8b2a] text-white text-[20px] font-semibold py-4 rounded-[20px] shadow-lg transition-all active:scale-[0.97]"
                  >
                    Book a Visit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Contact.Provider>
  );
}