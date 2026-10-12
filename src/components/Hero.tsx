import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Cpu, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 12,
      y: (x / rect.width) * 12
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center overflow-hidden bg-[#FFFFFF]"
    >
      {/* Real-time WebGL Floating 3D Shapes Canvas Background */}
      <ThreeHeroCanvas />

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* Top Badge Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F7F7] border border-[#E8E8E8] shadow-xs mb-6 animate-fade-in">
          <div className="flex -space-x-1 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A2A] animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B98CF2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4D8DFF]" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#111111] font-display">
            COMPUTER SCIENCE & DESIGN • AI • FULL-STACK
          </span>
        </div>

        {/* Visually Dominant Editorial Typography Name */}
        <div className="mb-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] leading-[0.9] text-[#111111] tracking-tighter uppercase select-none">
            PRASHANTH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#FF6A2A] to-[#111111]">
              GOUDA
            </span>
          </h1>
        </div>

        {/* Dynamic Role & Subtitle */}
        <div className="max-w-2xl mx-auto space-y-3 mb-6">
          <p className="text-base sm:text-xl font-bold text-[#444444] font-sans">
            Computer Science & Design Undergraduate
          </p>

          <div className="h-10 flex items-center justify-center overflow-hidden">
            <div
              key={roleIndex}
              className="text-xs sm:text-sm md:text-base font-bold text-[#111111] bg-[#F7F7F7] px-4 py-1.5 rounded-full border border-[#E8E8E8] shadow-xs inline-flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <Sparkles className="w-4 h-4 text-[#FF6A2A]" />
              <span>{personalInfo.roles[roleIndex]}</span>
            </div>
          </div>
        </div>

        {/* Central Portrait Container with 3D Tilt & Floating Objects */}
        <div
          ref={portraitRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative my-4 group cursor-pointer"
          data-cursor="PRASHANTH"
          style={{
            perspective: 1000
          }}
        >
          {/* Subtle Outer Glowing Frame */}
          <div className="absolute -inset-3 rounded-[2.8rem] bg-gradient-to-r from-[#FF6A2A]/20 via-[#B98CF2]/30 to-[#4D8DFF]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Portrait Photo Frame */}
          <div
            className="relative w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-2.5 transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* The Uploaded Portrait Photograph */}
            <img
              src={personalInfo.portrait}
              alt="Prashanth Gouda"
              className="w-full h-full object-cover object-center rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Bottom Overlay Pill */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#E8E8E8] shadow-lg flex items-center justify-between pointer-events-none">
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#FF6A2A] uppercase tracking-wider font-display">
                  ALVA'S INSTITUTE (AIET)
                </p>
                <p className="text-xs font-bold text-[#111111]">
                  CS & Design Undergraduate
                </p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#111111] text-white flex flex-col items-center justify-center text-[10px] font-extrabold shadow-sm">
                <span>8.80</span>
                <span className="text-[8px] font-normal text-white/70">CGPA</span>
              </div>
            </div>
          </div>

          {/* Floating Decorative 3D Badges */}
          <div className="absolute -top-3 -right-4 sm:-top-5 sm:-right-8 bg-white border border-[#E8E8E8] shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2 animate-bounce-slow">
            <Code2 className="w-4 h-4 text-[#FF6A2A]" />
            <span className="text-xs font-extrabold text-[#111111]">Full-Stack</span>
          </div>

          <div className="absolute -bottom-3 -left-4 sm:-bottom-5 sm:-left-8 bg-white border border-[#E8E8E8] shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2 animate-bounce-delayed">
            <Cpu className="w-4 h-4 text-[#4D8DFF]" />
            <span className="text-xs font-extrabold text-[#111111]">AI/ML</span>
          </div>
        </div>

        {/* Action Buttons Row including Prominent Working Resume Download */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-2xl">
          
          {/* Prominent Working Download Resume Button */}
          <a
            href="/Prashanth_Gouda_Resume.pdf"
            download="Prashanth_Gouda_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF6A2A] text-white font-display font-bold text-sm tracking-wide shadow-lg hover:bg-[#111111] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
            data-cursor="DOWNLOAD"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>DOWNLOAD RESUME ↓</span>
          </a>

          {/* View Projects Button */}
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#111111] text-white font-display font-bold text-sm tracking-wide shadow-md hover:bg-[#FF6A2A] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
            data-cursor="VIEW WORK"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-[#111111] font-display font-bold text-sm tracking-wide border border-[#E8E8E8] shadow-xs hover:border-[#111111] hover:bg-[#F7F7F7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
            data-cursor="CONTACT"
          >
            <span>Contact Me</span>
          </a>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 pt-6 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#666666] hover:text-[#FF6A2A] transition-colors"
          data-cursor="SCROLL"
        >
          <span>EXPLORE PORTFOLIO</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#FF6A2A]" />
        </a>
      </div>
    </section>
  );
};
