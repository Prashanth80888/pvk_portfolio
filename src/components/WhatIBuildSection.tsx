import React from 'react';
import { whatIBuild } from '../data/portfolioData';
import { ArrowUpRight, Box, Layers, Cpu, Code2, Cloud, Sparkles } from 'lucide-react';

export const WhatIBuildSection: React.FC = () => {
  return (
    <section id="what-i-build" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 border-b border-[#E8E8E8] pb-8">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-2">
            // 06 — CORE OFFERINGS & SOLUTIONS
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            What <span className="font-serif-accent italic font-normal text-[#FF6A2A]">I Build</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
          Engineering capabilities focused on shipping real-world products with speed and precision.
        </p>
      </div>

      {/* Sticky / Scroll-Reactive Cards */}
      <div className="space-y-6">
        {whatIBuild.map((item, idx) => (
          <div
            key={item.number}
            className="sticky top-24 bg-white border border-[#E8E8E8] rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#111111] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            style={{ zIndex: idx + 10 }}
          >
            <div className="flex items-start md:items-center gap-6">
              <span className="font-display font-black text-4xl sm:text-6xl text-[#E8E8E8] group-hover:text-[#FF6A2A] transition-colors shrink-0">
                {item.number}
              </span>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                    CAPABILITY
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] group-hover:text-[#FF6A2A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] font-medium max-w-2xl mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F7F7] border border-[#E8E8E8] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
