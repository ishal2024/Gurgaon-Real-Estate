import React, { useState } from 'react';
import { 
  Building2, 
  Landmark, 
  ShieldCheck, 
  Users, 
  Award, 
  Briefcase, 
  Target, 
  Eye, 
  HeartHandshake, 
  BadgeCheck, 
  Sparkles,
  Compass,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  Lock,
  Search,
  // Linkedin,
  // Twitter,
  // Instagram,
  ChevronRight,
  Maximize2,
  UserRound, 
  ArrowRight, 
  Quote 
} from 'lucide-react';
import mainImage from '../assets/WorkspaceImages/main.png'
import imageOne from '../assets/WorkspaceImages/image1.png'
import imageTwo from '../assets/WorkspaceImages/image2.png'
import imageThree from '../assets/WorkspaceImages/image3.png'
import imageFour from '../assets/WorkspaceImages/image4.png'

// ==========================================
// 1. HERO BANNER
// ==========================================
function AboutHero() {
  return (
    <section className="relative w-full h-[42vh] min-h-[340px] flex items-center justify-center bg-[#0F172A] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Skyline Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-out"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F172A]/40 to-[#0F172A]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-6 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 mb-4 shadow-inner">
          <a href="#" className="hover:text-[#C9A227] transition-colors">Home</a>
          <span className="text-slate-500">/</span>
          <span className="text-[#C9A227] font-medium">About Us</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
          About Our <span className="text-[#C9A227]">Company</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Helping people discover premium properties in Gurugram with honesty, expertise, and complete transparency.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// 2. OUR STORY
// ==========================================
function OurStory() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10 group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Gurugram Luxury Property Architecture" 
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
            </div>
            {/* Gold Backdrop Blur Decor */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#C9A227]/15 rounded-full blur-3xl -z-0 pointer-events-none" />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-[#C9A227]" />
              <span>Our Heritage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
              Our Story
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
              <p>
                Founded over a decade ago, Gurugram Realty was established with a singular focus: to redefine how high-net-worth buyers, investors, and families navigate the dynamic Gurugram real estate landscape. What began as a boutique advisory firm has evolved into one of the city's most trusted real estate brand names.
              </p>
              <p>
                From premier residential enclaves along Golf Course Road to sprawling commercial hubs on Dwarka Expressway, our deep local intelligence and institutional discipline ensure that every property transaction is seamless and rewarding.
              </p>
              <p>
                We hold ourselves to uncompromising standards of due diligence, pre-verifying land titles, RERA documentation, and developer credentials so our clients invest with absolute clarity and peace of mind.
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-[#C9A227] shadow-xs">
              <p className="text-xs sm:text-sm font-medium text-[#0F172A] italic font-['Outfit',sans-serif]">
                "We don't just sell properties—we build lifelong relationships."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. WHO WE ARE
// ==========================================
function WhoWeAre() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5E7EB]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase">
              <Users className="w-3 h-3 text-[#C9A227]" />
              <span>Identity & Expertise</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
              Who We Are
            </h2>

            <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
              We are a team of veteran real estate strategists, legal advisors, and sector specialists deeply rooted in Gurugram’s growth story. Our multi-disciplinary approach pairs micro-market analysis with a customer-first ethos, ensuring your real estate goals are achieved smoothly.
            </p>

            {/* Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A]">Local Gurgaon Expertise</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A]">12+ Years Experience</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A]">Customer-First Approach</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A]">Transparent Buying Process</span>
              </div>
            </div>

            {/* Three Small Premium Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] text-white text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" /> Trusted Company
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] text-white text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" /> Verified Properties
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] text-white text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" /> Professional Team
              </span>
            </div>
          </div>

          {/* Right Column Office Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="Gurugram Realty Headquarters" 
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. MISSION • VISION • VALUES (GLASSMORPHISM)
// ==========================================
const PILLARS = [
  {
    id: 'mission',
    title: 'Our Mission',
    desc: 'Empowering individuals and institutional investors with pre-verified luxury properties, sound investment modeling, and end-to-end guidance.',
    icon: Target
  },
  {
    id: 'vision',
    title: 'Our Vision',
    desc: 'To set the gold standard in North Indian real estate advisory—distinguished by technological transparency, legal rigour, and ethical conduct.',
    icon: Eye
  },
  {
    id: 'values',
    title: 'Our Core Values',
    desc: 'Unwavering integrity, client-centric dedication, analytical clarity, and long-term stewardship over single-transaction gain.',
    icon: Compass
  }
];

function MissionVisionValues() {
  return (
    <section className="relative w-full bg-[#0F172A] py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden text-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-['Outfit',sans-serif]">
            Mission • Vision • Values
          </h2>
        </div>

        {/* 3 Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                className="group relative rounded-3xl p-7 sm:p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#C9A227] shadow-2xl transition-all duration-350 ease-out hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Gold Accent Top Border Indicator */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent group-hover:via-[#C9A227] transition-all" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-6 group-hover:bg-[#C9A227] group-hover:text-[#0F172A] transition-all duration-350">
                    <IconComp className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] mb-3 text-white group-hover:text-[#C9A227] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {p.desc}
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

// ==========================================
// 5. WHY CLIENTS TRUST US
// ==========================================
const TRUST_REASONS = [
  { id: '1', title: 'Transparent Deals', desc: 'Zero hidden fees or unclear contractual clauses.', icon: FileCheck2 },
  { id: '2', title: 'Local Market Knowledge', desc: 'Decade-long sector micro-trends and valuation analytics.', icon: TrendingUp },
  { id: '3', title: 'Professional Guidance', desc: 'Certified consultants advising across all deal stages.', icon: Briefcase },
  { id: '4', title: 'Verified Documentation', desc: 'Pre-vetted title deeds, land approvals, and RERA compliance.', icon: ShieldCheck },
  { id: '5', title: 'Trusted Network', desc: 'Direct partnerships with top Tier-1 Gurgaon developers.', icon: Landmark },
  { id: '6', title: 'Long-Term Relationships', desc: 'Dedicated post-handover support and resale management.', icon: HeartHandshake }
];

function WhyClientsTrustUs() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Lock className="w-3 h-3 text-[#C9A227]" />
            <span>The Confidence Factor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Why Clients Trust Us
          </h2>
        </div>

        {/* 6 Horizontal Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TRUST_REASONS.map((reason) => {
            const IconComp = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-[#C9A227] transition-all duration-300 ease-out flex items-center gap-4 sm:gap-5"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#C9A227]/10 border border-[#C9A227]/25 flex items-center justify-center shrink-0 group-hover:bg-[#C9A227] transition-all duration-300">
                  <IconComp className="w-6 h-6 text-[#C9A227] group-hover:text-[#0F172A] transition-colors" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-['Outfit',sans-serif] mb-1 group-hover:text-[#C9A227] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
                    {reason.desc}
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



function MeetExperts() {
  const HIGHLIGHTS = [
    'Trusted Advisor',
    'Verified Property Expert',
    'Local Gurgaon Specialist',
    'Client-First Approach'
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-28 font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5E7EB]/60 overflow-hidden selection:bg-[#C9A227] selection:text-white">
      
      {/* SUBTLE BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-[#0F172A]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#0F172A] text-xs font-semibold tracking-wider uppercase shadow-xs mb-4">
            <UserRound className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Meet Our Founder
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] font-medium mt-3 leading-relaxed">
            Meet the visionary behind Gurgaon RealEstate, dedicated to helping families and investors make confident, transparent property decisions.
          </p>
        </div>

        {/* SPLIT SCREEN FOUNDER SPOTLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Details (~55% width) */}
          <div className="lg:col-span-7 space-y-8 max-w-2xl mx-auto lg:mx-0">
            
            {/* Header Block */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight">
                Javed Khan
              </h3>
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-[#C9A227]/30 text-[#C9A227] text-xs font-bold tracking-wide uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Founder & CEO</span>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
              <p>
                With over a decade of deep involvement in Gurugram's rapidly evolving luxury and commercial property landscape, Javed Khan established Gurgaon RealEstate with a singular mission: bringing unprecedented transparency and institutional integrity to real estate advisory.
              </p>
              <p>
                Having personally facilitated high-value transactions across primary luxury developments, prime plots, and commercial assets, Javed believes that property decisions should be guided by objective market data, crystal-clear legal due diligence, and an uncompromising client-first ethos.
              </p>
              <p>
                Under his leadership, our firm has grown into one of the most trusted boutique real estate consultancies in Gurugram, building enduring partnerships with buyers, NRI investors, and top-tier developers alike.
              </p>
            </div>

            {/* Premium Highlights Grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight}
                  className="group flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0F172A] group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div> */}

            {/* Quote Box */}
            {/* <div className="relative bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#C9A227] border border-[#E5E7EB] shadow-sm">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C9A227]/15" />
              <p className="text-sm sm:text-base font-medium italic text-[#0F172A] leading-relaxed">
                "Real estate is not about selling properties; it's about helping people build their legacy, secure their wealth, and build their future with total peace of mind."
              </p>
              <p className="text-xs font-bold text-[#C9A227] mt-3 uppercase tracking-wider">
                — Javed Khan
              </p>
            </div> */}

            {/* Contact CTA Button */}
            {/* <div className="pt-2">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-white font-['Outfit',sans-serif] font-bold text-sm tracking-wide shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Connect With Javed</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div> */}

          </div>

          {/* RIGHT COLUMN: Founder Image & Experience Badge (~45% width) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A227]/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-lg -z-10" />

            {/* Main Portrait Frame */}
            <div className="relative group w-full max-w-md bg-white p-3 rounded-3xl border border-[#E5E7EB] shadow-2xl transition-all duration-500 hover:shadow-3xl">
              <div className="relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                  alt="Javed Khan - Founder & CEO"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* OVERLAPPING FLOATING EXPERIENCE BADGE */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-xl border border-white/80 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#B89218] flex items-center justify-center text-white shadow-md shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-extrabold font-['Outfit',sans-serif] text-[#0F172A]">
                    12+ Years
                  </div>
                  <div className="text-xs font-semibold text-[#6B7280]">
                    Gurgaon Market Expertise
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}



// ==========================================
// 7. COMPANY JOURNEY TIMELINE
// ==========================================
const MILESTONES = [
  { year: '2014', title: 'Company Founded', desc: 'Established in Gurgaon Sector 35 with a mission to bring legal integrity to luxury sales.' },
  { year: '2017', title: '100+ Happy Clients', desc: 'Crossed early milestones along Golf Course Road residential developments.' },
  { year: '2020', title: 'Expanded Across Gurugram', desc: 'Incorporated commercial advisory and Dwarka Expressway focus.' },
  { year: '2023', title: '1000+ Properties Vetted', desc: 'Institutionalized 100% pre-verified RERA legal checks.' },
  { year: '2026', title: 'Trusted Real Estate Brand', desc: 'Recognized as a leading luxury real estate consultancy in North India.' }
];

function CompanyJourney() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Our Evolution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Company Journey
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#0F172A] border-2 border-[#C9A227] text-[#C9A227] flex items-center justify-center font-bold text-xs shadow-md">
                    <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  </div>

                  {/* Card Container */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 pl-0 sm:px-8">
                    <div className="group relative bg-[#F8FAFC] rounded-2xl p-6 border border-[#E5E7EB] shadow-xs hover:shadow-xl hover:border-[#C9A227] hover:-translate-y-1 transition-all duration-350">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C9A227] text-[#0F172A] font-extrabold text-xs mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-['Outfit',sans-serif] mb-1 group-hover:text-[#C9A227] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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

// ==========================================
// 8. OFFICE GALLERY
// ==========================================
const GALLERY_IMAGES = [
  { id: 'g1', title: 'Main Executive Lounge', img: mainImage, featured: true },
  { id: 'g2', title: 'Private Client Suite', img: imageOne, featured: false },
  { id: 'g3', title: 'Strategy Boardroom', img: imageTwo, featured: false },
  { id: 'g4', title: 'Reception Gallery', img: imageThree, featured: false },
  { id: 'g5', title: 'Legal Advisory Wing', img: imageFour, featured: false },
  ];

function OfficeGallery() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5E7EB]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Building2 className="w-3 h-3 text-[#C9A227]" />
            <span>Environment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Our Workspace
          </h2>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xs cursor-pointer ${
                idx === 0 ? 'md:col-span-2 md:row-span-2 h-[340px] md:h-[500px]' : 'h-[240px]'
              }`}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" 
              />
              {/* Glass / Overlay Effects on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent opacity-100 transition-opacity duration-350 flex items-end p-5">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-xs font-bold text-[#C9A227] tracking-wider uppercase">Workspace</p>
                    <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// DEDICATED ABOUT US PAGE ENTRY
// ==========================================
export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#111827] antialiased selection:bg-[#C9A227] selection:text-white">
      <AboutHero />
      <MeetExperts />
      <OurStory />
      <WhoWeAre />
      <MissionVisionValues />
      <WhyClientsTrustUs />
      <CompanyJourney />
      <OfficeGallery />
    </main>
  );
}