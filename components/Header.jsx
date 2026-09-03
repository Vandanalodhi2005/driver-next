"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  ChevronDownIcon, 
  SearchIcon,
  BookOpenIcon,
  ShieldCheckIcon
} from "./Icons";
import SearchModal from "./SearchModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [driversDropdownOpen, setDriversDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDriversDropdownOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white border-b border-slate-200"
        }`}
      >
        {/* Top Notification / Trust Bar */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">
                Educational Hub
              </span>
              <span className="hidden sm:inline text-blue-50 font-medium">
                Independent driver guides, setup walkthroughs &amp; clear troubleshooting
              </span>
            </div>
            <div className="flex items-center gap-4 text-blue-100 text-[11px] font-medium">
              <Link href="/knowledge-base" className="hover:text-white transition-colors">
                Quick Help
              </Link>
              <span className="text-blue-300/60">•</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Support Hub
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar df bg sssssddr ggdfrvn nhrfg */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                  <PrinterIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    Driver<span className="text-blue-600">Info</span>Hub
                  </span>
                  <span className="block text-[10px] tracking-wider text-blue-600 font-bold uppercase -mt-1">
                    Resource &amp; Knowledge Base
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {siteConfig.mainNav.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.title} 
                      className="relative"
                      onMouseEnter={() => setDriversDropdownOpen(true)}
                      onMouseLeave={() => setDriversDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setDriversDropdownOpen(!driversDropdownOpen)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                          isActive(item.href)
                            ? "text-blue-700 bg-blue-50"
                            : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            driversDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {driversDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-2.5 grid gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-3 py-2 border-b border-slate-100 mb-1">
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                              Hardware Categories
                            </span>
                          </div>
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={`flex flex-col px-3 py-2 rounded-xl text-left transition-colors ${
                                pathname === subItem.href
                                  ? "bg-blue-600 text-white"
                                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                            >
                              <span className="text-sm font-bold">{subItem.title}</span>
                              <span className={`text-xs line-clamp-1 ${
                                pathname === subItem.href ? "text-blue-100" : "text-slate-500"
                              }`}>
                                {subItem.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-blue-700 bg-blue-50 shadow-sm"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-700 text-sm transition-all"
                title="Search driver guides and solutions (Ctrl+K)"
              >
                <SearchIcon className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline font-medium">Search guides...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-500 font-mono">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/drivers"
                className="hidden xl:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
              >
                Driver Finder
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-200 shadow-lg">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive("/") ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Home
              </Link>

              {/* Mobile Drivers Accordion */}
              <div>
                <button
                  onClick={() => setDriversDropdownOpen(!driversDropdownOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold ${
                    isActive("/drivers") ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  <span>All Drivers</span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${driversDropdownOpen ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {driversDropdownOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                    <Link
                      href="/drivers"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      All Device Drivers Overview
                    </Link>
                    <Link
                      href="/drivers/printers"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Printer Drivers
                    </Link>
                    <Link
                      href="/drivers/scanners"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Scanner Drivers
                    </Link>
                    <Link
                      href="/drivers/graphics"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Graphics Drivers
                    </Link>
                    <Link
                      href="/drivers/audio"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Audio Drivers
                    </Link>
                    <Link
                      href="/drivers/network"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Wi-Fi &amp; Network
                    </Link>
                    <Link
                      href="/drivers/bluetooth"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      Bluetooth Drivers
                    </Link>
                    <Link
                      href="/drivers/usb"
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600"
                    >
                      USB Drivers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/knowledge-base"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive("/knowledge-base") ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Knowledge Base
              </Link>
              <Link
                href="/blog"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive("/blog") ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive("/about") ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive("/contact") ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <Link
                href="/drivers"
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
              >
                Find Device Driver Guides
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
