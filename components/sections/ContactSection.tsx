"use client";

import { useState } from "react";
import { Mail, Send, Copy, Check, Github, Linkedin, FileText, MapPin, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "lohith.ganipisetty9999@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try emailing directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to the server. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail size={14} /> Get in Touch
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          Let's Connect
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Open for full-time opportunities, internship roles, and technical AI/Python engineering collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Cards & Quick Copy */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Copy Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-3 p-2.5 rounded-md bg-stone-50 border border-[#E5E5E0]">
              <span className="text-xs sm:text-sm font-semibold text-[#1F2328] truncate">
                {emailAddress}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 rounded-md bg-white border border-[#E5E5E0] text-xs font-semibold text-[#2D6A6A] hover:bg-stone-100 transition-colors shrink-0 flex items-center gap-1 shadow-sm cursor-pointer"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-stone-100 text-[#2D6A6A]">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2328]">Location & Availability</h4>
                <p className="text-xs text-slate-500 font-medium">India • Hybrid / Remote / On-Site</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-md bg-stone-100 text-[#2D6A6A]">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2328]">Current Role</h4>
                <p className="text-xs text-slate-500 font-medium">Technical Intern • Dream Olympic Sports</p>
              </div>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Social Links
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="https://github.com/ganipisettylohith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-[#1F2328] text-white font-semibold text-xs hover:bg-[#2D6A6A] transition-colors shadow-sm cursor-pointer"
              >
                <Github size={15} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lohith-ganipisetty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-[#2D6A6A] text-white font-semibold text-xs hover:bg-[#235353] transition-colors shadow-sm cursor-pointer"
              >
                <Linkedin size={15} /> LinkedIn
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-stone-100 border border-[#E5E5E0] text-[#1F2328] font-semibold text-xs hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <Mail size={15} /> Email Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-stone-100 border border-[#E5E5E0] text-[#1F2328] font-semibold text-xs hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-6 sm:p-8 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2328] mb-1">Message Sent!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-5 px-5 py-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-xs font-semibold text-[#1F2328] hover:bg-stone-200 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-[#1F2328] mb-1">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAFAF7] border border-[#E5E5E0] text-[#1F2328] text-xs focus:outline-none focus:border-[#2D6A6A] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAFAF7] border border-[#E5E5E0] text-[#1F2328] text-xs focus:outline-none focus:border-[#2D6A6A] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Engineering Opportunity / Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#FAFAF7] border border-[#E5E5E0] text-[#1F2328] text-xs focus:outline-none focus:border-[#2D6A6A] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Lohith, I'd like to discuss a project..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#FAFAF7] border border-[#E5E5E0] text-[#1F2328] text-xs focus:outline-none focus:border-[#2D6A6A] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-md bg-[#2D6A6A] text-white font-semibold text-xs hover:bg-[#235353] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
              >
                <Send size={15} /> 
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
