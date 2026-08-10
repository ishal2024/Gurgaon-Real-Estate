// import React, { useState, useEffect } from 'react';
// import {
//   MapPin,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles,
//   Building2
// } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight, Building2, Sparkles } from 'lucide-react';
import {projects} from '../Data/data'

// ==========================================
// SINGLE PROJECT CARD COMPONENT
// ==========================================
// function ProjectCard({ project }) {
//   const [currentImgIndex, setCurrentImgIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const images = project?.images && project.images.length > 0
//     ? project.images
//     : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'];

//   // Automatic Image Slider (3.5 seconds interval)
//   useEffect(() => {
//     if (isHovered || images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentImgIndex((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [images.length, isHovered]);

//   const handlePrevImage = (e) => {
//     e.stopPropagation();
//     setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNextImage = (e) => {
//     e.stopPropagation();
//     setCurrentImgIndex((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C9A227] transition-all duration-350 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif] h-full"
//     >
//       {/* 1. TOP AUTOMATIC IMAGE SLIDER */}
//       <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden bg-slate-900">
//         {images.map((imgUrl, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               idx === currentImgIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
//             }`}
//           >
//             <img
//               src={imgUrl}
//               alt={`${project.name || 'Project'} - ${idx + 1}`}
//               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
//               loading="lazy"
//             />
//             {/* Bottom Gradient Overlay for visual polish & indicator contrast */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
//           </div>
//         ))}

//         {/* Navigation Arrows (Visible on Hover for Desktop, Always on Mobile) */}
//         {images.length > 1 && (
//           <>
//             <button
//               onClick={handlePrevImage}
//               aria-label="Previous Image"
//               className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none cursor-pointer"
//             >
//               <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>

//             <button
//               onClick={handleNextImage}
//               aria-label="Next Image"
//               className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/60 text-white hover:bg-[#C9A227] hover:text-slate-950 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:outline-none cursor-pointer"
//             >
//               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>

//             {/* Pagination Dots */}
//             <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/40 backdrop-blur-md">
//               {images.map((_, dotIdx) => (
//                 <button
//                   key={dotIdx}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setCurrentImgIndex(dotIdx);
//                   }}
//                   aria-label={`Go to slide ${dotIdx + 1}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
//                     dotIdx === currentImgIndex ? 'w-4 sm:w-5 bg-[#C9A227]' : 'w-1.5 bg-white/50 hover:bg-white'
//                   }`}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* 2. CARD CONTENT AREA */}
//       <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
//         <div>
//           {/* Project Name */}
//           <h3 className="text-base sm:text-lg font-bold font-['Outfit',sans-serif] text-[#0F172A] group-hover:text-[#C9A227] transition-colors duration-300 truncate">
//             {project.name}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-1.5 mt-1.5 text-[#6B7280] text-xs font-medium">
//             <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
//             <span className="truncate">{project.location}</span>
//           </div>

//           {/* Description (Truncated to 2 Lines) */}
//           <p className="mt-2.5 text-xs text-[#6B7280] leading-relaxed  font-normal">
//             {project.description}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// ==========================================
// MAIN PROJECTS PAGE COMPONENT
// ==========================================
// export default function ProjectsPage() {
//   return (
//     <div className="w-full min-h-screen bg-[#F8FAFC] font-['Plus_Jakarta_Sans',sans-serif]">
      
//       {/* ==========================================
//           1. HERO BANNER SECTION (40-45vh)
//       ========================================== */}
//       <section className="relative h-[40vh] sm:h-[45vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
//         {/* Background Skyline / Property Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
//             alt="Gurugram Real Estate Projects"
//             className="w-full h-full object-cover opacity-35 scale-105 animate-pulse duration-10000"
//           />
//           {/* Dark Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-6 sm:mt-8">
//           {/* Header Badge */}
//           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-500">
//             <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
//             <span>Residential Portfolio</span>
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Outfit',sans-serif] tracking-tight text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             Our Projects
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-6 animate-in fade-in slide-in-from-bottom-5 duration-900">
//             Explore our collection of carefully selected residential projects across Gurugram, designed for modern living and smart investment.
//           </p>

//           {/* Breadcrumb Navigation */}
//           <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
//             <a href="/" className="hover:text-[#C9A227] transition-colors">Home</a>
//             <span className="text-slate-600">/</span>
//             <span className="text-[#C9A227]">Projects</span>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           2. PROJECTS GRID SECTION
//       ========================================== */}
//       <section className="relative py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Subtle Ambient Background Gradients */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

//         {/* Section Heading */}
//         <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight">
//             Explore Our Projects
//           </h2>
//           <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#6B7280] font-normal leading-relaxed">
//             Browse our premium residential developments located across the most sought-after locations in Gurugram.
//           </p>
//         </div>

//         {/* Projects Grid Container */}
//         {projects && projects.length > 0 ? (
//           <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
//             {projects.map((project, idx) => (
//               <ProjectCard key={project.id || idx} project={project} />
//             ))}
//           </div>
//         ) : (
//           /* ==========================================
//               3. EMPTY STATE (IF NO PROJECTS)
//           ========================================== */
//           <div className="text-center py-16 px-4 max-w-md mx-auto relative z-10 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-8">
//             <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#C9A227] flex items-center justify-center mx-auto mb-4">
//               <Building2 className="w-8 h-8" />
//             </div>
//             <h3 className="text-lg font-bold text-[#0F172A] font-['Outfit',sans-serif]">
//               No Projects Available
//             </h3>
//             <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
//               Please check back later for upcoming residential projects.
//             </p>
//             <a
//               href="/"
//               className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-slate-950 text-white hover:bg-[#C9A227] hover:text-slate-950 font-semibold text-xs transition-all duration-300"
//             >
//               Go Back Home
//             </a>
//           </div>
//         )}

//       </section>
//     </div>
//   );
// }


const ProjectShowcaseItem = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const isAltBg = index % 2 !== 0;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden py-20 lg:py-32 transition-all duration-1000 ease-out ${
        isAltBg ? 'bg-[#F8FAFC]' : 'bg-white'
      }`}
    >
      {/* Decorative Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
            isEven
              ? 'top-0 right-0 bg-gradient-to-br from-[#C9A227]/10 to-transparent'
              : 'bottom-0 left-0 bg-gradient-to-tr from-[#C9A227]/10 to-transparent'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center space-y-6 transition-all duration-1000 ease-out ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            } ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : isEven
                ? 'opacity-0 -translate-x-12'
                : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Index Badge */}
            <div className="inline-flex items-center space-x-2">
              <span className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
                Collection {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-[1px] w-8 bg-[#C9A227]/40" />
            </div>

            {/* Project Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight font-serif">
              {project.name}
            </h2>

            {/* Location with Icon */}
            <div className="flex items-center space-x-2 text-[#6B7280] font-medium text-base sm:text-lg">
              <MapPin className="w-5 h-5 text-[#C9A227] shrink-0" />
              <span>{project.location}</span>
            </div>

            {/* Description */}
            <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Luxury CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                {/* Gold Gradient Background */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C9A227] via-[#D8B438] to-[#B08A1E] transition-all duration-300 group-hover:opacity-90" />
                
                {/* Button Content */}
                <span className="relative flex items-center space-x-3 text-white text-sm tracking-wider uppercase font-semibold">
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Large Showcase Image Column */}
          <div
            className={`lg:col-span-6 transition-all duration-1000 ease-out ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            } ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : isEven
                ? 'opacity-0 translate-x-12'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-[#0F172A]">
              {/* Image Container */}
              <div className="h-[380px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden relative">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg text-white transition-all duration-300 group-hover:translate-y-0.5">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5 text-xs text-amber-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 inline" />
                      <span>{project.location.split(',')[0]}</span>
                    </div>
                    <p className="text-sm font-semibold text-white tracking-wide mt-0.5">
                      Premium Residential Project
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Elegant Custom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center my-0">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#C9A227] shadow-[0_0_8px_rgba(201,162,39,0.6)]" />
      </div>
    </div>
  );
};

// Main Export Component
export default function LuxuryProjectsShowcase() {
  return (
    <div className="bg-white text-[#111827] min-h-screen font-sans selection:bg-[#C9A227] selection:text-white">
      
      {/* 
        ===================================================================
        HERO SECTION 
        (Preserve your exact existing Hero Section here without modification)
        ===================================================================
      */}
      {/* <section className="relative bg-[#0F172A] text-white py-28 px-6 lg:px-12 overflow-hidden border-b border-[#E5E7EB]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#C9A227] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-white">
            Our Iconic Projects
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-xl font-light leading-relaxed">
            Discover our curated portfolio of landmark residences designed with uncompromising craftsmanship, timeless sophistication, and modern elegance.
          </p>
        </div>
      </section> */}

      <section className="relative h-[40vh] sm:h-[45vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Skyline / Property Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Gurugram Real Estate Projects"
            className="w-full h-full object-cover opacity-35 scale-105 animate-pulse duration-10000"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-6 sm:mt-8">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Residential Portfolio</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Outfit',sans-serif] tracking-tight text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our Projects
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-6 animate-in fade-in slide-in-from-bottom-5 duration-900">
            Explore our collection of carefully selected residential projects across Gurugram, designed for modern living and smart investment.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <a href="/" className="hover:text-[#C9A227] transition-colors">Home</a>
            <span className="text-slate-600">/</span>
            <span className="text-[#C9A227]">Projects</span>
          </div>
        </div>
      </section>

      {/* 
        ===================================================================
        LUXURY VERTICAL PROJECT SHOWCASE
        (Replaces the old product cards grid)
        ===================================================================
      */}
      <main className="relative">
        {projects.map((project, index) => (
          <ProjectShowcaseItem 
            key={project.id || index} 
            project={project} 
            index={index} 
          />
        ))}
      </main>

    </div>
  );
}
