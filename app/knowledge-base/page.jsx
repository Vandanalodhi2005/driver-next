import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  MailIcon,
  MessageCircleIcon,
  SearchIcon,
  WrenchIcon,
  ShieldCheckIcon,
  CpuIcon,
  PrinterIcon,
  WifiIcon,
  MonitorIcon,
  VolumeIcon,
  UsbIcon
} from "@/components/Icons";

export const metadata = {
  title: "Still Stuck? Tell Us About It | Knowledge Base - Driver Info Hub",
  description: "If you have worked through these steps and your problem persists, drop us a line. We may not be able to solve it for you, but we love adding new symptoms and fixes to our overviews.",
};

export default function KnowledgeBasePage() {
  const quickFixCards = [
    {
      category: "Device",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <PrinterIcon className="w-5 h-5" />,
      title: "Device Prints Blank or Garbled Pages",
      description: "Almost always a device driver issue. Reinstall the latest driver from the device manufacturer, not from a generic listing.",
      href: "/drivers/printers"
    },
    {
      category: "Audio",
       badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <VolumeIcon className="w-5 h-5" />,
      title: "No Sound Coming Out",
      description: "Check default output device first, then reinstall the audio driver from your laptop or motherboard maker.",
      href: "/drivers/audio"
    },
    {
      category: "Wi-Fi",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <WifiIcon className="w-5 h-5" />,
      title: "Wi-Fi Drops Constantly",
      description: "Disable aggressive power-saving on the network adapter, then update the driver from the laptop maker.",
      href: "/drivers/network"
    },
    {
      category: "Display",
       badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <MonitorIcon className="w-5 h-5" />,
      title: "Screen Flickers or Goes Black",
      description: "Almost always a graphics driver problem. Roll back to a known-good version or do a clean install.",
      href: "/drivers/graphics"
    },
    {
      category: "USB",
       badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <UsbIcon className="w-5 h-5" />,
      title: "USB Device Not Recognised",
      description: "Try another cable, then another port. If it still fails, reinstall the device-specific driver and the USB controller driver.",
      href: "/drivers/usb"
    },
    {
      category: "System",
       badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      icon: <CpuIcon className="w-5 h-5" />,
      title: "Computer Feels Slow After Update",
      description: "Re-install the chipset driver and check the GPU driver. Updates sometimes replace tuned drivers with generic ones.",
      href: "/blog"
    }
  ];

  const commonScenarios = [
    {
      title: "Device Manager Error Codes",
      subtitle: "Code 10, Code 43, Code 28 & Hardware Offline",
      description: "Mysterious hardware failure codes where Windows stops recognizing your device or fails to load required registry drivers.",
      tag: "Error Codes",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      icon: <CpuIcon className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Print Spooler & Network Freezes",
      subtitle: "RPC service crashes & buffer queue lockups",
      description: "Documents stuck in queue that cannot be cancelled, spooler service stopping automatically, or wireless network printer drops.",
      tag: "Printer Drivers",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      icon: <PrinterIcon className="w-5 h-5 text-blue-600" />
    },
    {
      title: "OS Upgrade Driver Mismatches",
      subtitle: "Windows 11 updates breaking legacy hardware",
      description: "Hardware that functioned perfectly on Windows 10 but suddenly shows 'Driver Unavailable' after an OS feature update.",
      tag: "OS Compatibility",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      icon: <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Peripheral Handshake Dropouts",
      subtitle: "USB 3.0, Wi-Fi Direct & Bluetooth disconnects",
      description: "Intermittent connection losses, USB host controller sleep mode bugs, or wireless discovery failure on local subnets.",
      tag: "Connectivity",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      accentBar: "bg-blue-600",
      icon: <WifiIcon className="w-5 h-5 text-blue-600" />
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Tell Us What Happened",
      description: "Share the device model, your Windows edition, the error message, and what steps you were trying to complete.",
      tag: "Reader Input",
      icon: <MessageCircleIcon className="w-5 h-5 text-blue-600" />
    },
    {
      step: "02",
      title: "Lab Diagnostics & Replication",
      description: "We investigate the root cause, recreate the failure scenario, and test clean INF, spooler, or registry remedies.",
      tag: "Research & Testing",
      icon: <WrenchIcon className="w-5 h-5 text-cyan-600" />
    },
    {
      step: "03",
      title: "Fix Added to Overviews",
      description: "We update our public knowledge base and troubleshooting articles so future users with your exact error find clear answers.",
      tag: "Community Benefit",
      icon: <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
    }
  ];

  const preflightChecks = [
    {
      number: "01",
      title: "Restart Print Spooler Service",
      detail: "Press Win + R, type services.msc, locate Print Spooler, and choose Restart to flush memory buffer jams."
    },
    {
      number: "02",
      title: "Match Exact OS Bit Architecture",
      detail: "Verify whether your operating system requires 64-bit (x64) vs 32-bit (x86) INF driver files."
    },
    {
      number: "03",
      title: "Direct USB Bypass Test",
      detail: "Connect via a high-speed USB cable to rule out router subnet segregation or Wi-Fi channel dropouts."
    },
    {
      number: "04",
      title: "Note the Device Manager Code",
      detail: "Right-click the problematic device in Device Manager > Properties to record the exact numeric error code."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* Top Breadcrumb Bar (Neutral Light Contrast) */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Base" }]} />
        </div>
      </div>

      {/* =========================================================
          HERO SECTION (DARK ONLY)
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/90 py-14 sm:py-18 lg:py-22">
        {/* Background Ambient Glows & Tech Matrix */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/hero-dark-bg.jpg"
            alt="Dark technical background"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/85" />
          <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-cyan-500/15 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Exactly User-Provided Copy */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_-3px_rgba(59,130,246,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Still Stuck?
              </div>

              {/* Exact Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Still Stuck?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Tell Us About It
                </span>
              </h1>

              {/* Exact Uncut Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                If you have worked through these steps and your problem persists, drop us a line. We may not be able to solve it for you, but we love adding new symptoms and fixes to our overviews.
              </p>

              {/* Exact Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
                >
                  <MailIcon className="w-4.5 h-4.5" />
                  <span>Send a Message</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <BookOpenIcon className="w-4.5 h-4.5 text-cyan-400" />
                  <span>Read the Blog</span>
                  <ArrowRightIcon className="w-4 h-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  <span>100% Educational &amp; Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
                  <span>Independent Knowledge Base</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Glassmorphic Telemetry Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/70 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] p-5 sm:p-6 backdrop-blur-xl overflow-hidden">

                {/* Subtle Ambient Radial Highlight */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="font-bold text-slate-200 tracking-wide uppercase text-[11px]">
                      Diagnostic Intake
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-semibold text-[10px]">
                    Overview Updates &bull; 2026
                  </span>
                </div>

                {/* Card Hardware Image */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-slate-950/80 aspect-[16/10] group">
                  <Image
                    src="/images/driver-support.jpg"
                    alt="Hardware diagnostic and driver troubleshooting setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                  {/* Floating Pill inside image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-lg p-2.5 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                        <WrenchIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">
                          Troubleshooting Lab
                        </div>
                        <div className="text-[11px] text-cyan-400 font-medium">
                          Every problem can teach us something new.
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Community
                    </span>
                  </div>
                </div>

                {/* Live Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-4 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm sm:text-base font-extrabold text-white">450+</div>
                    <div className="text-[10px] text-slate-400 font-medium">Fixed Scenarios</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm sm:text-base font-extrabold text-cyan-400">24-48h</div>
                    <div className="text-[10px] text-slate-400 font-medium">Review Cycle</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm sm:text-base font-extrabold text-indigo-400">Continuous</div>
                    <div className="text-[10px] text-slate-400 font-medium">Guide Updates</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHT SECTIONS (REST OF PAGE HAS LIGHT BACKGROUND)
      ========================================================= */}
      
      {/* 1. QUICK FIX OVERVIEWS (6 COMMON HARDWARE FAILURES) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              <CheckCircleIcon className="w-3.5 h-3.5 text-blue-600" />
              Quick Fix Overviews
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Common Hardware Problems &amp; Quick Fixes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Step-by-step diagnostic takeaways for the six most frequent driver errors and peripheral failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickFixCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 p-6 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border uppercase tracking-wider ${card.badgeColor}`}>
                      {card.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>Open the fix overview</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. HOW READER FEEDBACK EXPANDS OUR OVERVIEWS (3-Step Pipeline) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Community Knowledge Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              How Your Experience Improves Our Overviews
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              When you drop us a line with your persistent issue, it initiates our documentation process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 p-7 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 mb-2.5">
                    {step.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SYMPTOMS WE LOVE ADDING TO OVERVIEWS (4 Bento Cards - Light Theme) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <SearchIcon className="w-3.5 h-3.5 text-blue-600" />
            Active Investigation Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Symptoms We Love Adding to Our Overviews
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tell us about any of the following symptoms if you are currently experiencing them:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonScenarios.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-400 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Accent Strip */}
              <div className={`h-1.5 w-full ${item.accentBar}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {item.title}
                </h3>
                
                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {item.subtitle}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold group-hover:text-blue-700">
                  <span>Report this symptom</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. BEFORE YOU DROP US A LINE: 30-SECOND PRE-CHECKS */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                Quick Verification
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Before You Drop Us a Line: 30-Second Pre-Checks
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Many driver problems resolve quickly with these 4 basic checks. If you have already worked through them without success, be sure to let us know.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Skip checks &amp; message us directly</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {preflightChecks.map((check, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      {check.number}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      {check.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-8">
                    {check.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINAL LIGHT CALLOUT BANNER (UNCUT USER COPY) */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/70 border border-blue-200/80 p-8 sm:p-12 text-center shadow-md">
            
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 mb-6">
              <MailIcon className="h-6 w-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
              Still Stuck? Tell Us About It
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              If you have worked through these steps and your problem persists, drop us a line. We may not be able to solve it for you, but we love adding new symptoms and fixes to our overviews.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <MailIcon className="w-4.5 h-4.5" />
                <span>Send a Message</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 hover:border-blue-400 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <BookOpenIcon className="w-4.5 h-4.5 text-blue-600" />
                <span>Read the Blog</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}