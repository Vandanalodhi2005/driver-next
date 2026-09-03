import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogList from "./BlogList";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  MailIcon,
  SearchIcon,
  HelpCircleIcon
} from "@/components/Icons";

export const metadata = {
  title: "The Driver Blog | Friendly, Useful Reads About How Your Computer Actually Works",
  description: "Plain-English articles, calm knowledge, and helpful technology insights for everyday users. Learn how drivers and hardware work without technical frustration.",
};

const articlesData = [
  {
    title: "Inside a Graphics Driver Update: What Actually Changes",
    slug: "inside-a-graphics-driver-update",
    category: "Graphics",
    date: "May 21, 2026",
    readTime: "9 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-gpu.jpg",
    excerpt: "A \"minor\" update can deliver double-digit performance gains in a brand-new game. Here's what GPU makers quietly change between versions — and how to update without drama."
  },
  {
    title: "The Hidden World of Audio Drivers: Why Sound Quality Is Mostly Software",
    slug: "the-hidden-world-of-audio-drivers",
    category: "Audio",
    date: "May 21, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-audio.jpg",
    excerpt: "Two laptops with identical speakers can sound completely different. The reason is rarely the hardware — it's the audio driver and its processing chain."
  },
  {
    title: "Why Your Wi-Fi Is Slower Than Your Roommate's on the Same Router",
    slug: "why-your-wifi-is-slower",
    category: "Networking",
    date: "May 21, 2026",
    readTime: "6 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-wifi.jpg",
    excerpt: "Same router, same room, very different speeds. The explanation usually lives inside your laptop — in the network adapter, its driver, and one greedy power setting."
  },
  {
    title: "Plug-and-Play, Demystified: How Your PC Knows What You Just Connected",
    slug: "plug-and-play-demystified",
    category: "USB",
    date: "May 21, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-usb.jpg",
    excerpt: "You plug in a device, and within a second your computer knows what it is, what it can do, and how to talk to it. Here is the quiet choreography behind that moment."
  },
  {
    title: "The Quiet Importance of the Chipset Driver Nobody Talks About",
    slug: "the-quiet-chipset-driver",
    category: "System",
    date: "May 21, 2026",
    readTime: "8 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-chipset.jpg",
    excerpt: "It has no fans, no settings app, and no fame — yet the chipset driver is the most foundational software on your PC."
  },
  {
    title: "Kernel-Mode vs User-Mode: Why Some Drivers Live Closer to the Metal",
    slug: "kernel-mode-vs-user-mode",
    category: "Architecture",
    date: "May 21, 2026",
    readTime: "8 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-chipset.jpg",
    excerpt: "Some drivers run with deep system access; others are safely sandboxed. That one design choice explains why some crashes take the whole machine down."
  },
  {
    title: "How to Update Drivers Safely (Without Breaking Anything)",
    slug: "how-to-update-drivers-safely",
    category: "How-To",
    date: "May 22, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/loc-settings-update.jpg",
    excerpt: "Updating drivers can fix issues and improve performance — but it can also cause new problems if done carelessly. Here is the safe, step-by-step approach."
  },
  {
    title: "Why Do Drivers Crash? (And What You Can Do About It)",
    slug: "why-do-drivers-crash",
    category: "Troubleshooting",
    date: "May 23, 2026",
    readTime: "6 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/loc-dev-manager.jpg",
    excerpt: "A crashing driver can be frustrating, but understanding why it happens makes it much easier to fix — and to stop it happening again."
  },
  {
    title: "SSD Drivers: Do You Need to Update Them?",
    slug: "ssd-drivers-what-you-need-to-know",
    category: "Storage",
    date: "May 24, 2026",
    readTime: "5 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-chipset.jpg",
    excerpt: "SSDs are fast and reliable, but do their drivers ever need attention? Here is what you actually need to know about SSD driver updates."
  },
  {
    title: "Why Your Device Stopped Working After the Last Update",
    slug: "why-your-device-stopped-after-update",
    category: "Troubleshooting",
    date: "May 25, 2026",
    readTime: "6 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/driver-support.jpg",
    excerpt: "A driver update was supposed to fix things, but now your device doesn't work. Here is what happened and how to get back on track quickly."
  },
  {
    title: "Driver Signing: Why Your Computer Cares Who Made the Software",
    slug: "driver-signing-explained",
    category: "Security",
    date: "May 26, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/loc-oem-support.jpg",
    excerpt: "Modern operating systems refuse to load unsigned drivers by default. Here is what that means, why it matters, and when it is safe to proceed."
  },
  {
    title: "Virtual Drivers: When the 'Hardware' Is Not Hardware At All",
    slug: "virtual-drivers-what-they-do",
    category: "Architecture",
    date: "May 27, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/blog-featured.jpg",
    excerpt: "Some drivers don't talk to physical devices at all. They create virtual devices that trick your computer into doing useful things."
  },
  {
    title: "How to Set Up a New Printer",
    slug: "how-to-set-up-a-new-printer",
    category: "Printer",
    date: "July 2, 2026",
    readTime: "8 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/hero-printer.jpg",
    excerpt: "Unboxing a new printer is exciting, but getting it ready to print requires a few careful steps. Here is the straightforward process from box to first page."
  },
  {
    title: "How to Connect a Printer to Wi-Fi",
    slug: "how-to-connect-printer-to-wifi",
    category: "Printer",
    date: "July 2, 2026",
    readTime: "7 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/hero-printer-dark.jpg",
    excerpt: "A wireless printer lets you print from anywhere in your home. Here is how to get your printer on your network without the frustration."
  },
  {
    title: "How to Add a Printer to a Computer (Windows & Mac)",
    slug: "how-to-add-printer-to-computer",
    category: "Printer",
    date: "July 2, 2026",
    readTime: "9 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/loc-dev-manager.jpg",
    excerpt: "Your printer is on the network, but your computer does not know about it yet. Here is how to introduce them on both Windows and macOS."
  },
  {
    title: "How to Fix a Printer That Is Offline",
    slug: "how-to-fix-printer-offline",
    category: "Troubleshooting",
    date: "July 2, 2026",
    readTime: "6 min read",
    author: "Driver Info Hub editorial team",
    image: "/images/printer-troubleshoot.jpg",
    excerpt: "Your printer says it is offline, but you know it is sitting right there. Here is how to bring it back online and get printing again."
  }
];

export default function BlogPage() {
  const valueChecklist = [
    "Driver installation and update guides",
    "Computer hardware explained simply",
    "Troubleshooting tips and practical fixes",
    "Technology concepts without the jargon"
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#024ad8] selection:text-white">

      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
        </div>
      </div>

      {/* =========================================================
          HERO SECTION (THEME COLORS & DARK AMBIENCE)
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 py-14 sm:py-20 lg:py-24">
        {/* Background Ambient Glow & Tech Wallpaper */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/hero-dark-bg.jpg"
            alt="Technical circuit background"
            fill
            priority
            className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/85" />
          <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-cyan-500/15 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_-3px_rgba(59,130,246,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                The Driver Blog
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Friendly, Useful Reads About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  How Your Computer Actually Works
                </span>
              </h1>

              {/* Lead Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Plain-English articles, calm knowledge, and the occasional &ldquo;wait, that&rsquo;s what it does?&rdquo; moment. Written for curious users who want practical answers without getting buried in technical jargon.
              </p>

              {/* Quick Navigation Anchor Badges */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
                  <BookOpenIcon className="w-4 h-4 text-cyan-400" />
                  17 Hand-Crafted Articles
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                  Zero Sponsored Jargon
                </span>
              </div>
            </div>

            {/* Right Hero Card: "What You'll Find" */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/70 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] p-6 sm:p-7 backdrop-blur-xl">

                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800 text-xs">
                  <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                    What You&rsquo;ll Find
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-semibold text-[10px]">
                    Everyday Reads
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white">
                  Helpful reads for everyday users
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  We believe that understanding your computer shouldn&rsquo;t require a degree in computer science.
                </p>

                <div className="mt-5 space-y-2.5">
                  {valueChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300"
                    >
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          NEW ARTICLES INTRO STRIP
      ========================================================= */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-3.5 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider">
              NEW ARTICLES ADDED REGULARLY
            </span>
            <span className="text-xs font-bold tracking-wide">
              Learn Something Useful Today
            </span>
          </div>
          <p className="text-xs text-blue-100 font-medium">
            Short reads, practical explanations, and helpful technology insights for everyday users. No jargon, just clarity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">

        {/* =========================================================
            EDITOR'S PICK / THIS WEEK'S FEATURED READ
        ========================================================= */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Editor&rsquo;s Pick
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                This Week&rsquo;s Featured Read
              </h2>
            </div>
          </div>

          <div className="group relative rounded-3xl bg-white border-2 border-blue-200/80 p-6 sm:p-9 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="px-3 py-1 rounded-full font-bold bg-blue-600 text-white">
                    Beginner
                  </span>
                  <span className="px-3 py-1 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    5 Minute Read
                  </span>
                  <span className="text-slate-500 font-medium">
                    June 10, 2024 &bull; 5 min read &bull; Featured
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link href="/blog/what-is-a-driver">
                    What Is a Driver, Really? A Five-Minute Friendly Explainer
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Forget the jargon &mdash; a driver is just a translator between your computer and the hardware connected to it. This piece starts with the core idea and works outward, until you have a working mental model that holds up across every category covered on this site.
                </p>

                <div className="pt-3">
                  <Link
                    href="/blog/what-is-a-driver"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Read the Full Article</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* High-Resolution Featured Topic Graphic */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl aspect-[16/10] group/img">
                  <Image
                    src="/images/blog-featured.jpg"
                    alt="What Is a Driver, Really? - Software to Hardware Translation Interface"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center group-hover/img:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Telemetry Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                        <BookOpenIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">Hardware Translator Model</div>
                        <div className="text-[11px] text-cyan-400 font-medium">Core Mental Model for All Drivers</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            LATEST ARTICLES (16 ITEMS WITH IMAGES & INTERACTIVE FILTER)
        ========================================================= */}
        <section>
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <SearchIcon className="w-3.5 h-3.5 text-blue-600" />
              Latest Articles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Fresh Reads From The Driver Blog
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Bite-sized, friendly, and always written by humans who enjoy this stuff.
            </p>
          </div>

          <BlogList articles={articlesData} />
        </section>

        {/* =========================================================
            READER REQUESTS (SUGGEST A TOPIC)
        ========================================================= */}
        <section className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <MailIcon className="w-3.5 h-3.5 text-blue-600" />
                Reader Requests
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Want a Topic Covered?
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Drop us a line with a question, a confused symptom, or a topic you wish someone would just explain plainly. We pick reader questions for new articles all the time.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <MailIcon className="w-4.5 h-4.5" />
                  <span>Suggest a Topic</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 hover:border-blue-400 text-slate-700 text-sm font-bold shadow-2xs transition-all transform hover:-translate-y-0.5"
                >
                  <HelpCircleIcon className="w-4.5 h-4.5 text-blue-600" />
                  <span>Need Help Right Now?</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Reader Questions
                </h3>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  Many of our most popular articles started as a simple reader question:
                </p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Driver Errors", "Wi-Fi Issues", "GPU Updates", "Printer Problems"].map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-blue-700 shadow-2xs"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Plain-English Answers
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We focus on practical explanations without the jargon, acronyms, or unnecessary complexity.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

    </main>
  );
}
