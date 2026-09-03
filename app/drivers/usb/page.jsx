"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  UsbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
  InfoIcon,
} from "@/components/Icons";

export default function UsbDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Swap the Cable First",
      description:
        "Cables fail way more often than ports or drivers — trying a known-good data cable first saves so much troubleshooting time.",
    },
    {
      step: "02",
      title: "Try Another Port",
      description:
        "Move the device from an unpowered hub or front-panel slot to a high-speed port located directly on your computer motherboard.",
    },
    {
      step: "03",
      title: "Reinstall Device Driver",
      description:
        "Right-click and uninstall the device in Device Manager, unplug it, restart your PC, and reconnect to trigger fresh enumeration.",
    },
    {
      step: "04",
      title: "Update USB Controller Driver",
      description:
        "Install the latest chipset and USB host controller drivers from your PC or motherboard manufacturer's official support site.",
    },
    {
      step: "05",
      title: "Disable USB Selective Suspend",
      description:
        "If external drives or audio interfaces drop out when idle, turn off 'USB Selective Suspend' in Windows Advanced Power Settings.",
    },
  ];

  const frustrations = [
    {
      num: "01",
      title: "Unknown Device in Device Manager",
      detail:
        "Windows cannot read the device descriptor. Try another port or cable first, or install the hardware maker's specific INF driver package.",
    },
    {
      num: "02",
      title: "External Drive Mounts but Disappears",
      detail:
        "Power fluctuations or aggressive power-saving suspend the port. Check the cable, try a rear USB port, and disable USB Selective Suspend.",
    },
    {
      num: "03",
      title: "USB Device Charges but Won't Connect",
      detail:
        "The physical data lines (D+/D-) are damaged or the cable is a power-only charging cord. Swap to a certified full-data USB cable.",
    },
  ];

  const diagnosticCodes = [
    {
      code: "Code 43",
      meaning: "The USB device misbehaved and was stopped by the OS.",
      fix: "Try another cable and port, then reinstall the device driver.",
    },
    {
      code: "Code 28",
      meaning: "No driver was found for the connected device.",
      fix: "Install the official software package from the manufacturer's site.",
    },
    {
      code: "Code 45",
      meaning: "The device is disconnected or the port lost connection.",
      fix: "Reseat the connection, replace degraded cables, and clean ports.",
    },
    {
      code: "Code 10",
      meaning: "The USB device cannot start due to configuration failure.",
      fix: "Uninstall in Device Manager, unplug, restart your PC, and reconnect.",
    },
  ];

  const faqs = [
    {
      question: "USB device shows as 'Unknown Device' — what now?",
      answer:
        "An 'Unknown Device' or 'Device Descriptor Request Failed' error occurs when the USB host controller cannot complete the initial handshake with the hardware. Start with the three golden steps: (1) Swap the cable, (2) plug into a direct rear motherboard USB port rather than a hub or front-panel extension, and (3) open Device Manager, right-click the unknown device, click 'Uninstall device', unplug the hardware, reboot your computer, and plug it back in so Windows can re-enumerate it cleanly.",
    },
    {
      question: "Why does my external drive keep disconnecting randomly?",
      answer:
        "Random disconnections on external hard drives and SSDs are typically caused by Windows power management suspending the USB port during idle moments. To fix this, open Control Panel → Power Options → 'Change plan settings' next to your active plan → 'Change advanced power settings' → expand 'USB settings' → expand 'USB selective suspend setting' and set it to 'Disabled'. Additionally, ensure the drive is plugged into a USB 3.0/3.1 port that supplies adequate bus power.",
    },
    {
      question: "Do I need to 'safely remove' my USB drives?",
      answer:
        "Modern Windows defaults to 'Quick Removal' policy for USB flash drives and external disks, which disables write caching so you can unplug without manual ejection once active transfers finish. However, manually clicking 'Safely Remove Hardware and Eject Media' in the system tray is still strongly recommended for NTFS-formatted drives and external hard drives to ensure all queued background write operations are flushed to disk before physical disconnection.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-10 sm:py-12 md:py-14 border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#024ad8]/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[260px] bg-[#024ad8]/10 blur-[110px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-white/70">
            <Breadcrumbs
              items={[
                { label: "All Drivers", href: "/drivers" },
                { label: "USB Drivers" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/25 border border-[#024ad8]/40 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                USB &amp; Devices
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                The Universal Translator for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Plug-and-Play
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                Plug something in and within a second your computer knows exactly what it is and how to talk to it. That little feat of engineering is your USB driver stack in action.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                {[
                  "Detects and enumerates new devices",
                  "Loads class or specific drivers",
                  "Manages power delivery & ports",
                  "Supports hubs, daisy-chaining & hot swapping",
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
                  <UsbIcon className="w-4 h-4" />
                  Fix in 5 Steps
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#device-codes"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-blue-300" />
                  Device Codes
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { label: "Host Controller", value: "xHCI · eHCI", sub: "USB 3.2 / 2.0 specs" },
                { label: "Plug-and-Play", value: "Sub-second", sub: "Automatic enumeration" },
                { label: "Power Delivery", value: "Up to 100W/240W", sub: "Type-C PD negotiation" },
                { label: "Top Rule", value: "Cable → Port → Driver", sub: "Solves 95% of issues" },
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
            1. WHAT THE USB STACK DOES
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              Architecture Explained
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What the USB Stack Does
            </h2>
            <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                When you connect a USB device, a chain of drivers springs into action: host controller driver manages the physical port, hub driver tracks what&apos;s attached, and class or device-specific driver handles talking to that type of hardware.
              </p>
              <p>
                Together they enumerate, assign system resources, and load the correct software profile so your hardware just works — often without you lifting a finger.
              </p>
            </div>
          </div>

          {/* Right: 4 capability cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: <CpuIcon className="w-4 h-4" />, title: "Automatic Enumeration", desc: "Detects new hardware connections and assigns device addresses within milliseconds." },
              { icon: <UsbIcon className="w-4 h-4" />, title: "Class Driver Loading", desc: "Loads standard class drivers (Mass Storage, HID, Audio) or manufacturer INF profiles." },
              { icon: <ShieldCheckIcon className="w-4 h-4" />, title: "Power Management", desc: "Negotiates power profiles and selectively suspends idle ports to conserve energy." },
              { icon: <CheckCircleIcon className="w-4 h-4" />, title: "Hot Swapping Support", desc: "Allows seamless insertion and removal across root hubs, docks, and daisy chains." },
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
        </section>

        {/* =========================================================
            2. WHEN USB DEVICES ACT UP (COMMON FRUSTRATIONS)
        ========================================================= */}
        <section className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Common Glitches
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              When USB Devices Act Up
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Most USB issues can be solved with <strong className="text-slate-900">&ldquo;swap cable → try new port → reinstall device driver&rdquo;</strong> — that&apos;s your go-to first three steps for almost any USB problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {frustrations.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] hover:shadow-[0_8px_24px_-6px_rgba(2,74,216,0.14)] hover:border-[#024ad8]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[#024ad8] mb-2">{item.num}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                  Quick Fix Available
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#024ad8]/20 text-xs font-semibold text-[#024ad8] flex items-center gap-2 shadow-2xs">
            <span>💡</span>
            <span>Golden Rule: Swap Cable → Try New Direct Port → Reinstall Device Driver in Device Manager.</span>
          </div>
        </section>

        {/* =========================================================
            3. FIX IN 5 CAREFUL STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Fix it in 5 Careful Steps</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Follow this systematic protocol to eliminate hardware faults and driver conflicts.
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

            {/* Motherboard Chipset Card */}
            <div className="p-5 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/15 text-[#024ad8] flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Motherboard Chipset Sync</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  USB host controller drivers are supplied as part of your motherboard chipset software (AMD Chipset or Intel Management Engine). Keep your chipset current for peak USB hub stability.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                Foundation Driver
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. COMMON DEVICE MANAGER CODES
        ========================================================= */}
        <section id="device-codes" className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Error Diagnosis
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common USB Device Manager Codes
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              The usual suspects and what to do about them in plain English:
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
            5. FAQs
        ========================================================= */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Quick Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Questions we get asked most about USB and device drivers.
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
            6. CONTINUE LEARNING BANNER
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
