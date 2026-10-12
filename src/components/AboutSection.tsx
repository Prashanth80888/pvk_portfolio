import React from 'react';
import { ArrowUpRight, GraduationCap, MapPin, Download, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#E8E8E8] pb-8">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-2">
            // 01 — BACKGROUND & IDENTITY
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            About <span className="font-serif-accent italic font-normal text-[#B98CF2]">Me</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
          Driven by a blend of technical computer science rigor, AI integration, and editorial design thinking.
        </p>
      </div>

      {/* Multi-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        
        {/* Left Column: Portrait Photograph Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E8] bg-[#F7F7F7] p-3 shadow-sm group">
            {/* The Uploaded Portrait */}
            <img
              src={personalInfo.portrait}
              alt="Prashanth Gouda"
              className="w-full h-80 sm:h-96 object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Location Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#E8E8E8] shadow-xs flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF6A2A]" />
              <span className="text-xs font-bold text-[#111111]">Siddapur, Karnataka, India</span>
            </div>

            {/* Academic Score Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8E8E8] shadow-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A2A] text-white font-display font-extrabold flex flex-col items-center justify-center text-xs shadow-xs">
                <span>8.80</span>
                <span className="text-[8px] font-normal">CGPA</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  ALVA'S INSTITUTE (AIET)
                </p>
                <p className="text-xs font-bold text-[#111111]">CS & Design Undergraduate</p>
              </div>
            </div>
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F7F7F7] border border-[#E8E8E8] p-5 rounded-2xl">
              <span className="text-3xl font-black font-display text-[#111111] block">8.80</span>
              <span className="text-xs font-semibold text-[#666666] mt-1 block">CGPA • CS & Design</span>
            </div>

            <div className="bg-[#F7F7F7] border border-[#E8E8E8] p-5 rounded-2xl">
              <span className="text-3xl font-black font-display text-[#FF6A2A] block">5+</span>
              <span className="text-xs font-semibold text-[#666666] mt-1 block">Full-Stack & AI Systems</span>
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Technologies, Academic Journey */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          
          {/* Main Statement */}
          <div className="bg-white border border-[#E8E8E8] rounded-3xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-[#111111] leading-tight mb-4 uppercase">
              BUILDING DIGITAL EXPERIENCES WITH AI & DESIGN.
            </h3>
            <p className="text-[#555555] leading-relaxed text-sm sm:text-base font-medium">
              I am Prashanth Vishweshwar Gouda, a Computer Science & Design undergraduate at Alva's Institute of Engineering and Technology (AIET). My technical focus centers on constructing scalable MERN stack web applications, integrating Gemini LLMs and OCR automation, developing Python machine learning detection models, and designing award-winning editorial user interfaces.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Full-Stack MERN',
                'Google Gemini AI',
                'Python & Scikit-Learn',
                'React.js & Node.js',
                'MongoDB & PostgreSQL',
                'AWS & Docker',
                'UI/UX & WebGL'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-full text-xs font-bold text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-[#FF6A2A]" />
              <h4 className="font-display text-sm font-bold tracking-wider uppercase text-[#111111]">
                Education Timeline
              </h4>
            </div>

            {personalInfo.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F7] border border-[#E8E8E8] p-5 rounded-2xl hover:border-[#111111] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FF6A2A] font-mono">{edu.period}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/30" />
                    <span className="text-xs font-bold text-[#111111] bg-white px-2.5 py-0.5 rounded-full border border-[#E8E8E8]">
                      {edu.score}
                    </span>
                  </div>
                  <h5 className="font-display text-base font-extrabold text-[#111111] mt-1">
                    {edu.degree}
                  </h5>
                  <p className="text-xs text-[#666666] font-medium mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="w-8 h-8 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-xs font-bold">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="/Prashanth_Gouda_Resume.pdf"
              download="Prashanth_Gouda_Resume.pdf"
              className="px-6 py-3.5 rounded-full bg-[#FF6A2A] text-white font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#111111] transition-all shadow-sm"
              data-cursor="DOWNLOAD"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME ↓</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-full bg-[#111111] text-white font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#FF6A2A] transition-all shadow-sm"
              data-cursor="RESUME"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume Sheet</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
