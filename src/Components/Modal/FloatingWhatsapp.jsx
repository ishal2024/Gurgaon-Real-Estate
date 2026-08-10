import React, { useState, useEffect, useRef } from 'react';

// Configuration Props Interface / Default Values
const DEFAULT_PHONE_NUMBER = '919813367436'; // Replace with real phone number (include country code without +)
const DEFAULT_MESSAGE = 'Hello! I am interested in your luxury properties across Gurugram.';

export default function FloatingWhatsApp({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  message = DEFAULT_MESSAGE,
  desktopTooltipText = 'Chat with us on WhatsApp',
  mobileTooltipText = 'Need Help?',
  autoHideDelay = 6000, // 6 seconds auto hide
  inactivityDelay = 15000, // 15 seconds idle show
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const idleTimerRef = useRef(null);

  // Initial Tooltip Display & Inactivity Timer Logic
  useEffect(() => {
    // Show tooltip shortly after mount
    const initialTimer = setTimeout(() => {
      if (!hasDismissed && !hasInteracted) {
        setShowTooltip(true);
      }
    }, 1200);

    // Auto-hide tooltip after autoHideDelay
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1200 + autoHideDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
    };
  }, [hasDismissed, hasInteracted, autoHideDelay]);

  // Handle Idle Re-appearance
  useEffect(() => {
    if (hasDismissed || hasInteracted) return;

    const resetIdleTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      idleTimerRef.current = setTimeout(() => {
        if (!hasDismissed && !hasInteracted) {
          setShowTooltip(true);
          // Auto hide again after delay
          setTimeout(() => setShowTooltip(false), autoHideDelay);
        }
      }, inactivityDelay);
    };

    const events = ['mousemove', 'keydown', 'touchstart', 'scroll'];
    events.forEach((evt) => window.addEventListener(evt, resetIdleTimer, { passive: true }));

    resetIdleTimer();

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((evt) => window.removeEventListener(evt, resetIdleTimer));
    };
  }, [hasDismissed, hasInteracted, autoHideDelay, inactivityDelay]);

  // Click Handler to Launch WhatsApp
  const handleWhatsAppClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Close Tooltip Directly
  const handleDismissTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
    setHasDismissed(true);
  };

  return (
    <>
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes wa-ripple {
          0% { transform: scale(0.95); opacity: 0.7; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        @keyframes wa-pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.7; }
        }
        @keyframes wa-slide-in {
          0% { opacity: 0; transform: translateX(12px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        .animate-wa-float {
          animation: wa-float 4.5s ease-in-out infinite;
        }
        .animate-wa-ripple {
          animation: wa-ripple 2.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .animate-wa-pulse-dot {
          animation: wa-pulse-dot 2s ease-in-out infinite;
        }
        .animate-wa-slide-in {
          animation: wa-slide-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-wa-float,
          .animate-wa-ripple,
          .animate-wa-pulse-dot,
          .animate-wa-slide-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* Floating Widget Container */}
      <div 
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 md:bottom-8 md:right-8 z-[9999] flex items-center gap-3 select-none pointer-events-none"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        
        {/* Glassmorphism Tooltip Bubble */}
        {showTooltip && (
          <div className="pointer-events-auto relative group flex items-center gap-2.5 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-2xl border border-white/10 animate-wa-slide-in max-w-[220px] sm:max-w-[280px]">
            
            {/* Online Status Indicator */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            {/* Tooltip Content */}
            <div className="flex-1 text-xs sm:text-sm font-medium tracking-tight leading-snug">
              <span className="hidden sm:inline">{desktopTooltipText}</span>
              <span className="inline sm:hidden">{mobileTooltipText}</span>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={handleDismissTooltip}
              aria-label="Close notification"
              className="text-slate-400 hover:text-white p-0.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Tail Arrow Pointing to Button */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[7px] border-l-slate-900/85" />
          </div>
        )}

        {/* Main Floating Button Wrapper */}
        <div className="pointer-events-auto relative animate-wa-float">
          
          {/* Continuous Ripple Outer Aura */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-wa-ripple pointer-events-none" />

          {/* Pulse Glow Effect */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-40 blur-md transition duration-500 group-hover:opacity-100" />

          {/* WhatsApp Main Button CTA */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            aria-label="Open WhatsApp Chat"
            className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-xl shadow-emerald-900/30 border border-white/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 hover:scale-108 active:scale-95 transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
          >
            {/* Subtle Glass Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

            {/* Official WhatsApp Vector Logo */}
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
              viewBox="0 0 24 24"
            >
              <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.41-.56-.42-.15 0-.32-.01-.5-.01-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
            </svg>

            {/* Floating Notification Badge */}
            <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
              <span className="animate-wa-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
            </span>
          </button>

        </div>

      </div>
    </>
  );
}