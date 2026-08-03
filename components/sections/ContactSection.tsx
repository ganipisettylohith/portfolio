"use client";

import { useState } from "react";
import { Mail, Send, Copy, Check, Github, Linkedin, FileText, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

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
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail size={14} /> Get in Touch
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          Let's Connect
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Open for full-time opportunities, internship roles, and technical AI/Python engineering collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Cards & Quick Copy */}
        <div className="lg:col-span-5 space-y-5">
          {/* Email Copy Card */}
          <div className="glass-card-light p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/40 border border-white/60">
              <span className="text-xs sm:text-sm font-semibold text-stone-850 truncate">
                {emailAddress}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white border border-stone-200 text-xs font-bold text-[var(--accent-primary)] hover:bg-amber-50 transition-colors shrink-0 flex items-center gap-1 shadow-sm"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="glass-card-light p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-50 text-[var(--accent-primary)]">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)]">Location & Availability</h4>
                <p className="text-xs text-slate-500 font-medium">India • Hybrid / Remote / On-Site</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-50 text-[var(--accent-secondary)]">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)]">Current Role</h4>
                <p className="text-xs text-slate-500 font-medium">Technical Intern • Dream Olympic Sports</p>
              </div>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="glass-card-light p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
              Social Links
            </span>
            <div className="grid grid-cols-2 gap-3">
              <Magnetic>
                <motion.a
                  href="https://github.com/ganipisettylohith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[var(--foreground)] text-white font-bold text-xs hover:bg-[var(--accent-primary)] transition-colors shadow-sm cursor-pointer"
                >
                  <Github size={16} /> GitHub
                </motion.a>
              </Magnetic>

              <Magnetic>
                <motion.a
                  href="https://www.linkedin.com/in/lohith-ganipisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0077b5] text-white font-bold text-xs hover:bg-[var(--accent-primary)] transition-colors shadow-sm cursor-pointer"
                >
                  <Linkedin size={16} /> LinkedIn
                </motion.a>
              </Magnetic>

              <Magnetic>
                <motion.a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-[var(--accent-primary)] font-bold text-xs hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  <Mail size={16} /> Email Me
                </motion.a>
              </Magnetic>

              <Magnetic>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 font-bold text-xs hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <FileText size={16} /> Resume
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 glass-card-premium p-8 sm:p-10">
          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Message Sent!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-bold text-slate-700 hover:bg-stone-250 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/60 text-stone-900 text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:bg-white/60 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/60 text-stone-900 text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:bg-white/60 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Engineering Opportunity / Inquiry"
                  className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/60 text-stone-900 text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:bg-white/60 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Lohith, I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/40 border border-white/60 text-stone-900 text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:bg-white/60 transition-all resize-none"
                />
              </div>

              <Magnetic>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-[var(--foreground)] text-white font-extrabold text-sm hover:bg-[var(--accent-primary)] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send size={16} /> 
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </Magnetic>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
