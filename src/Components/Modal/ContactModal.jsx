import React, { useContext, useState } from 'react';
import {
  Building2,
  SendHorizontal,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  X,
  Sparkles
} from 'lucide-react';
import { ContactModalContext } from '../../App';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import { toast } from 'react-toastify';
import favicon from '../../assets/favicon.png'

// ==========================================
// REUSABLE INPUT FIELD COMPONENT
// ==========================================
function InputField({ label, icon: Icon, required = true, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif]">
          {label}
          {required && <span className="text-[#C9A227] font-bold text-sm">*</span>}
        </label>
      )}
      <div className="relative flex items-center group">
        {Icon && (
          <div className="absolute left-4 text-[#6B7280] group-focus-within:text-[#C9A227] transition-colors duration-300 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          {...props}
          required 
          className={`w-full bg-white text-[#111827] placeholder:text-slate-400/80 text-sm font-medium rounded-2xl border border-[#E5E7EB] ${Icon ? 'pl-11' : 'pl-4'
            } pr-4 py-3.5 outline-none transition-all duration-300 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 focus:shadow-lg focus:shadow-[#C9A227]/5 font-['Plus_Jakarta_Sans',sans-serif]`}
        />
      </div>
    </div>
  );
}

// ==========================================
// REUSABLE TEXTAREA FIELD COMPONENT
// ==========================================
function TextareaField({ label, icon: Icon, required = true, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif]">
          {label}
          {required && <span className="text-[#C9A227] font-bold text-sm">*</span>}
        </label>
      )}
      <div className="relative flex items-start group">
        {Icon && (
          <div className="absolute left-4 top-4 text-[#6B7280] group-focus-within:text-[#C9A227] transition-colors duration-300 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <textarea
          {...props}
          required
          className={`w-full bg-white text-[#111827] placeholder:text-slate-400/80 text-sm font-medium rounded-2xl border border-[#E5E7EB] ${Icon ? 'pl-11' : 'pl-4'
            } pr-4 py-3.5 outline-none transition-all duration-300 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 focus:shadow-lg focus:shadow-[#C9A227]/5 resize-none font-['Plus_Jakarta_Sans',sans-serif]`}
        />
      </div>
    </div>
  );
}

// ==========================================
// MAIN CONTACT NOW MODAL COMPONENT
// ==========================================
export default function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    userMail: '',
    number: '',
    subject: '',
    message: ''
  });

  const [isLoading , setLoading] = useState(false)

  const { setContactModalOpen } = useContext(ContactModalContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if(isLoading) return
      setLoading(true)
      const response = await axios.post('https://star-career-point.onrender.com/api/mail/realestate' , formData , {withCredentials:true})
      setLoading(false)
      toast.success("Your inquiry has been sent successfully! We'll get back to you as soon as possible.");
      
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      setLoading(false)
    }

  };

  return (
    // Backdrop overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/70 backdrop-blur-md p-3 sm:p-5 md:p-6 animate-in fade-in duration-300">

  {/* Modal Container */}
  <div className="bg-white/95 backdrop-blur-2xl w-full max-w-[580px] max-h-[80vh] sm:max-h-[85vh] rounded-3xl border border-[#E5E7EB] shadow-2xl shadow-slate-950/25 flex flex-col overflow-hidden transform animate-in zoom-in-95 duration-300 font-['Plus_Jakarta_Sans',sans-serif] relative">

    {/* ================= FIXED HEADER ================= */}
    <div className="p-4 sm:p-5 md:p-6 border-b border-[#E5E7EB] bg-gradient-to-r from-slate-50/90 via-white to-amber-50/40 flex items-center justify-between shrink-0 z-10 shadow-xs">

      {/* Company Branding */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl  flex items-center justify-center text-[#C9A227]  shrink-0">
           <img src={favicon} alt="Logo" className='w-full h-full' />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-base sm:text-xl font-bold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight">
              Gurgaon RealEstate
            </h3>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B7280] font-normal flex items-center gap-1 mt-0.5">
            <Sparkles className="w-3 h-3 text-[#C9A227]" />
            <span>Helping You Find Your Dream Property</span>
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setContactModalOpen(false)}
        aria-label="Close modal"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-[#C9A227] text-slate-600 hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:shadow-md cursor-pointer shrink-0 focus:outline-none"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>

    {/* ================= SCROLLABLE BODY ================= */}
    <div
      className="p-5 sm:p-7 md:p-8 overflow-y-auto flex-1 space-y-6 scrollbar-none pb-6"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* Form Section Title */}
      <div className="text-center max-w-lg mx-auto mb-5 sm:mb-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#0F172A] font-['Outfit',sans-serif] tracking-tight">
          Send Us A Message
        </h4>
        <p className="mt-1 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
          Fill out the form below and our property experts will contact you shortly.
        </p>
      </div>

      {/* Contact Form */}
      <form id="contact-modal-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        
        {/* Full Name */}
        <InputField
          label="Full Name"
          name="name"
          type="text"
          required={true}
          placeholder="e.g. Rahul Sharma"
          icon={User}
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email Address */}
        <InputField
          label="Email Address"
          name="userMail"
          type="email"
          required={true}
          placeholder="e.g. name@example.com"
          icon={Mail}
          value={formData.userMail}
          onChange={handleChange}
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          name="number"
          type="tel"
          required={true}
          placeholder="+91 98765 43210"
          icon={Phone}
          value={formData.number}
          onChange={handleChange}
        />

        {/* Subject */}
        <InputField
          label="Subject"
          name="subject"
          type="text"
          required={true}
          placeholder="e.g. Property Enquiry"
          icon={FileText}
          value={formData.subject}
          onChange={handleChange}
        />

        {/* Message Textarea (Full Width) */}
        <TextareaField
          label="Message"
          name="message"
          required={true}
          rows={4}
          placeholder="Tell us about your property requirements, preferred location, budget, or any questions..."
          icon={MessageSquare}
          value={formData.message}
          onChange={handleChange}
        />
           

        <div className="pt-3 border-t border-slate-100 text-center">
          <p className="text-xs text-[#6B7280] font-medium flex items-center justify-center gap-1.5 flex-wrap">
            <span>Need immediate assistance?</span>
            <a
              href="tel:+919876543210"
              className="text-[#0F172A] font-bold hover:text-[#C9A227] transition-colors duration-200"
            >
              📞 +91 9813367436
            </a>
          </p>
        </div>
     
      

        
      </form>


    </div>

    {/* ================= FIXED / STICKY SUBMIT FOOTER ================= */}
   <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-10px_20px_-5px_rgba(15,23,42,0.05)] shrink-0 z-20">
      <button
        type="submit"
        form="contact-modal-form"
        className="group relative w-full h-[50px] sm:h-[54px] rounded-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B89218] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#C9A227]/25 hover:shadow-xl hover:shadow-[#C9A227]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none"
      >
        {/* Subtle sheen highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {isLoading ? (
          <LoadingSpinner size={25} />
        ) : (
          <>
            <SendHorizontal className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </div>

  </div>
</div>
  );
}