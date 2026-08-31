import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { 
  PrinterIcon, 
  MailIcon, 
  MapPinIcon, 
  BuildingIcon, 
  InfoIcon,
  ShieldCheckIcon,
  ChevronRightIcon
} from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 font-sans mt-auto">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Description (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <PrinterIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Driver<span className="text-blue-600">Info</span>Hub
                </span>
                <span className="block text-[10px] tracking-wider text-blue-700 uppercase font-bold -mt-1">
                  Educational Driver Guide
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed pr-2">
              Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
                <ShieldCheckIcon className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Independent Educational Resource</span>
              </div>
            </div>
          </div>

          {/* Column 2: Site Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Site Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.siteLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Driver Overviews (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              Driver Overviews
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.driverOverviews.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get In Touch (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Get In Touch
            </h3>
            
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Have a question or topic suggestion? We would love to hear from you.
            </p>

            <div className="space-y-3 pt-1 text-xs">
              {/* EMAIL */}
              <div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                  EMAIL
                </div>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center gap-1.5 break-all"
                >
                  <MailIcon className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                  <span>{siteConfig.company.email}</span>
                </a>
              </div>

              {/* ADDRESS */}
              <div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                  ADDRESS
                </div>
                <div className="text-slate-700 flex items-start gap-1.5 font-medium">
                  <MapPinIcon className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
                  <span className="leading-snug">{siteConfig.company.address}</span>
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                  COMPANY
                </div>
                <div className="text-slate-800 flex items-center gap-1.5 font-bold">
                  <BuildingIcon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{siteConfig.company.name}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Prominent Educational Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="rounded-2xl bg-blue-50/80 border border-blue-200/80 p-4 sm:p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <InfoIcon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-blue-900">Disclaimer: </span>
                {siteConfig.disclaimer}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Inline Legal Links */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left font-medium">
            {siteConfig.copyright}
          </div>

          {/* Bottom inline legal links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-600 font-medium">
            {siteConfig.footerLinks.bottomBarLegal.map((link, idx) => (
              <React.Fragment key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.title}
                </Link>
                {idx < siteConfig.footerLinks.bottomBarLegal.length - 1 && (
                  <span className="text-slate-300 select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
