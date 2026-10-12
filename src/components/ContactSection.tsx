import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
      }, 4000);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Editorial Heading */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-3">
          // 08 — INITIATE COLLABORATION
        </span>
        <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black text-[#111111] tracking-tight leading-none">
          Let's Build <span className="font-serif-accent italic font-normal text-[#FF6A2A]">Something.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#666666] font-medium mt-4 max-w-xl mx-auto">
          Have an exciting project, full-stack opportunity, or research collaboration? Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Details & Links */}
        <div className="lg:col-span-5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-[2.5rem] p-8 sm:p-10 space-y-8">
          <div>
            <h3 className="font-display font-black text-2xl text-[#111111]">
              Contact Details
            </h3>
            <p className="text-xs text-[#666666] font-medium mt-1">
              Based in Siddapur, Karnataka, India
            </p>
          </div>

          {/* Email Card with Copy Action */}
          <div className="bg-white border border-[#E8E8E8] p-5 rounded-2xl shadow-xs flex items-center justify-between group">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A2A]/10 text-[#FF6A2A] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <p className="text-[10px] font-bold text-[#666666] uppercase">EMAIL ADDRESS</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#FF6A2A] transition-colors truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] hover:bg-[#111111] hover:text-white transition-all shrink-0 ml-2"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-white border border-[#E8E8E8] p-5 rounded-2xl shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#4D8DFF]/10 text-[#4D8DFF] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#666666] uppercase">PHONE NUMBER</p>
              <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#4D8DFF] transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#666666]">
              ONLINE PROFILES
            </p>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8E8E8] p-4 rounded-2xl flex items-center justify-between hover:border-[#111111] hover:shadow-sm transition-all group"
                data-cursor="GITHUB"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-[#111111]" />
                  <span className="text-xs font-bold text-[#111111]">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#FF6A2A] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8E8E8] p-4 rounded-2xl flex items-center justify-between hover:border-[#111111] hover:shadow-sm transition-all group"
                data-cursor="LINKEDIN"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  <span className="text-xs font-bold text-[#111111]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#0A66C2] transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white border border-[#E8E8E8] rounded-[2.5rem] p-8 sm:p-10 shadow-sm relative">
          
          {formSubmitted ? (
            <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#C7E95A] text-[#111111] rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="font-display font-black text-3xl text-[#111111]">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-[#666666] font-medium max-w-md mx-auto">
                Thank you for reaching out, Prashanth will review your message and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-4">
                <h3 className="font-display font-extrabold text-2xl text-[#111111]">
                  Send a Direct Message
                </h3>
                <Sparkles className="w-5 h-5 text-[#FF6A2A]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-2xl text-sm font-medium text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-2xl text-sm font-medium text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-2xl text-sm font-medium text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or scope..."
                  className="w-full px-4 py-3.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-2xl text-sm font-medium text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all resize-none"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-semibold text-[#D93025] -mt-2">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#111111] text-white rounded-full font-display font-bold text-sm tracking-wide shadow-md hover:bg-[#FF6A2A] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                data-cursor="SEND"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
