"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  ScanIcon, 
  MonitorIcon, 
  VolumeIcon, 
  WifiIcon, 
  BluetoothIcon, 
  UsbIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CpuIcon,
  InfoIcon,
  HelpCircleIcon
} from "@/components/Icons";

export default function HomePage() {
  // Tabs for "The Basics" section
  const [basicTab, setBasicTab] = useState("translator");

  // Platform selection for "Driver Identification"
  const [osTab, setOsTab] = useState("windows");

  // FAQ Accordion state (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Hardware Ticker items
  const tickerItems = [
    "Networking", "USB & Devices", "Storage & SSD", "Bluetooth", 
    "Chipset & System", "Graphics & GPU", "Printer Drivers", "Audio & Sound",
    "Wi-Fi & Networking", "USB & Devices", "Storage & SSD", "Bluetooth", 
    "Chipset & System", "Graphics & GPU", "Printer Drivers", "Audio & Sound",
    "Wi-Fi & Networking", "USB & Devices", "Storage & SSD", "Bluetooth", 
    "Chipset & System", "Graphics & GPU"
  ];

  // 12 Explore Driver Categories
  const categoryCards = [
    {
      id: "kernel-mode",
      title: "Kernel-Mode Drivers",
      slug: "/drivers",
      description: "Low-level drivers with direct hardware and memory access.",
      tag: "Architecture",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: "user-mode",
      title: "User-Mode Drivers",
      slug: "/drivers",
      description: "Safer drivers that run separately from the operating system kernel.",
      tag: "Security",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: "printer",
      title: "Printer Drivers",
      slug: "/drivers/printers",
      description: "Installation, updates, compatibility and troubleshooting guides.",
      tag: "Primary",
      icon: <PrinterIcon className="w-4 h-4" />
    },
    {
      id: "graphics",
      title: "Graphics Drivers",
      slug: "/drivers/graphics",
      description: "GPU updates, gaming performance and display optimization.",
      tag: "Performance",
      icon: <MonitorIcon className="w-4 h-4" />
    },
    {
      id: "audio",
      title: "Audio Drivers",
      slug: "/drivers/audio",
      description: "Fix sound issues and understand audio device communication.",
      tag: "Media",
      icon: <VolumeIcon className="w-4 h-4" />
    },
    {
      id: "network",
      title: "Network Drivers",
      slug: "/drivers/network",
      description: "Wi-Fi, Ethernet and connectivity troubleshooting resources.",
      tag: "Connectivity",
      icon: <WifiIcon className="w-4 h-4" />
    },
    {
      id: "bluetooth",
      title: "Bluetooth Drivers",
      slug: "/drivers/bluetooth",
      description: "Pairing, connectivity and Bluetooth device support.",
      tag: "Wireless",
      icon: <BluetoothIcon className="w-4 h-4" />
    },
    {
      id: "usb",
      title: "USB Drivers",
      slug: "/drivers/usb",
      description: "Device recognition, installation and USB troubleshooting.",
      tag: "Peripherals",
      icon: <UsbIcon className="w-4 h-4" />
    },
    {
      id: "chipset",
      title: "Chipset Drivers",
      slug: "/drivers",
      description: "The foundation that connects all your hardware together.",
      tag: "Motherboard",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "storage",
      title: "Storage Drivers",
      slug: "/drivers",
      description: "SSD, HDD, and external storage performance and reliability.",
      tag: "Storage",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: "input-devices",
      title: "Input Devices",
      slug: "/drivers",
      description: "Keyboards, mice, touchpads, and game controller support.",
      tag: "Controls",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      id: "virtual-devices",
      title: "Virtual Device Drivers",
      slug: "/drivers",
      description: "Software-created devices used by virtualization and emulation tools.",
      tag: "Virtualization",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  // 6 Common Driver-Related Problems
  const commonProblems = [
    {
      title: "Driver Conflicts",
      description: "Occur when two or more drivers compete for the same hardware resource, causing unpredictable behavior or system instability. OS manages this, but misconfigurations require manual resolution.",
      severity: "System Stability",
      code: "Error Code 10 / 43"
    },
    {
      title: "Outdated Drivers",
      description: "As operating systems evolve, drivers that haven't been updated may fail silently or exhibit reduced performance. Graphics drivers are particularly susceptible to becoming obsolete.",
      severity: "Performance Loss",
      code: "Frame Drops & Glitches"
    },
    {
      title: "Corrupted Driver Files",
      description: "Caused by incomplete installations, disk errors, or malware. A corrupted driver may fail to load or produce incorrect behavior. Reinstalling from a known good source resolves this.",
      severity: "Driver Crash",
      code: "BSOD / Lockups"
    },
    {
      title: "Missing Drivers After OS Install",
      description: "Certain hardware components may not be recognized or function only with basic generic drivers. Downloading the appropriate driver from the manufacturer resolves these issues.",
      severity: "Hardware Offline",
      code: "Code 28 / Unknown"
    },
    {
      title: "Incompatible Drivers",
      description: "Occur when a driver designed for one OS version is used with a different version, causing instability or broken functionality. Using a certified driver avoids these problems.",
      severity: "Version Mismatch",
      code: "Compatibility Block"
    },
    {
      title: "Signed vs Unsigned Drivers",
      description: "Driver signing uses digital certificates to confirm a driver is verified. Unsigned drivers introduce significant security risks. Always prefer signed drivers from the hardware manufacturer.",
      severity: "Security Alert",
      code: "Integrity Checks"
    }
  ];

  // 6 Helpful Topics We Cover
  const helpfulTopics = [
    {
      title: "Printer Drivers",
      description: "Why your device needs special software, what goes wrong, and how to keep output painless across home, office, and shared setups.",
      href: "/drivers/printers",
      icon: <PrinterIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Graphics Drivers",
      description: "How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.",
      href: "/drivers/graphics",
      icon: <MonitorIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Audio Drivers",
      description: "The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.",
      href: "/drivers/audio",
      icon: <VolumeIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Network Drivers",
      description: "The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.",
      href: "/drivers/network",
      icon: <WifiIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "USB & Devices",
      description: "How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in.",
      href: "/drivers/usb",
      icon: <UsbIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "System Drivers",
      description: "The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.",
      href: "/knowledge-base",
      icon: <CpuIcon className="w-5 h-5 text-[#024ad8]" />
    }
  ];

  // 14 FAQs
  const faqs = [
    {
      question: "What is a device driver?",
      answer: "A device driver is a specialized software component that allows your operating system to communicate directly with physical hardware devices like printers, graphics cards, sound chips, and network controllers."
    },
    {
      question: "Why are drivers important?",
      answer: "Without drivers, your operating system cannot understand how to translate application commands into hardware actions. Drivers ensure smooth performance, device stability, and correct feature execution."
    },
    {
      question: "How do I update my drivers?",
      answer: "You can update drivers via Windows Update, Device Manager, or by downloading the official verified driver package directly from your hardware manufacturer's official support website."
    },
    {
      question: "Are driver updates safe?",
      answer: "Official driver updates released by certified manufacturers or through official OS updates are safe. Always avoid unverified third-party automatic updater applications."
    },
    {
      question: "What happens if my drivers are outdated?",
      answer: "Outdated drivers can cause hardware recognition errors, unexpected crashes, sluggish performance, security vulnerabilities, or complete failure of peripheral devices."
    },
    {
      question: "How do I find the correct driver for my device?",
      answer: "Identify your hardware make and exact model number (found in Device Manager or on the hardware label), then visit the manufacturer's official support site and select your operating system version."
    },
    {
      question: "Can outdated drivers cause performance issues?",
      answer: "Yes. Outdated graphics, chipset, and storage drivers are common culprits behind stuttering frame rates, slow boot times, high CPU latency, and intermittent hardware drops."
    },
    {
      question: "How often should I update my drivers?",
      answer: "There is no fixed schedule. Update when you experience a specific problem the new driver addresses, when you upgrade your OS, or when the manufacturer releases a security fix. Stable, working systems do not require aggressive update cycles."
    },
    {
      question: "What is a printer driver?",
      answer: "A printer driver translates the digital text, images, and formatting from your software into a page description language (PDL) that the printer mechanism can render onto physical paper."
    },
    {
      question: "What is a graphics driver?",
      answer: "A graphics driver communicates between your operating system, games, and 3D applications and the GPU, managing video rendering, refresh rates, and display resolution outputs."
    },
    {
      question: "What is a network driver?",
      answer: "A network driver manages your Ethernet or Wi-Fi adapter hardware, regulating data packets, connection stability, band frequencies, and latency across local and wide-area networks."
    },
    {
      question: "What should I do if a driver installation fails?",
      answer: "Uninstall previous corrupted driver files in Safe Mode, disconnect unnecessary peripherals, verify your OS version, and perform a clean re-installation with administrator privileges."
    },
    {
      question: "Do you provide driver downloads?",
      answer: "No. Driver Info Hub is strictly an educational research portal. We do not host executable binaries. We guide you on safely sourcing official drivers directly from original equipment manufacturers."
    },
    {
      question: "Is this site affiliated with any hardware company?",
      answer: "No. Driver Info Hub is operated independently. We are not affiliated with, sponsored by, or endorsed by any hardware, printer, or computer manufacturer."
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">
      
      {/* =========================================================
          HERO SECTION (DARK THEME & BALANCED 70% PROPORTION)
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/80 min-h-[560px] lg:h-[70vh] lg:min-h-[580px] lg:max-h-[720px] flex items-center py-10 sm:py-14 lg:py-0">
        {/* Background Tech Image & Ambient Glowing Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/hero-dark-bg.jpg"
            alt="Dark high-tech circuit background"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          {/* Radial & directional gradient shading for readability and rich depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.25),transparent)]" />
          <div className="absolute -bottom-1 inset-x-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Ambient Color Glow Blobs */}
        <div className="absolute top-1/4 left-8 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-8 w-80 h-80 bg-cyan-500/12 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Independent Educational Portal
              </div>

              {/* Single Main Heading with Radiant Gradient Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Master Printer &amp; Device Drivers <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Without Technical Frustration
                </span>
              </h1>

              {/* High-legibility Lead Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your trusted, clutter-free resource for understanding driver installation, fixing <span className="text-white font-medium">&ldquo;Printer Driver Unavailable&rdquo;</span> errors, and step-by-step troubleshooting.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <Link
                  href="/drivers/printers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
                >
                  <PrinterIcon className="w-4.5 h-4.5" />
                  <span>Printer Driver Guides</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <BookOpenIcon className="w-4.5 h-4.5 text-cyan-400" />
                  <span>Knowledge Base</span>
                </Link>
              </div>

              {/* Quick Category Tags / Popular Topics */}
              <div className="pt-1 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold mr-1">Popular Topics:</span>
                {[
                  { title: "Printer Drivers", href: "/drivers/printers" },
                  { title: "Scanner Drivers", href: "/drivers/scanners" },
                  { title: "Graphics Drivers", href: "/drivers/graphics" },
                  { title: "Audio Drivers", href: "/drivers/audio" }
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-blue-950/80 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-cyan-300 font-medium transition-all backdrop-blur-sm shadow-xs"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Hero Card Showcase (5 cols - Dark Glassmorphism) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] p-4 sm:p-5 backdrop-blur-xl overflow-hidden">
                
                {/* Top Subtle Edge Rim Highlight */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header with Status Telemetry */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="font-bold text-slate-200 tracking-wide uppercase text-[11px]">
                      Diagnostic Center
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                    Guides Updated 2026
                  </span>
                </div>

                {/* Card Hardware Image Container */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/80 aspect-[16/10] group">
                  <Image
                    src="/images/hero-printer-dark.jpg"
                    alt="Modern Wireless Office Printer and Diagnostic Hardware Setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle inner shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Floating Pill Overlay inside image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-lg p-2.5 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 font-bold">
                        <PrinterIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">Spooler &amp; Network Setup</div>
                        <div className="text-[11px] text-cyan-400 font-medium">120+ Diagnostic Guides</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/20">
                      Step-by-Step
                    </span>
                  </div>
                </div>

                {/* Bottom Quick Feature Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-3.5 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm font-extrabold text-white">100%</div>
                    <div className="text-[10px] text-slate-400 font-medium">Educational</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm font-extrabold text-cyan-400">Zero</div>
                    <div className="text-[10px] text-slate-400 font-medium">Software Bloat</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
                    <div className="text-sm font-extrabold text-blue-400">Windows</div>
                    <div className="text-[10px] text-slate-400 font-medium">11 &amp; 10 Verified</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          1. HARDWARE TICKER / MARQUEE RIBBON
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#024ad8] py-2.5 text-white shadow-inner">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#024ad8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#024ad8] to-transparent z-10" />
        
        <div className="flex w-max animate-marquee space-x-6">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2.5 text-[11px] sm:text-xs font-semibold tracking-wide uppercase opacity-95">
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-blue-300"></span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">

        {/* =========================================================
            2. THE BASICS: SO… WHAT EXACTLY IS A DRIVER?
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#024ad8]" />
              The Basics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              So… What Exactly Is a{" "}
              <span className="bg-gradient-to-r from-[#024ad8] to-cyan-600 bg-clip-text text-transparent">
                Driver?
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Three small ideas that unlock everything about drivers. Tap a tab to dive in.
            </p>
          </div>

          {/* Interactive Tab Controls */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-inner max-w-full overflow-x-auto">
              <button
                onClick={() => setBasicTab("translator")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  basicTab === "translator"
                    ? "bg-[#024ad8] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                The Translator
              </button>
              <button
                onClick={() => setBasicTab("why")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  basicTab === "why"
                    ? "bg-[#024ad8] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Why You Care
              </button>
              <button
                onClick={() => setBasicTab("how")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  basicTab === "how"
                    ? "bg-[#024ad8] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Visual translation diagram */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
                    {basicTab === "translator" && "Core Concept"}
                    {basicTab === "why" && "Daily Impact"}
                    {basicTab === "how" && "Real-Time Pipeline"}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-blue-200 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active Pipeline
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-2">
                  {basicTab === "translator" && "The Friendly Translator"}
                  {basicTab === "why" && "Why Driver Health Matters"}
                  {basicTab === "how" && "The Microsecond Relay"}
                </h3>

                <p className="text-blue-100 text-xs leading-relaxed mb-5 font-normal">
                  {basicTab === "translator" && "Operating systems speak standard system APIs. Physical peripherals speak raw electronic protocols. The driver creates continuous two-way harmony."}
                  {basicTab === "why" && "Because drivers execute deep in kernel or hardware layers, a healthy driver ensures maximum speed, crisp acoustics, and zero freeze crashes."}
                  {basicTab === "how" && "Your mouse click or print command passes seamlessly through APIs, driver stacks, and controllers in sub-millisecond speeds."}
                </p>
              </div>

              {/* Visual interactive Stack */}
              <div className="space-y-2 bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/10 text-[11px] font-semibold">
                  <span>1. Application Layer (Word / Browser)</span>
                  <span className="text-cyan-300">Command</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/10 text-[11px] font-semibold">
                  <span>2. Operating System (Windows / macOS)</span>
                  <span className="text-blue-200">OS API</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#024ad8] border border-cyan-300/40 text-[11px] font-bold shadow-xs">
                  <span>3. Device Driver (The Translator)</span>
                  <span className="text-cyan-300 font-mono">Translating...</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/10 text-[11px] font-semibold">
                  <span>4. Physical Hardware (Printer / GPU)</span>
                  <span className="text-emerald-300">Execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Full Original Content & Key Points */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              
              {basicTab === "translator" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-950">The Friendly Translator</h3>
                  <div className="space-y-3 text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                    <p>
                      Picture this: you hit <strong>&ldquo;Print.&rdquo;</strong> Your document jumps from your screen straight onto paper. But here&apos;s the secret — your computer and your device don&apos;t actually speak the same language. The driver is the tiny, invisible piece of software in the middle, making sure both sides understand each other clearly.
                    </p>
                    <p>
                      Every piece of hardware connected to your computer — keyboards, speakers, webcams, hard drives, even the screen you&apos;re reading this on — needs its own translator. Without one, your operating system would simply shrug and say, &ldquo;Sorry, I have no idea what that thing is.&rdquo;
                    </p>
                    <p>
                      The clever part? Hardware makers and OS designers agreed long ago on shared &ldquo;rulebooks&rdquo; that drivers must follow. That&apos;s why the same app can print to thousands of different devices — each device&apos;s driver speaks the same shared dialect with the OS.
                    </p>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#024ad8] mb-2">
                      In one breath
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-slate-800">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>A driver is a translator between hardware and your OS.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Every device needs one — keyboards, GPUs, devices, all of it.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Standards keep thousands of devices working with one OS.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {basicTab === "why" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-950">Why You Care</h3>
                  <div className="space-y-3 text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                    <p>
                      Drivers quietly decide how good (or how frustrating) your computer feels every day. Smooth video calls? A happy webcam driver. Crisp speaker sound? An audio driver doing its homework. Lag-free games? A graphics driver firing on all cylinders. When drivers are healthy, you don&apos;t notice them — and that&apos;s exactly the point.
                    </p>
                    <p>
                      Now flip it. A grumpy or outdated driver can make a fast laptop feel like it&apos;s stuck in molasses, or be the reason an app suddenly stops responding at the worst possible moment. Because drivers run with deep system access, when they misbehave they can affect the whole operating system.
                    </p>
                    <p>
                      The good news: keeping drivers in shape is one of the easiest, highest-impact things you can do for your PC. A small update can mean smoother gameplay, better battery life, steadier performance, and even small reliability improvements you didn&apos;t know about.
                    </p>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#024ad8] mb-2">
                      Daily impact
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-slate-800">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Healthy drivers = smooth, invisible experience.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Outdated drivers = sluggishness, instability, and unexpected restarts.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Updating is the easiest free performance upgrade.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {basicTab === "how" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-950">How It Works</h3>
                  <div className="space-y-3 text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                    <p>
                      Follow a simple click. You press <strong>&ldquo;Save.&rdquo;</strong> Your app whispers &ldquo;save this file&rdquo; to the operating system. The OS turns to the storage driver and says, &ldquo;Hey, can you handle this?&rdquo; The driver translates that polite request into the exact electrical signals your hard drive understands. Done — your file is safe. All of this happens in less time than a blink.
                    </p>
                    <p>
                      Behind the scenes, drivers are stacked like a relay team. Each one has its own job — one talks to the device, another tidies up the data, one handles the physical connection (USB, Wi-Fi, you name it). The request passes runner to runner until it reaches the hardware, and the answer travels back the same way.
                    </p>
                    <p>
                      What&apos;s wild is the speed. A typical request bounces through this whole relay in microseconds. You experience it as &ldquo;instant,&rdquo; but a tiny, very organized conversation just took place.
                    </p>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#024ad8] mb-2">
                      The relay race
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-slate-800">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Apps speak to the OS using friendly APIs.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>The OS hands work to the right driver.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>The driver speaks the device&apos;s exact dialect.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0" />
                        <span>Replies travel back up the same stack.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* =========================================================
            3. WHAT WE COVER / EXPLORE DRIVER CATEGORIES (12 CARDS)
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
                What We Cover
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Explore Driver Categories
              </h2>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-xl">
                Learn, troubleshoot and understand every major driver category through simple, practical explanations.
              </p>
            </div>
            <Link
              href="/drivers"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#024ad8] hover:text-[#013db3] transition-colors"
            >
              <span>View All Driver Guides</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {categoryCards.map((cat) => (
              <Link
                key={cat.id}
                href={cat.slug}
                className="group flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#024ad8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] flex items-center justify-center group-hover:bg-[#024ad8] group-hover:text-white transition-all shadow-2xs">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full group-hover:bg-[#024ad8]/10 group-hover:text-[#024ad8] transition-colors">
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Read more</span>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. WHY DRIVERS MATTER: THE BRIDGE BETWEEN SOFTWARE AND HARDWARE
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#024ad8]/5 via-white to-blue-50/50 border border-[#024ad8]/20 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8] text-white text-[10px] font-bold uppercase tracking-wider">
                  Why Drivers Matter
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                  The bridge between software and hardware.
                </h2>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Every click, print command, and device action needs a driver working behind the scenes. Drivers translate instructions between your operating system and physical hardware.
                </p>

                <ul className="space-y-2 pt-1">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-[10px]">✓</div>
                    <span>Understand what drivers actually do</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-[10px]">✓</div>
                    <span>Fix common device and connectivity issues</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-[10px]">✓</div>
                    <span>Clear explanations without technical jargon</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/knowledge-base"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#024ad8] hover:bg-[#013db3] shadow-md shadow-[#024ad8]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Explore Knowledge Hub</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Translation Architecture Card */}
              <div className="lg:col-span-5 space-y-3">
                <div className="rounded-xl bg-white border border-[#024ad8]/20 p-4 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase">
                    <span>Architecture Engine</span>
                    <span className="text-[#024ad8]">Live Flow</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Software Layer</div>
                      <div className="text-xs font-bold text-slate-900">Apps &amp; Operating System</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#024ad8]/10 text-[#024ad8] font-bold">Input</span>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-4 bg-[#024ad8]/40" />
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#024ad8] text-white shadow-xs">
                    <div>
                      <div className="text-[10px] text-blue-200 font-semibold uppercase">Driver Engine</div>
                      <div className="text-xs font-bold">Real-time Translator</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-mono">Active</span>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-4 bg-[#024ad8]/40" />
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">Hardware Layer</div>
                      <div className="text-xs font-bold text-slate-900">Printers &amp; Devices</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Output</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-[#024ad8]">100+</div>
                    <div className="text-[11px] font-semibold text-slate-600">Guides</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-[#024ad8]">24/7</div>
                    <div className="text-[11px] font-semibold text-slate-600">Resources</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            5. DRIVER LOCATIONS: WHERE DO DRIVERS ACTUALLY LIVE ON YOUR PC?
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Driver Locations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Where Do Drivers Actually Live on Your PC?
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Spoiler: they&apos;re not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Device Manager */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_10px_30px_-10px_rgba(2,74,216,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.22)] hover:border-[#024ad8]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-100">
                  <Image
                    src="/images/loc-dev-manager.jpg"
                    alt="Windows Device Manager hardware hierarchy view"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#024ad8] text-white text-[11px] font-extrabold shadow-sm">
                      01 • Hardware Tree
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-mono">
                      devmgmt.msc
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    Inside the Device Manager
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This is the friendliest place to start on a Windows PC. Right-click the Start button and pick &ldquo;Device Manager,&rdquo; and a tidy list of every piece of hardware on your machine appears — neatly grouped by category. Click any item and you can see its driver, check its version, update it, roll it back if a recent update caused trouble, or remove it entirely. It&apos;s like a backstage pass to the people running the show.
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Built-in Windows Management</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>

            {/* Card 2: Settings & Updates */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_10px_30px_-10px_rgba(2,74,216,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.22)] hover:border-[#024ad8]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-100">
                  <Image
                    src="/images/loc-settings-update.jpg"
                    alt="Operating System Update and optional driver updates settings panel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#024ad8] text-white text-[11px] font-extrabold shadow-sm">
                      02 • OS Channels
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-mono">
                      Windows Update
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    Through Settings &amp; Updates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On modern Windows systems, head to Settings, then Windows Update, then &ldquo;Advanced options&rdquo; and look for &ldquo;Optional updates.&rdquo; Many driver updates quietly arrive here — already tested for your machine. On macOS, drivers are bundled into regular system updates, so just keep your OS current. On Linux, your distribution&apos;s package manager (or a built-in &ldquo;Additional Drivers&rdquo; tool) does the same job.
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>System Update Channels</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>

            {/* Card 3: OEM Support */}
            <div className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_10px_30px_-10px_rgba(2,74,216,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(2,74,216,0.22)] hover:border-[#024ad8]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-100">
                  <Image
                    src="/images/loc-oem-support.jpg"
                    alt="Official hardware manufacturer driver support portal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#024ad8] text-white text-[11px] font-extrabold shadow-sm">
                      03 • Official OEM
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-mono">
                      Certified Support
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    The Hardware Maker&apos;s Website
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every reputable hardware maker keeps a &ldquo;Support&rdquo; or &ldquo;Drivers&rdquo; section on its official website where you can download the very latest driver for your exact model. This is the go-to spot when you need a brand-new feature, a performance boost, or a fix for a specific bug. Always download directly from the official site — never from a random pop-up — and double-check the driver matches your operating system version.
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Verified OEM Direct</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            6. DRIVER IDENTIFICATION: HOW TO KNOW WHICH DRIVER YOU'RE ACTUALLY USING
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Driver Identification
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              How to Know Which Driver You&apos;re Actually Using
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Windows Box */}
            <div className="rounded-xl bg-white border border-slate-200 hover:border-[#024ad8] p-5 shadow-2xs transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-2.5 py-0.5 rounded-full">
                  Microsoft
                </span>
                <span className="text-[10px] text-slate-400 font-mono">GUI Steps</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">On Windows</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open Device Manager, expand any category, and right-click your device. Choose &apos;Properties,&apos; then click the &apos;Driver&apos; tab. You&apos;ll instantly see the driver name, publisher, release date, and exact version number.
              </p>
            </div>

            {/* macOS Box */}
            <div className="rounded-xl bg-white border border-slate-200 hover:border-[#024ad8] p-5 shadow-2xs transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-2.5 py-0.5 rounded-full">
                  Apple
                </span>
                <span className="text-[10px] text-slate-400 font-mono">System Report</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">On macOS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click the system menu, choose &apos;About This Mac,&apos; then click &apos;More Info&apos; and &apos;System Report.&apos; A detailed window opens with sections listing the underlying driver (kext) along with its version.
              </p>
            </div>

            {/* Linux Box */}
            <div className="rounded-xl bg-white border border-slate-200 hover:border-[#024ad8] p-5 shadow-2xs transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-2.5 py-0.5 rounded-full">
                  Linux
                </span>
                <span className="text-[10px] text-slate-400 font-mono">CLI Shell</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">On Linux</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open a terminal and try friendly commands like <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-[11px] font-bold">lspci -k</code> for connected hardware and <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-[11px] font-bold">lsusb</code> for USB devices, or <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-[11px] font-bold">lsmod</code> to see every driver module currently loaded into the kernel.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            7. TROUBLESHOOTING: COMMON DRIVER-RELATED PROBLEMS (6 CARDS)
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Troubleshooting
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common Driver-Related Problems
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Understanding these common driver issues helps in diagnosing and resolving hardware and software problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs hover:border-[#024ad8] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#024ad8]/10 text-[#024ad8]">
                      {prob.severity}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-medium">
                      {prob.code}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {prob.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#024ad8]">
                  <span>Diagnostic Checklist Available</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            8. HELPFUL TOPICS WE COVER: PICK A HARDWARE CATEGORY AND DIVE IN
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
                Helpful Topics We Cover
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Pick a Hardware Category and Dive In
              </h2>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-xl">
                Each overview is bite-sized, friendly, and written to make sense the very first time you read it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpfulTopics.map((topic, index) => (
              <div
                key={index}
                className="rounded-xl bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-2xs hover:border-[#024ad8] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#024ad8]/10 flex items-center justify-center mb-3 group-hover:bg-[#024ad8] group-hover:text-white transition-colors">
                    {topic.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {topic.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={topic.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#024ad8] group-hover:text-[#013db3]"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            9. ABOUT DRIVER INFO HUB: A FRIENDLY VOICE IN A NOISY TECH WORLD
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 sm:p-9 text-white shadow-[0_20px_50px_-15px_rgba(2,74,216,0.35)] border border-blue-400/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                About Driver Info Hub
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                A Friendly Voice in a Noisy Tech World
              </h2>
              
              <div className="space-y-2.5 text-blue-100 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.
                </p>
                <p className="text-white font-medium">
                  No sponsorships. No affiliate links. No &ldquo;instant driver updater&rdquo; nonsense. Just clear, honest explanations of how things actually work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs flex items-center gap-2.5 transition-colors shadow-xs">
                  <div className="text-cyan-300 font-bold text-sm">✓</div>
                  <span className="text-[11px] font-semibold">Independent and free to read, always</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs flex items-center gap-2.5 transition-colors shadow-xs">
                  <div className="text-cyan-300 font-bold text-sm">✓</div>
                  <span className="text-[11px] font-semibold">Plain-English first, technical accuracy second to none</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs flex items-center gap-2.5 transition-colors shadow-xs">
                  <div className="text-cyan-300 font-bold text-sm">✓</div>
                  <span className="text-[11px] font-semibold">Privacy-respecting — no aggressive trackers or sold data</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#024ad8] bg-white hover:bg-slate-100 shadow-lg shadow-black/15 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Read More About Us</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            10. DRIVER DEEP DIVE: UNDERSTAND EVERY TYPE OF DRIVER
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Driver Deep Dive
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Understand Every Type of Driver
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Explore the different kinds of drivers that make your hardware work—from kernel-mode foundations to virtual devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {categoryCards.map((item) => (
              <Link
                key={item.id}
                href={item.slug}
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#024ad8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center group-hover:bg-[#024ad8] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      Guide
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            11. START HERE: COMMON FIRST QUESTIONS (INTERACTIVE FAQ)
        ========================================================= */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Start Here
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common First Questions
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              The questions readers ask most before exploring our guides.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#024ad8] bg-[#024ad8]/5 shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-slate-900 focus:outline-hidden"
                  >
                    <span className={`text-xs sm:text-sm ${isOpen ? "text-[#024ad8]" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#024ad8] text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#024ad8]/10 pt-2.5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>

    </div>
  );
}
