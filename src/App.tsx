import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerMarquee } from './components/TickerMarquee';
import { AboutSection } from './components/AboutSection';
import { StackSection } from './components/StackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { WhatIBuildSection } from './components/WhatIBuildSection';
import { BeliefsSection } from './components/BeliefsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans antialiased selection:bg-[#FF6A2A] selection:text-white relative">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01 — Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Marquee Ticker */}
        <TickerMarquee />

        {/* 02 — About Me */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 03 — My Stack (3D Interactive Flip Cards) */}
        <StackSection />

        {/* 04 — Selected Projects */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 05 — Experience & Activity + Hackathons + VISIONBUS */}
        <ExperienceSection />

        {/* 06 — Certifications & Credentials */}
        <CertificationsSection />

        {/* 07 — What I Build (Sticky Rows) */}
        <WhatIBuildSection />

        {/* 08 — Personal Philosophy */}
        <BeliefsSection />

        {/* 09 — Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
