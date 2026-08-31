import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  ScanIcon, 
  MonitorIcon, 
  VolumeIcon, 
  WifiIcon, 
  BluetoothIcon, 
  UsbIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  HelpCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from "@/components/Icons";

const iconMap = {
  printers: PrinterIcon,
  scanners: ScanIcon,
  graphics: MonitorIcon,
  audio: VolumeIcon,
  network: WifiIcon,
  bluetooth: BluetoothIcon,
  usb: UsbIcon
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0b1120] border-b border-slate-800/80 py-16 md:py-24">
        {/* Glow background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Independent Educational Resource
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Master Printer &amp; Device Drivers <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Without Technical Frustration
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted resource for understanding driver installation, resolving &ldquo;Printer Driver Unavailable&rdquo; errors, and step-by-step troubleshooting.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/drivers/printers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <PrinterIcon className="w-5 h-5" />
              <span>Printer Driver Guides</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <BookOpenIcon className="w-5 h-5 text-blue-400" />
              <span>Browse Knowledge Base</span>
            </Link>
          </div>

          {/* Quick Category Pills */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 max-w-3xl mx-auto text-xs text-slate-400">
            <span className="text-slate-400 font-medium mr-2">Popular Categories:</span>
            {siteConfig.driverCategories.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                href={`/drivers/${cat.slug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/40 text-slate-300 hover:text-white transition-colors"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVER HUBS & CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Hardware Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Explore Driver Categories
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Detailed step-by-step installation instructions, compatibility matrices, and diagnostic checklists.
            </p>
          </div>

          <Link
            href="/drivers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View All Device Drivers</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.driverCategories.map((cat) => {
            const Icon = iconMap[cat.id] || PrinterIcon;
            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700/60">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {cat.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Popular Troubleshoots:
                    </div>
                    {cat.popularTopics.slice(0, 2).map((topic, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/50">
                  <Link
                    href={`/drivers/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300"
                  >
                    <span>Browse {cat.title}</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRINTER TROUBLESHOOTING SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-700/50 inline-block">
                Flagship Troubleshooting Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Printer Shows &ldquo;Driver is Unavailable&rdquo; or &ldquo;Offline&rdquo;?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                One of the most common printer driver roadblocks across Windows 10 &amp; 11 happens when registry printer keys become stale or the spooler service hangs. Our comprehensive walkthrough breaks down how to clear spooler caches, remove corrupted driver packages, and reinstall cleanly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clearing Print Spooler files</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Manual INF driver installation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WSD vs TCP/IP Port configuration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixing Windows Update driver locks</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/drivers/printers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
                >
                  <span>Read Complete Printer Guide</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Quick Diagnostic Checklist
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white">Step 1: Check Windows Services</div>
                  <p className="text-slate-400 mt-1">Press Win+R &rarr; `services.msc` &rarr; Ensure &ldquo;Print Spooler&rdquo; is Running.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white">Step 2: Clean Stale Print Queue</div>
                  <p className="text-slate-400 mt-1">Navigate to `C:\Windows\System32\spool\PRINTERS` and delete cached files.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white">Step 3: Add via TCP/IP Address</div>
                  <p className="text-slate-400 mt-1">Bypass network discovery failures by binding directly to the printer&apos;s static IP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT ARTICLES & EDITORIAL GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Latest Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Featured Articles &amp; Blog
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              In-depth research, operating system updates, and hardware compatibility insights.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View All Blog Posts</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-medium bg-blue-950 text-blue-300 border border-blue-800/40">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-400 text-sm mt-2.5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATIONAL ASSURANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Independent, Non-Affiliated Educational Portal
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Driver Info Hub is operated by {siteConfig.company.name} as an independent resource. We provide unbiased, educational troubleshooting without recommending proprietary or unverified third-party installer bloatware.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold text-white transition-colors"
          >
            Learn About Our Mission
          </Link>
        </div>
      </section>
    </div>
  );
}
