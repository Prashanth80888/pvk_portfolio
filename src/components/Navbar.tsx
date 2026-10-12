import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'What I Build', href: '#what-i-build' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8E8E8] shadow-sm max-w-full ${
          scrolled ? 'shadow-md py-2 bg-white/98 border-[#D8D8D8]' : ''
        }`}
      >
        {/* Identity Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 group mr-2 sm:mr-6"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-display text-xs font-bold transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#FF6A2A]">
            PG
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight text-[#111111] hidden sm:inline-block">
            PRASHANTH GOUDA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#111111] font-semibold bg-[#F7F7F7]'
                    : 'text-[#666666] hover:text-[#111111] hover:bg-[#F7F7F7]/60'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF6A2A] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 ml-2 sm:ml-4">
          
          {/* Direct Resume Download */}
          <a
            href="/Prashanth_Gouda_Resume.pdf"
            download="Prashanth_Gouda_Resume.pdf"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-[#FF6A2A] bg-[#FF6A2A]/10 border border-[#FF6A2A]/20 hover:bg-[#FF6A2A] hover:text-white transition-all duration-300"
            data-cursor="DOWNLOAD"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>

          {/* Modal trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#111111] bg-[#F7F7F7] border border-[#E8E8E8] hover:bg-[#111111] hover:text-white transition-all duration-300 group"
            data-cursor="RESUME"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF6A2A]" />
            <span className="hidden xs:inline">Sheet</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#111111] hover:bg-[#FF6A2A] transition-all duration-300 shadow-xs group"
            data-cursor="CONTACT"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#111111] rounded-full hover:bg-[#F7F7F7] lg:hidden transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-white border border-[#E8E8E8] shadow-2xl rounded-3xl p-6 lg:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex justify-between items-center pb-3 border-b border-[#E8E8E8]">
            <span className="font-display font-bold text-xs tracking-wider uppercase text-[#666666]">
              Navigation
            </span>
            <span className="text-[10px] text-[#FF6A2A] font-mono">Prashanth Gouda</span>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#111111] hover:bg-[#F7F7F7] flex justify-between items-center transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666666]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8E8E8] flex gap-2">
            <a
              href="/Prashanth_Gouda_Resume.pdf"
              download="Prashanth_Gouda_Resume.pdf"
              className="flex-1 py-3 bg-[#FF6A2A] text-white rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex-1 py-3 bg-[#111111] text-white rounded-2xl text-xs font-bold text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
