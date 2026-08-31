import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpenIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Blog & Editorial Guides",
  description: "Read the latest educational articles, driver updates, hardware troubleshooting guides, and OS compatibility news on Driver Info Hub."
};

const allBlogPosts = [
  ...siteConfig.featuredPosts,
  {
    title: "Understanding Windows 11 24H2 Driver Signature Enforcement Changes",
    slug: "understanding-windows-11-driver-signature-enforcement",
    category: "Security",
    date: "Feb 05, 2026",
    readTime: "8 min read",
    author: "Driver Info Hub Lab",
    excerpt: "Why legacy unsigned printer drivers will no longer load under modern Kernel Core Isolation and how to prepare your enterprise fleet."
  },
  {
    title: "USB-C DisplayPort Alternate Mode vs DisplayLink Driver Comparison",
    slug: "usb-c-alt-mode-vs-displaylink-driver-comparison",
    category: "USB & Display",
    date: "Jan 29, 2026",
    readTime: "6 min read",
    author: "Alex Morgan",
    excerpt: "Learn the latency and CPU load differences between hardware native USB-C video output and compression-based DisplayLink graphics drivers."
  },
  {
    title: "Realtek High Definition Audio vs USB DAC: Driver Setup Guide",
    slug: "realtek-audio-vs-usb-dac-driver-setup-guide",
    category: "Audio Drivers",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    excerpt: "Everything you need to know about ASIO, WASAPI exclusive modes, and configuring bit-perfect audio without system driver distortion."
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
          <BookOpenIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Driver Info Hub Editorial &amp; Blog
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Deep-dive technical investigations, hardware troubleshooting walkthroughs, and clear guides for everyday computer users and IT professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {post.category}
                </span>
                <span className="text-slate-500 font-medium">{post.readTime}</span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
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
    </div>
  );
}
