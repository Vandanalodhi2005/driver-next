import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ScanIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Scanner Drivers & TWAIN/WIA Protocol Guide",
  description: "Learn how to configure scanner drivers, fix TWAIN communication errors, and configure Windows Image Acquisition (WIA) services."
};

export default function ScannerDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Scanner Drivers" }
        ]} 
      />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
          <ScanIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Scanner Drivers &amp; Imaging Protocol Guides
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Scanner drivers connect optical sensors and automated document feeders (ADF) with imaging software via TWAIN, WIA, or ISIS APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">TWAIN vs. WIA Drivers</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            WIA is native to Windows and works with default Paint and Windows Scan apps. TWAIN provides advanced DPI, color profiles, and multi-stream scanning for Photoshop and archival tools.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verify Windows Image Acquisition service is set to Automatic</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ensure 32-bit vs 64-bit TWAIN DLLs match the scanning host app</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Scanner Not Detected over Network</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Multi-function printer/scanner units require specific network scanning daemons and UDP ports (such as SNMP port 161 and WSD port 5357) to be allowed in Windows Defender Firewall.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verify UDP/TCP port forwarding for scanning utilities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Check OCR software dependencies and feeder sensors</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Tip: </span>
          If your standalone scanner is older and lacks native 64-bit drivers, using VueScan or generic WIA compatibility mode can restore functionality without replacing hardware.
        </div>
      </div>
    </div>
  );
}
