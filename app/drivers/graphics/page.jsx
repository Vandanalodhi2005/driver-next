"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  MonitorIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  InfoIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
} from "@/components/Icons";

export default function GraphicsDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Note Your Exact GPU Model",
      description:
        "Open Device Manager → Display adapters, or go to Settings → About → System info to confirm your exact GPU name and model number.",
    },
    {
      step: "02",
      title: "Download the Right Driver First",
      description:
        "Get the official driver from NVIDIA, AMD, or Intel — or from your laptop manufacturer's support page if you're on a laptop (their tuned build is often best).",
    },
    {
      step: "03",
      title: "Uninstall the Current Driver Cleanly",
      description:
        "In Device Manager, right-click your display adapter and choose Uninstall device. Tick the option to remove the driver software as well.",
    },
    {
      step: "04",
      title: "Restart, Then Install the Fresh Driver",
      description:
        "Reboot your PC, then run the installer you downloaded. Choose 'Clean Install' or 'Custom Install' when prompted to ensure a pristine environment.",
    },
    {
      step: "05",
      title: "Restart One Last Time",
      description:
        "A full reboot after installation confirms every component of the new driver is loaded cleanly and active across the system.",
    },
  ];

  const displaySettings = [
    {
      label: "Refresh Rate (Hz)",
      detail: "60 Hz for basic use, 120/144+ Hz for gaming. The driver matches this to your monitor's panel capability.",
      icon: "⚡",
    },
    {
      label: "Resolution (Pixels)",
      detail: "1080p, 1440p, 4K — higher resolutions demand more VRAM and GPU processing power.",
      icon: "🖥️",
    },
    {
      label: "Scaling & DPI",
      detail: "Makes text and content bigger on high-resolution displays. The graphics driver manages this scaling layer.",
      icon: "🔍",
    },
    {
      label: "VRAM Usage",
      detail: "More VRAM means better performance at higher settings and resolutions, especially in modern games.",
      icon: "🧠",
    },
  ];

  const connections = [
    {
      type: "HDMI",
      description:
        "Most common and universally supported. Great for most monitors, TVs, and projectors. Older HDMI cables are limited to 60 Hz at 4K.",
      badge: "Universal",
    },
    {
      type: "DisplayPort",
      description:
        "Best choice for high refresh-rate setups. Supports 144+ Hz at 1440p and 4K with current cables. Preferred for gaming monitors.",
      badge: "Best for Gaming",
    },
    {
      type: "USB-C / Thunderbolt",
      description:
        "Convenient for laptops. Carries video, data, and power over one cable. Check your port supports video output before relying on it.",
      badge: "Laptop Friendly",
    },
    {
      type: "Multiple Monitors",
      description:
        "Windows detects second screens automatically. Arrange them in Display Settings → Arrange Displays. Set your primary display for apps and games.",
      badge: "Multi-Display",
    },
  ];

  const diagnosticCodes = [
    {
      code: "Code 43",
      meaning: "The driver told the OS that the GPU has stopped responding.",
      fix: "Perform a clean driver reinstall.",
      severity: "Driver Crash",
    },
    {
      code: "Code 31",
      meaning: "The OS could not load the display driver.",
      fix: "Uninstall, restart, then install a fresh driver from the official site.",
      severity: "Load Failure",
    },
    {
      code: "Code 22",
      meaning: "The display adapter is disabled in Device Manager.",
      fix: "Enable the device in Device Manager, then restart your PC.",
      severity: "Disabled",
    },
    {
      code: "Code 10",
      meaning: "The adapter cannot start — usually a corrupt or mismatched driver.",
      fix: "Remove the old driver software completely, then install a fresh copy.",
      severity: "Cannot Start",
    },
  ];

  const faqs = [
    {
      question: "My screen flickers after a driver update — what do I do?",
      answer:
        "Screen flicker after a driver update usually means the driver introduced a timing conflict with your monitor. First, press Win + Ctrl + Shift + B to reset the graphics subsystem without rebooting. If that doesn't help, boot into Safe Mode (hold Shift while clicking Restart), uninstall the driver from Device Manager, and install the previous stable version from NVIDIA, AMD, or Intel's driver archive page.",
    },
    {
      question: "Second monitor not detected — is that the driver?",
      answer:
        "Yes, in most cases it is. Start by pressing Win + P to bring up the projection menu and selecting 'Extend' or 'Duplicate.' If Windows still doesn't detect the screen, update your graphics driver first. Also confirm the cable is plugged into your GPU (not the motherboard's display port, which may be disabled when a dedicated GPU is active), and try a different cable or port.",
    },
    {
      question: "Should I update my graphics driver if everything works?",
      answer:
        "If everything is working and you're not experiencing any issues, you generally don't need to update immediately. However, if you play games that have recently released patches, or if a new driver brings Game Ready optimizations for titles you play, a clean update is worthwhile. For creative or workstation use, only update when a specific fix or feature improvement is relevant to your workflow.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-10 sm:py-12 md:py-14 border-b border-slate-800">
        {/* Single brand ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#024ad8]/25 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#024ad8]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-white/70">
            <Breadcrumbs
              items={[
                { label: "All Drivers", href: "/drivers" },
                { label: "Graphics Drivers" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Hero Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] animate-pulse" />
                Graphics Drivers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Where Your GPU Meets the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">
                  Real World
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                Every frame on your screen is the result of a quiet conversation between your operating system, your graphics card, and a remarkable piece of software called the graphics driver.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                {["Translates rendering to GPU commands", "Manages VRAM & frame buffers", "Handles multi-monitor & refresh", "Enables hardware video acceleration"].map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-blue-200">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#five-steps"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#024ad8] hover:bg-[#013db3] shadow-md shadow-[#024ad8]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MonitorIcon className="w-4 h-4" />
                  Fix It in 5 Steps
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#device-codes"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-blue-300" />
                  Error Codes
                </a>
              </div>
            </div>

            {/* Right: Hero Stat Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { label: "GPU Vendors", value: "NVIDIA · AMD · Intel", sub: "All officially supported" },
                { label: "Refresh Rates", value: "Up to 360 Hz", sub: "Driver-managed sync" },
                { label: "Multi-Monitor", value: "Up to 6 displays", sub: "Via DisplayPort hubs" },
                { label: "API Support", value: "DirectX · Vulkan · OpenGL", sub: "GPU driver layer handles all" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl bg-white/7 border border-white/12 p-4 hover:bg-white/12 transition-colors">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-sm font-extrabold text-white leading-tight">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-8 sm:py-12">

        {/* =========================================================
            1. WHAT A GRAPHICS DRIVER DOES
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Architecture Explained
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What a Graphics Driver Does
            </h2>
            <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p>
                A graphics driver receives drawing instructions from your OS and applications, then translates them into commands your specific GPU understands perfectly.
              </p>
              <p>
                It also enables hardware video decoding, manages multi-monitor setups, and delivers game-ready optimizations tuned by NVIDIA, AMD, or Intel specifically for current titles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { icon: <CpuIcon className="w-4 h-4" />, title: "Translates Rendering", desc: "Converts OS/app draw calls into GPU-native commands (DirectX, Vulkan, OpenGL)." },
                { icon: <MonitorIcon className="w-4 h-4" />, title: "VRAM & Frame Buffers", desc: "Manages how video memory is allocated for frames, textures, and shadow maps." },
                { icon: <ShieldCheckIcon className="w-4 h-4" />, title: "Multi-Monitor & Scaling", desc: "Controls refresh rates, resolution per display, and DPI scaling layers." },
                { icon: <CheckCircleIcon className="w-4 h-4" />, title: "Hardware Video Decode", desc: "Offloads H.264, HEVC, AV1 video playback to dedicated GPU silicon for efficiency." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/40 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="text-[#024ad8]">{item.icon}</div>
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(2,74,216,0.2)] border border-slate-200/80 bg-slate-900 aspect-[4/3]">
              <Image
                src="/images/drivers-hero.jpg"
                alt="GPU hardware and graphics driver pipeline visualization"
                fill
                className="object-cover opacity-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">GPU Driver Pipeline</div>
                  <div className="text-[11px] text-[#024ad8] font-semibold">Render → Translate → Display</div>
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-[#024ad8]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. COMMON DISPLAY FRUSTRATIONS
        ========================================================= */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-950 via-[#024ad8]/20 to-slate-900 p-6 sm:p-8 border border-[#024ad8]/30 shadow-[0_15px_40px_-10px_rgba(2,74,216,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                Common Glitches
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Common Display Frustrations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Screen flickering or going black", sub: "Classic driver conflict — timing mismatch between driver and monitor sync signal." },
                { num: "02", title: "Stuttering or low FPS in games", sub: "Driver is out of date or corrupted — game-ready driver updates often include FPS fixes." },
                { num: "03", title: "Resolution won't stick or wrong refresh", sub: "Driver needs a clean reinstall — stale INF entries conflict with the display EDID." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/8 border border-white/15 hover:bg-white/12 transition-colors">
                  <div className="text-2xl font-extrabold text-[#024ad8] mb-2">{item.num}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[11px] text-blue-200 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs text-blue-100 leading-relaxed font-medium">
              💡 The solution is almost always a <strong className="text-white">clean, full reinstall</strong> of the latest driver from your GPU manufacturer&apos;s site. For laptops, your laptop maker&apos;s tuned build is often best.
            </div>
          </div>
        </section>

        {/* =========================================================
            3. FIX IT IN 5 CAREFUL STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Fix it in 5 Careful Steps</h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Follow this routine to perform a clean graphics driver reinstall on any Windows PC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#024ad8] text-white font-extrabold text-xs flex items-center justify-center mb-3 shadow-2xs">
                    {item.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                  Verified Step
                </div>
              </div>
            ))}

            {/* Bonus: reassurance card */}
            <div className="p-5 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/25 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">WHQL Certified Builds</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  For workstations or production setups, always choose <strong>WHQL (Windows Hardware Quality Labs)</strong> certified drivers — they&apos;ve passed Microsoft&apos;s stability testing before release.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                Production Safe
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. REFRESH RATE, RESOLUTION & SCALING
        ========================================================= */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Display Settings
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Refresh Rate, Resolution &amp; Scaling
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Understanding your display settings helps you get the best visuals and performance from your GPU driver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displaySettings.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.label}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. MULTI-MONITOR SETUP & CONNECTIONS
        ========================================================= */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Connections & Setup
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Multi-Monitor Setup &amp; Connections
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Your graphics driver controls how all connected displays behave — from cable type to display arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {connections.map((item, i) => {
              const colorMap = {
                blue: "bg-[#024ad8]/10 text-[#024ad8]",
                emerald: "bg-emerald-50 text-emerald-700",
                violet: "bg-violet-50 text-violet-700",
                indigo: "bg-indigo-50 text-indigo-700",
              };
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-3 ${colorMap[item.badgeColor]}`}>
                      {item.badge}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.type}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            6. DEVICE MANAGER CODES
        ========================================================= */}
        <section id="device-codes" className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Error Diagnosis
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common Device Manager Codes
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Here&apos;s what each display adapter error code means, and the usual fix.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5">Code</th>
                    <th className="px-5 py-3.5">What it Means</th>
                    <th className="px-5 py-3.5">The Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {diagnosticCodes.map((d, i) => (
                    <tr key={i} className="hover:bg-[#024ad8]/5 transition-colors">
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="font-mono font-bold text-[#024ad8] px-2.5 py-1 rounded-md bg-[#024ad8]/10">
                          {d.code}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-800 font-medium leading-relaxed">{d.meaning}</td>
                      <td className="px-5 py-4 text-slate-600 leading-relaxed">{d.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. FAQs
        ========================================================= */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Quick Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Questions readers ask most often about graphics drivers.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#024ad8] bg-[#024ad8]/5 shadow-xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-hidden"
                  >
                    <span className={`text-xs sm:text-sm font-bold ${isOpen ? "text-[#024ad8]" : "text-slate-900"}`}>
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

        {/* =========================================================
            8. CONTINUE LEARNING BANNER
        ========================================================= */}
        <section className="rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 sm:p-9 text-white shadow-[0_20px_50px_-15px_rgba(2,74,216,0.35)] border border-blue-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Continue Learning
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Want to Learn About All Driver Types?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Understand the full spectrum from user-mode to kernel-mode, and when each is the right choice for your hardware.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/drivers"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#024ad8] bg-white hover:bg-slate-100 shadow-md shadow-black/10 transition-all transform hover:-translate-y-0.5"
              >
                Browse All Driver Types
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/knowledge-base"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-xs transition-all transform hover:-translate-y-0.5"
              >
                <BookOpenIcon className="w-3.5 h-3.5" />
                Visit Knowledge Hub
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
