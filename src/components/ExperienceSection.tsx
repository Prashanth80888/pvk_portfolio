import React from 'react';
import { experienceItems, hackathonsData, currentWork } from '../data/portfolioData';
import { Trophy, Bus, Cpu, Calendar, Shield, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 border-b border-[#E8E8E8] pb-8">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-2">
            // 04 — CAPABILITIES & JOURNEY
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            Experience <span className="font-serif-accent italic font-normal text-[#B98CF2]">& Activity</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
          Technical domains, hackathon sprint participation, and active product development.
        </p>
      </div>

      {/* CURRENT WORK BANNER CARD (VISIONBUS) */}
      <div className="mb-16 bg-gradient-to-r from-[#111111] to-[#222222] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-[#333333] relative overflow-hidden group">
        
        {/* Background Accent Gradient Sphere */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A2A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF6A2A]/20 transition-all duration-700" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A2A] text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentWork.status}</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <Bus className="w-8 h-8 text-[#FF6A2A]" />
              <span>{currentWork.title}</span>
            </h3>

            <p className="text-base font-semibold text-[#FF6A2A]">
              {currentWork.subtitle}
            </p>

            <p className="text-sm text-white/80 leading-relaxed font-medium">
              {currentWork.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex flex-col items-center justify-center text-center shrink-0 min-w-[240px]">
            <Shield className="w-8 h-8 text-[#C7E95A] mb-2" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              SAFETY & ATTENDANCE
            </span>
            <span className="text-sm font-extrabold text-white mt-1">
              AI Computer Vision
            </span>
          </div>
        </div>
      </div>

      {/* Grid of 01 - 06 Experience Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
        {experienceItems.map((item) => (
          <div
            key={item.number}
            className="bg-white border border-[#E8E8E8] rounded-3xl p-6 sm:p-8 hover:border-[#111111] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#E8E8E8] group-hover:text-[#FF6A2A] transition-colors">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#666666] bg-[#F7F7F7] px-2.5 py-1 rounded-full border border-[#E8E8E8]">
                  {item.category}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-xl text-[#111111] group-hover:text-[#FF6A2A] transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-[#666666] leading-relaxed font-medium mt-2">
                {item.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F0F0F0] mt-6">
              <div className="flex flex-wrap gap-1.5">
                {item.highlights.map((hl, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[11px] font-semibold text-[#111111] bg-[#F7F7F7] px-2.5 py-1 rounded-md border border-[#E8E8E8]"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HACKATHONS HIGHLIGHT SUBSECTION */}
      <div className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[2.5rem] p-8 sm:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-7 h-7 text-[#FF6A2A]" />
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111]">
              Hackathons & Technical Events
            </h3>
            <p className="text-xs font-semibold text-[#666666]">
              Collaborative competitive coding sprints and technical challenges
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathonsData.map((hack, hIdx) => (
            <div
              key={hIdx}
              className="bg-white border border-[#E8E8E8] p-6 rounded-3xl hover:border-[#111111] shadow-xs transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#FF6A2A] font-mono">{hack.year}</span>
                <span className="text-[10px] font-bold text-[#666666] bg-[#F7F7F7] px-2 py-0.5 rounded-full border border-[#E8E8E8]">
                  HACKATHON
                </span>
              </div>

              <h4 className="font-display font-extrabold text-lg text-[#111111]">
                {hack.title}
              </h4>
              <p className="text-xs font-bold text-[#4D8DFF] mt-1">
                {hack.organizer}
              </p>
              <p className="text-xs text-[#666666] font-medium leading-relaxed mt-3">
                {hack.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
