import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { CheckCircleIcon } from "@/components/Icons";

export const metadata = {
  title: "Accessibility Statement",
  description: "Driver Info Hub is dedicated to providing an accessible, readable digital experience for all users."
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Accessibility" }]} />

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Accessibility Statement
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Commitment to Universal Web Usability
        </p>
      </header>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">Our Commitment</h2>
          <p>
            {siteConfig.name} is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards (WCAG 2.1 AA guidelines).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">Accessibility Features Built In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose mt-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">High Contrast Typography</span>
                <span className="text-xs text-slate-400">Crisp contrast ratios for clear legibility on all displays.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">Keyboard Navigation</span>
                <span className="text-xs text-slate-400">Full keyboard focus indicators and logical tab index order.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">Semantic Hierarchy</span>
                <span className="text-xs text-slate-400">Screen-reader friendly HTML5 landmarks and ARIA attributes.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">Responsive Scalability</span>
                <span className="text-xs text-slate-400">Layout smoothly supports 200% text zoom without breaking.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white mb-2">Feedback &amp; Accessibility Assistance</h2>
          <p>
            If you experience any accessibility barriers while using Driver Info Hub, please contact our team at <a href={`mailto:${siteConfig.company.email}`} className="text-blue-400 hover:underline">{siteConfig.company.email}</a> and we will work to address it promptly.
          </p>
        </section>
      </div>
    </div>
  );
}
