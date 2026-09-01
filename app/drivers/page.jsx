"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  ScanIcon, 
  MonitorIcon, 
  VolumeIcon, 
  WifiIcon, 
  BluetoothIcon, 
  UsbIcon,
  CpuIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  InfoIcon,
  HelpCircleIcon
} from "@/components/Icons";

export default function AllDriversPage() {
  const [activeCategory, setActiveCategory] = useState("printers");
  const [activeOsTab, setActiveOsTab] = useState("windows");

  // 10 Detailed Driver Categories with "What It Does", "Why It Matters", "Quick Tip"
  const driverFamilyDetails = {
    printers: {
      title: "Printer Drivers",
      slug: "/drivers/printers",
      badge: "Primary Focus",
      icon: <PrinterIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Translate print jobs from your OS into signals your printer understands.",
      whyItMatters: "Without the right driver, prints can be garbled, low-quality, or fail entirely.",
      quickTip: "Check the manufacturer's website for the latest version when you install a new printer.",
      highlights: ["Spooler clearing protocols", "Network & WSD port setup", "Fixing 'Driver Unavailable'"]
    },
    scanners: {
      title: "Scanner Drivers",
      slug: "/drivers/scanners",
      badge: "Imaging",
      icon: <ScanIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Coordinates document feed motors, optical sensors, and transfers digitized scan data to applications.",
      whyItMatters: "Improper TWAIN/WIA drivers cause applications to freeze or report 'Scanner not detected'.",
      quickTip: "Install 64-bit WIA drivers for modern Windows apps, and legacy TWAIN for older scanning utilities.",
      highlights: ["TWAIN vs WIA protocols", "Flatbed feeder alignment", "Network scanner discovery"]
    },
    graphics: {
      title: "Graphics Drivers",
      slug: "/drivers/graphics",
      badge: "Performance",
      icon: <MonitorIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Powers rendering pipelines, shader compilation, multi-monitor syncing, and GPU clock speeds.",
      whyItMatters: "Outdated GPU drivers lead to black screens, visual artifacts, game crashes, and display latency.",
      quickTip: "Use Display Driver Uninstaller (DDU) in Safe Mode when performing a clean GPU driver upgrade.",
      highlights: ["Clean DDU reinstallation", "DirectX & Vulkan crashes", "High refresh-rate multi-display"]
    },
    audio: {
      title: "Audio Drivers",
      slug: "/drivers/audio",
      badge: "Multimedia",
      icon: <VolumeIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Converts digital audio streams into analog headphone/speaker voltages and processes microphone input.",
      whyItMatters: "Driver corruption causes crackling audio, missing Realtek control panels, or zero sound output.",
      quickTip: "Disable exclusive audio enhancements in Sound Properties if your microphone stops working randomly.",
      highlights: ["Realtek Audio Console fixes", "USB DAC & Spatial Audio", "Missing output endpoint repairs"]
    },
    network: {
      title: "Network Drivers",
      slug: "/drivers/network",
      badge: "Connectivity",
      icon: <WifiIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Regulates physical Ethernet packets and wireless Wi-Fi 6/6E radio frequencies between PC and router.",
      whyItMatters: "Faulty network drivers result in high latency, dropping Wi-Fi connections, and 'No Internet, Secured'.",
      quickTip: "Disable 'Allow computer to turn off this device to save power' in Network Adapter Power Management.",
      highlights: ["Wi-Fi latency fixes", "Realtek/Intel LAN updates", "Bandwidth throttling solutions"]
    },
    bluetooth: {
      title: "Bluetooth Drivers",
      slug: "/drivers/bluetooth",
      badge: "Wireless",
      icon: <BluetoothIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Manages short-range radio pairing, audio codecs (AAC, LDAC, SBC), and low-energy peripherals.",
      whyItMatters: "Outdated Bluetooth stacks cause audio stuttering, pairing loops, or the Windows toggle disappearing.",
      quickTip: "Restart the 'Bluetooth Support Service' in Windows Services if the toggle is missing in Settings.",
      highlights: ["Bluetooth toggle recovery", "Headset audio stutter fixes", "LE dongle override steps"]
    },
    usb: {
      title: "USB Drivers",
      slug: "/drivers/usb",
      badge: "Hardware",
      icon: <UsbIcon className="w-6 h-6 text-[#024ad8]" />,
      whatItDoes: "Enables motherboard xHCI host controllers to enumerate Type-C, USB 3.2, and hub devices instantly.",
      whyItMatters: "Corrupt USB drivers generate 'Code 43: Device Descriptor Request Failed' and disconnect ports randomly.",
      quickTip: "Update your motherboard chipset drivers directly to refresh all underlying USB root hub controllers.",
      highlights: ["Fixing USB Code 43 errors", "Sleep mode disconnect fixes", "Type-C hub recognition"]
    },
    chipset: {
      title: "Chipset Drivers",
      slug: "/drivers",
      badge: "Foundation",
      icon: (
        <svg className="w-6 h-6 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      whatItDoes: "Coordinates communications between the CPU, PCIe lanes, RAM, SATA controllers, and power states.",
      whyItMatters: "Without chipset INF files, Windows treats core motherboard buses generically, reducing throughput.",
      quickTip: "Always install chipset drivers first on a fresh OS installation before installing any other drivers.",
      highlights: ["PCIe lane lane speed unlocks", "AMD/Intel power plan tuning", "Motherboard bus optimization"]
    },
    storage: {
      title: "Storage Drivers",
      slug: "/drivers",
      badge: "Data",
      icon: (
        <svg className="w-6 h-6 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      whatItDoes: "Directs NVMe PCIe protocols, AHCI SATA queues, and TRIM garbage collection on SSDs and HDDs.",
      whyItMatters: "Improper storage drivers can degrade read/write speeds, increase boot times, or cause BSODs.",
      quickTip: "Ensure your BIOS is configured for AHCI/NVMe rather than legacy IDE before installing storage drivers.",
      highlights: ["NVMe controller optimization", "TRIM command verification", "SATA AHCI queue efficiency"]
    },
    input: {
      title: "Input Device Drivers",
      slug: "/drivers",
      badge: "Controls",
      icon: (
        <svg className="w-6 h-6 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      whatItDoes: "Translates high-polling rate sensor clicks, macro keystrokes, and game controller haptics into OS events.",
      whyItMatters: "Faulty HID drivers introduce input lag, missed keystrokes, or touchpad gesture failures.",
      quickTip: "Use standard Windows Precision Touchpad drivers whenever possible for the cleanest laptop gesture feel.",
      highlights: ["Precision touchpad gestures", "High-polling rate mouse tuning", "Gamepad driver pairing"]
    }
  };

  const currentCategoryData = driverFamilyDetails[activeCategory] || driverFamilyDetails.printers;

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">
      
      {/* =========================================================
          HERO SECTION (PREMIUM BACKGROUND WITH IMAGE & OVERLAY)
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24 border-b border-slate-800">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src="/images/drivers-hero.jpg"
            alt="Hardware and device drivers schematic overview"
            fill
            priority
            className="object-cover object-center transform scale-105"
          />
        </div>

        {/* Ambient Gradient Lighting & Mesh Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#024ad8]/30 z-0 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#024ad8]/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-white/80">
            <Breadcrumbs items={[{ label: "All Drivers" }]} />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024ad8]/20 border border-[#024ad8]/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Driver Overviews
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Every Driver Family, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Explained in Plain English
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Drivers are simply translators between your software and your hardware. Explore each driver category to understand what it does, why it matters, and how to keep it working smoothly — no technical jargon required.
            </p>
          </div>

          {/* Quick Metrics & Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
              <div className="text-xl font-extrabold text-cyan-300">10+</div>
              <div className="text-xs text-slate-400 font-medium">Driver Families</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
              <div className="text-xl font-extrabold text-blue-300">100%</div>
              <div className="text-xs text-slate-400 font-medium">Independent Research</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
              <div className="text-xl font-extrabold text-cyan-300">Zero</div>
              <div className="text-xs text-slate-400 font-medium">Bloatware / Scams</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-xs">
              <div className="text-xl font-extrabold text-blue-300">Step-by-Step</div>
              <div className="text-xs text-slate-400 font-medium">Troubleshooting</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          PAGE CONTENT WRAPPER
      ========================================================= */}
      <div className="space-y-16 sm:space-y-24 py-12 sm:py-16">

        {/* =========================================================
            1. WHY USE THIS GUIDE: UNDERSTANDING DRIVERS MADE SIMPLE
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#024ad8]/5 via-white to-blue-50/50 border border-slate-200 p-8 sm:p-12 shadow-xs">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-3">
                Why Use This Guide
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Understanding Drivers Made Simple
              </h2>
              <div className="mt-4 space-y-3 text-slate-600 text-base leading-relaxed">
                <p>
                  Every piece of hardware on your computer — from your printer to your graphics card — needs a driver to work. But understanding drivers doesn&apos;t require a technical degree. Our guides break down what each one does, why updates matter, and how to keep everything running smoothly.
                </p>
                <p>
                  Whether you&apos;re troubleshooting a problem or just curious about how your PC works, we explain things in plain English, step by step, with no jargon.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold mb-4">
                  <CpuIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Hardware Categories</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learn about printer, graphics, audio, network, chipset, and storage drivers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold mb-4">
                  <BookOpenIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Clear Explanations</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No complex terminology — just practical, understandable guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold mb-4">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Maintenance Tips</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Understand updates, compatibility, and common troubleshooting practices.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            2. DRIVER CATEGORIES: EXPLORE EVERY DRIVER FAMILY
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Driver Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Explore Every Driver Family
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              From printers to chipsets, every hardware category has a guide written in simple, straightforward language.
            </p>
          </div>

          {/* Banner Tagline & Description Card */}
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#024ad8] via-blue-700 to-indigo-800 p-6 sm:p-8 text-white shadow-lg shadow-[#024ad8]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Keep Your Drivers Updated, Keep Your PC Running Better.
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Discover how to update device drivers safely, improve system performance, troubleshoot common hardware issues, and keep your Windows PC running smoothly with easy-to-follow guides.
              </p>
            </div>
            <Link
              href="/knowledge-base"
              className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#024ad8] hover:bg-slate-100 text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Learn Update Best Practices
            </Link>
          </div>

          {/* Interactive Driver Family Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {Object.keys(driverFamilyDetails).map((key) => {
              const item = driverFamilyDetails[key];
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#024ad8] text-white shadow-md shadow-[#024ad8]/25 scale-102"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Category Detail Showcase Card */}
          <div className="rounded-3xl border-2 border-[#024ad8]/30 bg-white p-8 sm:p-10 shadow-lg shadow-[#024ad8]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#024ad8]/10 flex items-center justify-center shadow-2xs">
                    {currentCategoryData.icon}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#024ad8]/10 text-[#024ad8]">
                      {currentCategoryData.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-0.5">
                      {currentCategoryData.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-[#024ad8] uppercase tracking-wider mb-1">
                      What It Does
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {currentCategoryData.whatItDoes}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-[#024ad8] uppercase tracking-wider mb-1">
                      Why It Matters
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {currentCategoryData.whyItMatters}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-xs font-bold text-[#024ad8] uppercase tracking-wider mb-1">
                      Quick Tip
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                      {currentCategoryData.quickTip}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                  <span className="text-slate-500 font-bold mr-1">Featured In This Guide:</span>
                  {currentCategoryData.highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-left lg:text-right">
                  <div className="text-xs font-bold text-slate-500 uppercase">Complete Category Guide</div>
                  <div className="text-base font-bold text-slate-900 mt-1">Explore Troubleshooting &amp; Setup</div>
                </div>
                <Link
                  href={currentCategoryData.slug}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#024ad8] text-white hover:bg-[#013db3] text-sm font-bold shadow-md shadow-[#024ad8]/20 transition-all"
                >
                  <span>Open {currentCategoryData.title} Guide</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            3. DEEP DIVES: ADVANCED DRIVER ARCHITECTURE (6 CARDS)
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Deep Dives
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Advanced Driver Architecture
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the deeper layers of driver technology. Understand privilege levels, driver isolation, and the differences between kernel and user mode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Kernel-Mode */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                    Ring 0 / High Privilege
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  Kernel-Mode Drivers →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Privileged execution. Direct hardware access with system-wide responsibility. Essential for storage and GPU, but risky.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

            {/* 2. User-Mode */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Ring 3 / Safe Sandbox
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  User-Mode Drivers →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Safe isolation. Run in restricted user space. If they crash, only the driver stops, not your system.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

            {/* 3. Chipset */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#024ad8] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Motherboard Core
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  Chipset Drivers →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  System foundation. Manage your motherboard&apos;s chipset. Install these first — everything else depends on them.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

            {/* 4. Storage */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                    NVMe &amp; SATA
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  Storage Drivers →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Data management. Handle SSDs, HDDs, and NVMe. Critical for performance and reliability of your storage devices.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

            {/* 5. Input Devices */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    HID Subsystem
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  Input Devices →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every click and keystroke. Keyboards, mice, touchpads, game controllers. Usually work with generic drivers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

            {/* 6. Virtual Devices */}
            <Link
              href="/drivers"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024ad8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                    Emulation &amp; TAP
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                  Virtual Device Drivers →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Software hardware. VMs, VPNs, and emulators use virtual drivers that pretend to be real hardware.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Learn Architecture Details
              </div>
            </Link>

          </div>
        </section>

        {/* =========================================================
            4. DRIVER LOCATIONS: WHERE DO DRIVERS ACTUALLY LIVE ON YOUR PC?
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Driver Locations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Where Do Drivers Actually Live on Your PC?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Spoiler: they&apos;re not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Inside the Device Manager
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This is the friendliest place to start on a Windows PC. Right-click the Start button and pick &ldquo;Device Manager,&rdquo; and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It&apos;s like a backstage pass to the people running the show.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Built-in Windows Management
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Through Settings &amp; Updates
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  On modern Windows systems, head to Settings, then Windows Update, then &ldquo;Advanced options&rdquo; and look for &ldquo;Optional updates.&rdquo; Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution&apos;s package manager (or a built-in &ldquo;Additional Drivers&rdquo; tool) does the same job.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                System Update Channels
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  The Hardware Maker&apos;s Website
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every reputable hardware maker keeps a &ldquo;Support&rdquo; or &ldquo;Drivers&rdquo; section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8]">
                Verified OEM Direct
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            5. ABOUT DRIVER INFO HUB: A FRIENDLY VOICE IN A NOISY TECH WORLD
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                About Driver Info Hub
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                A Friendly Voice in a Noisy Tech World
              </h2>
              
              <div className="space-y-4 text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
                </p>
                <p className="text-white font-medium">
                  No sponsorships. No affiliate links. No &ldquo;instant driver updater&rdquo; nonsense. Just clear, honest explanations of how things actually work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-3">
                  <div className="text-cyan-300 font-bold text-lg">✓</div>
                  <span className="text-xs font-semibold">Independent and free to read, always</span>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-3">
                  <div className="text-cyan-300 font-bold text-lg">✓</div>
                  <span className="text-xs font-semibold">Plain-English first, technical accuracy second to none</span>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-3">
                  <div className="text-cyan-300 font-bold text-lg">✓</div>
                  <span className="text-xs font-semibold">Privacy-respecting — no aggressive trackers or sold data</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-[#024ad8] bg-white hover:bg-slate-100 shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Read More About Us</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. DRIVER IDENTIFICATION: HOW TO KNOW WHICH DRIVER YOU'RE ACTUALLY USING
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Driver Identification
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              How to Know Which Driver You&apos;re Actually Using
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Windows */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                    Windows
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Device Manager</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">On Windows</h3>
                <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                  <li>• <strong>Open Device Manager:</strong> Right-click the Start button and select &ldquo;Device Manager.&rdquo; This shows every piece of hardware on your computer.</li>
                  <li>• <strong>Find your device:</strong> Expand the category your device is in (Display adapters for GPU, Sound, video and game controllers for audio, etc.).</li>
                  <li>• <strong>Check the driver:</strong> Right-click your device and select &ldquo;Properties.&rdquo; Click the &ldquo;Driver&rdquo; tab to see the driver name, date, version, and publisher. This tells you exactly what&apos;s running.</li>
                </ul>
              </div>
              <div className="mt-5 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-[#024ad8] font-semibold">
                This is the cleanest way to confirm what&apos;s running before you decide to update.
              </div>
            </div>

            {/* macOS */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                    macOS
                  </span>
                  <span className="text-xs text-slate-400 font-mono">System Report</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">On macOS</h3>
                <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                  <li>• <strong>Open System Report:</strong> Click the Apple menu, choose &ldquo;About This Mac,&rdquo; then click &ldquo;More Info&rdquo; and &ldquo;System Report.&rdquo;</li>
                  <li>• <strong>Browse hardware:</strong> Look at sections like Graphics, Audio, USB, Bluetooth, or Network. Each section lists the underlying driver (called a &ldquo;kext&rdquo; or &ldquo;extension&rdquo;) along with its version.</li>
                  <li>• <strong>Understand what you see:</strong> macOS handles most drivers automatically behind the scenes, so what you&apos;re usually seeing are clean, system-managed entries that just work.</li>
                </ul>
              </div>
              <div className="mt-5 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-[#024ad8] font-semibold">
                macOS rarely needs driver updates because they&apos;re bundled into OS updates.
              </div>
            </div>

            {/* Linux */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                    Linux
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Terminal Shell</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">On Linux</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Open a terminal: Use these friendly commands to see what drivers you have loaded:
                </p>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 rounded-lg bg-slate-950 text-blue-300">
                    <span className="text-slate-400">$ </span>lspci -k
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">Shows connected hardware and their drivers.</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 text-blue-300">
                    <span className="text-slate-400">$ </span>lsusb
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">Lists USB devices and drivers.</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 text-blue-300">
                    <span className="text-slate-400">$ </span>lsmod
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">Shows every driver module currently loaded in the kernel.</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-[#024ad8] font-semibold">
                Use built-in package managers or modprobe for driver loading.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            7. UPDATES & MAINTENANCE: HOW TO UPDATE DRIVERS SAFELY (6 STEPS)
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Updates &amp; Maintenance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              How to Update Drivers Safely
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Driver updates can fix bugs, improve performance, and add new features. Here&apos;s the safe, step-by-step approach that works on any operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 1: Know What You&apos;re Updating
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use Device Manager (Windows) or System Report (Mac/Linux) to identify exactly which driver you need to update. Write down the device name, model, and current driver version.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 2: Back Up Your System
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Create a system restore point (Windows) or backup (Mac/Linux) before updating. This gives you an escape hatch if something goes wrong.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 3: Download from Official Sources
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Go directly to the hardware maker&apos;s official website. Search for your exact device model and download the driver that matches your operating system version (32-bit vs 64-bit, Windows 10 vs 11, etc.).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 4: Disable Antivirus Temporarily
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Some antivirus software can interfere with driver installation. Temporarily disable it, install the driver, then turn it back on immediately after.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 5: Install and Restart
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Run the driver installer and follow the prompts. Many drivers require a full system restart to take effect. Don&apos;t skip this step — restart your computer completely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#024ad8] text-white font-extrabold flex items-center justify-center mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Step 6: Test and Verify
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                After restart, test your device to make sure it&apos;s working properly. Check Device Manager again to confirm the new driver version is installed.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            8. TIMING MATTERS: WHEN SHOULD YOU UPDATE YOUR DRIVERS?
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Timing Matters
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              When Should You Update Your Drivers?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Not all drivers need updates right away. Here&apos;s when updates actually matter and when you can safely wait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01: Update Immediately */}
            <div className="p-7 rounded-2xl bg-rose-50/50 border-2 border-rose-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-3xl font-extrabold text-rose-600 mb-2">01</div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">Update Immediately</h3>
                <p className="text-xs font-semibold text-rose-700 mb-4">
                  Critical issues that can affect reliability or security.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-rose-600 font-bold">✓</span>
                    <span>Your device isn&apos;t working at all</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-600 font-bold">✓</span>
                    <span>You just installed a new operating system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-600 font-bold">✓</span>
                    <span>Your system is crashing or unstable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-600 font-bold">✓</span>
                    <span>A security vulnerability was announced</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 02: Update Soon */}
            <div className="p-7 rounded-2xl bg-blue-50/50 border-2 border-blue-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-3xl font-extrabold text-[#024ad8] mb-2">02</div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">Update Soon</h3>
                <p className="text-xs font-semibold text-[#024ad8] mb-4">
                  Situations where updates improve performance and compatibility.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-[#024ad8] font-bold">✓</span>
                    <span>Performance has degraded over time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#024ad8] font-bold">✓</span>
                    <span>A specific feature you need is missing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#024ad8] font-bold">✓</span>
                    <span>Your device is making weird noises or acting odd</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#024ad8] font-bold">✓</span>
                    <span>After a major OS update (Windows 11, macOS Sonoma, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 03: Can Wait */}
            <div className="p-7 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-3xl font-extrabold text-slate-500 mb-2">03</div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">Can Wait</h3>
                <p className="text-xs font-semibold text-slate-600 mb-4">
                  Minor updates that are safe to postpone when everything is stable.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold">✓</span>
                    <span>Everything is working perfectly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold">✓</span>
                    <span>It&apos;s a minor version bump (1.5 → 1.6)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold">✓</span>
                    <span>You use the device rarely or for basic tasks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold">✓</span>
                    <span>The update just adds a small feature you don&apos;t use</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            9. TROUBLESHOOTING: COMMON DRIVER PROBLEMS & WHAT TO DO
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Troubleshooting
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Common Driver Problems &amp; What to Do
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Driver issues are more common than you&apos;d think. Here are the problems we see most often and how to fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Prob 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  &ldquo;Device Not Found&rdquo; or &ldquo;Unknown Device&rdquo;
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Windows can&apos;t figure out what hardware this is, so it can&apos;t load the right driver.
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Go to Device Manager, find the unknown device, right-click it, and select &ldquo;Update driver.&rdquo; Choose &ldquo;Browse my computer&rdquo; and point it to the manufacturer&apos;s driver folder.
                </p>
              </div>
            </div>

            {/* Prob 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Device Works But Performance is Slow
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The driver is installed but may be outdated or not optimized for your hardware.
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Check the manufacturer&apos;s website for a newer driver version. Download and install it, then restart. Performance should improve noticeably.
                </p>
              </div>
            </div>

            {/* Prob 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Device Stopped Working After an Update
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  A recent driver update broke something, or your system is incompatible with the new version.
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Right-click the device in Device Manager and select &ldquo;Roll back driver&rdquo; to go back to the previous version that was working.
                </p>
              </div>
            </div>

            {/* Prob 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Your Computer Crashes When Using a Device
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The driver has a bug that causes system instability when the device is used.
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Update to the latest driver first. If crashes continue, try an older stable version. Contact the manufacturer if neither works.
                </p>
              </div>
            </div>

            {/* Prob 5 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Driver Installation Keeps Failing
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Something is preventing the driver from installing properly (antivirus, corrupted installer, etc.).
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Disable antivirus temporarily, delete any old driver files, restart your computer, then try installing again.
                </p>
              </div>
            </div>

            {/* Prob 6 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#024ad8] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  You Can&apos;t Find a Driver for Your Device
                </h3>
                <div className="text-xs text-slate-500 font-semibold mb-1">What it means:</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The device is old, rare, or the manufacturer didn&apos;t release drivers for your OS version.
                </p>
                <div className="text-xs text-[#024ad8] font-bold mb-1">How to fix:</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Try a generic or alternative driver from the OS vendor. Contact the manufacturer for old devices. Sometimes the device just won&apos;t work on your OS.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            10. GETTING STARTED: WHERE TO START IF YOU'RE NEW TO ALL THIS
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
                Getting Started
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                Where to Start If You&apos;re New to All This
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                If you&apos;re just learning about drivers, here&apos;s the best path forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 1</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Learn the Basics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Start with the driver category guides above. Pick one that matches a device you actually use (your printer, graphics card, network adapter). Reading about drivers you interact with makes it all click faster.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 2</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. Check Your Current Drivers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Open Device Manager on Windows (or System Report on Mac) and browse around. Look at the devices on your computer. See how many drivers you actually have running right now? It&apos;s probably way more than you realized.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 3</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Visit the Manufacturer&apos;s Website</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Find your device (printer, GPU, motherboard, etc.) and go to the &ldquo;Support&rdquo; section of the manufacturer&apos;s website. This is where drivers actually come from. Bookmark it — you&apos;ll use it eventually.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 4</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4. Try Updating One Driver</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pick a device that&apos;s working fine. Go through the 6-step update process above. See how painless it is when you take it step by step? Now you have the confidence to do it again.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 5</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5. Explore Our Guides</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each driver category has a dedicated guide on this site. They explain not just what a driver is, but why it matters for your specific use case.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/20 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#024ad8] mb-1">Step 6</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">6. Ask for Help</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Stuck on something specific? Visit our Knowledge Base for step-by-step troubleshooting, or contact us with questions. We&apos;re here to help.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#024ad8]/10 flex items-center gap-3">
                  <Link href="/knowledge-base" className="text-xs font-bold text-[#024ad8] hover:underline">
                    Knowledge Base →
                  </Link>
                  <Link href="/contact" className="text-xs font-bold text-[#024ad8] hover:underline">
                    Contact Us →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
