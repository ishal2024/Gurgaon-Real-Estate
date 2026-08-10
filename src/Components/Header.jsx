import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  Building2,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Building,
  Landmark,
  Trees,
  Briefcase,
  Sparkles,
  Crown,
  Layers,
  Wheat,

} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ContactModalContext } from '../App';
import favicon from '../assets/favicon.png'

// ==========================================
// DATA CONFIGURATION
// ==========================================

const PROPERTIES_MENU = [
  {
    label: "Agricultural Lands",
    icon: Wheat,
    desc: "Fertile farmland for agriculture & investment",
    href: '/search/Agriculture Land'
  },
  {
    label: "Farm Lands",
    icon: Trees,
    desc: "Scenic farm properties with nature surroundings",
    href: '/search/Farm Land'
  },
  {
    label: "Flats",
    icon: Building2,
    desc: "Modern apartments in prime residential locations",
    href: "/search/some"
  },
];

const FLATS_MENU = [
  { label: '1 BHK', icon: Layers, desc: 'Compact luxury suites' },
  { label: '2 BHK', icon: Layers, desc: 'Spacious executive homes' },
  { label: '3 BHK', icon: Layers, desc: 'Family luxury residences' },
  { label: '4 BHK', icon: Layers, desc: 'Expansive premium layouts' },
  { label: '5 BHK', icon: Layers, desc: 'Grand palatial residences' },
  { label: 'Penthouse', icon: Crown, desc: 'Sky-high duplexes with private pools' }
];

const NAV_LINKS = [
  { name: 'Home', href: '', type: 'link' },
  { name: 'Properties', href: '#', type: 'dropdown', items: PROPERTIES_MENU },
  { name: 'Projects', href: '/project', type: 'link' },
  { name: 'About Us', href: '/about', type: 'link' },
  { name: 'Contact Us', href: '/contact', type: 'link' }
];

// ==========================================
// MAIN NAVBAR COMPONENT
// ==========================================
export default function LuxuryHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({ Properties: false, Flats: false });
  const [activeHoverDropdown, setActiveHoverDropdown] = useState(null);

  const { setContactModalOpen } = useContext(ContactModalContext)
  const navigate = useNavigate()

  const drawerRef = useRef(null);

  // 1. Optimized Scroll Handler (Updates state only when threshold crosses 100px)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY >= 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Handle ESC Key & Click Outside for Mobile Drawer Accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        setActiveHoverDropdown(null);
      }
    };

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileOpen]);

  const toggleMobileAccordion = (name) => {
    setMobileExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* WRAPPER PLACEHOLDER: Cumulative Layout Shift (CLS) ko prevent karta hai jab header position:fixed hota hai */}
      <div className="h-[80px] sm:h-[90px] w-full">

        {/* HEADER BAR */}
        <header
          className={`w-full h-[80px] sm:h-[90px] font-['Plus_Jakarta_Sans',sans-serif] transition-all duration-300 ease-in-out ${isSticky
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E5E7EB] shadow-lg shadow-slate-900/5 translate-y-0 animate-slideDown'
            : 'relative z-40 bg-white border-b border-[#E5E7EB]'
            }`}
        >
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            {/* LEFT: LOGO */}
            <NavLink
              to=""
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Gurgaon RealEstate Home"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl   flex items-center justify-center group-hover:border-[#C9A227] transition-colors">
                <img src={favicon} alt="Logo" className='w-full h-full' />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold font-['Outfit',sans-serif] tracking-tight text-[#0F172A] group-hover:text-[#C9A227] transition-colors leading-none">
                  Gurgaon <span className="text-[#C9A227]">RealEstate</span>
                </span>
                <span className="text-[10px] uppercase font-medium tracking-widest text-[#6B7280] mt-1">
                  Dream Properties
                </span>
              </div>
            </NavLink>

            {/* CENTER: DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.name;

                if (link.type === 'dropdown') {
                  return (
                    <div
                      key={link.name}
                      className="relative group py-6"
                      onMouseEnter={() => setActiveHoverDropdown(link.name)}
                      onMouseLeave={() => setActiveHoverDropdown(null)}
                    >
                      <button
                        onClick={() => setActiveNav(link.name)}
                        aria-expanded={activeHoverDropdown === link.name}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group-hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] ${isActive || activeHoverDropdown === link.name
                          ? 'text-[#C9A227]'
                          : 'text-[#111827] hover:text-[#C9A227]'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${activeHoverDropdown === link.name ? 'rotate-180 text-[#C9A227]' : 'text-slate-400'
                            }`}
                        />
                      </button>

                      {/* MEGA DROPDOWN MENU */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-80 sm:w-96 p-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E5E7EB] shadow-2xl shadow-slate-900/10 transition-all duration-300 origin-top transform ${activeHoverDropdown === link.name
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                      >
                        <div className="px-3 py-2 border-b border-[#E5E7EB]/60 mb-1 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                            Explore {link.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium">
                            Gurugram
                          </span>
                        </div>

                        <div className="space-y-1 max-h-[380px] overflow-y-auto custom-scrollbar">
                          {link.items.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <NavLink
                                key={item.label}
                                to={item.href}
                                className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-[#C9A227]/10 transition-all duration-300"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover/item:bg-[#C9A227] flex items-center justify-center transition-colors">
                                    <ItemIcon className="w-4 h-4 text-slate-700 group-hover/item:text-slate-950 transition-colors" />
                                  </div>

                                  <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-[#111827] group-hover/item:text-[#C9A227] group-hover/item:translate-x-1 transition-all duration-300">
                                      {item.label}
                                    </span>

                                    <span className="text-[11px] text-[#6B7280] font-light">
                                      {item.desc}
                                    </span>
                                  </div>
                                </div>

                                <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#C9A227] group-hover/item:translate-x-0.5 transition-all duration-300" />
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    end={link.href === "/"} // Only exact match for home
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] hover:-translate-y-0.5 ${isActive
                        ? "text-[#C9A227]"
                        : "text-[#111827] hover:text-[#C9A227]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>

                        <span
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#C9A227] transition-all duration-300 ease-out ${isActive
                            ? "w-8 shadow-[0_0_10px_rgba(201,162,39,0.45)]"
                            : "w-0 group-hover:w-8"
                            }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* RIGHT: CTA BUTTON */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setContactModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A227]"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={isMobileOpen}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#111827] hover:text-[#C9A227] hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* MOBILE DRAWER OVERLAY & SIDE PANEL */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

        <div
          ref={drawerRef}
          className={`absolute top-0 right-0 w-[82%] max-w-[380px] h-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform font-['Plus_Jakarta_Sans',sans-serif] ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Top Drawer Header */}
          <div className="p-5 border-b border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#C9A227]" />
              </div>
              <span className="text-sm font-bold font-['Outfit',sans-serif] text-[#0F172A]">
                Gurgaon <span className="text-[#C9A227]">RealEstate</span>
              </span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Navigation Menu"
              className="p-2 rounded-xl text-slate-500 hover:text-[#0F172A] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="p-5 overflow-y-auto flex-1 space-y-2">
            {NAV_LINKS.map((link) => {
              if (link.type === 'dropdown') {
                const isExpanded = mobileExpanded[link.name];
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion(link.name)}
                      aria-expanded={isExpanded}
                      className="w-full flex items-center justify-between py-3 text-sm font-semibold text-[#111827] hover:text-[#C9A227] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#C9A227]' : ''
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pl-3 space-y-1 border-l-2 border-[#C9A227]/30 my-1">
                        {link.items.map((item) => {
                          const SubIcon = item.icon;
                          return (
                            <NavLink
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-xs font-medium text-slate-700 hover:text-[#C9A227] transition-colors"
                            >
                              <SubIcon className="w-4 h-4 text-[#C9A227]" />
                              <span>{item.label}</span>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 border-b border-slate-100 text-sm font-semibold transition-all duration-300 ${isActive
                      ? "text-[#C9A227] border-[#C9A227]"
                      : "text-[#111827] hover:text-[#C9A227]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Bottom Drawer CTA */}
          <div className="p-5 border-t border-[#E5E7EB] bg-slate-50">
            <button
              onClick={() => {
                setContactModalOpen(true)
                setIsMobileOpen(false)
              }}
              className="w-full h-[50px] rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
            >
              <span>Contact Now</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}