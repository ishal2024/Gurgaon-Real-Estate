import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Quote, Star, User, UserRound } from 'lucide-react';

// Sample Luxury Client Testimonials
const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    date: '12 March 2026',
    rating: 5,
    gender: 'female',
    review: 'From our initial consultation to the final registration at Golf Course Road, the entire experience was flawless. Their team demonstrated unmatched local market expertise, ensuring complete transparency and finding us our dream penthouse.'
  },
  {
    id: 'test-2',
    name: 'Rahul Verma',
    date: '04 February 2026',
    rating: 5,
    gender: 'male',
    review: 'Investing in Gurugram commercial real estate felt daunting until I partnered with this team. Their data-driven ROI analysis and seamless legal assistance gave me total confidence in securing a high-yield property.'
  },
  {
    id: 'test-3',
    name: 'Neha Kapoor',
    date: '28 January 2026',
    rating: 5,
    gender: 'female',
    review: 'The chauffeur-driven site visits and personalized attention to detail were exceptional. They understood exactly what our family wanted in a luxury gated villa and delivered beyond our expectations.'
  },
  {
    id: 'test-4',
    name: 'Amit Singh',
    date: '15 December 2025',
    rating: 5,
    gender: 'male',
    review: 'Exceptional service standards throughout! The legal verification support was thorough, and their direct banker tie-ups helped us get home loan approval in record time without any stress.'
  }
];

export default function ClientTestimonials() {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  
  // Interaction State References
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const positionXRef = useRef(0);
  const speedRef = useRef(0.8); // Continuous scroll speed in px/frame

  const [isHovered, setIsHovered] = useState(false);

  // Triple duplicated list for uninterrupted loop experience across wide screens
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Continuous Marquee Loop Engine via requestAnimationFrame
  const animate = useCallback(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 3; // Length of 1 original set

      // Auto scroll step when not dragging or hovered
      if (!isHoveredRef.current && !isDraggingRef.current) {
        positionXRef.current -= speedRef.current;
      }

      // Loop position bounds seamlessly
      if (Math.abs(positionXRef.current) >= trackWidth) {
        positionXRef.current += trackWidth;
      } else if (positionXRef.current > 0) {
        positionXRef.current -= trackWidth;
      }

      // Hardware accelerated transform
      trackRef.current.style.transform = `translate3d(${positionXRef.current}px, 0, 0)`;
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Respect accessibility reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Start Animation Loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Pause animation when user switches browser tab
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameRef.current);
      } else {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [animate]);

  // Desktop Button Navigation
  const handleManualScroll = (direction) => {
    if (!trackRef.current) return;
    const shiftAmount = 440; // Approx card width + gap
    
    if (direction === 'left') {
      positionXRef.current += shiftAmount;
    } else {
      positionXRef.current -= shiftAmount;
    }
  };

  // Drag / Touch Event Handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX);
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = currentX - startXRef.current;
    
    positionXRef.current += deltaX;
    startXRef.current = currentX;
    dragDistanceRef.current += Math.abs(deltaX);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section 
      className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 md:py-32 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-slate-200/50"
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        isDraggingRef.current = false;
        setIsHovered(false);
      }}
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Subtle Accent Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Client Stories</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            What Our Clients Say
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#6B7280] font-light leading-relaxed">
            Read genuine experiences from our satisfied home buyers and investors across Gurugram.
          </p>
        </div>

        {/* Floating Desktop Navigation Controls */}
        <div className="hidden lg:flex items-center justify-between absolute top-[60%] -translate-y-1/2 -left-4 -right-4 z-30 pointer-events-none">
          <button
            type="button"
            onClick={() => handleManualScroll('left')}
            aria-label="Previous Testimonials"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-800 hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => handleManualScroll('right')}
            aria-label="Next Testimonials"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-800 hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Marquee Track Container with Gradient Edge Masks */}
        <div 
          className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Animated Track */}
          <div 
            ref={trackRef} 
            className="flex gap-6 sm:gap-8 w-max will-change-transform select-none"
          >
            {duplicatedTestimonials.map((item, index) => {
              const AvatarIcon = item.gender === 'female' ? UserRound : User;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative shrink-0 w-[310px] sm:w-[420px] md:w-[460px] h-[270px] sm:h-[280px] bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-2 hover:border-[#C9A227] hover:scale-[1.015] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
                >
                  {/* Decorative Background Quote Icon */}
                  <Quote className="absolute top-5 right-5 w-16 h-16 text-slate-100 group-hover:text-[#C9A227]/15 group-hover:rotate-12 transition-all duration-500 pointer-events-none" />

                  {/* Top Section: Avatar, Name, Rating & Date */}
                  <div className="relative z-10 flex items-center gap-4">
                    
                    {/* Luxury Gold Gradient Avatar Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#b08d1e] to-[#C9A227] flex items-center justify-center text-white shadow-md shadow-amber-500/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <AvatarIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                    </div>

                    {/* Name, Stars & Date Meta */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif] truncate">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-2 mt-0.5">
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-0.5 text-[#C9A227]">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C9A227] stroke-none" />
                          ))}
                        </div>

                        <span className="text-[11px] text-[#6B7280] font-light">•</span>
                        
                        {/* Date */}
                        <span className="text-[11px] sm:text-xs text-[#6B7280] font-light tracking-wide">
                          {item.date}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Review Story Body */}
                  <div className="relative z-10 my-auto pt-2">
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-4 italic font-['Plus_Jakarta_Sans',sans-serif]">
                      "{item.review}"
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}