"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BluetoothIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
  InfoIcon,
} from "@/components/Icons";

export default function BluetoothDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Remove and Re-pair",
      description:
        "Delete the device from your Bluetooth list first, put it back into pairing mode, then pair fresh — stale records cause most refusals.",
    },
    {
      step: "02",
      title: "Charge and Close the Distance",
      description:
        "Low batteries make devices flaky before they make them dead. Charge up and pair within arm's reach to rule out signal issues.",
    },
    {
      step: "03",
      title: "Update the Bluetooth Driver",
      description:
        "Get it from your laptop maker's support page for your exact model — Bluetooth drivers are tuned per machine and generic versions often miss features.",
    },
    {
      step: "04",
      title: "Turn Off Radio Power-Saving",
      description:
        "In the adapter's power-management settings, stop the system from turning off the radio to save power. This single checkbox fixes most post-sleep disconnects.",
    },
    {
      step: "05",
      title: "Clear the Airwaves",
      description:
        "Move away from USB 3 hubs and crowded 2.4 GHz Wi-Fi channels; interference mimics driver failure surprisingly well.",
    },
  ];

  const diagnosticCodes = [
    {
      code: "Code 43",
      meaning: "The Bluetooth radio misbehaved and was stopped.",
      fix: "Reinstall the Bluetooth driver from your laptop maker; toggle the radio off and on.",
    },
    {
      code: "Code 28",
      meaning: "No driver is installed for the radio.",
      fix: "Install the Bluetooth package for your exact model and OS version.",
    },
    {
      code: "Code 10",
      meaning: "The radio cannot start.",
      fix: "Uninstall the device in Device Manager, restart, and let it reinstall — then update the driver.",
    },
    {
      code: "Code 45",
      meaning: "The radio isn't present — often right after sleep.",
      fix: "Restart, then disable the radio's power-saving option so it wakes reliably.",
    },
  ];

  const faqs = [
    {
      question: "My headphones are paired, but sound still comes from the laptop. Why?",
      answer:
        "Bluetooth headphones register as a separate audio output device in Windows. Even after pairing, Windows may not switch to them automatically. Right-click the speaker icon in the taskbar → Sound settings → choose your Bluetooth headphones as the output device. If they appear as 'Hands-Free AG Audio' instead of 'Stereo,' the headset profile loaded instead of the audio profile — disconnect and reconnect, or remove and re-pair to force the stereo (A2DP) profile.",
    },
    {
      question: "Why does my Bluetooth mouse stutter near my Wi-Fi router?",
      answer:
        "Bluetooth and 2.4 GHz Wi-Fi share the same radio frequency band. When both are transmitting heavily at close range, they interfere with each other. The fix is to move the mouse's USB Bluetooth receiver (if it uses one) away from the router, or switch your Wi-Fi to the 5 GHz band so the 2.4 GHz spectrum is less congested. Updating both the Bluetooth and Wi-Fi drivers can also improve coexistence handling.",
    },
    {
      question: "My headphones pair with my phone but not my computer. What's different?",
      answer:
        "Phones run newer Bluetooth stacks that handle pairing more aggressively. On a PC, the most common blocker is a stale pairing record — your computer remembers an old key for those headphones that no longer matches. Delete the headphones from your Bluetooth device list, put the headphones into pairing mode (usually by holding the power button until the LED flashes rapidly), and pair fresh. If that still fails, update the Bluetooth driver from your laptop maker's support page.",
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
                { label: "Bluetooth Drivers" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/25 border border-[#024ad8]/40 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Bluetooth Drivers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                The Invisible Cable Between{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Your Devices
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                Headphones, mice, keyboards, phones — Bluetooth replaces a drawer full of cables with one short-range radio. The driver and its software stack are what make that radio feel effortless.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                {[
                  "Discovery, pairing & trusted-device list",
                  "Profile routing (audio, input, file transfer)",
                  "Sound stack handoff for audio devices",
                  "Radio power management for battery life",
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
                  <BluetoothIcon className="w-4 h-4" />
                  Fix in 5 Steps
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

            {/* Stats grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { label: "Radio Band", value: "2.4 GHz ISM", sub: "Shared with Wi-Fi" },
                { label: "Range", value: "Up to 10 metres", sub: "Class 2 typical" },
                { label: "Profiles", value: "A2DP · HID · HFP", sub: "Audio · Input · Calls" },
                { label: "Top Fix", value: "Remove & Re-pair", sub: "Clears stale keys" },
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
            1. WHAT A BLUETOOTH DRIVER DOES
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
              How It Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What a Bluetooth Driver Does
            </h2>
            <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                The Bluetooth driver operates your computer&apos;s 2.4 GHz short-range radio — but the radio is only the start. Above it sits a software stack that runs discovery (&ldquo;what&apos;s nearby?&rdquo;), pairing (&ldquo;do we trust each other?&rdquo;), and the long-term list of devices your machine remembers.
              </p>
              <p>
                Every kind of gadget then speaks its own profile — one for stereo audio, one for keyboards and mice, one for file transfer — and the stack loads the right profile for each connection. That&apos;s why one radio can serve your headphones, your mouse, and your phone at once, each in its own dialect, while the driver also manages the radio&apos;s power draw so your battery survives.
              </p>
            </div>
          </div>

          {/* Right: 4 capability cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: <CpuIcon className="w-4 h-4" />, title: "Discovery & Pairing", desc: "Runs device discovery, manages pairing keys, and maintains your trusted-device list." },
              { icon: <BluetoothIcon className="w-4 h-4" />, title: "Profile Routing", desc: "Speaks the right profile for each gadget — A2DP for audio, HID for input, OPP for file transfer." },
              { icon: <CheckCircleIcon className="w-4 h-4" />, title: "Sound Stack Handoff", desc: "Hands connected audio devices to the system's sound stack so they appear as output endpoints." },
              { icon: <ShieldCheckIcon className="w-4 h-4" />, title: "Power Management", desc: "Manages the radio's power draw so your laptop battery isn't drained by idle connections." },
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
            2. PAIRING PROBLEMS AND VANISHING DEVICES
        ========================================================= */}
        <section className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Troubleshooting
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Pairing Problems and Vanishing Devices
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                A device that refuses to pair, headphones that connect but play no sound, or a mouse that dies every time the laptop sleeps — Bluetooth&apos;s classics are consistent, and so are the fixes.
              </p>
              <p>
                <strong className="text-slate-800">Stale pairing records</strong> cause most refusals: removing the device from the list and pairing fresh clears them. <strong className="text-slate-800">Audio-but-silent</strong> is usually a default-output selection issue, not the radio. And the <strong className="text-slate-800">post-sleep vanishing act</strong> is our old friend power management putting the radio into a nap it doesn&apos;t wake from — one checkbox, plus a current driver from your laptop maker, fixes it.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-2">
              {[
                "Remove stale pairing → re-pair fresh",
                "Check default output for silent audio",
                "Disable radio power-saving for sleep drops",
                "Update driver from your laptop maker's site",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-[#024ad8] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. FIX IN FIVE CAREFUL STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Fix it in Five Careful Steps</h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              Follow this routine to resolve pairing failures, audio dropouts, and post-sleep disconnects.
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

            {/* Reassurance card */}
            <div className="p-5 rounded-xl bg-[#024ad8]/5 border border-[#024ad8]/20 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/15 text-[#024ad8] flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">No Special Tools Required</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If anything here feels out of your depth, that&apos;s a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                100% Safe Process
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. DEVICE MANAGER CODES
        ========================================================= */}
        <section id="device-codes" className="space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Decode the Jargon
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Common Device Manager Codes
            </h2>
            <p className="mt-1 text-slate-500 text-xs sm:text-sm">
              When the Bluetooth radio itself is unhappy, Device Manager shows these short codes:
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-[0_4px_16px_-4px_rgba(2,74,216,0.06)] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5">Code</th>
                    <th className="px-5 py-3.5">What it Means in Plain English</th>
                    <th className="px-5 py-3.5">The Usual Fix</th>
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
              The questions readers send us most about this topic.
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
