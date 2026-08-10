import React, { useState, useEffect, useContext } from 'react';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Ruler,
  Sparkles,
  Home,
  ArrowRight,
  RotateCcw,
  Building,
  Lock
} from 'lucide-react';
import { ContactModalContext } from '../../App';


export default function PropertyCard({ property }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { setContactModalOpen } = useContext(ContactModalContext)

  // Auto Slider Effect (3.5 Seconds interval)
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when hovering
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % property.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [property.images.length, isHovered]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % property.images.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#C9A227] transition-all duration-350 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* 1. TOP AUTOMATIC IMAGE SLIDER */}
      <div className="relative h-[240px] w-full overflow-hidden bg-slate-900">
        {/* Images Track */}
        {property.images.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentImgIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
            }`}
          >
            <img
              src={imgUrl}
              alt={`${property.title} - ${idx + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
        ))}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-950/70 text-[#C9A227] border border-[#C9A227]/40 backdrop-blur-md shadow-md">
            {property.category}
          </span>
        </div>

        {/* Slider Controls - Left Button */}
        <button
          onClick={handlePrevImage}
          aria-label="Previous Image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slider Controls - Right Button */}
        <button
          onClick={handleNextImage}
          aria-label="Next Image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/40 backdrop-blur-md">
          {property.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentImgIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentImgIndex ? 'w-5 bg-[#C9A227]' : 'w-1.5 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. CARD CONTENT AREA */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-[#0F172A] group-hover:text-[#C9A227] transition-colors duration-300 truncate">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-2 text-[#6B7280] text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
            <span className="truncate">{property.location.address}</span>
          </div>

          {/* Two-Line Truncated Description */}
          {/* <p className="mt-3 text-xs text-[#6B7280] leading-relaxed line-clamp-2 font-normal">
            {property.description}
          </p> */}
        </div>

        {/* 3. BLURRED PREMIUM INFORMATION AREA (PROTECTED/LOCKED DATA) */}
         <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/20 p-4 border border-slate-200/80 overflow-hidden shadow-inner">
            
           
            {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-10 flex flex-col items-center justify-center p-3 text-center transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-slate-950/90 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shadow-md mb-1.5">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider">
                Exclusive Property Specs
              </span>
              <span className="text-[10px] text-[#6B7280] font-medium mt-0.5">
                Unlocked Upon Inquiry
              </span>
            </div>  */}

           
            <div className="grid grid-cols-3 gap-2 pointer-events-none select-none opacity-40">
  {/* Column 1: Property Area */}
  <div>
    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 mb-1 truncate">
      <Ruler className="w-3 h-3 text-[#C9A227] shrink-0" />
      <span className="truncate">Area</span>
    </div>
    <div className="h-2.5 w-full rounded-full bg-slate-300/80 animate-pulse" />
  </div>

  {/* Column 2: Amenities */}
  <div>
    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 mb-1 truncate">
      <Sparkles className="w-3 h-3 text-[#C9A227] shrink-0" />
      <span className="truncate">Amenities</span>
    </div>
    <div className="h-2.5 w-full rounded-full bg-slate-300/80 animate-pulse" />
  </div>

  {/* Column 3: More Details */}
  <div>
    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 mb-1 truncate">
      <Home className="w-3 h-3 text-[#C9A227] shrink-0" />
      <span className="truncate">Details</span>
    </div>
    <div className="h-2.5 w-4/5 rounded-full bg-slate-300/80 animate-pulse" />
  </div>
</div>
          </div>  

          {/* 4. CONTACT BUTTON */}
          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="w-full h-[54px] mt-4 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 group-hover:scale-[1.01] active:scale-98 transition-all duration-300 focus:outline-none"
          >
            <span>Contact for Complete Details</span>
            <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}