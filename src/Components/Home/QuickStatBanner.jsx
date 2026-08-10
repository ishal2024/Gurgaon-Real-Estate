import React, { useEffect, useState, useRef } from 'react';
import { 
  Building2, 
  Award, 
  Users, 
  BadgeCheck 
} from 'lucide-react';

// Stats Data Definition
const STATS = [
  {
    id: 'properties',
    value: 1500,
    suffix: '+',
    label: 'Properties Listed',
    icon: Building2
  },
  {
    id: 'experience',
    value: 12,
    suffix: '+',
    label: 'Years Experience',
    icon: Award
  },
  {
    id: 'clients',
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    icon: Users
  },
  {
    id: 'verified',
    value: 100,
    suffix: '%',
    label: 'Verified Listings',
    icon: BadgeCheck
  }
];

// Custom Hook for rAF Counter Animation on Viewport Entry
function useAnimatedCounter(targetValue, isVisible, duration = 2200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out expo easing function for a polished finish
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [targetValue, isVisible, duration]);

  return count;
}

// Sub-component for individual Stat items to manage timing independently
function StatItem({ stat, isVisible, isLastMobile, isLastDesktop }) {
  const animatedValue = useAnimatedCounter(stat.value, isVisible);
  const IconComponent = stat.icon;

  return (
    <div className="relative group flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer">
      
      {/* Secondary Subtle Icon */}
      <div className="mb-2 text-[#C9A227]/70 group-hover:text-[#C9A227] group-hover:scale-110 transition-all duration-300">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Animated Counter Number */}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A227] tracking-tight font-['Outfit',sans-serif] group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-350 drop-shadow-xs">
        {animatedValue.toLocaleString()}
        <span>{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#0F172A] text-center font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#C9A227] transition-colors duration-300 max-w-[140px] leading-tight">
        {stat.label}
      </p>

      {/* Vertical Divider for Desktop (rendered between elements) */}
      {!isLastDesktop && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-slate-200/80 pointer-events-none" />
      )}

      {/* Grid Dividers for 2x2 Layout on Mobile/Tablet */}
      {!isLastMobile && (
        <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-slate-200/60 pointer-events-none" />
      )}
    </div>
  );
}

export default function QuickStatsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.25 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#F8FAFC] py-8 sm:py-12 font-['Plus_Jakarta_Sans',sans-serif] z-20">
      
      {/* Subtle Glow Behind Floating Banner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl h-24 bg-[#C9A227]/10 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Glassmorphism Banner Container */}
        <div
          ref={bannerRef}
          className={`bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-900/5 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Responsive Grid: 4 Equal Columns Desktop, 2x2 Grid Mobile/Tablet */}
          <div className="grid grid-cols-2 lg:grid-cols-4 relative divide-slate-200/60 lg:divide-x-0">
            {STATS.map((stat, idx) => (
              <StatItem
                key={stat.id}
                stat={stat}
                isVisible={isVisible}
                isLastDesktop={idx === STATS.length - 1}
                isLastMobile={idx >= 2}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}