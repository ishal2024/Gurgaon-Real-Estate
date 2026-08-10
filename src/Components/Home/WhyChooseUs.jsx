import React from 'react';
import { 
  BadgeCheck, 
  MapPinned, 
  TrendingUp, 
  Scale, 
  Building2, 
  Landmark, 
  Sparkles 
} from 'lucide-react';

// Horizontal Feature Cards Data
const FEATURES = [
  {
    id: 'verified',
    title: 'Verified Properties',
    description: 'Every property is legally verified before listing to ensure complete transparency.',
    icon: BadgeCheck
  },
  {
    id: 'experts',
    title: 'Local Gurgaon Experts',
    description: 'Professional consultants with deep local market knowledge across prime sectors.',
    icon: MapPinned
  },
  {
    id: 'investment',
    title: 'Best Investment Advice',
    description: 'Data-driven insights helping you choose high-return real estate opportunities.',
    icon: TrendingUp
  },
  {
    id: 'legal',
    title: 'Legal Assistance',
    description: 'Complete end-to-end documentation support, RERA checks, and contract drafting.',
    icon: Scale
  },
  {
    id: 'visits',
    title: 'Site Visits Available',
    description: 'Schedule private, chauffeur-driven property site visits at your convenience.',
    icon: Building2
  },
  {
    id: 'loan',
    title: 'Loan Assistance',
    description: 'Direct tie-ups with leading banks for quick, hassle-free home loan approvals.',
    icon: Landmark
  }
];

export default function HorizontalWhyChooseUs() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-20 md:py-20 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-slate-200/50">
      
      {/* Ambient Radial Background Blur Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Subtle Luxury Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Why Choose Us</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Experience Gold-Standard Real Estate Services
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#6B7280] font-light leading-relaxed">
            Experience transparent and trusted real estate advisory with our local Gurugram experts.
          </p>
        </div>

        {/* 2-Column Horizontal Cards Grid (Desktop & Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {FEATURES.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-xs hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1 hover:border-[#C9A227] transition-all duration-350 ease-out flex items-center gap-4 sm:gap-5 min-h-[110px] sm:min-h-[120px] md:min-h-[128px] cursor-pointer"
              >
                {/* Circular Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center shrink-0 transition-all duration-350 group-hover:bg-[#C9A227] group-hover:border-[#C9A227] group-hover:scale-105 shadow-xs">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#C9A227] transition-colors duration-350 group-hover:text-white" />
                </div>

                {/* Right Content Area: Title & 2-Line Description */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight mb-1 transition-colors duration-300 group-hover:text-[#C9A227] truncate">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}