import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  Building2,
  Sparkles,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingSpinner from './Modal/LoadingSpinner';

// ==========================================
// 1. HERO BANNER
// ==========================================
function ContactHero() {
  return (
    <section className="relative w-full h-[40vh] min-h-[320px] flex items-center justify-center bg-[#0F172A] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Skyline Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F172A]/40 to-[#0F172A]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-6 animate-fade-in">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 mb-4 shadow-inner">
          <a href="#" className="hover:text-[#C9A227] transition-colors">Home</a>
          <span className="text-slate-500">/</span>
          <span className="text-[#C9A227] font-medium">Contact Us</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
          Contact <span className="text-[#C9A227]">Us</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          We're here to help you find your dream property. Get in touch with our experts today.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// 2. CONTACT INFORMATION + FORM (UNIFIED GLASS CONTAINER)
// ==========================================
const CONTACT_CARDS = [
  {
    id: 'phone',
    title: 'Phone',
    value: `+91 9813367436 , 
            +91 9813119306`,
    subtitle: 'Mon-Sat from 9am to 7pm',
    icon: Phone,
    href: 'tel:+919876543210'
  },
  {
    id: 'email',
    title: 'Email',
    value: 'info@gurugramrealty.com',
    subtitle: 'Our advisory team responds within 2 hours',
    icon: Mail,
    href: 'mailto:info@gurugramrealty.com'
  },
  {
    id: 'address',
    title: 'Office Address',
    value: `LID Mall Street
Shop No. 126–134, First Floor
Sector 35, Sohna
Haryana, India`,
    subtitle: 'Private Parking & Valet Available',
    icon: MapPin,
    href: '#map'
  },
  {
    id: 'hours',
    title: 'Working Hours',
    value: 'Monday – Saturday',
    subtitle: '9:00 AM – 7:00 PM IST',
    icon: Clock3,
    href: null
  }
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    userMail: '',
    number: '',
    subject: '',
    message: ''
  });

  const [isLoading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (isLoading) return
      setLoading(true)
      const response = await axios.post('https://star-career-point.onrender.com/api/mail/realestate', formData, { withCredentials: true })
      setLoading(false)
      toast.success("Your inquiry has been sent successfully! We'll get back to you as soon as possible.");

    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      setLoading(false)
    }

  };

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Unified Glassmorphism Container */}
        <div className="bg-[#F8FAFC]/90 backdrop-blur-xl rounded-3xl border border-[#E5E7EB] shadow-2xl shadow-slate-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT SIDE: Contact Information (35% on Desktop -> lg:col-span-4 or col-span-5) */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Background ambient glow inside dark side */}
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#C9A227]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-4">
                  <Sparkles className="w-3 h-3 text-[#C9A227]" />
                  <span>Reach Out</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit',sans-serif] tracking-tight text-white mb-3">
                  Get In Touch
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-8">
                  Our team is ready to answer your questions and help you find the perfect luxury property in Gurugram.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {CONTACT_CARDS.map((card) => {
                    const IconComp = card.icon;
                    return (
                      <div
                        key={card.id}
                        className="group p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C9A227] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C9A227] transition-all duration-300">
                          <IconComp className="w-5 h-5 text-[#C9A227] group-hover:text-[#0F172A] transition-colors" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-[#C9A227] tracking-wider uppercase">
                            {card.title}
                          </p>
                          {card.href ? (
                            <a
                              href={card.href}
                              className="text-xs sm:text-sm font-medium text-white hover:text-[#C9A227] transition-colors leading-snug block mt-0.5 font-['Plus_Jakarta_Sans',sans-serif] break-words"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="text-xs sm:text-sm font-medium text-white leading-snug mt-0.5">
                              {card.value}
                            </p>
                          )}
                          <p className="text-[11px] text-slate-400 font-light mt-0.5">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0" />
                <p className="text-xs text-slate-300 font-light leading-tight">
                  100% Pre-verified listings & zero hidden advisory charges.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form (65% on Desktop -> lg:col-span-7) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight mb-2">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] font-light mb-8">
                  Fill out the form below and one of our senior advisors will reach out immediately.
                </p>

                {/* {status === 'success' && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <p className="text-xs sm:text-sm font-medium">
                      Thank you! Your message has been received. Our advisory team will contact you shortly.
                    </p>
                  </div>
                )} */}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Vikramaditya Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="email"
                        name="userMail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                        Phone Number <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Golf Course Road Penthouse Inquiry"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                      Message <span className="text-[#C9A227]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property requirements, budget, or preferred sector..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Luxury Gold Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-[56px] rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] hover:from-[#B89218] hover:to-[#C9A227] text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner size={30} />
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 3. OFFICE LOCATION (MAP & FLOATING GLASS CARD)
// ==========================================
function OfficeLocation() {
  return (
    <section id="map" className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5E7EB]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#C9A227] text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Building2 className="w-3 h-3 text-[#C9A227]" />
            <span>Headquarters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight font-['Outfit',sans-serif]">
            Visit Our Office
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] font-light">
            Find us easily on Golf Course Road and schedule a private consultation.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-2xl shadow-slate-900/10 group">

          {/* Embedded Google Map Iframe (DLF Horizon Center / Golf Course Rd Gurugram area) */}
          <iframe
            title="Gurugram Realty Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.6888744941593!2d77.06297577519041!3d28.277449400117302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2500275aa56b%3A0x2e754977ce72941f!2sLID%20Mall%20Street!5e0!3m2!1sen!2sin!4v1785935800574!5m2!1sen!2sin"
            className="w-full h-[350px] sm:h-[500px] border-0 grayscale contrast-[1.05] brightness-[0.98] group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Glassmorphism Information Card */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs sm:max-w-sm p-5 sm:p-6 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl z-10 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#b08d1e] to-[#C9A227] flex items-center justify-center text-slate-950 font-bold shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold font-['Outfit',sans-serif] text-white">
                  Gurugram Realty HQ
                </h4>
                <span className="text-[11px] font-medium text-[#C9A227] uppercase tracking-wider">
                  Corporate Advisory Wing
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 font-light border-t border-white/10 pt-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>LID Mall Street Shop No. 126–134, First Floor Sector 35, Sohna Haryana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>+91 98133 67436</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>support@thegurgaonrealestate.in</span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/oUZaBoPnczvPAaKH8"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A227] hover:text-white transition-colors"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

// ==========================================
// DEDICATED CONTACT US PAGE ENTRY
// ==========================================
export default function ContactUsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#111827] antialiased selection:bg-[#C9A227] selection:text-white">
      <ContactHero />
      <ContactSection />
      <OfficeLocation />
    </main>
  );
}