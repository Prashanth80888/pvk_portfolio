import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full bg-[#FF6A2A] text-white font-display font-extrabold flex items-center justify-center text-xs">
              PG
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white">
              PRASHANTH GOUDA
            </span>
          </div>
          <p className="text-xs text-white/60 font-medium max-w-md">
            Computer Science & Design Undergraduate • Full-Stack Developer • AI/ML Enthusiast
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white/80 hover:text-[#FF6A2A] flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white/80 hover:text-[#4D8DFF] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs font-bold text-white/80 hover:text-[#C7E95A] flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-[#FF6A2A] text-white transition-all ml-4"
            title="Back to Top"
            data-cursor="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/50 font-medium gap-4">
        <p>© {new Date().getFullYear()} Prashanth Gouda. All rights reserved.</p>
        <p className="font-mono">Cohesion Editorial Visual System • Built with React & Three.js</p>
      </div>
    </footer>
  );
};
