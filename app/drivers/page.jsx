import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  PrinterIcon, 
  ScanIcon, 
  MonitorIcon, 
  VolumeIcon, 
  WifiIcon, 
  BluetoothIcon, 
  UsbIcon,
  ArrowRightIcon,
  InfoIcon
} from "@/components/Icons";

export const metadata = {
  title: "All Device Drivers Overview & Guides",
  description: "Comprehensive overview of device hardware drivers including printers, scanners, graphics, audio, network, bluetooth, and USB controllers."
};

const iconMap = {
  printers: PrinterIcon,
  scanners: ScanIcon,
  graphics: MonitorIcon,
  audio: VolumeIcon,
  network: WifiIcon,
  bluetooth: BluetoothIcon,
  usb: UsbIcon
};

export default function AllDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "All Drivers" }]} />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/30 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/50 inline-block mb-3">
          Hardware Categories
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          All Device Drivers Directory
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Device drivers are software components that allow your operating system to communicate directly with hardware peripherals. Select a category below to access step-by-step setup guides, troubleshooting protocols, and configuration tips.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.driverCategories.map((cat) => {
          const Icon = iconMap[cat.id] || PrinterIcon;
          return (
            <div
              key={cat.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-700/60 hover:bg-slate-900 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {cat.count}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h2>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {cat.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Featured Guides:
                  </span>
                  {cat.popularTopics.map((topic, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-blue-400">•</span>
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <Link
                  href={`/drivers/${cat.slug}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-blue-600 hover:text-white text-sm font-semibold text-blue-400 transition-colors"
                >
                  <span>Explore {cat.title}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Driver Diagnostics Checklist */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <InfoIcon className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
          <div className="space-y-2 text-sm text-slate-300">
            <h3 className="font-bold text-white text-base">Universal Driver Best Practices</h3>
            <p className="text-slate-400 leading-relaxed">
              When encountering device failure, always check Windows Device Manager for exclamation marks (Code 10, Code 43, Code 28). Always source driver binaries directly from your original equipment manufacturer (OEM) support portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
