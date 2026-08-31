import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PrinterIcon, CheckCircleIcon, ArrowRightIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Printer Drivers Guide & Troubleshooting",
  description: "Comprehensive educational guides for installing printer drivers, resolving offline errors, fixing print spooler crashes, and wireless setup."
};

export default function PrinterDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Printer Drivers" }
        ]} 
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
          <PrinterIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Printer Drivers Knowledge &amp; Troubleshooting
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Printer drivers translate page descriptions into binary data streams that inkjet, laser, and thermal printheads can process. Learn how to configure wireless ports, clear spooler locks, and fix &ldquo;Driver Unavailable&rdquo; states.
        </p>
      </div>

      {/* Core Troubleshooting Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Module 1 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Fixing &ldquo;Printer Driver is Unavailable&rdquo;
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            This state occurs when Windows registers a hardware connection but lacks the matching INF profile or has encountered corrupt driver registry keys.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Uninstall the generic device in Device Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Remove stale driver packages from `printui.exe /s`</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reinstall full-feature driver package from manufacturer portal</span>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Resolving Print Spooler Crash Loops
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            When corrupt print jobs get stuck in memory, the Windows Print Spooler (`spoolsv.exe`) crashes repeatedly, making printers appear disconnected.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Stop Print Spooler service via command `net stop spooler`</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Purge all files inside `C:\Windows\System32\spool\PRINTERS`</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Restart service via `net start spooler` and test test-page</span>
            </div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Wireless &amp; Network Port Configuration
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            WSD (Web Services for Devices) ports often fail when IP addresses refresh under DHCP leases. Switching to Standard TCP/IP ensures uninterrupted printing.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Print Network Configuration page from printer control panel</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Assign static IP in router or printer embedded web server (EWS)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Add Standard TCP/IP Port in Printer Properties</span>
            </div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Universal Print Driver (UPD) vs Model Specific
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Understand when to use PCL6 or PostScript universal drivers for office network environments versus specialized color-calibrated OEM drivers.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>PCL6: Optimized for office text and fast rasterization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>PostScript: Crucial for publishing &amp; graphic accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>OEM Specific: Enables duplexer accessories and ink gauges</span>
            </div>
          </div>
        </div>

      </div>

      {/* Educational Notice */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Educational Notice: </span>
          Driver Info Hub does not host or repackage executable installer files. We recommend downloading authentic driver packages directly from the official support portals of HP, Canon, Epson, Brother, or Xerox.
        </div>
      </div>
    </div>
  );
}
