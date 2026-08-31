import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpenIcon, HelpCircleIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Knowledge Base & Frequently Asked Questions",
  description: "Browse step-by-step driver solutions, error code definitions, setup tutorials, and hardware diagnostics in the Driver Info Hub Knowledge Base."
};

const kbCategories = [
  {
    title: "Windows Device Manager Error Codes",
    articles: [
      { title: "How to Resolve Windows Code 10 (Device Cannot Start)", tag: "System Error" },
      { title: "Fixing Code 43 (Windows Stopped Device Due to Problems)", tag: "Hardware" },
      { title: "Code 28: Drivers for this device are not installed", tag: "Missing Driver" },
      { title: "Code 31: Windows cannot load drivers required for device", tag: "Registry" }
    ]
  },
  {
    title: "Printer Setup & Spooler Operations",
    articles: [
      { title: "Step-by-Step Manual INF Printer Installation", tag: "Setup" },
      { title: "How to Fully Purge Stuck Windows Print Spooler Queue", tag: "Maintenance" },
      { title: "Assigning Static IP Addresses to Network Printers", tag: "Networking" },
      { title: "Understanding PCL6 vs PS3 Universal Print Drivers", tag: "Architecture" }
    ]
  },
  {
    title: "Driver Safety & Clean Installation",
    articles: [
      { title: "Why You Should Avoid Third-Party Automatic Driver Updaters", tag: "Security" },
      { title: "How to Backup Existing Drivers Using PowerShell DISM", tag: "Backup" },
      { title: "Rolling Back to a Previous Driver Version in Windows", tag: "Troubleshooting" },
      { title: "Verifying WHQL Digital Signatures in Device Drivers", tag: "Integrity" }
    ]
  }
];

export default function KnowledgeBasePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Knowledge Base" }]} />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
          <BookOpenIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Knowledge Base &amp; Technical Encyclopedia
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Comprehensive, clear explanations for device error codes, registry cleanup procedures, network port configurations, and driver maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kbCategories.map((cat, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircleIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{cat.title}</span>
              </h2>

              <ul className="space-y-3">
                {cat.articles.map((art, aIdx) => (
                  <li key={aIdx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-700/50 transition-colors group">
                    <div className="flex items-center justify-between text-[11px] text-blue-400 font-medium mb-1">
                      <span>{art.tag}</span>
                    </div>
                    <Link href="/blog" className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {art.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Browse related guides</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
