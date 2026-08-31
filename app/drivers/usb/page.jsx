import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { UsbIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "USB Drivers & Controller Troubleshooting",
  description: "Fix USB Device Not Recognized Code 43, update USB 3.0/3.2 eXtensible Host Controllers, and resolve Type-C hub disconnects."
};

export default function UsbDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "USB Drivers" }
        ]} 
      />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
          <UsbIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          USB Drivers &amp; Controller Guides
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          USB controllers manage power delivery, Thunderbolt/Type-C handshakes, and communication with external storage, webcams, and keyboards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Fixing &ldquo;USB Device Not Recognized (Code 43)&rdquo;</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Code 43 signals that the USB host controller failed to enumerate device descriptors due to an electrical surge, driver corruption, or cable degradation.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Uninstall USB Root Hub entries under Device Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Perform a hardware cold restart to discharge motherboard capacitors</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">USB Selective Suspend Power Settings</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            External drives and audio DACs often disconnect during heavy workloads if Windows aggressive USB power management suspends hub ports.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Open Power Options &rarr; Change Advanced Power Settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Set &ldquo;USB Selective Suspend&rdquo; to Disabled</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Motherboard Chipset: </span>
          USB host controller drivers are supplied as part of your motherboard chipset drivers (AMD Chipset Software or Intel Management Engine). Keep your chipset up to date for maximum USB stability.
        </div>
      </div>
    </div>
  );
}
