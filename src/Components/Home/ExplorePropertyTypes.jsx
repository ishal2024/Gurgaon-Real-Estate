import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Clean, short property categories (strictly 1 line)
const PROPERTY_TYPES = [
  {
    id: 'agri_land',
    title: 'Agriculture Land',
    image: 'https://imgs.search.brave.com/-23ZYegW3gIzM5e11ySMY6cglNEshqNTViVekyijf2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMzc5/MjQuanBn',
  },
  {
    id: 'farm_land',
    title: 'Farm Land',
    image: 'https://imgs.search.brave.com/mtoNrX_jdGymJ6AhhO_QH6spdg8-wfwmI4mFVQooBiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/MzEwLzMyMS9zbWFs/bC9hLWZpZWxkLW9m/LXllbGxvdy1ncmFz/cy1waG90by5qcGc',
  },
  {
    id: 'flats',
    title: 'Flats',
    image: 'https://imgs.search.brave.com/mXV_3cN15Zz3AEOW-e7zg1ZvlfGoOxDX_zHloVI9nDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/MjIzMTA1Ni9waG90/by95b3VuZy1jb3Vw/bGUtYXJyaXZpbmct/YXQtdGhlaXItdmFj/YXRpb24tc3RheS13/aXRoLWx1Z2dhZ2Ut/YW5kLXNtaWxpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhuV3MxOXpjSXFH/MHNKeWpXRDhjc3JY/SVFtNkMtNFZ0LXpq/elhrRjI0d3M9',
  },
  {
    id: 'villas',
    title: 'Villas',
    image: 'https://imgs.search.brave.com/7H9ochFt50o1Wr6ZsqAY1AvOWCicJg_D8_C_i5a2f14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMTE2/NDQuanBn',
  }
];

export default function RefinedExploreProperties() {

  const navigate = useNavigate()

  return (
    <section className="w-full bg-[#F8FAFC] py-20 sm:py-20 md:py-20 font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Subtle Accent Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Curated Portfolio</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Explore Properties by Type
          </h2>

          {/* Minimal Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-500 font-light leading-relaxed">
            Find the perfect property category for your next investment in Gurugram.
          </p>
        </div>

        {/* Compact Landscape Grid: 2 cols on Mobile/Tablet, 4 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {PROPERTY_TYPES.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/search/${item.title}`)}
              className="group relative h-[160px] sm:h-[190px] md:h-[200px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-400 ease-out cursor-pointer"
            >
              {/* Full Cover Landscape Image with Smooth GPU Zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              {/* Refined Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent transition-opacity duration-400 group-hover:from-slate-950/95 group-hover:via-slate-950/50" />

              {/* Bottom Card Content Bar */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4.5 flex items-center justify-between gap-2 z-10">
                
                {/* Title (Guaranteed Single Line) */}
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-[#C9A227] font-['Outfit',sans-serif] truncate whitespace-nowrap">
                  {item.title}
                </h3>

                {/* Sliding Glass Action Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 transform translate-x-1 opacity-80 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-[#C9A227] group-hover:border-[#C9A227] group-hover:text-slate-950 shrink-0 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>

              {/* Subtle Gold Accent Outline on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-[#C9A227]/0 group-hover:border-[#C9A227]/60 transition-colors duration-400 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}