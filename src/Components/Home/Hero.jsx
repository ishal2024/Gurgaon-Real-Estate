import React, { useState, useEffect, useRef } from "react";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Design tokens — kept identical to the header component              */
/* ------------------------------------------------------------------ */
const COLORS = {
  navy: "#0F172A",
  navyLight: "#1E293B",
  gold: "#C9A227",
  goldLight: "#E4C765",
  white: "#FFFFFF",
  border: "rgba(255,255,255,0.15)",
};

const FONT = "'Plus Jakarta Sans', 'Manrope', ui-sans-serif, system-ui, sans-serif";

const CATEGORIES = [
  "Premium Flats",
  "Farm Lands",
  "Premium Villas",
  "Agriculture Lands",
  "Investment Properties",
];

/* ------------------------------------------------------------------ */
/* Typewriter hook — types, pauses, deletes, moves to next word         */
/* ------------------------------------------------------------------ */
function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pause * 0.15);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

/* ------------------------------------------------------------------ */
/* Skyline silhouette — self-contained SVG backdrop                    */
/* (swap the <div> background for a real photograph in production      */
/*  by replacing HERO_IMAGE_URL below with your own asset)              */
/* ------------------------------------------------------------------ */
const HERO_IMAGE_URL = "https://images.pexels.com/photos/27307397/pexels-photo-27307397.jpeg"; // e.g. "/images/gurgaon-skyline.jpg"

function SkylineBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="55%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#070B14" />
        </linearGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#233149" />
          <stop offset="100%" stopColor="#0B1220" />
        </linearGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#skyGrad)" />
      {[
        [40, 330, 90, 370],
        [150, 260, 70, 440],
        [240, 300, 110, 400],
        [370, 200, 85, 500],
        [470, 350, 65, 350],
        [555, 150, 100, 550],
        [675, 280, 75, 420],
        [770, 100, 120, 600],
        [910, 240, 70, 460],
        [1000, 190, 95, 510],
        [1115, 320, 80, 380],
        [1215, 160, 110, 540],
        [1345, 260, 70, 440],
        [1435, 210, 90, 490],
        [1545, 300, 60, 400],
      ].map(([x, y, w, hgt], i) => (
        <rect key={i} x={x} y={700 - hgt} width={w} height={hgt} fill="url(#towerGrad)" opacity={0.85 - (i % 3) * 0.08} />
      ))}
      {/* window glow flecks */}
      {Array.from({ length: 90 }).map((_, i) => {
        const x = 40 + ((i * 173) % 1520);
        const y = 250 + ((i * 97) % 420);
        return (
          <rect
            key={`w-${i}`}
            x={x}
            y={y}
            width={5}
            height={7}
            fill={i % 5 === 0 ? "#C9A227" : "#E2E8F0"}
            opacity={i % 4 === 0 ? 0.55 : 0.25}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Floating search bar                                                  */
/* ------------------------------------------------------------------ */
function SearchBar({ mounted }) {
  const [focused, setFocused] = useState(false);
  const searchRef = useRef(null)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    console.log("Function is calling")
  
    const text = searchRef.current.value.trim();

    if (!text) {
      toast.warning("Please enter a property name or location to search.");
      return;
    }

    navigate(`/search/${text}`);
  
};

  return (
    <div
      className={`w-full max-w-2xl transition-all duration-700 ease-in-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: "450ms" }}
    >
      <div
        className="flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2 backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-2xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 20px 50px -15px rgba(0,0,0,0.5)",
        }}
      >
        {/* Location box */}
        <button
          className="flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3.5 text-left transition-colors duration-200 ease-in-out hover:bg-white/10 sm:rounded-full"
          type="button"
        >
          <MapPin className="h-4 w-4 shrink-0" style={{ color: COLORS.gold }} />
          <span className="text-[14px] font-semibold" style={{ color: COLORS.white, fontFamily: FONT }}>
            Gurgaon
          </span>
        </button>

        <span className="hidden h-6 w-px shrink-0 sm:block" style={{ backgroundColor: COLORS.border }} />

        {/* Search input */}
        <div className="flex flex-1 items-center gap-2 px-4 py-1 sm:px-3">
          <Search className="h-4 w-4 shrink-0 opacity-70" style={{ color: COLORS.white }} />
          <input
            type="text"
            placeholder="Search by locality, property..."
            ref={searchRef}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full min-w-0 bg-transparent py-2.5 text-[14px] font-medium text-white placeholder-white/50 outline-none transition-all duration-200 ease-in-out"
            style={{ fontFamily: FONT }}
          />
        </div>

        {/* Search button */}
        <button
          type="submit"
          onClick={handleSearch}
          className="group flex shrink-0 items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[14px] font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-[0.98] sm:rounded-full"
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
            color: COLORS.navy,
            fontFamily: FONT,
          }}
        >
          Search
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </button>
      </div>
      <div
        className="pointer-events-none mx-auto mt-0 h-px w-0 transition-all duration-500 ease-in-out"
        style={{ backgroundColor: COLORS.gold, width: focused ? "40%" : "0%" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero Section                                                         */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const typed = useTypewriter(CATEGORIES);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative flex w-full items-center overflow-hidden"
      style={{ minHeight: "clamp(560px, 44vh, 720px)", fontFamily: FONT }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {HERO_IMAGE_URL ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
          />
        ) : (
          <SkylineBackdrop />
        )}
        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(7,11,20,0.92) 0%, rgba(7,11,20,0.72) 38%, rgba(7,11,20,0.35) 65%, rgba(7,11,20,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(7,11,20,0.55) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-0">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-2xl">
          <p
            className={`text-[11px] font-semibold tracking-[0.3em] transition-all duration-700 ease-in-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ color: COLORS.gold, transitionDelay: "80ms" }}
          >
            GURUGRAM'S FINEST ADDRESSES
          </p>

          <h1
            className={`mt-4 text-4xl font-bold leading-[1.15] text-white transition-all duration-700 ease-in-out sm:text-5xl lg:text-[3.25rem] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Find Your Dream Property
            <br />
            in Gurugram
          </h1>

          {/* Typewriter line — reserved height prevents layout shift */}
          <div
            className={`mt-4 flex h-8 items-center transition-all duration-700 ease-in-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            <span className="text-lg font-semibold sm:text-xl" style={{ color: COLORS.goldLight }}>
              {typed}
            </span>
            <span
              className="ml-0.5 inline-block h-6 w-[2px] animate-pulse"
              style={{ backgroundColor: COLORS.goldLight }}
              aria-hidden="true"
            />
          </div>

          <p
            className={`mt-4 max-w-md text-[15px] leading-relaxed text-white/70 transition-all duration-700 ease-in-out lg:max-w-lg ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "340ms" }}
          >
            Discover premium real estate opportunities in Gurugram with trusted local experts.
          </p>

          <div className="mt-8 flex w-full justify-center lg:justify-start">
            <SearchBar mounted={mounted} />
          </div>
        </div>
      </div>
    </section>
  );
}