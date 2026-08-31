import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Disclaimer & Non-Affiliation Notice",
  description: "Independent educational disclaimer and non-affiliation disclosure for Driver Info Hub."
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Disclaimer
        </h1>
        <p className="text-slate-500 text-sm mt-2 font-medium">
          Independent Educational Resource Disclosure
        </p>
      </header>

      {/* Prominent Callout */}
      <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-6 space-y-3 shadow-xs">
        <div className="flex items-start gap-3">
          <InfoIcon className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm text-slate-800 leading-relaxed font-semibold">
            {siteConfig.disclaimer}
          </div>
        </div>
      </div>

      <div className="prose max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Non-Affiliation Statement</h2>
          <p>
            Driver Info Hub is an independently operated web resource owned by <strong>{siteConfig.company.name}</strong>. We are not affiliated with, endorsed by, sponsored by, or associated with Microsoft, HP, Canon, Epson, Brother, Dell, Lenovo, Intel, NVIDIA, AMD, Realtek, or any other trademark owner referenced on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">No Binary Hosting or Distribution</h2>
          <p>
            Driver Info Hub does not host, mirror, or distribute proprietary binary firmware or executable driver packages. All product names, logos, and brands are property of their respective owners and used solely for identification, compatibility analysis, and instructional context.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Technical Guidance Warning</h2>
          <p>
            Hardware troubleshooting involves interacting with system registries, device drivers, and command-line interfaces. Always perform a system restore point backup prior to major driver adjustments.
          </p>
        </section>
      </div>
    </div>
  );
}
