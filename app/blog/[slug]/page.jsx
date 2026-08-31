import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  InfoIcon, 
  ShieldCheckIcon 
} from "@/components/Icons";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = siteConfig.featuredPosts.find((p) => p.slug === slug) || {
    title: "Driver Troubleshooting Guide",
    excerpt: "Step-by-step instructions for troubleshooting device driver problems."
  };

  return {
    title: `${post.title} | Driver Info Hub`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = siteConfig.featuredPosts.find((p) => p.slug === slug) || siteConfig.featuredPosts[0];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs 
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.category }
        ]} 
      />

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full font-semibold bg-blue-950 text-blue-300 border border-blue-800/40">
            {post.category}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-400">{post.readTime}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-400">Updated {post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 pt-2 text-sm text-slate-300">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
            {post.author[0]}
          </div>
          <div>
            <div className="font-semibold text-white">{post.author}</div>
            <div className="text-xs text-slate-400">Hardware &amp; Driver Research Team</div>
          </div>
        </div>
      </header>

      {/* Educational Notice Alert */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
        <ShieldCheckIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white">Editorial Standard: </span>
          All steps provided in this guide utilize native Windows administrative consoles and official OEM vendor methodologies. No unverified third-party executable software is required.
        </div>
      </div>

      {/* Main Content Body */}
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base leading-relaxed">
        <p className="text-lg text-slate-200 font-medium leading-relaxed">
          {post.excerpt}
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Understanding the Root Cause
        </h2>
        <p>
          Device drivers operate within the kernel space or user-mode driver framework (UMDF). When communication between the print subsystem (`spoolsv.exe`) and the hardware fails, Windows may display a generic &ldquo;Driver Unavailable&rdquo; or &ldquo;Offline&rdquo; flag even if physical USB or wireless connection remains active.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Step-by-Step Diagnostic &amp; Resolution Process
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              Purge Corrupted Driver Cache
            </h3>
            <p className="text-sm text-slate-400">
              Open Command Prompt as Administrator and stop the spooler service before clearing old queue logs:
            </p>
            <div className="mt-3 p-3 bg-slate-950 rounded-xl font-mono text-xs text-blue-300 border border-slate-800">
              net stop spooler<br />
              del /Q /F /S &quot;%systemroot%\System32\Spool\Printers\*.*&quot;<br />
              net start spooler
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              Remove Ghost Driver Packages via Print Server Properties
            </h3>
            <p className="text-sm text-slate-400">
              Press Win + R, type <code className="text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs">printui /s /t2</code>, select the problematic driver package, and choose &ldquo;Remove driver and driver package&rdquo;.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
              Bind via Standard TCP/IP Port
            </h3>
            <p className="text-sm text-slate-400">
              Configure a static IP address in your printer settings to prevent DHCP lease timeouts from breaking print routing.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Conclusion &amp; Additional Resources
        </h2>
        <p>
          Following these structured steps ensures clean driver initialization and prevents recurring spooler crash loops. If issues persist, verify firmware revisions directly on the official manufacturer portal.
        </p>
      </div>

      {/* Back to Blog & Navigation footer */}
      <footer className="pt-8 border-t border-slate-800 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
        >
          &larr; Back to all articles
        </Link>
        <Link
          href="/drivers"
          className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
        >
          Browse Driver Overviews &rarr;
        </Link>
      </footer>
    </article>
  );
}
