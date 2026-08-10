// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import {
//   ArrowLeft,
//   Search,
//   SlidersHorizontal,
//   ChevronLeft,
//   ChevronRight,
//   ChevronDown,
//   MapPin,
//   Ruler,
//   Sparkles,
//   Home,
//   ArrowRight,
//   RotateCcw,
//   Building,
//   Lock
// } from 'lucide-react';
// import PropertyCard from './PropertyCard';
// import { useNavigate, useParams } from 'react-router-dom';
// import {data} from '../../Data/data'

// const FILTER_TYPES = [
//   'All Properties',
//   'Agriculture Land',
//   'Farm Land'
// ];

// // ==========================================
// // PARENT SEARCH RESULTS PAGE
// // ==========================================
// export default function PropertySearchPage() {
//   const params = useParams()
//   const navigate = useNavigate()

//   if(!params.query){
//      navigate('/')
//   }

//   const [searchTerm, setSearchTerm] = useState(params.query);
//   const [selectedType, setSelectedType] = useState('All Properties');
//   const [properties, setProperties] = useState([]);

//   const filteredProperties = useMemo(() => {
//       if(selectedType == 'All Properties'){
//          return data.filter((prop) => {
//             return prop.category.toLowerCase().includes(searchTerm.trim().toLowerCase())
//          })
//       }
//       else{
//         return properties.filter((prop) => {
//           return prop.category == selectedType
//         })
//       }

//   } , [selectedType , properties])

//   useEffect(() => {

//       const result = data.filter((prop) => {
//         return prop.category.toLowerCase().includes(searchTerm.trim().toLowerCase())
//       })
//       setProperties(result)

//   } , [searchTerm])


//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] pb-20 selection:bg-[#C9A227] selection:text-white">
//       {/* STICKY TOP SEARCH HEADER */}
//       <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">

//             {/* Go Back Button */}
//             <div className="w-full md:w-auto flex items-center justify-between md:justify-start">
//               <button
//                 onClick={() => navigate(-1)}
//                 className="group flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#E5E7EB] text-[#0F172A] shadow-sm hover:bg-[#C9A227] hover:text-white hover:border-[#C9A227] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none"
//                 aria-label="Go Back"
//               >
//                 <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
//               </button>

//               <span className="md:hidden text-sm font-bold font-['Outfit',sans-serif] text-[#0F172A]">
//                 Gurgaon <span className="text-[#C9A227]">RealEstate</span>
//               </span>
//             </div>

//             {/* Search Input Box */}
//             <div className="relative w-full md:w-[500px]">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search by locality, property, sector..."
//                 className="w-full h-12 pl-12 pr-4 bg-white border border-[#E5E7EB] rounded-full text-sm font-medium text-[#0F172A] placeholder-[#6B7280] shadow-sm focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300"
//               />
//             </div>

//             {/* Filter Dropdown */}
//             <div className="relative w-full md:w-auto">
//               <div className="relative inline-block w-full md:w-auto">
//                 <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227] pointer-events-none" />
//                 <select
//                   value={selectedType}
//                   onChange={(e) => setSelectedType(e.target.value)}
//                   className="w-full md:w-auto h-12 pl-11 pr-10 bg-white/80 backdrop-blur-md border border-[#E5E7EB] rounded-full text-xs font-bold uppercase tracking-wider text-[#0F172A] shadow-sm cursor-pointer hover:border-[#C9A227] focus:outline-none appearance-none transition-all duration-300"
//                 >
//                   {FILTER_TYPES.map((type) => (
//                     <option key={type} value={type} className="text-slate-900 font-medium py-2">
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
//               </div>
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* MAIN CONTENT AREA */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         {/* Results Count Heading */}
//         <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E7EB] pb-5 gap-2">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] text-[#0F172A] tracking-tight">
//               {filteredProperties.length} {properties.length === 1 ? 'Property' : 'Properties'} Found
//             </h1>
//             <p className="text-xs sm:text-sm text-[#6B7280] mt-1 font-medium">
//               Showing premium properties matching your search criteria in Gurugram.
//             </p>
//           </div>
//         </div>

//         {/* CARDS GRID */}
//         {properties.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProperties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         ) : (
//           /* EMPTY STATE UI */
//           <div className="my-16 flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm max-w-xl mx-auto">
//             <div className="w-20 h-20 rounded-full bg-slate-50 border border-[#E5E7EB] flex items-center justify-center text-[#C9A227] mb-6 shadow-inner">
//               <Building className="w-10 h-10 stroke-[1.5]" />
//             </div>
//             <h2 className="text-2xl font-bold font-['Outfit',sans-serif] text-[#0F172A]">
//               No Matching Properties
//             </h2>
//             <p className="text-xs sm:text-sm text-[#6B7280] mt-2 max-w-md font-normal leading-relaxed">
//               We couldn't find any luxury listings matching your current search parameters or selected filters.
//             </p>
//             <button
//               // onClick={handleResetFilters}
//               className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
//             >
//               <RotateCcw className="w-4 h-4" />
//               <span>Reset Filters</span>
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Building,
  RotateCcw
} from 'lucide-react';
import PropertyCard from './PropertyCard';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../../Data/data';

const FILTER_TYPES = [
  'All Properties',
  'Agriculture Land',
  'Farm Land'
];

export default function PropertySearchPage() {
  const params = useParams();
  const navigate = useNavigate();

  if (!params.query) {
    navigate('/');
  }

  // Active state & input query state
  const [searchInput, setSearchInput] = useState(params.query || '');
  const [activeSearchTerm, setActiveSearchTerm] = useState(params.query || '');
  const [selectedType, setSelectedType] = useState('All Properties');
  const [properties, setProperties] = useState([]);



  // Trigger search on CTA click or Form submit
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setActiveSearchTerm(searchInput);
  };

  useEffect(() => {
    const result = data.filter((prop) => {
      if (prop.category.toLowerCase().includes(activeSearchTerm.trim().toLowerCase()))
        return true
      else if (prop.title.toLowerCase().includes(activeSearchTerm.trim().toLowerCase()))
        return true
      else if (prop.location.address.toLowerCase().includes(activeSearchTerm.trim().toLowerCase()))
        return true
    });
    setProperties(result);
  }, [activeSearchTerm]);

  useEffect(() => {
    setActiveSearchTerm(params.query)
    setSearchInput(params.query)
  } , [params.query])


  const filteredProperties = useMemo(() => {
    if (selectedType === 'All Properties') {
      return properties;
    } else {
      return properties.filter((prop) => prop.category === selectedType);
    }
  }, [selectedType, properties]);

  const handleResetFilters = () => {
    setSearchInput('');
    setActiveSearchTerm('');
    setSelectedType('All Properties');
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] pb-24 selection:bg-[#C9A227] selection:text-white overflow-hidden">

      {/* SUBTLE AMBIENT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#C9A227]/10 via-transparent to-transparent blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 bg-[#C9A227]/5 rounded-full blur-3xl -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* ROW 1: GO BACK BUTTON (Left-aligned, independent row) */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            aria-label="Go Back"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#E5E7EB] text-[#0F172A] shadow-sm hover:bg-[#C9A227] hover:text-white hover:border-[#C9A227] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Branding element visible on mobile when header scrolls */}
          <span className="sm:hidden text-sm font-bold font-['Outfit',sans-serif] tracking-wide text-[#0F172A]">
            Gurgaon <span className="text-[#C9A227]">RealEstate</span>
          </span>
        </div>

        {/* ROW 2: FLOATING PREMIUM SEARCH TOOLBAR (One connected Glassmorphism Component) */}
        <section className="mb-10">
          <form
            onSubmit={handleSearchSubmit}
            className="relative bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] rounded-3xl p-3 md:p-3.5 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(201,162,39,0.12)]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">

              {/* 1. SEARCH INPUT SECTION */}
              <div className="relative flex-1 flex items-center px-3 py-2 md:py-0">
                <Search className="w-5 h-5 text-[#C9A227] shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search by property, locality, sector..."
                  className="w-full pl-3 pr-4 bg-transparent text-sm sm:text-base font-medium text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
                />
              </div>

              {/* VERTICAL SEPARATOR (Desktop Only) */}
              <div className="hidden md:block w-[1px] h-10 bg-[#E5E7EB] mx-1" />

              {/* 2. FILTER DROPDOWN */}
              <div className="relative group min-w-[200px]">
                <div className="relative flex items-center">
                  <SlidersHorizontal className="absolute left-4 w-4 h-4 text-[#C9A227] pointer-events-none" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full h-12 pl-11 pr-10 bg-slate-50/80 md:bg-transparent rounded-2xl md:rounded-full border border-slate-200/60 md:border-none text-xs font-bold uppercase tracking-wider text-[#0F172A] cursor-pointer hover:text-[#C9A227] focus:outline-none appearance-none transition-colors duration-200"
                  >
                    {FILTER_TYPES.map((type) => (
                      <option key={type} value={type} className="text-[#0F172A] font-medium py-2">
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 w-4 h-4 text-[#94A3B8] pointer-events-none transition-transform duration-300 group-hover:translate-y-0.5" />
                </div>
              </div>

              {/* 3. GOLD SEARCH BUTTON (CTA) */}
              <button
                type="submit"
                className="w-full md:w-auto h-12 px-8 rounded-2xl md:rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-white font-['Outfit',sans-serif] font-bold text-sm tracking-wide shadow-md shadow-[#C9A227]/25 hover:shadow-lg hover:shadow-[#C9A227]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search</span>
              </button>

            </div>
          </form>
        </section>

        {/* ROW 3: RESULTS BAR & ACTIVE FILTER SUMMARY */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] text-[#0F172A] tracking-tight">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1 font-medium">
              Showing premium real estate listings matching your criteria.
            </p>
          </div>

          {/* ACTIVE FILTER SUMMARY PILL */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs text-[#6B7280] font-medium hidden sm:inline">Showing results for:</span>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-sm text-xs font-semibold text-[#0F172A]">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span>{selectedType}</span>
              {activeSearchTerm && (
                <>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="text-[#C9A227] font-bold">"{activeSearchTerm}"</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* PROPERTY CARDS GRID */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE UI */
          <div className="my-16 flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white/80 backdrop-blur-md rounded-3xl border border-[#E5E7EB] shadow-sm max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-amber-50/50 border border-[#C9A227]/20 flex items-center justify-center text-[#C9A227] mb-6 shadow-inner">
              <Building className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h2 className="text-2xl font-bold font-['Outfit',sans-serif] text-[#0F172A]">
              No Matching Properties
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-2 max-w-md font-normal leading-relaxed">
              We couldn't find any luxury listings matching your current search parameters or selected filters.
            </p>
            
          </div>
        )}

      </main>
    </div>
  );
}