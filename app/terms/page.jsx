import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use and conditions for accessing Driver Info Hub educational resources and guides."
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Terms of Use
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Last Updated: {new Date().getFullYear()}
        </p>
      </header>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Driver Info Hub, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">2. Educational &amp; Informational Scope</h2>
          <p>
            All information, tutorials, error definitions, and troubleshooting methodologies published on Driver Info Hub are provided solely for general educational purposes. While we strive for technical accuracy, operating system configurations vary and modifications are undertaken at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">3. Intellectual Property Rights</h2>
          <p>
            All original editorial content, illustrations, and site architecture on Driver Info Hub are the property of {siteConfig.company.name}. Trademarks, model numbers, and brand logos mentioned remain the property of their respective owners and are referenced under nominative fair use for identification purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-2">4. Limitation of Liability</h2>
          <p>
            In no event shall {siteConfig.company.name} or its contributors be held liable for any data loss, hardware malfunction, or system crashes resulting from applying troubleshooting procedures.
          </p>
        </section>
      </div>
    </div>
  );
}
