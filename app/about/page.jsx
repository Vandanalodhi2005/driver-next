import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { 
  ShieldCheckIcon, 
  BuildingIcon, 
  MapPinIcon, 
  MailIcon, 
  CheckCircleIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CpuIcon,
  HelpCircleIcon
} from "@/components/Icons";

export const metadata = {
  title: "About Driver Info Hub | Mission & Community Standards",
  description: "Learn about Driver Info Hub's educational mission, editorial standards, community-driven research, and commitment to clear hardware driver troubleshooting."
};

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">
      
      {/* =========================================================
          HERO SECTION (DARK THEME AESTHETICS & GLOWING ACCENTS)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071330] to-slate-950 border-b border-slate-800/80 text-white py-12 sm:py-16">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.3),transparent)]" />
        </div>

        {/* Ambient Color Glow Blobs */}
        <div className="absolute top-1/4 left-8 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-8 w-80 h-80 bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-slate-300">
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Our Mission &amp; Purpose
              </div>

              {/* Main Heading with Radiant Gradient Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                A Friendly Voice in a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Noisy Tech World
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Driver Info Hub was established to provide a clean, educational sanctuary where users can find straightforward troubleshooting steps, understand how device drivers interact with Windows, and fix problems safely without paying for sketchy updater tools.
              </p>

              {/* Feature Value Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-slate-200 text-xs font-bold backdrop-blur-sm shadow-xs">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px]">✓</span>
                  <span>&amp; Independent</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-blue-500/30 text-slate-200 text-xs font-bold backdrop-blur-sm shadow-xs">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500/20 text-cyan-400 text-[11px]">✓</span>
                  <span>Zero Bundled Bloatware</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-slate-200 text-xs font-bold backdrop-blur-sm shadow-xs">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 text-[11px]">✓</span>
                  <span>Privacy First</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/drivers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 border border-blue-400/30 cursor-pointer"
                >
                  <CpuIcon className="w-4 h-4" />
                  <span>Explore Driver Guides</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MailIcon className="w-4 h-4 text-cyan-400" />
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card (5 cols - Dark Glassmorphism) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] p-4 sm:p-5 backdrop-blur-xl overflow-hidden">
                
                {/* Edge Rim Highlight */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="font-bold text-slate-200 tracking-wide uppercase text-[11px]">
                      Independent Research Lab
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                    Verified 2026
                  </span>
                </div>

                {/* Card Hardware Image Container */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 aspect-[16/10] group">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Driver Info Hub digital research team and electronics laboratory"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#024ad8] to-cyan-600 text-white flex items-center justify-center font-bold shadow-xs">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Native OS Diagnostics</div>
                        <div className="text-[10px] text-cyan-300 font-medium">Free of Ads &amp; Paid Updaters</div>
                      </div>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT AREA
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-10 sm:py-14">

        {/* =========================================================
            1. WHY DRIVER INFO HUB EXISTS (EDITORIAL PILLARS)
        ========================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-2">
              Core Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Why Driver Info Hub Exists
            </h2>
            <div className="mt-3 space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Finding reliable, straightforward advice for resolving driver errors on modern operating systems has become frustratingly difficult. The web is full of aggressive pop-ups, paid automatic &ldquo;driver updater&rdquo; tools that bundle unwanted programs, and overly technical jargon.
              </p>
              <p>
                Driver Info Hub was established to provide a clean, educational sanctuary where users can find straightforward troubleshooting steps, understand how device drivers interact with Windows, and fix problems safely using native system utilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(2,74,216,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center mb-3 font-bold">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Independent &amp; Objective</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are an educational entity not owned or sponsored by any printer manufacturer or hardware vendor.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                100% Unbiased Guides
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(2,74,216,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 font-bold">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Zero Bundled Bloatware</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All our walkthroughs leverage native Windows tools (Device Manager, DISM, Print Management) and verified manufacturer sources.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                Safe &amp; Clean Execution
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(2,74,216,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#024ad8] flex items-center justify-center mb-3 font-bold">
                  <BookOpenIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Plain-English First</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technical accuracy is second to none, but presented in friendly, step-by-step human language anyone can follow.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                No Overwhelming Jargon
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(2,74,216,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 font-bold">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Universal Architecture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We cover everything from home inkjet printers to high-performance gaming GPUs and PCIe controllers.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-purple-600">
                Full Hardware Spectrum
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            2. COMMUNITY DRIVEN SECTION (USER SPECIFIED COPY & LINKS)
        ========================================================= */}
        <section className="rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 sm:p-9 text-white shadow-[0_20px_50px_-15px_rgba(2,74,216,0.35)] border border-blue-400/30 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                Community Driven
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Want us to explain another driver topic?
              </h2>

              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop. Tell us what to write next.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/drivers"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#024ad8] bg-white hover:bg-slate-100 shadow-md shadow-black/10 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Browse All Topics</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-xs shadow-2xs transition-all transform hover:-translate-y-0.5"
                >
                  <BookOpenIcon className="w-3.5 h-3.5" />
                  <span>Need Help? Visit Knowledge</span>
                </Link>
              </div>
            </div>

            {/* Right Topic Suggestion Interactive Card */}
            <div className="lg:col-span-4 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-md space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                Community Feedback Loop
              </div>
              <p className="text-xs text-blue-100 leading-relaxed font-medium">
                We regularly expand our library based on real reader requests, Windows Update glitches, and peripheral driver conflicts.
              </p>
              
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Submit A Topic Request →</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            3. CORPORATE IDENTITY & GOVERNANCE
        ========================================================= */}
        <section className="space-y-5 pt-4 border-t border-slate-200">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Transparency
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Corporate Identity &amp; Governance
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Driver Info Hub is operated as an independent educational publication by <strong>{siteConfig.company.name}</strong>, incorporated and registered in Ontario, Canada.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50/80 via-white to-slate-50 border border-blue-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
                <BuildingIcon className="w-4 h-4 text-[#024ad8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Operating Entity</div>
                  <div className="font-bold text-slate-900 mt-0.5 text-xs sm:text-sm">{siteConfig.company.name}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
                <MapPinIcon className="w-4 h-4 text-[#024ad8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Registered Office</div>
                  <div className="font-medium text-slate-800 text-xs mt-0.5 leading-relaxed">{siteConfig.company.address}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
                <MailIcon className="w-4 h-4 text-[#024ad8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Editorial &amp; Support</div>
                  <a href={`mailto:${siteConfig.company.email}`} className="font-bold text-[#024ad8] hover:underline text-xs mt-0.5 block">
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 leading-relaxed font-normal">
              {siteConfig.disclaimer}
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}
