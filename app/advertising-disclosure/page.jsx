import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheckIcon } from "@/components/Icons";

export const metadata = {
  title: "Advertising Disclosure & Editorial Independence",
  description: "Read Driver Info Hub's transparency and advertising disclosure policies."
};

export default function AdvertisingDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Advertising Disclosure" }]} />

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Advertising Disclosure
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Transparency and Editorial Integrity Standards
        </p>
      </header>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
        <ShieldCheckIcon className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
        <div className="text-sm text-slate-300 leading-relaxed">
          Driver Info Hub maintains strict separation between editorial content and any potential advertising or sponsorship relationships.
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">Editorial Independence</h2>
          <p>
            Our writers, technicians, and contributors evaluate driver procedures, operating system tools, and hardware problems objectively. We do not accept payment to promote deceptive driver software, rogue registry cleaners, or unverified paid updater tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">Display Advertising</h2>
          <p>
            To fund server costs and ongoing educational research, Driver Info Hub may display third-party banner advertisements. These network ads are served programmatically and clearly demarcated from editorial troubleshooting articles.
          </p>
        </section>
      </div>
    </div>
  );
}
