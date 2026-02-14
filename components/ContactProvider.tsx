"use client";

import { createContext, useContext, useState, ReactNode, ChangeEvent, useRef } from "react";
import { X, Calendar } from "lucide-react";

const Contact = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const useContactModal = () => useContext(Contact);

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
      closeModal();
    }
  };

  return (
    <Contact.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white w-[95%] md:w-full md:max-w-[600px] rounded-[25px] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="flex items-center justify-between px-6 md:px-10 pt-8 md:pt-10 pb-4">
              <h4 className="text-2xl md:text-[34px] font-bold text-[#7ca232]">Contact Us</h4>
              <button onClick={closeModal} className="text-gray-400">
                <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </button>
            </div>

            <div className="bg-[#faffec] px-6 md:px-10 py-6 md:py-10 rounded-b-[25px]">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                
                {/* Inputs: Explicitly added text-black and text-base */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input 
                      placeholder="Name" 
                      // text-black and text-base (16px) fixed visibility and auto-zoom on mobile
                      className={`w-full px-5 py-3 rounded-xl bg-white border border-transparent outline-none shadow-sm text-black text-base placeholder:text-gray-400 ${errors.name ? 'border-red-500' : 'focus:border-[#7ca232]'}`}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 pl-1">Please enter Name</p>}
                  </div>
                  
                  <div className="flex flex-col">
                    <input 
                      placeholder="E-Mail" 
                      type="email"
                      className={`w-full px-5 py-3 rounded-xl bg-white border border-transparent outline-none shadow-sm text-black text-base placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'focus:border-[#7ca232]'}`}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 pl-1">Please enter E-Mail</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input 
                      placeholder="Phone Number" 
                      type="text"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-5 py-3 rounded-xl bg-white border border-transparent outline-none shadow-sm text-black text-base placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : 'focus:border-[#7ca232]'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 pl-1">Please enter valid Phone Number</p>}
                  </div>
                  
                  <div className="flex flex-col">
                    <div 
                      onClick={handleDateClick}
                      className={`relative flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white shadow-sm cursor-pointer border border-transparent text-black text-base ${errors.date ? 'border-red-500' : 'focus:border-[#7ca232]'}`}
                    >
                      <span className={formData.date ? "text-black" : "text-gray-400"}>
                        {formData.date || "Select Date"}
                      </span>
                      <Calendar className="w-5 h-5 text-black" />
                      <input 
                        type="date" 
                        ref={dateInputRef}
                        className="absolute inset-0 opacity-0 pointer-events-none" 
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-[10px] mt-1 pl-1">Please select Date</p>}
                  </div>
                </div>

                {/* Checkbox row */}
                <div className="relative pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center">
                      <input type="checkbox" className="appearance-none absolute inset-0 w-full h-full cursor-pointer z-50 peer" defaultChecked />
                      <div className="absolute inset-0 border border-black rounded-[2px] bg-white peer-checked:bg-white" />
                      <svg className="w-3 h-3 text-black scale-0 peer-checked:scale-100 transition-transform pointer-events-none z-10 stroke-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-[10px] leading-tight text-gray-600 select-none">
                      I authorize representatives of IRA Square to contact me. This consent overrides DNC/NDNC.
                    </span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#7ca232] text-white text-lg font-semibold py-4 rounded-[20px] shadow-lg transition-all active:scale-95">
                  Book a Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Contact.Provider>
  );
}