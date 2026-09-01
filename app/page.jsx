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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
      icon: <PrinterIcon className="w-5 h-5" />
    },
    {
      id: "graphics",
      title: "Graphics Drivers",
      slug: "/drivers/graphics",
      description: "GPU updates, gaming performance and display optimization.",
      tag: "Performance",
      icon: <MonitorIcon className="w-5 h-5" />
    },
    {
      id: "audio",
      title: "Audio Drivers",
      slug: "/drivers/audio",
      description: "Fix sound issues and understand audio device communication.",
      tag: "Media",
      icon: <VolumeIcon className="w-5 h-5" />
    },
    {
      id: "network",
      title: "Network Drivers",
      slug: "/drivers/network",
      description: "Wi-Fi, Ethernet and connectivity troubleshooting resources.",
      tag: "Connectivity",
      icon: <WifiIcon className="w-5 h-5" />
    },
    {
      id: "bluetooth",
      title: "Bluetooth Drivers",
      slug: "/drivers/bluetooth",
      description: "Pairing, connectivity and Bluetooth device support.",
      tag: "Wireless",
      icon: <BluetoothIcon className="w-5 h-5" />
    },
    {
      id: "usb",
      title: "USB Drivers",
      slug: "/drivers/usb",
      description: "Device recognition, installation and USB troubleshooting.",
      tag: "Peripherals",
      icon: <UsbIcon className="w-5 h-5" />
    },
    {
      id: "chipset",
      title: "Chipset Drivers",
      slug: "/drivers",
      description: "The foundation that connects all your hardware together.",
      tag: "Motherboard",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
      icon: <PrinterIcon className="w-6 h-6 text-[#024ad8]" />
    },
    {
      title: "Graphics Drivers",
      description: "How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.",
      href: "/drivers/graphics",
      icon: <MonitorIcon className="w-6 h-6 text-[#024ad8]" />
    },
    {
      title: "Audio Drivers",
      description: "The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.",
      href: "/drivers/audio",
      icon: <VolumeIcon className="w-6 h-6 text-[#024ad8]" />
    },
    {
      title: "Network Drivers",
      description: "The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.",
      href: "/drivers/network",
      icon: <WifiIcon className="w-6 h-6 text-[#024ad8]" />
    },
    {
      title: "USB & Devices",
      description: "How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in.",
      href: "/drivers/usb",
      icon: <UsbIcon className="w-6 h-6 text-[#024ad8]" />
    },
    {
      title: "System Drivers",
      description: "The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.",
      href: "/knowledge-base",
      icon: <CpuIcon className="w-6 h-6 text-[#024ad8]" />
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
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#024ad8]/5 via-white to-slate-50/50 border-b border-slate-200/80 py-16 md:py-24">
        {/* Ambient Brand Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#024ad8]/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#024ad8] animate-pulse"></span>
                Independent Educational Portal
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
                Master Printer &amp; Device Drivers <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#024ad8] via-blue-600 to-indigo-700">
                  Without Technical Frustration
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your trusted, clutter-free resource for understanding driver installation, fixing &ldquo;Printer Driver Unavailable&rdquo; errors, and step-by-step troubleshooting.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/drivers/printers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#024ad8] hover:bg-[#013db3] shadow-lg shadow-[#024ad8]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <PrinterIcon className="w-5 h-5" />
                  <span>Printer Driver Guides</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#024ad8] shadow-xs transition-all"
                >
                  <BookOpenIcon className="w-5 h-5 text-[#024ad8]" />
                  <span>Knowledge Base</span>
                </Link>
              </div>

              {/* Quick Category Tags */}
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs">
                <span className="text-slate-500 font-bold mr-1">Popular Topics:</span>
                {siteConfig.driverCategories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/drivers/${cat.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#024ad8]/5 border border-slate-200 hover:border-[#024ad8]/40 text-[#024ad8] font-semibold transition-colors shadow-2xs"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/hero-printer.jpg"
                  alt="Modern Printer and Hardware Connectivity illustration"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                  priority
                />

                {/* Floating pill overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#024ad8]/10 flex items-center justify-center text-[#024ad8] font-bold">
                      <PrinterIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Spooler &amp; Network Setup</div>
                      <div className="text-[11px] text-[#024ad8] font-semibold">120+ Diagnostic Guides</div>
                    </div>
                  </div>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#024ad8] animate-ping" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          1. HARDWARE TICKER / MARQUEE RIBBON
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#024ad8] py-4 text-white shadow-inner">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#024ad8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#024ad8] to-transparent z-10" />
        
        <div className="flex w-max animate-marquee space-x-6">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-95">
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300"></span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-16 sm:space-y-24 py-12 sm:py-16">

        {/* =========================================================
            2. THE BASICS: SO… WHAT EXACTLY IS A DRIVER?
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#024ad8]" />
              The Basics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              So… What Exactly Is a{" "}
              <span className="bg-gradient-to-r from-[#024ad8] to-cyan-600 bg-clip-text text-transparent">
                Driver?
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Three small ideas that unlock everything about drivers. Tap a tab to dive in.
            </p>
          </div>

          {/* Interactive Tab Controls */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner max-w-full overflow-x-auto">
              <button
                onClick={() => setBasicTab("translator")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  basicTab === "translator"
                    ? "bg-[#024ad8] text-white shadow-md shadow-[#024ad8]/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                The Translator
              </button>
              <button
                onClick={() => setBasicTab("why")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  basicTab === "why"
                    ? "bg-[#024ad8] text-white shadow-md shadow-[#024ad8]/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                Why You Care
              </button>
              <button
                onClick={() => setBasicTab("how")}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  basicTab === "how"
                    ? "bg-[#024ad8] text-white shadow-md shadow-[#024ad8]/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Visual translation diagram */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                    {basicTab === "translator" && "Core Concept"}
                    {basicTab === "why" && "Daily Impact"}
                    {basicTab === "how" && "Real-Time Pipeline"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-blue-200 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Active Architecture
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4">
                  {basicTab === "translator" && "The Friendly Translator"}
                  {basicTab === "why" && "Why Driver Health Matters"}
                  {basicTab === "how" && "The Microsecond Relay"}
                </h3>

                <p className="text-blue-100 text-sm leading-relaxed mb-6 font-normal">
                  {basicTab === "translator" && "Operating systems speak standard system APIs. Physical peripherals speak raw electronic protocols. The driver creates continuous two-way harmony."}
                  {basicTab === "why" && "Because drivers execute deep in kernel or hardware layers, a healthy driver ensures maximum speed, crisp acoustics, and zero freeze crashes."}
                  {basicTab === "how" && "Your mouse click or print command passes seamlessly through APIs, driver stacks, and controllers in sub-millisecond speeds."}
                </p>
              </div>

              {/* Visual interactive Stack */}
              <div className="space-y-2.5 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-md">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 text-xs font-semibold">
                  <span>1. Application Layer (Word / Browser / Game)</span>
                  <span className="text-cyan-300">Command</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 text-xs font-semibold">
                  <span>2. Operating System (Windows / macOS / Linux)</span>
                  <span className="text-blue-200">OS API</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#024ad8] border border-cyan-300/40 text-xs font-bold shadow-md">
                  <span>3. Device Driver (The Translator)</span>
                  <span className="text-cyan-300 font-mono">Translating...</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 text-xs font-semibold">
                  <span>4. Physical Hardware (Printer / GPU / Network)</span>
                  <span className="text-emerald-300">Execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Full Original Content & Key Points */}
            <div className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              
              {basicTab === "translator" && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-950">The Friendly Translator</h3>
                  <div className="space-y-4 text-slate-700 text-base leading-relaxed">
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

                  <div className="mt-6 p-5 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#024ad8] mb-3">
                      In one breath
                    </div>
                    <ul className="space-y-2 text-sm font-medium text-slate-800">
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>A driver is a translator between hardware and your OS.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Every device needs one — keyboards, GPUs, devices, all of it.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Standards keep thousands of devices working with one OS.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {basicTab === "why" && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-950">Why You Care</h3>
                  <div className="space-y-4 text-slate-700 text-base leading-relaxed">
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

                  <div className="mt-6 p-5 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#024ad8] mb-3">
                      Daily impact
                    </div>
                    <ul className="space-y-2 text-sm font-medium text-slate-800">
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Healthy drivers = smooth, invisible experience.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Outdated drivers = sluggishness, instability, and unexpected restarts.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Updating is the easiest free performance upgrade.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {basicTab === "how" && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-950">How It Works</h3>
                  <div className="space-y-4 text-slate-700 text-base leading-relaxed">
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

                  <div className="mt-6 p-5 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/20">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#024ad8] mb-3">
                      The relay race
                    </div>
                    <ul className="space-y-2 text-sm font-medium text-slate-800">
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>Apps speak to the OS using friendly APIs.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>The OS hands work to the right driver.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
                        <span>The driver speaks the device&apos;s exact dialect.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0" />
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
                What We Cover
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                Explore Driver Categories
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Learn, troubleshoot and understand every major driver category through simple, practical explanations.
              </p>
            </div>
            <Link
              href="/drivers"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#024ad8] hover:text-[#013db3] transition-colors"
            >
              <span>View All Driver Guides</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {categoryCards.map((cat) => (
              <Link
                key={cat.id}
                href={cat.slug}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#024ad8] hover:shadow-lg hover:shadow-[#024ad8]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] flex items-center justify-center group-hover:bg-[#024ad8] group-hover:text-white transition-all shadow-2xs">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full group-hover:bg-[#024ad8]/10 group-hover:text-[#024ad8] transition-colors">
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#024ad8]">
                  <span>Read more</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. WHY DRIVERS MATTER: THE BRIDGE BETWEEN SOFTWARE AND HARDWARE
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#024ad8]/5 via-white to-blue-50/50 border border-[#024ad8]/20 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8] text-white text-xs font-bold uppercase tracking-wider">
                  Why Drivers Matter
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                  The bridge between software and hardware.
                </h2>
                
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Every click, print command, and device action needs a driver working behind the scenes. Drivers translate instructions between your operating system and physical hardware.
                </p>

                <ul className="space-y-3 pt-1">
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-xs">✓</div>
                    <span>Understand what drivers actually do</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-xs">✓</div>
                    <span>Fix common device and connectivity issues</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#024ad8] text-white flex items-center justify-center shrink-0 text-xs">✓</div>
                    <span>Clear explanations without technical jargon</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/knowledge-base"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#024ad8] hover:bg-[#013db3] shadow-lg shadow-[#024ad8]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Explore Knowledge Hub</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Translation Architecture Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-white border border-[#024ad8]/20 p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase">
                    <span>Architecture Engine</span>
                    <span className="text-[#024ad8]">Live Flow</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Software Layer</div>
                      <div className="text-sm font-bold text-slate-900">Apps &amp; Operating System</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#024ad8]/10 text-[#024ad8] font-bold">Input</span>
                  </div>

                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-6 bg-[#024ad8]/40" />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#024ad8] text-white shadow-md shadow-[#024ad8]/20">
                    <div>
                      <div className="text-xs text-blue-200 font-semibold uppercase">Driver Engine</div>
                      <div className="text-sm font-bold">Real-time Translator</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/20 text-white font-mono">Active</span>
                  </div>

                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-6 bg-[#024ad8]/40" />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Hardware Layer</div>
                      <div className="text-sm font-bold text-slate-900">Printers &amp; Devices</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">Output</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
                    <div className="text-2xl font-extrabold text-[#024ad8]">100+</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">Guides</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
                    <div className="text-2xl font-extrabold text-[#024ad8]">24/7</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">Resources</div>
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
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Inside the Device Manager
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This is the friendliest place to start on a Windows PC. Right-click the Start button and pick &ldquo;Device Manager,&rdquo; and a tidy list of every piece of hardware on your machine appears. Click any item and you can see its driver, check its version, update it, roll it back, or remove it entirely.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8] flex items-center gap-1.5">
                <span>Windows Built-in</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Through Settings &amp; Updates
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  On modern Windows systems, head to Settings, then Windows Update, then &ldquo;Advanced options&rdquo; and look for &ldquo;Optional updates.&rdquo; Many driver updates quietly arrive here. On macOS, drivers are bundled into regular system updates. On Linux, your distribution&apos;s package manager does the same job.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8] flex items-center gap-1.5">
                <span>OS Updates Hub</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-7 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center font-bold text-lg mb-5">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  The Hardware Maker&apos;s Website
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every reputable hardware maker keeps a &ldquo;Support&rdquo; or &ldquo;Drivers&rdquo; section on its official website where you can download the very latest driver for your exact model. Always download directly from the official site — never from a random pop-up.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-[#024ad8] flex items-center gap-1.5">
                <span>Official OEM Sources</span>
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
            
            {/* Windows Box */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                  Microsoft
                </span>
                <span className="text-xs text-slate-400 font-mono">GUI Steps</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On Windows</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Open Device Manager, expand any category, and right-click your device. Choose &apos;Properties,&apos; then click the &apos;Driver&apos; tab. You&apos;ll instantly see the driver name, publisher, release date, and exact version number.
              </p>
            </div>

            {/* macOS Box */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                  Apple
                </span>
                <span className="text-xs text-slate-400 font-mono">System Report</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On macOS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Click the system menu, choose &apos;About This Mac,&apos; then click &apos;More Info&apos; and &apos;System Report.&apos; A detailed window opens with sections listing the underlying driver (kext) along with its version.
              </p>
            </div>

            {/* Linux Box */}
            <div className="rounded-2xl bg-white border-2 border-slate-200 hover:border-[#024ad8] p-6 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#024ad8] bg-[#024ad8]/10 px-3 py-1 rounded-full">
                  Linux
                </span>
                <span className="text-xs text-slate-400 font-mono">CLI Shell</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">On Linux</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Open a terminal and try friendly commands like <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-xs font-bold">lspci -k</code> for connected hardware and <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-xs font-bold">lsusb</code> for USB devices, or <code className="bg-slate-100 text-[#024ad8] px-1 py-0.5 rounded font-mono text-xs font-bold">lsmod</code> to see every driver module currently loaded into the kernel.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            7. TROUBLESHOOTING: COMMON DRIVER-RELATED PROBLEMS (6 CARDS)
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Troubleshooting
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Common Driver-Related Problems
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Understanding these common driver issues helps in diagnosing and resolving hardware and software problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#024ad8]/10 text-[#024ad8]">
                      {prob.severity}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {prob.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {prob.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#024ad8]">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
                Helpful Topics We Cover
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                Pick a Hardware Category and Dive In
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Each overview is bite-sized, friendly, and written to make sense the very first time you read it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpfulTopics.map((topic, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#024ad8] hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#024ad8]/10 flex items-center justify-center mb-4 group-hover:bg-[#024ad8] group-hover:text-white transition-colors">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {topic.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={topic.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#024ad8] group-hover:text-[#013db3]"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  <span className="text-xs font-semibold">Privacy-respecting — no aggressive trackers</span>
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
            10. DRIVER DEEP DIVE: UNDERSTAND EVERY TYPE OF DRIVER
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Driver Deep Dive
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Understand Every Type of Driver
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the different kinds of drivers that make your hardware work—from kernel-mode foundations to virtual devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {categoryCards.map((item) => (
              <Link
                key={item.id}
                href={item.slug}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#024ad8] hover:shadow-lg hover:shadow-[#024ad8]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center group-hover:bg-[#024ad8] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Guide
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#024ad8]">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            11. START HERE: COMMON FIRST QUESTIONS (INTERACTIVE FAQ)
        ========================================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-2">
              Start Here
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Common First Questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The questions readers ask most before exploring our guides.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#024ad8] bg-[#024ad8]/5 shadow-md shadow-[#024ad8]/5"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-hidden"
                  >
                    <span className={`text-base ${isOpen ? "text-[#024ad8]" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#024ad8] text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-700 leading-relaxed border-t border-[#024ad8]/10 pt-3">
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
