import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WifiIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Wi-Fi & Network Drivers Guide",
  description: "Educational guide for fixing network adapter drivers, random Wi-Fi disconnects, Ethernet controller driver updates, and IP configuration."
};

export default function NetworkDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Wi-Fi & Network" }
        ]} 
      />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
          <WifiIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Wi-Fi &amp; Network Adapter Drivers
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Network drivers enable operating system communication with 802.11ax (Wi-Fi 6/6E/7) wireless chips and PCIe Gigabit Ethernet controllers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Fixing Frequent Wi-Fi Drops</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Windows power-saving features frequently put wireless adapters to sleep during idle packets, causing ping spikes and disconnects.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Device Manager &rarr; Network Adapters &rarr; Properties &rarr; Power Management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Uncheck &ldquo;Allow computer to turn off this device to save power&rdquo;</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Solving &ldquo;No Internet, Secured&rdquo;</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            This error usually stems from corrupted TCP/IP stack registries or outdated DHCP discovery handlers in the network driver.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Execute `netsh int ip reset` and `netsh winsock reset` in terminal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Flush DNS cache via `ipconfig /flushdns`</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Advice: </span>
          For Intel Wi-Fi cards, downloading Intel Driver &amp; Support Assistant (DSA) provides verified clean wireless and Bluetooth packages.
        </div>
      </div>
    </div>
  );
}
