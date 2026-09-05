import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  PrinterIcon,
  MonitorIcon,
  VolumeIcon,
  WifiIcon,
  BluetoothIcon,
  UsbIcon,
  CpuIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  MailIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HelpCircleIcon,
  ExternalLinkIcon
} from "@/components/Icons";

export const metadata = {
  title: "Site Map | Everything on This Site, One Page",
  description: "A human-readable index of every page, driver overview, technical article, and legal policy published on Driver Info Hub.",
};

export default function SitemapPage() {
  const mainPages = [
    {
      title: "Home",
      subtitle: "Homepage & Diagnostic Overview",
      href: "/",
      badge: "Main",
      icon: (
        <svg className="w-5 h-5 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Drivers",
      subtitle: "Full category map & driver hierarchy",
      href: "/drivers",
      badge: "Hub",
      icon: <CpuIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Knowledge Hub",
      subtitle: "Troubleshooting guides & error resolution",
      href: "/knowledge-base",
      badge: "Guides",
      icon: <BookOpenIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Blog",
      subtitle: "Articles, deep dives & explainers",
      href: "/blog",
      badge: "Articles",
      icon: (
        <svg className="w-5 h-5 text-[#024ad8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "About Us",
      subtitle: "Who we are & our editorial standards",
      href: "/about",
      badge: "Mission",
      icon: <ShieldCheckIcon className="w-5 h-5 text-[#024ad8]" />
    },
    {
      title: "Contact",
      subtitle: "Get in touch & topic suggestions",
      href: "/contact",
      badge: "Support",
      icon: <MailIcon className="w-5 h-5 text-[#024ad8]" />
    }
  ];

  const driverOverviews = [
    {
      title: "Kernel-Mode Drivers",
      desc: "Core system and hardware access",
      href: "/drivers/graphics",
      tag: "Ring 0",
      icon: <CpuIcon className="w-5 h-5 text-rose-600" />,
      tagColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      title: "User-Mode Drivers",
      desc: "Safer isolated driver environment",
      href: "/drivers/printers",
      tag: "Ring 3",
      icon: <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />,
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Printer & Output Drivers",
      desc: "Printing and output devices",
      href: "/drivers/printers",
      tag: "Primary Focus",
      icon: <PrinterIcon className="w-5 h-5 text-[#024ad8]" />,
      tagColor: "bg-blue-50 text-[#024ad8] border-blue-200"
    },
    {
      title: "Graphics & Display Drivers",
      desc: "GPU and display management",
      href: "/drivers/graphics",
      tag: "Performance",
      icon: <MonitorIcon className="w-5 h-5 text-indigo-600" />,
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      title: "Audio Drivers",
      desc: "Sound and microphone support",
      href: "/drivers/audio",
      tag: "Multimedia",
      icon: <VolumeIcon className="w-5 h-5 text-purple-600" />,
      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "Network Drivers",
      desc: "Wi-Fi and Ethernet connectivity",
      href: "/drivers/network",
      tag: "Connectivity",
      icon: <WifiIcon className="w-5 h-5 text-cyan-600" />,
      tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      title: "USB & Peripheral Drivers",
      desc: "USB devices and peripherals",
      href: "/drivers/usb",
      tag: "Hardware",
      icon: <UsbIcon className="w-5 h-5 text-amber-600" />,
      tagColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      title: "Storage Drivers",
      desc: "SSD, HDD and storage controllers",
      href: "/knowledge-base",
      tag: "Storage",
      icon: (
        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      tagColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      title: "Input Device Drivers",
      desc: "Keyboard, mouse and touch input",
      href: "/drivers/bluetooth",
      tag: "HID",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      title: "Chipset Drivers",
      desc: "Motherboard and chipset communication",
      href: "/drivers/usb",
      tag: "System Core",
      icon: <CpuIcon className="w-5 h-5 text-indigo-600" />,
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      title: "Bluetooth Drivers",
      desc: "Wireless device connectivity",
      href: "/drivers/bluetooth",
      tag: "Wireless",
      icon: <BluetoothIcon className="w-5 h-5 text-blue-600" />,
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      title: "Virtual Device Drivers",
      desc: "Virtual machines and software devices",
      href: "/drivers/network",
      tag: "Emulation",
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ];

  const articles = [
    {
      title: "Inside a Graphics Driver Update",
      category: "Graphics",
      readTime: "9 min",
      href: "/blog"
    },
    {
      title: "The Hidden World of Audio Drivers",
      category: "Audio",
      readTime: "7 min",
      href: "/blog"
    },
    {
      title: "Why Your Wi-Fi Is Slower",
      category: "Networking",
      readTime: "6 min",
      href: "/blog"
    },
    {
      title: "Plug-and-Play, Demystified",
      category: "USB",
      readTime: "7 min",
      href: "/blog"
    },
    {
      title: "The Quiet Importance of the Chipset Driver",
      category: "System",
      readTime: "8 min",
      href: "/blog"
    },
    {
      title: "Kernel-Mode vs User-Mode",
      category: "Architecture",
      readTime: "8 min",
      href: "/blog"
    },
    {
      title: "How to Update Drivers Safely",
      category: "How-To",
      readTime: "7 min",
      href: "/blog/how-to-safely-update-drivers-cleanly"
    },
    {
      title: "Why Do Drivers Crash?",
      category: "Troubleshooting",
      readTime: "6 min",
      href: "/blog"
    },
    {
      title: "SSD Drivers: Do You Need to Update Them?",
      category: "Storage",
      readTime: "5 min",
      href: "/blog"
    },
    {
      title: "Why Your Device Stopped Working After the Last Update",
      category: "Troubleshooting",
      readTime: "6 min",
      href: "/blog"
    },
    {
      title: "Driver Signing Explained",
      category: "Security",
      readTime: "7 min",
      href: "/blog"
    },
    {
      title: "Virtual Drivers: What They Do",
      category: "Architecture",
      readTime: "7 min",
      href: "/blog"
    }
  ];

  const legalPages = [
    {
      title: "Privacy Policy",
      subtitle: "How we handle data & protect visitor privacy",
      href: "/privacy-policy",
      badge: "Privacy"
    },
    {
      title: "Terms of Use",
      subtitle: "Rules of the site & user conduct guidelines",
      href: "/terms",
      badge: "Terms"
    },
    {
      title: "Disclaimer",
      subtitle: "Educational use only & non-affiliation notice",
      href: "/disclaimer",
      badge: "Legal"
    },
    {
      title: "Cookie Policy",
      subtitle: "Cookies, analytics & consent preferences",
      href: "/cookie-policy",
      badge: "Cookies"
    },
    {
      title: "Advertising Disclosure",
      subtitle: "How the site is funded & editorial independence",
      href: "/advertising-disclosure",
      badge: "Disclosure"
    },
    {
      title: "Accessibility Statement",
      subtitle: "Built for everyone & WCAG AA standards",
      href: "/accessibility",
      badge: "Standards"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-[#024ad8] selection:text-white">
      
      {/* =========================================================
          HERO SECTION (DARK THEME WITH GLOWING ACCENTS)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071330] to-slate-950 border-b border-slate-800/80 text-white py-12 sm:py-16">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.3),transparent)]" />
        </div>

        {/* Ambient Glow Blobs */}
        <div className="absolute top-1/4 left-8 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-8 w-80 h-80 bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-slate-300">
            <Breadcrumbs items={[{ label: "Legal", href: "/disclaimer" }, { label: "Site Map" }]} />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Legal • Site Map
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Everything on This Site,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                One Page
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A human-readable index of every page we publish. Organized for quick access across all device categories, technical troubleshooting guides, and legal transparency policies.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>36 Indexed Destinations</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <span className="text-cyan-400">XML:</span>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline flex items-center gap-1">
                  sitemap.xml <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SITEMAP CONTENT CONTAINER
      ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">

        {/* 1. MAIN PAGES */}
        <section className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#024ad8]">
                Navigation Hub
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                Main Pages
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
              6 Core Routes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#024ad8]/50 shadow-[0_4px_20px_-4px_rgba(2,74,216,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(2,74,216,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#024ad8] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <div className="group-hover:text-white transition-colors duration-200">
                    {page.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors">
                      {page.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {page.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed truncate">
                    {page.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. DRIVER OVERVIEWS (12 CARDS) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#024ad8]">
                Hardware Categories
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                Driver Overviews
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
              12 Hardware Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {driverOverviews.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#024ad8]/50 shadow-[0_4px_20px_-4px_rgba(2,74,216,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(2,74,216,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>View Driver Hub</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. ARTICLES & DEEP DIVES (12 CARDS) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#024ad8]">
                Editorial &amp; Research
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                Articles &amp; Guides
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
              12 Deep Dives
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((art) => (
              <Link
                key={art.title}
                href={art.href}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#024ad8]/50 shadow-[0_4px_20px_-4px_rgba(2,74,216,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(2,74,216,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[11px] font-bold">
                    <span className="text-[#024ad8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {art.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-medium">
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Read Article</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. LEGAL & POLICIES (6 CARDS) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#024ad8]">
                Transparency &amp; Compliance
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                Legal &amp; Policies
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
              6 Standards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {legalPages.map((leg) => (
              <Link
                key={leg.title}
                href={leg.href}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#024ad8]/50 shadow-[0_4px_20px_-4px_rgba(2,74,216,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(2,74,216,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {leg.badge}
                    </span>
                    <ShieldCheckIcon className="w-4 h-4 text-slate-400 group-hover:text-[#024ad8] transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors mb-1">
                    {leg.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {leg.subtitle}
                  </p>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#024ad8]">
                  <span>Read Policy</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
