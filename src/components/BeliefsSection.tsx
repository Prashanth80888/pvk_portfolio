import React from 'react';
import { beliefsData } from '../data/portfolioData';
import { Quote, HeartHandshake } from 'lucide-react';

export const BeliefsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-[2.5rem] p-8 sm:p-14 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E8E8] pb-6">
          <div>
            <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-1">
              // 07 — PEOPLE • TEAMS • COMMUNITIES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#111111] tracking-tight">
              What I <span className="font-serif-accent italic font-normal text-[#FF6A2A]">Believe</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-bold text-[#666666]">
            <HeartHandshake className="w-4 h-4 text-[#FF6A2A]" />
            <span>Core Development Philosophy</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beliefsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E8E8] p-8 rounded-3xl shadow-xs flex flex-col justify-between hover:border-[#111111] transition-all"
            >
              <Quote className="w-8 h-8 text-[#FF6A2A] opacity-40 mb-4" />
              <p className="font-display font-bold text-base sm:text-lg text-[#111111] leading-relaxed">
                "{item.quote}"
              </p>
              <div className="pt-6 border-t border-[#F0F0F0] mt-6">
                <p className="text-xs font-extrabold text-[#111111]">{item.author}</p>
                <p className="text-[10px] font-mono font-bold text-[#666666] uppercase mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
