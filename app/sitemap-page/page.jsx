import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { ChevronRightIcon } from "@/components/Icons";

export const metadata = {
  title: "HTML Sitemap - All Pages & Directory",
  description: "Complete list of all pages, driver categories, guides, and legal policies on Driver Info Hub."
};

export default function SitemapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Sitemap" }]} />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Driver Info Hub Sitemap
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-2">
          An organized overview of all public pages, driver categories, troubleshooting guides, and legal policies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Main Pages */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Main Site Navigation
          </h2>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.mainNav.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="text-slate-300 hover:text-blue-400 flex items-center gap-2">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600" />
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Driver Hubs */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Driver Categories &amp; Guides
          </h2>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.footerLinks.driverOverviews.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="text-slate-300 hover:text-indigo-400 flex items-center gap-2">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600" />
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Editorial Articles */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Featured Editorial Guides
          </h2>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.featuredPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-slate-300 hover:text-cyan-400 flex items-center gap-2">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="line-clamp-1">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Policies */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
            Legal &amp; Transparency
          </h2>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.footerLinks.legal.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="text-slate-300 hover:text-white flex items-center gap-2">
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-600" />
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
