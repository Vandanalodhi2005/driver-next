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
          HERO SECTION (BALANCED & REFINED TYPOGRAPHY)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#024ad8]/5 via-white to-slate-50/50 border-b border-slate-200/80 py-10 sm:py-14">
        {/* Ambient brand glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#024ad8]/10 blur-[110px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] animate-pulse" />
                Our Mission &amp; Purpose
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                A Friendly Voice in a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#024ad8] via-blue-600 to-indigo-700">
                  Noisy Tech World
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Driver Info Hub was established to provide a clean, educational sanctuary where users can find straightforward troubleshooting steps, understand how device drivers interact with Windows, and fix problems safely without paying for sketchy updater tools.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold">
                  <span className="text-[#024ad8]">✓</span> 100% Free &amp; Independent
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold">
                  <span className="text-[#024ad8]">✓</span> Zero Bundled Bloatware
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold">
                  <span className="text-[#024ad8]">✓</span> Privacy First
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_-10px_rgba(2,74,216,0.2)] border-3 border-white bg-slate-950 max-h-[300px]">
                <Image
                  src="/images/about-team.jpg"
                  alt="Driver Info Hub digital research team and electronics laboratory"
                  width={560}
                  height={320}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#024ad8] text-white flex items-center justify-center font-bold">
                      <ShieldCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">Independent Research Lab</div>
                      <div className="text-[10px] text-[#024ad8] font-semibold">Native OS Diagnostic Testing</div>
                    </div>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#024ad8] animate-ping" />
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
