import React from 'react';
import { 
  ArrowUpRight, CheckCircle2, Github, Sparkles, ShieldCheck, FileCheck, 
  Brain, Layout, Clock, AlertTriangle, BarChart3, Lock, Cpu, Bot,
  Scan, Zap, Layers, Network, Activity, FileText, Mail, QrCode, UserCheck, Check,
  Search, Eye, Database, Server, Filter, Award, Fingerprint, ShieldAlert, BadgeCheck
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 border-b border-[#E8E8E8] pb-8">
        <div>
          <span className="font-display text-xs font-bold tracking-widest uppercase text-[#FF6A2A] block mb-2">
            // 03 — SELECTED CASE STUDIES
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            Selected <span className="font-serif-accent italic font-normal text-[#FF6A2A]">Projects</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
          Production-grade AI automation, authorization workflows, machine learning detection, and creative web platforms.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="space-y-16 sm:space-y-24">
        {projectsData.map((project: Project, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white border border-[#E8E8E8] rounded-[2.5rem] p-6 sm:p-10 hover:border-[#111111] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative"
              data-cursor="VIEW"
            >
              {/* Top Accent Stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-2.5 rounded-t-[2.5rem]"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                
                {/* Visual Preview Showcase Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-[#F7F7F7] border border-[#E8E8E8] min-h-[360px] sm:min-h-[420px] aspect-[16/10] shadow-sm group-hover:shadow-xl transition-all duration-500 p-4 sm:p-6 flex flex-col justify-between">
                    
                    {/* PROJECT 01 — AUTOBIZ AI (Layered AI Invoice Intelligence Showcase) */}
                    {project.id === 'autobiz-ai' && (
                      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-4 shadow-sm flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Background Decorative Grid & 3D Accents */}
                        <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#FF6A2A]/10 blur-xl pointer-events-none" />

                        {/* Top Header Bar */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#FF6A2A] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                              AI
                            </div>
                            <div>
                              <span className="font-display font-extrabold text-xs text-[#111111] block leading-none">
                                AutoBiz AI
                              </span>
                              <span className="text-[9px] font-semibold text-[#666666]">
                                Invoice Intelligence Platform
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold bg-[#FF6A2A]/10 text-[#FF6A2A] px-2.5 py-1 rounded-full border border-[#FF6A2A]/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A2A] animate-ping" />
                              OCR & Gemini Vision Active
                            </span>
                          </div>
                        </div>

                        {/* Central Multi-Layered Interface Composition */}
                        <div className="relative z-10 my-3 grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
                          
                          {/* Invoice Scanning & Extracted Data Panel (7 Cols) */}
                          <div className="sm:col-span-7 bg-white rounded-xl border border-[#E8E8E8] p-3 shadow-sm relative overflow-hidden flex flex-col justify-between">
                            {/* Animated Laser Scan Line */}
                            <div className="absolute inset-x-0 top-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#FF6A2A] to-transparent shadow-[0_0_12px_#FF6A2A] animate-pulse pointer-events-none" />
                            
                            <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F0] text-[10px] font-bold text-[#666666]">
                              <span className="flex items-center gap-1 text-[#FF6A2A]">
                                <Scan className="w-3 h-3" /> INVOICE #INV-2026-88
                              </span>
                              <span className="bg-[#F7F7F7] px-2 py-0.5 rounded text-[#111111] font-mono">PDF PARSED</span>
                            </div>

                            <div className="my-2 space-y-1.5 text-left">
                              <p className="text-[10px] font-bold text-[#888888] uppercase tracking-wider">VENDOR: ACME INDUSTRIAL CORP</p>
                              <div className="flex items-baseline justify-between">
                                <span className="text-lg font-black text-[#111111] font-display">$14,280.00</span>
                                <span className="text-[10px] font-extrabold text-[#228B22] bg-[#228B22]/10 px-2 py-0.5 rounded-full">
                                  100% Extracted
                                </span>
                              </div>
                              
                              <div className="space-y-1 pt-1 text-[10px] text-[#444444]">
                                <div className="flex justify-between bg-[#F9F9F9] p-1.5 rounded border border-[#EFEFEF]">
                                  <span>Cloud Infrastructure Tier A</span>
                                  <span className="font-bold text-[#111111]">$12,000.00</span>
                                </div>
                                <div className="flex justify-between bg-[#F9F9F9] p-1.5 rounded border border-[#EFEFEF]">
                                  <span>Consulting & Integration</span>
                                  <span className="font-bold text-[#111111]">$2,280.00</span>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[#F0F0F0] flex items-center justify-between text-[10px]">
                              <span className="font-semibold text-[#666666]">TAX COMPLIANCE:</span>
                              <span className="font-bold text-[#111111] flex items-center gap-1">
                                <BadgeCheck className="w-3.5 h-3.5 text-[#4D8DFF]" /> GSTIN Validated
                              </span>
                            </div>
                          </div>

                          {/* Floating Intelligence Cards (5 Cols) */}
                          <div className="sm:col-span-5 flex flex-col justify-between gap-2">
                            
                            {/* Card 1: GST Verification */}
                            <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#4D8DFF]/10 text-[#4D8DFF] flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                              </div>
                              <div className="text-left overflow-hidden">
                                <span className="text-[9px] font-extrabold text-[#666666] block uppercase">GST VERIFICATION</span>
                                <span className="text-[10px] font-bold text-[#111111] truncate block">GSTIN: 29AAAAA0000A1Z5</span>
                              </div>
                            </div>

                            {/* Card 2: AI Email Generator */}
                            <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#FF6A2A]/10 text-[#FF6A2A] flex items-center justify-center shrink-0">
                                <Mail className="w-4 h-4" />
                              </div>
                              <div className="text-left overflow-hidden">
                                <span className="text-[9px] font-extrabold text-[#666666] block uppercase">AI EMAIL DRAFT</span>
                                <span className="text-[10px] font-bold text-[#111111] truncate block">Vendor Confirmation Ready</span>
                              </div>
                            </div>

                            {/* Card 3: Anomaly Score */}
                            <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center justify-between">
                              <div className="text-left">
                                <span className="text-[9px] font-extrabold text-[#666666] block uppercase">FRAUD SCORE</span>
                                <span className="text-[10px] font-extrabold text-[#228B22]">0 Anomalies Detected</span>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-[#C7E95A]/30 text-[#111111] flex items-center justify-center text-[10px] font-black border border-[#C7E95A]">
                                ✓
                              </div>
                            </div>

                          </div>

                        </div>

                        {/* Bottom Row: Gemini Chatbot Assistant Bar */}
                        <div className="relative z-10 bg-[#111111] text-white p-3 rounded-xl flex items-center justify-between shadow-md">
                          <div className="flex items-center gap-2 overflow-hidden text-left">
                            <Bot className="w-4 h-4 text-[#FF6A2A] shrink-0" />
                            <span className="text-xs font-medium text-white/90 truncate">
                              Gemini Assistant: "Invoice verified in 0.38s. Auto-draft email generated."
                            </span>
                          </div>
                          <span className="text-[10px] font-extrabold bg-[#FF6A2A] text-white px-2.5 py-1 rounded-md shrink-0 shadow-xs">
                            Auto-Draft
                          </span>
                        </div>
                      </div>
                    )}

                    {/* PROJECT 02 — NOCTUA (Layered Secure Authorization System Showcase) */}
                    {project.id === 'noctua' && (
                      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-4 shadow-sm flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Background Mesh */}
                        <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#4D8DFF]/10 blur-xl pointer-events-none" />

                        {/* Top Security Bar */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#4D8DFF] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                              <Lock className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <span className="font-display font-black text-xs text-[#111111] block leading-none">
                                NOCTUA
                              </span>
                              <span className="text-[9px] font-semibold text-[#666666]">
                                Night Lab Authorization Platform
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold bg-[#4D8DFF]/15 text-[#4D8DFF] px-2.5 py-1 rounded-full border border-[#4D8DFF]/30 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Multi-Tier Role Workflow
                          </span>
                        </div>

                        {/* Authorization Workflow Matrix (4 Sequential Cards) */}
                        <div className="relative z-10 my-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                          <div className="bg-white p-2.5 rounded-xl border border-[#E8E8E8] shadow-xs flex flex-col justify-between">
                            <span className="text-[9px] font-extrabold text-[#888888] tracking-wider block uppercase">01 • STUDENT</span>
                            <span className="text-[11px] font-bold text-[#111111] my-1">Pass Requested</span>
                            <span className="text-[9px] font-mono text-[#666666]">21:15 HRS</span>
                          </div>

                          <div className="bg-[#4D8DFF]/5 border border-[#4D8DFF]/30 p-2.5 rounded-xl shadow-xs flex flex-col justify-between">
                            <span className="text-[9px] font-extrabold text-[#4D8DFF] tracking-wider block uppercase">02 • HOD</span>
                            <span className="text-[11px] font-bold text-[#111111] my-1 flex items-center justify-center gap-1">
                              Approved <Check className="w-3 h-3 text-[#4D8DFF]" />
                            </span>
                            <span className="text-[9px] font-mono text-[#4D8DFF]">Dr. Sharma</span>
                          </div>

                          <div className="bg-[#4D8DFF]/5 border border-[#4D8DFF]/30 p-2.5 rounded-xl shadow-xs flex flex-col justify-between">
                            <span className="text-[9px] font-extrabold text-[#4D8DFF] tracking-wider block uppercase">03 • AO</span>
                            <span className="text-[11px] font-bold text-[#111111] my-1 flex items-center justify-center gap-1">
                              Verified <Check className="w-3 h-3 text-[#4D8DFF]" />
                            </span>
                            <span className="text-[9px] font-mono text-[#4D8DFF]">Admin Office</span>
                          </div>

                          <div className="bg-[#C7E95A]/30 border border-[#C7E95A] p-2.5 rounded-xl shadow-xs flex flex-col justify-between">
                            <span className="text-[9px] font-extrabold text-[#111111] tracking-wider block uppercase">04 • WARDEN</span>
                            <span className="text-[11px] font-extrabold text-[#111111] my-1">Permit Active ✓</span>
                            <span className="text-[9px] font-mono text-[#111111]">Pass #NCT-889</span>
                          </div>
                        </div>

                        {/* Central Digital Gate Pass & Live Countdown Panel */}
                        <div className="relative z-10 bg-white p-3 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#111111] text-white flex items-center justify-center shrink-0">
                              <QrCode className="w-6 h-6 text-[#C7E95A]" />
                            </div>
                            <div className="text-left">
                              <div className="flex items-center gap-1.5">
                                <UserCheck className="w-3.5 h-3.5 text-[#4D8DFF]" />
                                <span className="text-xs font-black text-[#111111]">Prashanth Gouda (CS&D)</span>
                              </div>
                              <span className="text-[10px] font-semibold text-[#666666]">Lab Access: CS Research Night Lab</span>
                            </div>
                          </div>

                          <div className="text-right bg-[#F7F7F7] px-3 py-1.5 rounded-lg border border-[#E8E8E8]">
                            <span className="text-[9px] font-extrabold text-[#FF6A2A] block flex items-center gap-1 justify-end">
                              <Clock className="w-3 h-3" /> PERMIT EXPIRY
                            </span>
                            <span className="text-xs font-mono font-black text-[#111111]">02h 45m 12s</span>
                          </div>
                        </div>

                        {/* Bottom Security Gate Scanner Log */}
                        <div className="relative z-10 bg-[#111111] text-white p-2.5 rounded-xl flex items-center justify-between text-xs font-bold shadow-md">
                          <div className="flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-[#C7E95A]" />
                            <span className="text-white/90 font-medium text-[11px]">Gate 02 Sensor: Encrypted Token Validated</span>
                          </div>
                          <span className="text-[10px] font-mono bg-[#4D8DFF] text-white px-2 py-0.5 rounded">
                            Authorized
                          </span>
                        </div>
                      </div>
                    )}

                    {/* PROJECT 03 — CREDIT CARD FRAUD DETECTION (Machine Learning Pipeline Showcase) */}
                    {project.id === 'credit-card-fraud' && (
                      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-4 shadow-sm flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                        {/* Top ML Pipeline Header */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#76DAD5] text-[#111111] flex items-center justify-center font-bold text-xs shadow-xs">
                              <Brain className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <span className="font-display font-black text-xs text-[#111111] block leading-none">
                                ML Fraud Classification
                              </span>
                              <span className="text-[9px] font-semibold text-[#666666]">
                                Python & Scikit-Learn Anomaly Pipeline
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold bg-[#76DAD5]/20 text-[#111111] px-2.5 py-1 rounded-full border border-[#76DAD5]">
                            Random Forest + XGBoost
                          </span>
                        </div>

                        {/* Real-Time Transaction Network & Anomaly Scatter Composition */}
                        <div className="relative z-10 my-3 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                          
                          {/* Live Transaction Stream (6 Cols) */}
                          <div className="sm:col-span-6 space-y-1.5 text-left">
                            <div className="bg-white p-2 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center justify-between text-[10px]">
                              <div>
                                <span className="font-bold text-[#111111] block">$32.40 • Grocery Merchant</span>
                                <span className="text-[9px] text-[#666666]">Card *4892 • Local Scan</span>
                              </div>
                              <span className="font-extrabold text-[#228B22] bg-[#228B22]/10 px-2 py-0.5 rounded-full">
                                Normal (0.01)
                              </span>
                            </div>

                            <div className="bg-[#FF6A2A]/10 border border-[#FF6A2A]/40 p-2 rounded-xl shadow-xs flex items-center justify-between text-[10px]">
                              <div>
                                <span className="font-bold text-[#111111] block">$2,450.00 • Overseas Transfer</span>
                                <span className="text-[9px] text-[#FF6A2A] font-bold">Card *1102 • Anomaly Flagged</span>
                              </div>
                              <span className="font-extrabold text-white bg-[#FF6A2A] px-2 py-0.5 rounded-full animate-pulse">
                                Risk 0.98
                              </span>
                            </div>

                            <div className="bg-white p-2 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center justify-between text-[10px]">
                              <div>
                                <span className="font-bold text-[#111111] block">$14.99 • Subscription Service</span>
                                <span className="text-[9px] text-[#666666]">Card *8831 • Recurring</span>
                              </div>
                              <span className="font-extrabold text-[#228B22] bg-[#228B22]/10 px-2 py-0.5 rounded-full">
                                Normal (0.02)
                              </span>
                            </div>
                          </div>

                          {/* Scatter Plot & Pipeline Nodes (6 Cols) */}
                          <div className="sm:col-span-6 bg-white p-3 rounded-xl border border-[#E8E8E8] shadow-xs flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[9px] font-extrabold text-[#666666] uppercase">ANOMALY SCATTER MAP</span>
                              <Network className="w-3.5 h-3.5 text-[#111111]" />
                            </div>

                            {/* Simulated Scatter Plot Graph with Nodes */}
                            <div className="h-20 bg-[#F7F7F7] rounded-lg border border-[#E8E8E8] relative overflow-hidden flex items-center justify-center p-2">
                              {/* Normal Node Cluster (Blue) */}
                              <div className="absolute left-4 top-3 w-3 h-3 rounded-full bg-[#4D8DFF] opacity-80" />
                              <div className="absolute left-8 top-8 w-2.5 h-2.5 rounded-full bg-[#4D8DFF] opacity-80" />
                              <div className="absolute left-12 top-4 w-3.5 h-3.5 rounded-full bg-[#4D8DFF] opacity-80" />
                              <div className="absolute left-10 top-12 w-2 h-2 rounded-full bg-[#4D8DFF] opacity-80" />
                              <div className="absolute left-16 top-10 w-3 h-3 rounded-full bg-[#4D8DFF] opacity-80" />

                              {/* Connecting Network Line */}
                              <div className="absolute inset-x-4 top-1/2 border-b border-dashed border-[#CCCCCC]" />

                              {/* Suspicious Anomaly Node (Orange Pulsing Outlier) */}
                              <div className="absolute right-6 top-3 w-5 h-5 rounded-full bg-[#FF6A2A]/30 flex items-center justify-center animate-ping">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A2A]" />
                              </div>
                              <div className="absolute right-6 top-3 w-5 h-5 rounded-full bg-[#FF6A2A]/20 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A2A]" />
                              </div>
                            </div>

                            <div className="mt-2 flex items-center justify-between text-[9px] font-bold text-[#666666]">
                              <span className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-[#4D8DFF]" /> Normal Cluster
                              </span>
                              <span className="flex items-center gap-1 text-[#FF6A2A]">
                                <span className="w-2 h-2 rounded-full bg-[#FF6A2A]" /> Anomaly Outlier
                              </span>
                            </div>
                          </div>

                        </div>

                        {/* Bottom Pipeline Status */}
                        <div className="relative z-10 bg-[#111111] text-white p-2.5 rounded-xl flex items-center justify-between shadow-md text-xs font-bold">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-[#FF6A2A]" />
                            <span className="text-white/90 font-medium text-[11px]">Classification Engine: Fraud Patterns Isolated</span>
                          </div>
                          <span className="text-[10px] font-mono bg-[#FF6A2A] text-white px-2 py-0.5 rounded">
                            Model Active
                          </span>
                        </div>
                      </div>
                    )}

                    {/* PROJECT 04 — AAKAAR STUDIOX (Creative Studio Agency Presentation) */}
                    {project.id === 'aakaar-studiox' && (
                      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-4 shadow-sm flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Background Mesh */}
                        <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                        {/* Agency Header Bar */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#B98CF2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                              <Layout className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <span className="font-display font-black text-xs text-[#111111] block leading-none">
                                AAKAAR STUDIOX
                              </span>
                              <span className="text-[9px] font-semibold text-[#666666]">
                                Digital Design Agency Showcase
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold bg-[#B98CF2]/20 text-[#111111] px-2.5 py-1 rounded-full border border-[#B98CF2]/40">
                            Editorial Web UI
                          </span>
                        </div>

                        {/* Agency Hero Visual Mockup */}
                        <div className="relative z-10 my-3 bg-[#111111] text-white p-5 rounded-2xl shadow-lg border border-[#222222] flex flex-col justify-between text-center overflow-hidden">
                          {/* Floating Decorative 3D Geometry */}
                          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#B98CF2]/30 blur-lg pointer-events-none" />
                          <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#FF6A2A]/30 blur-lg pointer-events-none" />

                          <span className="text-[10px] font-extrabold text-[#B98CF2] tracking-widest uppercase block">
                            CREATIVE DESIGN & WEB
                          </span>
                          <h4 className="font-display font-black text-2xl tracking-tighter text-white mt-1">
                            AAKAAR STUDIOX
                          </h4>
                          <p className="text-[11px] text-white/70 max-w-sm mx-auto mt-1 font-medium leading-normal">
                            High-impact digital interfaces, tailored brand layouts, and responsive editorial platforms.
                          </p>

                          <div className="mt-3 flex items-center justify-center gap-2">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white border border-white/10">
                              Modern Layouts
                            </span>
                            <span className="px-3 py-1 bg-[#B98CF2] rounded-full text-[10px] font-extrabold text-[#111111]">
                              Explore Showcase →
                            </span>
                          </div>
                        </div>

                        {/* Bottom Feature Badges Bar */}
                        <div className="relative z-10 bg-white p-2.5 rounded-xl border border-[#E8E8E8] shadow-xs flex items-center justify-between text-[11px] font-extrabold text-[#111111]">
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-[#B98CF2]" /> Fluid Motion
                          </span>
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-[#B98CF2]" /> Tailored Grids
                          </span>
                          <span className="flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-[#B98CF2]" /> Responsive UI
                          </span>
                        </div>
                      </div>
                    )}

                    {/* PROJECT 05 — PORTFOLIO (Interactive Developer Portfolio Showcase) */}
                    {project.id === 'portfolio-website' && (
                      <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-4 shadow-sm flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500">
                        {/* Background Mesh */}
                        <div className="absolute inset-0 bg-[radial-gradient(#E8E8E8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                        {/* Header Bar */}
                        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8E8E8] bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#111111] text-[#C7E95A] flex items-center justify-center font-bold text-xs shadow-xs">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <span className="font-display font-black text-xs text-[#111111] block leading-none">
                                DEVELOPER PORTFOLIO
                              </span>
                              <span className="text-[9px] font-semibold text-[#666666]">
                                Cohesion Design System
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-extrabold bg-[#C7E95A] text-[#111111] px-2.5 py-1 rounded-full shadow-xs">
                            3D WebGL + Motion
                          </span>
                        </div>

                        {/* Center Portfolio Composition featuring Prashanth's EXACT Uploaded Profile Photograph */}
                        <div className="relative z-10 my-3 bg-white p-3.5 rounded-2xl border border-[#E8E8E8] shadow-xs flex items-center justify-between gap-4">
                          {/* Exact Uploaded Profile Photograph */}
                          <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-[#111111] shadow-md shrink-0">
                            <img 
                              src={personalInfo.portrait} 
                              alt="Prashanth Gouda" 
                              className="w-full h-full object-cover object-center" 
                            />
                            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#228B22] border-2 border-white" />
                          </div>

                          {/* Profile Details & Title */}
                          <div className="text-left flex-1 overflow-hidden">
                            <span className="text-[10px] font-extrabold text-[#FF6A2A] uppercase tracking-wider block">
                              CS & DESIGN UNDERGRADUATE
                            </span>
                            <h4 className="font-display font-black text-xl text-[#111111] leading-tight">
                              PRASHANTH GOUDA
                            </h4>
                            <p className="text-[11px] font-semibold text-[#666666] mt-0.5">
                              Full-Stack • AI Integration • 3D WebGL
                            </p>
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              <span className="text-[9px] font-bold bg-[#F7F7F7] px-2 py-0.5 rounded border border-[#E8E8E8] text-[#111111]">
                                MERN Stack
                              </span>
                              <span className="text-[9px] font-bold bg-[#F7F7F7] px-2 py-0.5 rounded border border-[#E8E8E8] text-[#111111]">
                                Gemini AI
                              </span>
                              <span className="text-[9px] font-bold bg-[#F7F7F7] px-2 py-0.5 rounded border border-[#E8E8E8] text-[#111111]">
                                Three.js
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Footer Bar */}
                        <div className="relative z-10 bg-[#111111] text-white p-2.5 rounded-xl flex items-center justify-between text-xs font-bold shadow-md">
                          <span className="text-white/90">Live Interactive Experience</span>
                          <span className="text-[#C7E95A] font-mono">React + Three.js</span>
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay Arrow Button */}
                    <div className="absolute bottom-4 right-4 bg-[#111111] text-white p-3.5 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6A2A] z-20">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content Details Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-black text-4xl sm:text-5xl text-[#E8E8E8] group-hover:text-[#FF6A2A] transition-colors duration-300">
                        {project.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6A2A] bg-[#FF6A2A]/10 px-3 py-1 rounded-full">
                        CASE STUDY
                      </span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111] tracking-tight group-hover:text-[#FF6A2A] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#666666] mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[#444444] font-medium leading-relaxed mt-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6A2A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#F7F7F7] border border-[#E8E8E8] rounded-full text-xs font-semibold text-[#111111] group-hover:bg-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#111111] group-hover:text-[#FF6A2A] flex items-center gap-1.5 transition-colors">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
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
