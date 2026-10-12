import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SkillCard } from '../types';
import {
  Code,
  Terminal,
  Database,
  Atom,
  Server,
  Cpu,
  Palette,
  HardDrive,
  Layers,
  Cloud,
  Box,
  GitBranch,
  Sparkles,
  Send,
  Binary,
  Layout,
  RotateCw
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Terminal,
  Database,
  Atom,
  Server,
  Cpu,
  Palette,
  HardDrive,
  Layers,
  Cloud,
  Box,
  GitBranch,
  Sparkles,
  Send,
  Binary,
  Layout
};

export const StackSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <section id="stack" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#E8E8E8] pb-8">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-2">
            // 02 — TECHNICAL TOOLKIT
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            My <span className="font-serif-accent italic font-normal text-[#4D8DFF]">Stack</span>
          </h2>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-bold text-[#666666] bg-[#F7F7F7] px-4 py-2 rounded-full border border-[#E8E8E8]">
          <RotateCw className="w-3.5 h-3.5 text-[#FF6A2A] animate-spin" style={{ animationDuration: '6s' }} />
          <span>Click or Hover Cards to Flip & Explore Usage</span>
        </div>
      </div>

      {/* Grid of 3D Interactive Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {skillsData.map((skill: SkillCard) => {
          const IconComponent = iconMap[skill.iconName] || Code;
          const isFlipped = !!flippedCards[skill.name];

          return (
            <div
              key={skill.name}
              className="h-56 sm:h-60 perspective-[1000px] cursor-pointer group"
              onClick={() => toggleFlip(skill.name)}
              data-cursor="FLIP"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d rounded-3xl ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* CARD FRONT */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-white border border-[#E8E8E8] p-6 shadow-xs flex flex-col justify-between group-hover:border-[#111111] group-hover:shadow-md transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-start">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: skill.color === '#111111' ? '#111111' : skill.color }}
                    >
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#666666] bg-[#F7F7F7] px-2.5 py-1 rounded-full border border-[#E8E8E8]">
                      {skill.category}
                    </span>
                  </div>

                  {/* Center Skill Info */}
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-[#111111]">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-medium text-[#666666] mt-1">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0] text-[11px] font-bold text-[#FF6A2A]">
                    <span>Interactive 3D Card</span>
                    <span className="text-xs">↻</span>
                  </div>
                </div>

                {/* CARD BACK */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-[#111111] text-white p-6 rotate-y-180 flex flex-col justify-between border border-[#111111] shadow-xl"
                  style={{ borderTop: `4px solid ${skill.color}` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6A2A]">
                        PRACTICAL USAGE
                      </span>
                      <span className="text-xs font-bold text-white/50">{skill.name}</span>
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed font-medium mt-3">
                      {skill.usageDetails}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10 text-[10px] font-mono text-white/60">
                    <span>Prashanth Gouda</span>
                    <span className="text-[#FF6A2A]">Click to Reset</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
