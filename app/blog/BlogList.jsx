"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  SearchIcon,
  MonitorIcon,
  VolumeIcon,
  WifiIcon,
  UsbIcon,
  CpuIcon,
  PrinterIcon,
  ShieldCheckIcon,
  HelpCircleIcon
} from "@/components/Icons";

export default function BlogList({ articles = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Printer",
    "Graphics",
    "Audio",
    "Networking",
    "Troubleshooting",
    "How-To",
    "USB",
    "System",
    "Architecture",
    "Security",
    "Storage"
  ];

  const categoryTheme = {
    Graphics: {
      badge: "text-indigo-700 bg-white/95 border-indigo-200",
      bar: "bg-indigo-600",
      icon: <MonitorIcon className="w-3.5 h-3.5 text-indigo-600" />
    },
    Audio: {
      badge: "text-purple-700 bg-white/95 border-purple-200",
      bar: "bg-purple-600",
      icon: <VolumeIcon className="w-3.5 h-3.5 text-purple-600" />
    },
    Networking: {
      badge: "text-cyan-700 bg-white/95 border-cyan-200",
      bar: "bg-cyan-600",
      icon: <WifiIcon className="w-3.5 h-3.5 text-cyan-600" />
    },
    USB: {
      badge: "text-amber-700 bg-white/95 border-amber-200",
      bar: "bg-amber-600",
      icon: <UsbIcon className="w-3.5 h-3.5 text-amber-600" />
    },
    System: {
      badge: "text-rose-700 bg-white/95 border-rose-200",
      bar: "bg-rose-600",
      icon: <CpuIcon className="w-3.5 h-3.5 text-rose-600" />
    },
    Architecture: {
      badge: "text-slate-800 bg-white/95 border-slate-300",
      bar: "bg-slate-700",
      icon: <CpuIcon className="w-3.5 h-3.5 text-slate-700" />
    },
    "How-To": {
      badge: "text-blue-700 bg-white/95 border-blue-200",
      bar: "bg-blue-600",
      icon: <CheckCircleIcon className="w-3.5 h-3.5 text-blue-600" />
    },
    Troubleshooting: {
      badge: "text-emerald-700 bg-white/95 border-emerald-200",
      bar: "bg-emerald-600",
      icon: <HelpCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
    },
    Storage: {
      badge: "text-teal-700 bg-white/95 border-teal-200",
      bar: "bg-teal-600",
      icon: <CpuIcon className="w-3.5 h-3.5 text-teal-600" />
    },
    Security: {
      badge: "text-red-700 bg-white/95 border-red-200",
      bar: "bg-red-600",
      icon: <ShieldCheckIcon className="w-3.5 h-3.5 text-red-600" />
    },
    Printer: {
      badge: "text-blue-700 bg-white/95 border-blue-200",
      bar: "bg-blue-600",
      icon: <PrinterIcon className="w-3.5 h-3.5 text-blue-600" />
    }
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      
      {/* Category Filter Pills & Search Input */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-72 shrink-0">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Status Count Indicator */}
        <div className="text-xs text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-800">{filteredArticles.length}</span> of {articles.length} articles
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>

      {/* Articles Grid with Images */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((post) => {
            const theme = categoryTheme[post.category] || {
              badge: "text-blue-700 bg-white/95 border-blue-200",
              bar: "bg-blue-600",
              icon: <BookOpenIcon className="w-3.5 h-3.5 text-blue-600" />
            };

            return (
              <article
                key={post.slug}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Topic Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.image || "/images/blog-featured.jpg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-600"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

                    {/* Category Tag Overlay */}
                    <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider backdrop-blur-md shadow-sm ${theme.badge}`}>
                      {theme.icon}
                      <span>{post.category}</span>
                    </span>

                    {/* Read Time Tag Overlay */}
                    <span className="absolute bottom-2.5 right-3 text-[10px] font-bold text-white bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      <span>Read article</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-4">
            <SearchIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching articles found</h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
            Try adjusting your search query or pick another category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
}
