import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Youtube, 
  Heart, 
  Building2 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import favicon from '../assets/favicon.png'

// Navigation Quick Links
const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'Properties', href: '#' },
  // { label: 'Apartments', href: '#' },
  // { label: 'Flats', href: '#' },
  { label: 'Projects', href: '/project' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// Social Media Links Data
// const SOCIAL_LINKS = [
//   { id: 'facebook', icon: Facebook, label: 'Facebook', href: '#' },
//   { id: 'instagram', icon: Instagram, label: 'Instagram', href: '#' },
//   { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
//   { id: 'youtube', icon: Youtube, label: 'YouTube', href: '#' }
// ];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0F172A] text-[#E5E7EB] font-['Plus_Jakarta_Sans',sans-serif] border-t-2 border-[#C9A227] overflow-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[300px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        
        {/* Responsive 2-Column Grid (Desktop/Tablet: 2 Cols, Mobile: 1 Col Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/[0.08]">
          
          {/* LEFT SECTION: Logo, Company Name, Contact Info & Socials (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Logo & Company Name */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#b08d1e] to-[#C9A227] flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/10 transition-transform duration-300 hover:scale-105">
                   <img src={favicon} alt="Logo" className='w-full h-full' />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
                  Gurugram <span className="text-[#C9A227]">Realty</span>
                </span>
              </div>

              {/* Tagline / Subtext */}
              <p className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md leading-relaxed">
                Your premier partner for luxury residential sanctuaries and high-return commercial spaces in Gurugram, Haryana.
              </p>

              {/* Contact Details List */}
              <div className="space-y-3.5 pt-2">
                
                {/* Address */}
                <div className="group flex items-center gap-3.5 text-xs sm:text-sm text-[#E5E7EB] transition-colors duration-300 hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-light">LID Mall Street Shop No. 126–134, First Floor Sector 35, Sohna Haryana, India</span>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-3.5 text-xs sm:text-sm text-[#E5E7EB] transition-colors duration-300 hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+919876543210" className="font-light tracking-wide hover:underline decoration-[#C9A227]">
                    +91 9813367436 , +91 9813119306
                  </a>
                </div>

                {/* Email */}
                <div className="group flex items-center gap-3.5 text-xs sm:text-sm text-[#E5E7EB] transition-colors duration-300 hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-[#C9A227] shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@gurugramrealty.com" className="font-light hover:underline decoration-[#C9A227]">
                    info@gurugramrealty.com
                  </a>
                </div>

              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-2">
              <span className="text-xs text-[#94A3B8] font-semibold tracking-wider uppercase block mb-3 font-['Outfit',sans-serif]">
                Connect With Us
              </span>
              {/* <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-800/40 text-slate-300 flex items-center justify-center transition-all duration-300 hover:bg-[#C9A227] hover:border-[#C9A227] hover:text-slate-950 hover:-translate-y-1 shadow-sm"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div> */}
            </div>

          </div>

          {/* RIGHT SECTION: Quick Links (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-['Outfit',sans-serif] relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#C9A227]" />
            </h3>

            {/* Vertically Aligned Links List */}
            <ul className="space-y-2.5 pt-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] font-light transition-all duration-300 hover:text-[#C9A227] hover:translate-x-1"
                  >
                    {/* Hover Arrow Indicator */}
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A227] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT FOOTER */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-light">
          
          {/* Left Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Gurugram Realty. All Rights Reserved.
          </p>

          {/* Right Tagline */}
          <p className="inline-flex items-center gap-1.5 text-center sm:text-right">
            Designed with <Heart className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" /> for finding dream homes.
          </p>

        </div>

      </div>
    </footer>
  );
}