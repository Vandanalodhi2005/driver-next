"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  VolumeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  InfoIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
} from "@/components/Icons";

export default function AudioDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Identify the Hardware",
      description:
        "Open Device Manager → Sound, video and game controllers and note the exact model name (e.g. Realtek High Definition Audio, Intel® Smart Sound Technology).",
    },
    {
      step: "02",
      title: "Download the Correct Driver",
      description:
        "Get it directly from the manufacturer's website (Realtek, Creative, etc.) or your PC or laptop maker's support page for a model-tuned build.",
    },
    {
      step: "03",
      title: "Uninstall the Old Driver",
      description:
        "In Device Manager, right-click the audio device and choose Uninstall. Tick 'Delete the driver software for this device' if that option appears.",
    },
    {
      step: "04",
      title: "Install the New Driver",
      description:
        "Run the installer you downloaded. Choose a 'Clean Install' option if it is presented, so no stale configuration files carry over.",
    },
    {
      step: "05",
      title: "Restart and Verify",
      description:
        "Reboot your PC, then play a test sound and confirm the correct output device (speakers or headphones) is selected in sound settings.",
    },
  ];

  const audioProblems = [
    {
      icon: "🔇",
      title: "No Sound at All",
      detail:
        "Check the basics first — volume level, mute toggle, physical cable connections. If those are fine, reinstall the audio driver from the hardware maker.",
      tag: "Most Common",
    },
    {
      icon: "📻",
      title: "Crackling or Static",
      detail:
        "Update to the latest driver, close background applications, and disable audio enhancements in Sound settings → Advanced. DPC latency from Wi-Fi drivers can also cause this.",
      tag: "Interference",
    },
    {
      icon: "📢",
      title: "Sound from Wrong Device",
      detail:
        "Right-click the volume icon in the taskbar and select your active output device. Windows sometimes switches default devices after a driver update.",
      tag: "Easy Fix",
    },
    {
      icon: "⏱️",
      title: "Latency in Chat/Games",
      detail:
        "Lower your sample rate in Sound settings, go wired instead of Bluetooth, disable audio enhancements, and ensure no background audio processing apps are running.",
      tag: "Performance",
    },
    {
      icon: "🎵",
      title: "Sound Works in 1 App Only",
      detail:
        "Some applications select their own audio device and ignore the system default. Check that app's own audio settings and point it to the correct output device.",
      tag: "App-Level",
    },
    {
      icon: "🎧",
      title: "Headphones Quiet vs Speakers",
      detail:
        "Audio drivers treat headphones and speakers as separate devices with independent volume levels. Check and adjust each one individually in Sound settings.",
      tag: "Volume",
    },
  ];

  const audioFormats = [
    {
      label: "Sample Rate",
      detail:
        "How many times per second the audio signal is sampled. 44.1 kHz is CD quality; 48 kHz is standard for streaming and video.",
      icon: "📡",
    },
    {
      label: "Bit Depth",
      detail:
        "The precision of each audio sample. 16-bit (CD) is good enough for most listening; 24-bit (professional) captures finer dynamic detail.",
      icon: "🎚️",
    },
    {
      label: "Channels",
      detail:
        "Mono (1 channel), Stereo (2 channels), or Surround (5.1 / 7.1). Your driver configures how many channels your hardware actually supports.",
      icon: "🔊",
    },
    {
      label: "Why it Matters",
      detail:
        "Sample rate or bit depth mismatches between the driver and your app cause muffled, tunnel-like, or distorted sound. Matching them clears the issue.",
      icon: "⚠️",
    },
  ];

  const tweaks = [
    {
      title: "Turn Off Audio Enhancements",
      detail:
        "Right-click the speaker icon → Sound settings → Advanced → Disable all enhancements. These built-in effects often add latency and cause more harm than good.",
    },
    {
      title: "Use Exclusive Mode",
      detail:
        "Allows applications to take full control of the audio device directly, bypassing the Windows mixer for cleaner, lower-latency output.",
    },
    {
      title: "Set the Correct Default Format",
      detail:
        "Match the format to your typical use: 48 kHz for streaming and gaming, 44.1 kHz for music playback. Set this in Sound → Properties → Advanced.",
    },
    {
      title: "Keep the Driver Updated",
      detail:
        "Check monthly. Manufacturers like Realtek and Intel regularly release fixes for crackling, device-switching bugs, and new OS compatibility.",
    },
  ];

  const faqs = [
    {
      question: "Audio disappeared after a Windows update — how do I restore it?",
      answer:
        "Windows updates sometimes reset your default output device to a monitor speaker or HDMI output that isn't connected to anything. Right-click the speaker icon in the taskbar → Sound settings → choose the correct output device. If still silent, open Device Manager, right-click the audio device, choose 'Update driver', and restart.",
    },
    {
      question: "Is the generic Windows audio driver good enough?",
      answer:
        "The generic Microsoft High Definition Audio Device driver handles basic output, but misses manufacturer-specific features: surround sound processing, equalizer controls, microphone noise cancellation, and headphone amplifier modes. For gaming, voice calls, or audio work, always install the official manufacturer driver (Realtek, Intel SST, etc.) for the full feature set.",
    },
    {
      question: "Why does my microphone suddenly have no sound?",
      answer:
        "The most common causes are: (1) Windows privacy settings blocking microphone access — check Settings → Privacy → Microphone; (2) the wrong input device is selected in your application; (3) a driver update reset the default recording device. Right-click the speaker icon → Sound settings → scroll to Input and verify the correct microphone is selected and not muted.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-10 sm:py-12 md:py-14 border-b border-slate-800">
        {/* Single brand-color ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#024ad8]/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[280px] bg-[#024ad8]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-white/70">
            <Breadcrumbs
              items={[
                { label: "All Drivers", href: "/drivers" },
                { label: "Audio Drivers" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/25 border border-[#024ad8]/40 text-blue-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Audio Drivers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                The Soundtrack Between Your PC and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Speakers
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                Every beep, music track, or voice chat you hear is translated from digital data into electrical signals by the audio driver — the invisible layer between your software and your sound hardware.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                {[
                  "Translates digital audio to hardware",
                  "Manages channels, sample rates & mixing",
                  "Provides volume & device APIs",
                  "Enables surround sound & voice activation",
                ].map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/8 border border-white/12 text-blue-200">
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
                  <VolumeIcon className="w-4 h-4" />
                  Fix Audio in 5 Steps
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#audio-problems"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-blue-300" />
                  Diagnose Issues
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { label: "Common Chips", value: "Realtek · Intel SST", sub: "Most PCs & laptops" },
                { label: "Sample Rates", value: "44.1 – 192 kHz", sub: "Driver-managed conversion" },
                { label: "Channels", value: "Mono → 7.1 Surround", sub: "Software-configured" },
                { label: "Latency Mode", value: "Standard & ASIO", sub: "Low-latency pro drivers" },
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
            1. WHAT AN AUDIO DRIVER DOES
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Architecture Explained
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What an Audio Driver Does
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              An audio driver tells the operating system how to communicate with the sound hardware — the chip that produces analog waveforms for your speakers or headphones. It handles formats, sample rates, and volume control, and bridges applications like music players or video calls to the hardware.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { icon: <CpuIcon className="w-4 h-4" />, title: "Digital-to-Analog", desc: "Converts PCM audio data into analog voltage waveforms your speakers can produce." },
                { icon: <VolumeIcon className="w-4 h-4" />, title: "Mixing & Sample Rates", desc: "Manages multi-stream mixing, channel routing, and sample-rate conversion in real time." },
                { icon: <CheckCircleIcon className="w-4 h-4" />, title: "Volume & Device APIs", desc: "Provides the OS with volume, mute, and device-selection controls used by all apps." },
                { icon: <ShieldCheckIcon className="w-4 h-4" />, title: "Special Features", desc: "Enables surround sound processing, voice activation, and noise suppression hardware modes." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.08)] hover:shadow-[0_8px_24px_-6px_rgba(2,74,216,0.16)] hover:border-[#024ad8]/30 transition-all">
                  <div className="flex items-center gap-2 mb-1.5 text-[#024ad8]">
                    {item.icon}
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick issues list */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Typical Sound Issues
            </div>
            <h3 className="text-xl font-extrabold text-slate-950">Common Problems at a Glance</h3>

            <div className="space-y-2">
              {[
                { num: "01", title: "No Sound", fix: "Reinstall the driver from the hardware maker" },
                { num: "02", title: "Static or Crackling", fix: "Update to the latest driver and check audio format settings" },
                { num: "03", title: "Wrong Device Selected", fix: "Ensure the correct output device is selected in system sound settings" },
                { num: "04", title: "Latency in Voice Chat", fix: "Use the high-performance driver mode and disable audio enhancements" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_8px_24px_-6px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 transition-all">
                  <span className="px-2 py-0.5 rounded-md text-xs font-extrabold bg-[#024ad8]/10 text-[#024ad8] border border-[#024ad8]/20 shrink-0 min-w-[32px] text-center">
                    {item.num}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.fix}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            2. FIX AUDIO IN 5 SIMPLE STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Fix Audio in 5 Simple Steps</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              A step-by-step plan to get your audio back on track quickly and without special tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#024ad8] text-white font-extrabold text-xs flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                  Verified Step
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/15 text-[#024ad8] flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">No Special Tools Required</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If anything feels beyond your comfort level, a local technician can run this exact routine in minutes. Nothing on this page requires paid software or special hardware.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                100% Safe Process
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. AUDIO FORMATS & SAMPLE RATES
        ========================================================= */}
        <section className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Audio Fundamentals
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Understanding Audio Formats &amp; Sample Rates
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm leading-relaxed">
              Audio on your computer is stored and transmitted in different formats. Getting these right is why your driver settings matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audioFormats.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="text-xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. AUDIO PROBLEMS DECODED
        ========================================================= */}
        <section id="audio-problems" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Diagnostics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Audio Problems Decoded</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Six of the most common audio complaints — and the plain-English fix for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audioProblems.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                  See Fix Above
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. SIMPLE AUDIO DRIVER TWEAKS
        ========================================================= */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Optimisation Tips
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Simple Audio Driver Tweaks
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              These small changes can make a huge difference to sound quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tweaks.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center mb-3 text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            6. FAQs
        ========================================================= */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Quick Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Questions readers ask most often about audio drivers.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#024ad8] bg-[#024ad8]/5 shadow-sm"
                      : "border-slate-200 bg-white hover:border-[#024ad8]/30"
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
                        isOpen ? "bg-[#024ad8] text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#024ad8]/10 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            7. CONTINUE LEARNING BANNER
        ========================================================= */}
        <section className="rounded-2xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 sm:p-9 text-white shadow-[0_20px_50px_-15px_rgba(2,74,216,0.35)] border border-blue-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Continue Learning
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
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
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all transform hover:-translate-y-0.5"
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
