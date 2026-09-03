"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  PrinterIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  InfoIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CpuIcon,
  HelpCircleIcon
} from "@/components/Icons";

export default function PrinterDriversPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: "01",
      title: "Clear the Print Queue",
      description: "Open the queue and cancel every document. If a job refuses to leave, restart both the computer and the printer — the queue clears on boot."
    },
    {
      step: "02",
      title: "Check the Connection",
      description: "For USB, reseat the cable. For Wi-Fi, confirm the printer and the computer are on the same network — most printers can print a network status page from their own control panel."
    },
    {
      step: "03",
      title: "Set the Right Default",
      description: "Make sure the actual printer — not 'Save as PDF' or a duplicate 'Copy 1' entry — is set as the default printer."
    },
    {
      step: "04",
      title: "Reinstall the Maker's Driver",
      description: "Download the full package for your exact model and operating-system version from the manufacturer's support page, remove the old printer entry, and install fresh."
    },
    {
      step: "05",
      title: "Print a Test Page",
      description: "Use the driver's own test-page button. If the test page prints but your document doesn't, the application's print settings are the remaining suspect."
    }
  ];

  const diagnosticCodes = [
    {
      code: "Code 28",
      meaning: "No driver is installed for the print device.",
      fix: "Install the full software package for your exact model from the maker's site.",
      severity: "Driver Missing"
    },
    {
      code: "Code 43",
      meaning: "A USB-connected printer misbehaved and was stopped.",
      fix: "Try another cable and port, then reinstall the printer's driver.",
      severity: "Hardware Handshake"
    },
    {
      code: "Code 45",
      meaning: "The printer isn't currently connected.",
      fix: "Power-cycle the printer and re-check the USB or network connection.",
      severity: "Connection Lost"
    },
    {
      code: "Error – Printing",
      meaning: "A job is stuck and blocking the queue.",
      fix: "Cancel all documents in the queue; if it won't clear, restart the computer and the printer.",
      severity: "Spooler Jam"
    }
  ];

  const faqs = [
    {
      question: "My printer shows 'offline' but it's switched on. What now?",
      answer: "An 'offline' status simply means your computer cannot communicate with the printer over USB or the local Wi-Fi network. First, restart both your printer and computer. For wireless printers, verify both devices are on the exact same Wi-Fi SSID (avoid 5GHz/2.4GHz band splits if your printer only supports 2.4GHz), and make sure the 'Use Printer Offline' option is unchecked in the Windows Print Queue menu."
    },
    {
      question: "Why does my printer print gibberish or strange symbols?",
      answer: "Printing pages filled with endless random code, symbols, or blank sheets happens when a print job is rendered using the wrong Page Description Language (such as sending PostScript commands to a PCL-only printer). This almost always happens when Windows installs a generic or near-match driver. Download and install the dedicated, official driver package matching your exact printer model from the manufacturer's official support site."
    },
    {
      question: "Is the generic driver built into my OS good enough?",
      answer: "Generic or built-in OS drivers (like Microsoft IPP or standard Class Drivers) can handle basic black-and-white single-page printing in an emergency. However, they frequently lack support for duplex (double-sided) printing, specific photo paper types, accurate color profiles, high-resolution scanning, and real-time ink level reporting. Using the official manufacturer package ensures full feature access."
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#024ad8] selection:text-white">
      
      {/* =========================================================
          HERO SECTION (BALANCED 70% HEIGHT & PRINTER SCHEMATIC)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#024ad8]/5 via-white to-slate-50/50 border-b border-slate-200/80 py-10 sm:py-12 md:py-14">
        {/* Subtle Ambient Brand Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#024ad8]/10 blur-[110px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs 
            items={[
              { label: "All Drivers", href: "/drivers" },
              { label: "Printer Drivers" }
            ]} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#024ad8] animate-pulse" />
                Printer Drivers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                The Translator Between Your Document and the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#024ad8] via-blue-600 to-indigo-700">
                  Printed Page
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                You click Print, and a small chain of software springs into action — formatting the page, queueing the job, and speaking your printer&apos;s exact language. Here&apos;s how it works, and how to un-jam it when it doesn&apos;t.
              </p>

              {/* Action Buttons & Quick Telemetry */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <a
                  href="#five-steps"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#024ad8] hover:bg-[#013db3] shadow-md shadow-[#024ad8]/20 transition-all transform hover:-translate-y-0.5"
                >
                  <PrinterIcon className="w-4 h-4" />
                  <span>Fix It in 5 Steps</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#device-codes"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#024ad8] shadow-2xs transition-all"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-[#024ad8]" />
                  <span>Device Codes</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100"><CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8]" /> Spooler Diagnostics</span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100"><CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8]" /> Network &amp; USB Ports</span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100"><CheckCircleIcon className="w-3.5 h-3.5 text-[#024ad8]" /> Offline Recovery</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_-10px_rgba(2,74,216,0.2)] border-3 border-white bg-slate-900 max-h-[300px] sm:max-h-[330px]">
                <Image
                  src="/images/hero-printer.jpg"
                  alt="Modern printer hardware and network driver translation flow"
                  width={600}
                  height={360}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  priority
                />
                
                {/* Floating pill overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#024ad8]/10 flex items-center justify-center text-[#024ad8] font-bold">
                      <PrinterIcon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Print Spooler Pipeline</div>
                      <div className="text-[11px] text-[#024ad8] font-semibold">Active PDL Stream Sync</div>
                    </div>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-[#024ad8] animate-ping" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN PAGE CONTENT
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-8 sm:py-12">

        {/* =========================================================
            1. WHAT A PRINTER DRIVER DOES (4 PILLARS + PIPELINE)
        ========================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-2">
              Architecture Explained
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What a Printer Driver Does
            </h2>
            <div className="mt-3 space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p>
                A printer driver takes the page your application has laid out and converts it into the page-description language your specific printer understands — where every line, image, and character should land on the paper. It also presents the printer&apos;s abilities to you: paper sizes, print quality, double-sided printing, color or draft mode.
              </p>
              <p>
                Between the click and the paper sits the print queue (the spooler), which the driver feeds. Jobs wait their turn there, your application gets to move on instantly, and status — ink levels, paper jams, that blinking light — flows back the other way so you know what&apos;s happening.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#024ad8]/10 text-[#024ad8] flex items-center justify-center mb-3 font-bold">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Page Language Conversion</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Converts your document into the printer&apos;s page language (PCL, PostScript, ESC/P).
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                Precise Rasterization
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 font-bold">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Hardware Capabilities</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Exposes paper size, quality, color profile, and double-sided duplex options.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                Full Feature Access
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#024ad8] flex items-center justify-center mb-3 font-bold">
                  <PrinterIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Spooler Queue Management</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Queues jobs through the spooler so apps don&apos;t wait on physical mechanics.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                Non-blocking Output
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 font-bold">
                  <InfoIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Two-Way Status Telemetry</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reports ink levels, paper jams, tray states, and error alerts back to your screen.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-indigo-600">
                Real-Time Feedback
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            2. WHY PRINTERS GO "OFFLINE" (AND OTHER CLASSICS)
        ========================================================= */}
        <section className="rounded-2xl bg-gradient-to-br from-[#024ad8]/5 via-white to-blue-50/50 border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider">
                Common Glitches
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                Why Printers Go &ldquo;Offline&rdquo; (and Other Classics)
              </h2>
              
              <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <p>
                  A printer that shows &ldquo;offline&rdquo; while sitting right there, a queue that won&apos;t move, pages of gibberish symbols, or blank sheets — these are the printing classics, and nearly all of them live in software, not in the machine.
                </p>
                <p>
                  <strong>&ldquo;Offline&rdquo;</strong> simply means the computer can&apos;t reach the printer at that moment — a Wi-Fi hiccup, a sleeping device, or a stuck job blocking the queue. <strong>Gibberish output</strong> means the job was rendered with the wrong driver, often a near-match model. The reliable cure for both: clear the queue, then reinstall the full driver package for your exact model from the maker&apos;s support page.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#024ad8]/20 text-xs font-semibold text-[#024ad8] flex items-center gap-2 shadow-2xs">
                  <span>💡</span>
                  <span>Pro Tip: Reinstalling the authentic manufacturer INF resolves 90% of &ldquo;Offline&rdquo; and &ldquo;Driver Unavailable&rdquo; errors.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white bg-slate-950 aspect-[16/10]">
                <Image
                  src="/images/printer-troubleshoot.jpg"
                  alt="Printer troubleshooting and diagnostic connection illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-slate-900 border border-slate-200 shadow-sm flex items-center justify-between">
                  <span>Network &amp; Spooler Sync</span>
                  <span className="text-[10px] text-[#024ad8] font-mono">Status: Connected</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            3. STEP-BY-STEP GUIDE: FIX IT IN 5 CAREFUL STEPS
        ========================================================= */}
        <section id="five-steps" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Step-by-step Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Fix it in 5 Careful Steps
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              Follow this battle-tested routine to clear jams, unblock queues, and restore clean printing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(2,74,216,0.18)] hover:border-[#024ad8]/50 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#024ad8] text-white font-extrabold text-xs flex items-center justify-center mb-3 shadow-2xs">
                    {item.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3.5 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#024ad8]">
                  Verified Step
                </div>
              </div>
            ))}

            {/* Reassurance Callout */}
            <div className="p-5 rounded-2xl bg-[#024ad8]/5 border border-[#024ad8]/25 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#024ad8]/10 text-[#024ad8] font-bold text-xs flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  No Special Tools Required
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  If anything here feels out of your depth, that&apos;s a normal feeling — a local technician can run this exact routine in minutes. Nothing on this page requires special tools.
                </p>
              </div>
              <div className="mt-3.5 pt-2 border-t border-[#024ad8]/15 text-[11px] font-bold text-[#024ad8]">
                100% Safe Execution
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            4. COMMON DEVICE MANAGER CODES (STRUCTURED TABLE)
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
              Printers speak in statuses more than codes, but when the printer itself shows a problem in Device Manager, these are the usual suspects:
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-[0_8px_25px_-8px_rgba(2,74,216,0.06)] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5">Code</th>
                    <th className="px-5 py-3.5">What it Means in Plain English</th>
                    <th className="px-5 py-3.5">The Usual Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {diagnosticCodes.map((d, idx) => (
                    <tr key={idx} className="hover:bg-[#024ad8]/5 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-[#024ad8] whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-[#024ad8]/10 text-[#024ad8]">
                          {d.code}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-800 font-medium leading-relaxed">
                        {d.meaning}
                      </td>
                      <td className="px-5 py-4 text-slate-600 leading-relaxed">
                        {d.fix}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. QUICK ANSWERS: FREQUENTLY ASKED QUESTIONS
        ========================================================= */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#024ad8]/10 text-[#024ad8] text-[10px] font-bold uppercase tracking-wider mb-1">
              Quick Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm">
              The questions readers send us most about this topic.
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

        {/* =========================================================
            6. EXPLORE MORE / COMMUNITY BANNER (USER COPY & LINKS)
        ========================================================= */}
        <section className="rounded-3xl bg-gradient-to-br from-[#024ad8] via-[#013ea8] to-slate-950 p-6 sm:p-9 text-white shadow-[0_20px_50px_-15px_rgba(2,74,216,0.35)] border border-blue-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Explore More
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Want us to explain another driver topic?
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Our friendly overview covers every major hardware category — from the device on your desk to the chips inside your laptop.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/drivers"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#024ad8] bg-white hover:bg-slate-100 shadow-md shadow-black/10 transition-all transform hover:-translate-y-0.5"
              >
                <span>Browse all topics</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/knowledge-base"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-xs shadow-2xs transition-all transform hover:-translate-y-0.5"
              >
                <BookOpenIcon className="w-3.5 h-3.5" />
                <span>Visit Knowledge Hub</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
