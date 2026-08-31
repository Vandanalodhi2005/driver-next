import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  CheckCircleIcon,
  SearchIcon
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
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/90 via-white to-slate-50 border-b border-slate-200 py-16 md:py-24">
        {/* Subtle radial decorative blue light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Independent Educational Portal
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Master Printer &amp; Device Drivers <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                  Without Technical Frustration
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your trusted, clutter-free resource for understanding driver installation, fixing &ldquo;Printer Driver Unavailable&rdquo; errors, and step-by-step troubleshooting.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/drivers/printers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
                >
                  <PrinterIcon className="w-5 h-5" />
                  <span>Printer Driver Guides</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 shadow-xs transition-all"
                >
                  <BookOpenIcon className="w-5 h-5 text-blue-600" />
                  <span>Knowledge Base</span>
                </Link>
              </div>

              {/* Quick Category Tags */}
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs">
                <span className="text-slate-500 font-bold mr-1">Popular Topics:</span>
                {siteConfig.driverCategories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/drivers/${cat.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-blue-700 font-semibold transition-colors shadow-2xs"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/hero-printer.jpg"
                  alt="Modern Printer and Hardware Connectivity illustration"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                  priority
                />

                {/* Floating pill overlays */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      <PrinterIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Spooler &amp; Network Setup</div>
                      <div className="text-[11px] text-blue-600 font-semibold">120+ Free Diagnostic Guides</div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DRIVER HUBS & HARDWARE CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Hardware Directory
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Explore Driver Categories
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Detailed step-by-step installation instructions, compatibility matrices, and diagnostic checklists.
            </p>
          </div>

          <Link
            href="/drivers"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
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
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {cat.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                      Popular Troubleshoots:
                    </div>
                    {cat.popularTopics.slice(0, 2).map((topic, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/drivers/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700"
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

      {/* FEATURED PRINTER TROUBLESHOOTING SPOTLIGHT WITH IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50 border border-blue-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white inline-block shadow-xs">
                Flagship Diagnostic Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Printer Shows <span className="text-blue-600">&ldquo;Driver is Unavailable&rdquo;</span> or <span className="text-blue-600">&ldquo;Offline&rdquo;</span>?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                One of the most common printer driver roadblocks across Windows 10 &amp; 11 happens when registry printer keys become stale or the spooler service hangs. Our comprehensive walkthrough breaks down how to clear spooler caches, remove corrupted driver packages, and reinstall cleanly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Clearing Print Spooler files</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Manual INF driver installation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>WSD vs TCP/IP Port configuration</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Fixing Windows Update driver locks</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/drivers/printers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all"
                >
                  <PrinterIcon className="w-5 h-5" />
                  <span>Read Complete Printer Guide</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Spotlight Image */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200/80 bg-white">
                <Image
                  src="/images/printer-troubleshoot.jpg"
                  alt="Hardware diagnostic and printer driver repair"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2.5 shadow-xs">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Quick 30-Second Fix
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Open terminal as Administrator &rarr; Run <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-mono text-[11px] font-bold">net stop spooler</code> then delete stuck cache in <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-mono text-[11px] font-bold">C:\Windows\System32\spool\PRINTERS</code> &rarr; Run <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-mono text-[11px] font-bold">net start spooler</code>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RECENT ARTICLES & EDITORIAL GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Latest Editorial
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Featured Articles &amp; Blog
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              In-depth research, operating system updates, and hardware compatibility insights.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View All Blog Posts</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-3 py-1 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {post.category}
                  </span>
                  <span className="text-slate-500 font-medium">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATIONAL ASSURANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Independent, Non-Affiliated Educational Portal
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Driver Info Hub is operated by {siteConfig.company.name} as an independent resource. We provide unbiased, educational troubleshooting without recommending proprietary or unverified third-party installer bloatware.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-colors"
          >
            Learn About Our Mission
          </Link>
        </div>
      </section>

    </div>
  );
}
