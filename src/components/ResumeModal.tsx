import React from 'react';
import { X, Download, Mail, Phone, MapPin, GraduationCap, Code, Trophy, Award } from 'lucide-react';
import { personalInfo, projectsData, certificationsData, hackathonsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#111111]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-[2.5rem] border border-[#E8E8E8] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-[#111111]">
        
        {/* Modal Controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between bg-white/95 backdrop-blur-md pb-4 mb-6 border-b border-[#E8E8E8]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF6A2A]" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#111111]">
              CURRICULUM VITAE — PRASHANTH GOUDA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Prashanth_Gouda_Resume.pdf"
              download="Prashanth_Gouda_Resume.pdf"
              className="px-4 py-2 bg-[#FF6A2A] text-white rounded-full text-xs font-bold hover:bg-[#111111] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F7F7F7] border border-[#E8E8E8] hover:bg-[#FF6A2A] hover:text-white transition-all text-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#E8E8E8]">
            <div className="flex items-center gap-4">
              <img
                src={personalInfo.portrait}
                alt="Prashanth Gouda"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#E8E8E8] shadow-xs"
              />
              <div>
                <h1 className="font-display font-black text-2xl sm:text-3xl text-[#111111]">
                  {personalInfo.fullName}
                </h1>
                <p className="text-xs font-bold text-[#FF6A2A] mt-1">
                  {personalInfo.title} • CGPA: 8.80
                </p>
              </div>
            </div>

            <div className="text-xs space-y-1 text-[#555555] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF6A2A]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF6A2A]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF6A2A]" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-extrabold text-base text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FF6A2A]" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="bg-[#F7F7F7] p-4 rounded-2xl border border-[#E8E8E8] flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-[#111111]">{edu.degree}</h3>
                    <p className="text-xs text-[#666666]">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#FF6A2A]">{edu.period}</span>
                    <p className="text-xs font-semibold text-[#111111]">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-display font-extrabold text-base text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-[#FF6A2A]" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="bg-[#F7F7F7] p-4 rounded-2xl border border-[#E8E8E8]">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-[#111111]">{project.title} — {project.subtitle}</h3>
                    <span className="text-[10px] font-mono text-[#FF6A2A] font-bold">CASE STUDY</span>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded border border-[#E8E8E8] text-[#111111]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-display font-extrabold text-sm text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FF6A2A]" />
                <span>Certifications</span>
              </h2>
              <ul className="space-y-2 text-xs font-medium text-[#444444]">
                {certificationsData.map((cert, idx) => (
                  <li key={idx} className="bg-[#F7F7F7] p-2.5 rounded-xl border border-[#E8E8E8]">
                    <span className="font-bold text-[#111111] block">{cert.title}</span>
                    <span className="text-[10px] text-[#666666]">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-extrabold text-sm text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#FF6A2A]" />
                <span>Hackathons</span>
              </h2>
              <ul className="space-y-2 text-xs font-medium text-[#444444]">
                {hackathonsData.map((hack, idx) => (
                  <li key={idx} className="bg-[#F7F7F7] p-2.5 rounded-xl border border-[#E8E8E8]">
                    <span className="font-bold text-[#111111] block">{hack.title} ({hack.year})</span>
                    <span className="text-[10px] text-[#666666]">{hack.organizer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
