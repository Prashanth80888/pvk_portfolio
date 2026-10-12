import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-[#E8E8E8] pb-6">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-1">
            // 05 — CREDENTIALS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#111111] tracking-tight">
            Certifications <span className="font-serif-accent italic font-normal text-[#C7E95A]">& Badges</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E8E8E8] rounded-3xl p-6 shadow-xs hover:border-[#111111] hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 bottom-0 w-1.5"
              style={{ backgroundColor: cert.color }}
            />

            <div>
              <div className="flex items-center justify-between mb-4 pl-2">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: cert.color }}
                >
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#666666] bg-[#F7F7F7] px-2 py-0.5 rounded-full border border-[#E8E8E8]">
                  VERIFIED
                </span>
              </div>

              <h3 className="font-display font-extrabold text-base text-[#111111] pl-2 group-hover:text-[#FF6A2A] transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs font-bold text-[#4D8DFF] pl-2 mt-1">
                {cert.issuer}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0F0F0] mt-4 pl-2 flex items-center justify-between text-[11px] font-semibold text-[#666666]">
              <span>{cert.type}</span>
              <ShieldCheck className="w-4 h-4 text-[#C7E95A]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
