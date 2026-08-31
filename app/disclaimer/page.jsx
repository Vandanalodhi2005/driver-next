import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { InfoIcon, ShieldCheckIcon } from "@/components/Icons";

export const metadata = {
  title: "Disclaimer & Non-Affiliation Notice",
  description: "Independent educational disclaimer and non-affiliation disclosure for Driver Info Hub."
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Disclaimer
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Independent Educational Resource Disclosure
        </p>
      </header>

      {/* Prominent Callout */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-3">
        <div className="flex items-start gap-3">
          <InfoIcon className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-sm text-slate-300 leading-relaxed font-medium">
            {siteConfig.disclaimer}
          </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">Non-Affiliation Statement</h2>
          <p>
            Driver Info Hub is an independently operated web resource owned by <strong>{siteConfig.company.name}</strong>. We are not affiliated with, endorsed by, sponsored by, or associated with Microsoft, HP, Canon, Epson, Brother, Dell, Lenovo, Intel, NVIDIA, AMD, Realtek, or any other trademark owner referenced on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">No Binary Hosting or Distribution</h2>
          <p>
            Driver Info Hub does not host, mirror, or distribute proprietary binary firmware or executable driver packages. All product names, logos, and brands are property of their respective owners and used solely for identification, compatibility analysis, and instructional context.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">Technical Guidance Warning</h2>
          <p>
            Hardware troubleshooting involves interacting with system registries, device drivers, and command-line interfaces. Always perform a system restore point backup prior to major driver adjustments.
          </p>
        </section>
      </div>
    </div>
  );
}
