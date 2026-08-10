import React from 'react';
import { 
  Building2, 
  CalendarCheck, 
  FileCheck, 
  KeyRound, 
  Sparkles 
} from 'lucide-react';

// Process Steps Data
const STEPS = [
  {
    stepNumber: '01',
    title: 'Choose Property',
    description: 'Browse our curated collection of ultra-luxury residences and commercial hubs in Gurugram.',
    icon: Building2
  },
  {
    stepNumber: '02',
    title: 'Schedule Visit',
    description: 'Book a private, chauffeur-driven site visit accompanied by our senior local advisors.',
    icon: CalendarCheck
  },
  {
    stepNumber: '03',
    title: 'Documentation',
    description: 'Complete all legal paperwork, title verifications, and agreement drafting seamlessly.',
    icon: FileCheck
  },
  {
    stepNumber: '04',
    title: 'Own Property',
    description: 'Receive your keys, complete final handover, and step into your dream sanctuary.',
    icon: KeyRound
  }
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-20 md:py-20 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-slate-200/50">
      
      {/* Ambient Depth Radial Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24">
          
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Seamless Journey</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            How It Works
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#6B7280] font-light leading-relaxed">
            Buying your dream property has never been easier. Follow these simple steps to own your perfect home in Gurugram.
          </p>
        </div>

        {/* Process Container with Connected Lines */}
        <div className="relative">
          
          {/* Desktop/Laptop Horizontal Connecting Gradient Line */}
          <div className="hidden lg:block absolute top-[105px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 z-0 pointer-events-none" />

          {/* Mobile/Tablet Vertical Connecting Line */}
          <div className="block lg:hidden absolute top-[60px] bottom-[60px] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 z-0 pointer-events-none" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {STEPS.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] shadow-xs hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-2 hover:border-[#C9A227] transition-all duration-400 ease-out flex flex-col items-center text-center cursor-pointer min-h-[260px] sm:min-h-[280px]"
                  style={{
                    animationDelay: `${index * 120}ms`
                  }}
                >
                  {/* Top Floating Step Badge */}
                  <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#b08d1e] text-slate-950 font-extrabold text-xs tracking-wider shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                    {step.stepNumber}
                  </div>

                  {/* Circular Icon Container */}
                  <div className="w-[70px] h-[70px] rounded-full bg-white border-2 border-[#C9A227] shadow-md flex items-center justify-center my-4 transition-all duration-400 group-hover:bg-[#C9A227] group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-500/25 shrink-0">
                    <IconComponent className="w-7 h-7 text-[#C9A227] transition-colors duration-400 group-hover:text-white" />
                  </div>

                  {/* Step Heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif] mb-2.5 transition-colors duration-300 group-hover:text-[#C9A227]">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
                    {step.description}
                  </p>

                  {/* Subtle Glowing Pulse Dot over Line Alignment */}
                  <div className="hidden lg:block absolute -bottom-3 w-3 h-3 rounded-full bg-white border-2 border-[#C9A227] group-hover:bg-[#C9A227] group-hover:scale-125 transition-all duration-300 shadow-sm" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}