import React, { useRef, useState, useEffect, useContext } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Ruler, 
  ArrowRight, 
  Sparkles,
  Home
} from 'lucide-react';
import { popular_properties } from '../../Data/data.jsx';
import { ContactModalContext } from '../../App.jsx';

// ==========================================
// UNTOUCHED PROPERTY CARD COMPONENT
// ==========================================
function PropertyCard({ property }) {
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
      className="group bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#C9A227] transition-all duration-350 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif] h-full select-none"
    >
      {/* 1. TOP AUTOMATIC IMAGE SLIDER */}
      <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-slate-900">
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
        {property.type && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-950/70 text-[#C9A227] border border-[#C9A227]/40 backdrop-blur-md shadow-md">
              {property.type}
            </span>
          </div>
        )}

        {/* Slider Controls - Left Button */}
        <button
          type="button"
          onClick={handlePrevImage}
          aria-label="Previous Image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slider Controls - Right Button */}
        <button
          type="button"
          onClick={handleNextImage}
          aria-label="Next Image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/40 backdrop-blur-md">
          {property.images.map((_, dotIdx) => (
            <button
              type="button"
              key={dotIdx}
              onClick={() => setCurrentImgIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === currentImgIndex ? 'w-5 bg-[#C9A227]' : 'w-1.5 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. CARD CONTENT AREA */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold font-['Outfit',sans-serif] text-[#0F172A] group-hover:text-[#C9A227] transition-colors duration-300 truncate">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-2 text-[#6B7280] text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
            <span className="truncate">{property.location?.address || property.location}</span>
          </div>

          {/* Two-Line Truncated Description */}
          <p className="mt-3 text-xs text-[#6B7280] leading-relaxed line-clamp-2 font-normal">
            {property.description}
          </p>
        </div>

        {/* 3. BLURRED PREMIUM INFORMATION AREA (SINGLE ROW GRID) */}
        <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/20 p-3.5 border border-slate-200/80 overflow-hidden shadow-inner">
            
            {/* Skeleton Structure in ONE ROW */}
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
            className="w-full h-[52px] sm:h-[54px] mt-4 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 group-hover:scale-[1.01] active:scale-98 transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <span>Contact for Complete Details</span>
            <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// REDESIGNED POPULAR PROPERTIES SECTION
// ==========================================
export default function PopularProperties() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [hasUserSwiped, setHasUserSwiped] = useState(false);
  const [hasNudged, setHasNudged] = useState(false);

  const propertiesList = popular_properties || [];
  const totalProperties = propertiesList.length;

  // Track scroll position to update progress bar & current card index
  const handleTrackScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Calculate progress fraction (0 to 1)
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const currentScroll = container.scrollLeft;
      const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      setScrollProgress(progress);

      // Estimate current active card index based on scroll ratio
      const index = Math.min(
        Math.floor((currentScroll + container.clientWidth / 2) / (container.scrollWidth / totalProperties)) + 1,
        totalProperties
      );
      setActiveCardIndex(index || 1);
    }

    // Dismiss swipe hint on user interaction
    if (!hasUserSwiped) {
      setHasUserSwiped(true);
      setShowSwipeHint(false);
    }
  };

  // Perform a 1-time micro scroll nudge on initial viewport entrance to teach swiping
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasNudged && scrollContainerRef.current) {
          setHasNudged(true);
          
          // Respect reduced motion settings
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReduced) return;

          setTimeout(() => {
            if (scrollContainerRef.current && !hasUserSwiped) {
              // Nudge right slightly and return
              scrollContainerRef.current.scrollBy({ left: 45, behavior: 'smooth' });
              setTimeout(() => {
                if (scrollContainerRef.current && !hasUserSwiped) {
                  scrollContainerRef.current.scrollBy({ left: -45, behavior: 'smooth' });
                }
              }, 450);
            }
          }, 800);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasNudged, hasUserSwiped]);

  // Auto-dismiss the floating swipe pill hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Desktop Navigation Handler
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.offsetWidth || 380;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#F8FAFC] py-16 sm:py-20 md:py-24 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden border-t border-slate-200/50"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-5 w-60 h-60 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Exclusive Listings</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Popular Properties
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#6B7280] font-normal leading-relaxed">
            Explore our handpicked premium properties in the most sought-after locations across Gurugram.
          </p>

          {/* Animated Mobile Swipe Indicator Pill */}
          {showSwipeHint && !hasUserSwiped && (
            <div className="md:hidden inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium backdrop-blur-md border border-white/10 shadow-lg animate-bounce">
              <span className="text-[#C9A227]">←</span>
              <span>Swipe to explore properties</span>
              <span className="text-[#C9A227]">→</span>
            </div>
          )}
        </div>

        {/* Floating Navigation Controls (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-between absolute top-[55%] -translate-y-1/2 -left-4 -right-4 z-30 pointer-events-none">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Previous Properties"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-800 hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-slate-950 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#C9A227]"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Next Properties"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-800 hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-slate-950 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#C9A227]"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Carousel Outer Wrapper with Gradient Edge Masks */}
        <div className="relative w-full">
          
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleTrackScroll}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth pb-6 pt-2 px-4 sm:px-6 lg:px-2 will-change-transform"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {propertiesList.length > 0 ? (
              propertiesList.map((property, idx) => (
                <div 
                  key={property.id || idx} 
                
                  className="w-[84vw] sm:w-[46vw] md:w-[360px] lg:w-[380px] shrink-0 snap-start transition-all duration-300"
                >
                  <PropertyCard property={property} />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-12 text-[#6B7280] text-sm font-medium">
                No popular properties available right now.
              </div>
            )}
          </div>
        </div>

        {/* Modern Dynamic Progress Indicator Bar */}
        {totalProperties > 0 && (
          <div className="mt-6 flex flex-col items-center gap-2.5">
            {/* Numerical Step Counter */}
            <div className="text-xs font-semibold text-slate-500 tracking-wider font-['Outfit',sans-serif]">
              <span className="text-[#0F172A] font-bold">{activeCardIndex}</span>
              <span className="mx-1 text-slate-300">/</span>
              <span>{totalProperties}</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-36 sm:w-48 h-1.5 bg-slate-200/80 rounded-full overflow-hidden relative shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-[#C9A227] to-[#D4AF37] rounded-full transition-all duration-200 ease-out"
                style={{ 
                  width: `${Math.max((scrollProgress * 100), (1 / totalProperties) * 100)}%` 
                }}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}