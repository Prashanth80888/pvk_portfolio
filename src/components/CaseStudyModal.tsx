import React from 'react';
import { X, CheckCircle2, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#111111]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-[2.5rem] border border-[#E8E8E8] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-[#111111]">
        
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between bg-white/95 backdrop-blur-md pb-4 mb-6 border-b border-[#E8E8E8]">
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#111111]">
              CASE STUDY — {project.number}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#F7F7F7] border border-[#E8E8E8] hover:bg-[#FF6A2A] hover:text-white transition-all text-[#111111]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Content Body */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF6A2A] uppercase tracking-wider">
              {project.subtitle}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-[#111111] mt-1">
              {project.title}
            </h1>
          </div>

          {/* Large Image Showcase */}
          <div className="rounded-3xl overflow-hidden border border-[#E8E8E8] aspect-[16/9] shadow-md bg-[#F7F7F7]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Description */}
          <div className="bg-[#F7F7F7] border border-[#E8E8E8] p-6 rounded-3xl space-y-3">
            <h3 className="font-display font-bold text-lg text-[#111111]">
              Overview & Impact
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-[#111111] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF6A2A]" />
              <span>Core Features & Implementation</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="bg-white border border-[#E8E8E8] p-4 rounded-2xl flex items-start gap-3 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A2A] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#222222]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#666666] uppercase tracking-wider mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-[#F7F7F7] border border-[#E8E8E8] rounded-full text-xs font-bold text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E8E8E8] flex flex-wrap items-center justify-between gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#FF6A2A] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#F7F7F7] border border-[#E8E8E8] text-xs font-bold text-[#111111] hover:bg-[#E8E8E8] transition-all ml-auto"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
