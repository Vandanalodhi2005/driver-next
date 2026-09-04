import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Advertising Disclosure | Driver Info Hub",
  description:
    "Learn how Driver Info Hub is funded through advertising and affiliate links and how we maintain editorial independence.",
};

export default function AdvertisingDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[{ label: "Advertising Disclosure" }]}
      />

      {/* Header */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Advertising Disclosure
        </h1>

        <p className="text-slate-500 text-sm mt-2 font-medium">
          How This Site Is Funded — our advertising and affiliate policy,
          and the deceptive formats we ban outright.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500">
          <span>
            <strong className="text-slate-700">Last updated:</strong>{" "}
            May 21, 2026
          </span>
        </div>
      </header>

      {/* Introduction */}
      <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-6">
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Driver Info Hub is a free educational resource. To keep it free,
          the site may display advertising and participate in affiliate
          programmes. This page explains how that works and the standards
          we follow.
        </p>
      </div>

      {/* Content */}
      <div className="prose max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            1. How This Site Is Funded
          </h2>

          <p>
            Driver Info Hub may be supported by third-party advertising
            networks and affiliate links. We do not sell software,
            subscriptions, or services, and we never charge readers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            2. Ads Are Always Separate From Content
          </h2>

          <p>
            All advertisements are served by third-party networks and are
            clearly distinct from editorial content. Sponsored placements,
            if used, will always be labelled. Ads never influence our
            writing or recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            3. No Deceptive Elements — Ever
          </h2>

          <p>
            We strictly prohibit misleading design patterns such as fake
            download buttons, system warnings, or deceptive UI elements.
            We do not host downloads or impersonate system alerts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            4. Affiliate Links
          </h2>

          <p>
            Some links may be affiliate links, meaning we may earn a
            commission at no extra cost to you. These relationships never
            influence editorial content or recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            5. Interest-Based Advertising and Your Choices
          </h2>

          <p>
            Advertising partners may use cookies to show relevant ads.
            You can opt out via cookie settings, browser controls, or
            network opt-out tools. We also respect Global Privacy Control
            (GPC) signals where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            6. Advertiser Responsibility
          </h2>

          <p>
            Third-party ads are the responsibility of the advertisers
            themselves. We do not endorse advertised products and are not
            responsible for external transactions, purchases, or agreements
            made through third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            7. Contact
          </h2>

          <p>
            <strong>Driver Info Hub Media LLC</strong>
          </p>

          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:support@driverinfohub.com?subject=Advertising%20Inquiry"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@driverinfohub.com
            </a>
            {" — "}Subject: Advertising Inquiry
          </p>

          <p className="mt-2">
            95 Broadacre Dr, Kitchener,
            <br />
            ON N2R 0S5, Canada
          </p>

          <p className="mt-2">
            16904599 CANADA INC.
          </p>
        </section>

      </div>

      {/* Related Policies */}
      <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/cookie-policy"
          className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
        >
          Cookie Policy →
        </a>

        <a
          href="/privacy"
          className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
        >
          Privacy Policy →
        </a>
      </div>
    </div>
  );
}