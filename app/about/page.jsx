import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheckIcon, BuildingIcon, MapPinIcon, MailIcon, CheckCircleIcon } from "@/components/Icons";

export const metadata = {
  title: "About Driver Info Hub",
  description: "Learn about Driver Info Hub's educational mission, editorial standards, and commitment to clear hardware driver troubleshooting."
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/50 inline-block mb-3">
          Our Mission &amp; Purpose
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          About Driver Info Hub
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Why Driver Info Hub Exists</h2>
          <p className="leading-relaxed">
            Finding reliable, straightforward advice for resolving driver errors on modern operating systems has become frustratingly difficult. The web is full of aggressive pop-ups, paid automatic &ldquo;driver updater&rdquo; tools that bundle unwanted programs, and overly technical jargon.
          </p>
          <p className="leading-relaxed">
            Driver Info Hub was established to provide a clean, educational sanctuary where users can find straightforward troubleshooting steps, understand how device drivers interact with Windows, and fix problems safely using native system utilities.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose pt-2">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
              <span>Independent &amp; Objective</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We are an educational entity not owned or sponsored by any printer manufacturer or hardware vendor.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
              <span>Zero Bundled Bloatware</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              All our walkthroughs leverage native Windows tools (Device Manager, DISM, Print Management) and verified manufacturer sources.
            </p>
          </div>
        </section>

        <section className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white">Corporate Identity &amp; Governance</h2>
          <p className="leading-relaxed">
            Driver Info Hub is owned and operated by <strong>{siteConfig.company.name}</strong>, registered in Ontario, Canada.
          </p>

          <div className="not-prose bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-slate-300">
              <BuildingIcon className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong>Entity:</strong> {siteConfig.company.name}</span>
            </div>
            <div className="flex items-start gap-3 text-slate-300">
              <MapPinIcon className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <span><strong>Address:</strong> {siteConfig.company.address}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <MailIcon className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong>Email:</strong> <a href={`mailto:${siteConfig.company.email}`} className="text-blue-400 hover:underline">{siteConfig.company.email}</a></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
