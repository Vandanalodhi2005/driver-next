"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SearchIcon, ChevronRightIcon } from "./Icons";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = siteConfig.driverCategories.filter((cat) =>
    cat.title.toLowerCase().includes(query.toLowerCase()) ||
    cat.summary.toLowerCase().includes(query.toLowerCase()) ||
    cat.popularTopics.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredPosts = siteConfig.featuredPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.category.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
          <SearchIcon className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search printer drivers, error codes, Wi-Fi fixes..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base font-medium"
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            className="text-xs px-2 py-1 bg-white text-slate-500 hover:text-slate-900 rounded-md border border-slate-300 font-mono shadow-xs"
          >
            ESC
          </button>
        </div>

        {/* Search Results / Quick Links */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-sm">
          {/* Driver Categories */}
          <div>
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              Driver Hubs &amp; Categories
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/drivers/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-700">
                        {cat.title}
                      </div>
                      <div className="text-xs text-slate-500">{cat.count}</div>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </Link>
                ))
              ) : (
                <div className="col-span-2 text-xs text-slate-500 py-1">
                  No matching driver categories.
                </div>
              )}
            </div>
          </div>

          {/* Educational Articles & Guides */}
          <div>
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              Troubleshooting Guides &amp; Articles
            </div>
            <div className="space-y-1.5">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={onClose}
                  className="block p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600">{post.category}</span>
                    <span className="text-[11px] text-slate-500">{post.readTime}</span>
                  </div>
                  <div className="font-semibold text-slate-800 group-hover:text-blue-700 mt-1">
                    {post.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Help Links */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Looking for full directory?</span>
            <Link
              href="/sitemap-page"
              onClick={onClose}
              className="text-blue-600 hover:underline flex items-center gap-1 font-bold"
            >
              View HTML Sitemap <ChevronRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
