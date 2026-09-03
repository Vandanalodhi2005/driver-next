"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  WifiIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  InfoIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
} from "@/components/Icons";

export default function NetworkDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Identify the Adapter",
      description:
        "Open Device Manager → Network adapters and note the exact model name of your Wi-Fi or Ethernet adapter before doing anything else.",
    },
    {
      step: "02",
      title: "Download the Driver First",
      description:
        "While you still have a working connection, grab the driver from your laptop maker's support page (for notebooks) or directly from the chip maker such as Intel or Realtek.",
    },
    {
      step: "03",
      title: "Uninstall the Old Driver Completely",
      description:
        "In Device Manager, right-click the network adapter and choose Uninstall device. Tick the option to remove the driver software so no stale files carry over.",
    },
    {
      step: "04",
      title: "Restart and Install Fresh",
      description:
        "Reboot your PC, then run the downloaded installer and reconnect to your network. A clean install removes registry conflicts that cause drops and slow speeds.",
    },
    {
      step: "05",
      title: "Turn Off Aggressive Power Saving",
      description:
        "In Device Manager, open adapter Properties → Power Management → untick 'Allow the computer to turn off this device to save power.' This single setting resolves most drop issues.",
    },
  ];

  const speedIssues = [
    {
      icon: "📶",
      title: "Wi-Fi Drops Frequently",
      detail:
        "Power management is the most common culprit. Untick 'Allow the computer to turn off this device to save power' in the adapter's Device Manager properties.",
      tag: "Most Common",
    },
    {
      icon: "🐌",
      title: "Slower Than Other Devices",
      detail:
        "Update the driver, disable power saving on the adapter, and check whether your router's firmware is up to date. Interference from 2.4 GHz congestion is also a frequent cause.",
      tag: "Speed",
    },
    {
      icon: "🔒",
      title: "Won't Connect to Wi-Fi",
      detail:
        "Forget the network and rejoin. If the problem persists, update the driver and verify your router is broadcasting on a band your adapter supports (2.4 vs 5 GHz).",
      tag: "Connection",
    },
    {
      icon: "🎮",
      title: "High Ping or Latency in Games",
      detail:
        "Switch to a wired Ethernet connection if possible. If you must stay on Wi-Fi, update the driver, move closer to the router, and disable QoS settings that throttle gaming traffic.",
      tag: "Latency",
    },
    {
      icon: "📡",
      title: "No 5 GHz Network Visible",
      detail:
        "First confirm your adapter supports 5 GHz — check its spec sheet. Then verify your router has 5 GHz enabled and is not broadcasting on DFS channels that some adapters ignore.",
      tag: "Frequency",
    },
    {
      icon: "🔌",
      title: "Ethernet Good but Wi-Fi Not",
      detail:
        "When wired works but wireless doesn't, the issue is specific to the Wi-Fi hardware or its driver. A clean driver reinstall paired with the power-saving fix resolves this in most cases.",
      tag: "Selective",
    },
  ];

  const tweaks = [
    {
      title: "Disable Power Saving for the Adapter",
      detail:
        "The single most impactful fix for Wi-Fi dropouts. Device Manager → adapter Properties → Power Management → untick 'Allow the computer to turn off this device to save power.'",
    },
    {
      title: "Choose the Right Band and Channel",
      detail:
        "Use 2.4 GHz for range and wall penetration; use 5 GHz for raw speed over shorter distances. Set your router to auto-select channels to avoid congestion.",
    },
    {
      title: "Keep Router Firmware Updated Too",
      detail:
        "Outdated router firmware causes compatibility issues with newer driver features like MU-MIMO and beamforming. Log into your router's admin panel and check for updates.",
    },
    {
      title: "Keep the Driver Current",
      detail:
        "Check your adapter maker's support page monthly. Intel, Realtek, and Qualcomm Atheros regularly release updates that improve stability and roaming behavior.",
    },
  ];

  const diagnosticCodes = [
    {
      code: "Code 10",
      meaning: "The network adapter cannot start.",
      fix: "Reinstall the driver from the manufacturer's support page.",
    },
    {
      code: "Code 31",
      meaning: "The driver failed to load correctly.",
      fix: "Uninstall the device in Device Manager, restart, then install a fresh driver.",
    },
    {
      code: "Code 43",
      meaning: "The adapter reported an error and has been stopped by Windows.",
      fix: "Perform a clean driver reinstall. For USB adapters, also try a different USB port.",
    },
    {
      code: "Code 45",
      meaning: "The device is not connected — often occurs after waking from sleep.",
      fix: "Restart the PC and disable power management on the adapter to prevent recurrence.",
    },
  ];

  const faqs = [
    {
      question: "Why is my laptop's Wi-Fi slower than my phone on the same network?",
      answer:
        "Laptops often use older or lower-spec Wi-Fi chips than modern phones, and Windows power-saving settings frequently throttle the adapter's transmit power when on battery. First, update your Wi-Fi driver. Then open Device Manager → Network adapters → adapter Properties → Advanced tab and look for 'Transmit Power' or 'Preferred Band' settings. Set transmit power to highest and preferred band to 5 GHz. Finally, disable power saving as described in Step 5 above.",
    },
    {
      question: "Wi-Fi drops every time my laptop goes to sleep — how do I stop it?",
      answer:
        "This is almost always caused by Windows turning off the Wi-Fi adapter to save power during sleep, and the adapter failing to re-associate cleanly on wake. The fix is in Device Manager → Network adapters → right-click your Wi-Fi adapter → Properties → Power Management tab → uncheck 'Allow the computer to turn off this device to save power.' Also ensure your router's DHCP lease time is not too short.",
    },
    {
      question: "Ethernet works perfectly but Wi-Fi won't stay connected — what's the issue?",
      answer:
        "When wired works and wireless doesn't, the problem is isolated to your Wi-Fi adapter or its driver — not your ISP, router, or OS networking stack. Start with a clean driver reinstall (Steps 1–4 above). If the issue persists after reinstalling, check the Advanced tab in adapter properties for 'Roaming Aggressiveness' — set it to Medium or Low so the adapter doesn't keep hunting for a stronger signal. Also check that the 2.4/5 GHz band your router is using is one your adapter supports.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-10 sm:py-12 md:py-14 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#024ad8]/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[280px] bg-[#024ad8]/10 blur-[110px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-white/70">
            <Breadcrumbs
              items={[
                { label: "All Drivers", href: "/drivers" },
                { label: "Network Drivers" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/25 border border-[#024ad8]/40 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Wi-Fi &amp; Network Drivers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                The Bridge Between Your PC and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  the Internet
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                Every page you load, every video you stream, every call you join passes through a network driver before it ever reaches your screen.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                {[
                  "Moves packets between OS and hardware",
                  "Handles Wi-Fi connection & authentication",
                  "Manages checksum offload & features",
                  "Reports signal strength and link health",
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
                  <WifiIcon className="w-4 h-4" />
                  Fix in 5 Steps
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#speed-issues"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-blue-300" />
                  Speed & Drop Fixes
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { label: "Common Chips", value: "Intel · Realtek · Qualcomm", sub: "Most laptops & desktops" },
                { label: "Wi-Fi Standards", value: "Wi-Fi 5 / 6 / 6E", sub: "Driver-managed features" },
                { label: "Wired Speeds", value: "100M · 1G · 10G", sub: "Ethernet via driver" },
                { label: "Top Fix", value: "Power Mgmt Off", sub: "Resolves 90% of drops" },
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
            1. WHAT A NETWORK DRIVER DOES + COMMON FRUSTRATIONS
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Architecture */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Architecture Explained
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What a Network Driver Does
            </h2>
            <div className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                A network driver is the software layer connecting your operating system's networking stack to the physical Wi-Fi or Ethernet chip in your computer.
              </p>
              <p>
                On wireless, it handles access point association, encryption handshakes, and adapts transmission rates as signal strength changes when you move around.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { icon: <CpuIcon className="w-4 h-4" />, title: "Packet Movement", desc: "Moves data packets between the OS networking stack and the physical hardware interface." },
                { icon: <WifiIcon className="w-4 h-4" />, title: "Wi-Fi Authentication", desc: "Handles association, WPA2/WPA3 encryption, and roaming between access points." },
                { icon: <CheckCircleIcon className="w-4 h-4" />, title: "Offload Features", desc: "Manages checksum offload, Large Send Offload, and Receive Side Scaling to reduce CPU load." },
                { icon: <ShieldCheckIcon className="w-4 h-4" />, title: "Link Health Reporting", desc: "Reports signal strength, link speed, and connection quality back to the OS and apps." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_8px_24px_-6px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 transition-all">
                  <div className="flex items-center gap-2 mb-1.5 text-[#024ad8]">
                    {item.icon}
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Common frustrations */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Common Frustrations
            </div>
            <h3 className="text-xl font-extrabold text-slate-950">Connectivity Problems at a Glance</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Wi-Fi dropping, slow speeds, or connections not waking up after sleep — a fresh driver paired with turning off aggressive OS power-saving resolves 90% of these.
            </p>

            <div className="space-y-2 pt-1">
              {[
                { num: "01", title: "Wi-Fi dropping every few minutes", fix: "Turn off adapter power saving + clean driver reinstall" },
                { num: "02", title: "Speeds way slower than other devices", fix: "Update driver, disable power saving, check router band" },
                { num: "03", title: "Won't connect or asks for password repeatedly", fix: "Forget network, update driver, verify router band support" },
                { num: "04", title: "Ethernet works but Wi-Fi won't stay up", fix: "Specific to Wi-Fi driver — clean reinstall resolves it" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_8px_24px_-6px_rgba(2,74,216,0.12)] hover:border-[#024ad8]/30 transition-all">
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
            2. FIX IN 5 CAREFUL STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Fix it in 5 Careful Steps</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Follow this routine for a clean network driver reinstall plus the critical power-saving tweak.
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

            {/* Bonus tip card */}
            <div className="p-5 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/15 text-[#024ad8] flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Download Driver Before You Uninstall</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Always download the new driver file first while your connection is working. Uninstalling the current driver removes your ability to browse until the fresh one is installed.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                Critical Reminder
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. ETHERNET vs WI-FI
        ========================================================= */}
        <section className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Connection Types
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Ethernet vs Wi-Fi
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm leading-relaxed">
              Understanding your connection type helps you choose the right driver settings and troubleshooting path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Ethernet */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#024ad8]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#024ad8] uppercase tracking-wider">Wired</div>
                  <h3 className="text-base font-bold text-slate-900">Ethernet</h3>
                </div>
              </div>
              <div className="space-y-1.5 mb-3">
                {[
                  "Direct, stable, low-interference link",
                  "100 Mbps, 1 Gbps, and 10 Gbps options available",
                  "Best for gaming, streaming, and large transfers",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 rounded-lg bg-[#024ad8]/5 border border-[#024ad8]/15 text-[11px] text-[#024ad8] font-semibold">
                Driver's job is simple: move data quickly and reliably.
              </div>
            </div>

            {/* Wi-Fi */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#024ad8]/10 flex items-center justify-center">
                  <WifiIcon className="w-5 h-5 text-[#024ad8]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#024ad8] uppercase tracking-wider">Wireless</div>
                  <h3 className="text-base font-bold text-slate-900">Wi-Fi</h3>
                </div>
              </div>
              <div className="space-y-1.5 mb-3">
                {[
                  "No cables — ideal for laptops and mobile devices",
                  "802.11ac / Wi-Fi 5: up to 1–3 Gbps theoretical",
                  "802.11ax / Wi-Fi 6/6E: up to 10 Gbps+",
                  "Driver handles roaming, encryption, and rate adaptation",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 rounded-lg bg-[#024ad8]/5 border border-[#024ad8]/15 text-[11px] text-[#024ad8] font-semibold">
                Driver has more to do here — keep it updated.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            4. SPEED & STABILITY ISSUES DECODED
        ========================================================= */}
        <section id="speed-issues" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Diagnostics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Speed &amp; Stability Issues Decoded</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Six of the most common network problems — and the plain-English fix for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {speedIssues.map((item, i) => (
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
            5. QUICK NETWORK DRIVER TWEAKS
        ========================================================= */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Optimisation Tips
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Quick Network Driver Tweaks
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Small settings changes with a big impact on connection stability and speed.
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
            6. DEVICE MANAGER CODES
        ========================================================= */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Error Diagnosis
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common Device Manager Codes
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Here&apos;s what each network adapter error code means, and the usual fix.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5">Code</th>
                    <th className="px-5 py-3.5">What it Means</th>
                    <th className="px-5 py-3.5">The Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {diagnosticCodes.map((d, i) => (
                    <tr key={i} className="hover:bg-[#024ad8]/4 transition-colors">
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="font-mono font-bold text-[#024ad8] px-2.5 py-1 rounded-md bg-[#024ad8]/10">
                          {d.code}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700 font-medium leading-relaxed">{d.meaning}</td>
                      <td className="px-5 py-4 text-slate-500 leading-relaxed">{d.fix}</td>
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
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Questions readers ask most often about network and Wi-Fi drivers.
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
            8. CONTINUE LEARNING BANNER
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
