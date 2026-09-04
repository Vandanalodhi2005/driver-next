import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Cookie Policy | Driver Info Hub",
  description:
    "Learn how Driver Info Hub uses cookies and similar tracking technologies to provide a secure and seamless browsing experience.",
};

function SectionTitle({ number, children }) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
        {number}
      </div>

      <h2 className="pt-1 text-xl sm:text-2xl font-bold text-slate-900">
        {children}
      </h2>
    </div>
  );
}

function CookieType({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-600">
        {children}
      </p>
    </div>
  );
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

        {/* Header */}
        <header className="relative mt-6 overflow-hidden rounded-3xl border border-blue-100 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-50 blur-3xl" />

          <div className="relative">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Legal & Privacy
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Cookie Policy
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Ensuring transparency and clarity in our cookie usage to protect
              your privacy and provide a seamless browsing experience.
            </p>

            {/* Meta information */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Last Updated
                </span>
                <span className="text-sm font-bold text-slate-800">
                  June 20, 2026
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Reading Time
                </span>
                <span className="text-sm font-bold text-slate-800">
                  4 mins
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Important Notice */}
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
              <InfoIcon className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                About This Cookie Policy
              </h2>

              <p className="mt-1.5 text-sm leading-6 text-slate-700">
                This Cookie Policy explains how{" "}
                <strong>Driver Info Hub</strong> ("Company," "we," "us," or
                "our") uses cookies and similar tracking technologies when you
                visit our website driverinfohub.com (the "Website"). This policy
                should be read together with our Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mt-8 space-y-6">

          {/* Section 1 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="1">What Are Cookies?</SectionTitle>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Cookies are small text files that are placed on your device
              (computer, smartphone, tablet) when you visit a website. Cookies
              help websites function efficiently, enhance user experience, and
              provide information to website owners about how visitors interact
              with the site.
            </p>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium leading-6 text-slate-700">
                Cookies do not give us access to your device or personal files.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="2">How We Use Cookies</SectionTitle>

            <p className="mb-5 text-sm leading-7 text-slate-600 sm:text-base">
              Driver Info Hub uses cookies and similar technologies to:
            </p>

            <ul className="space-y-3">
              {[
                "Ensure the Website functions properly",
                "Maintain security and prevent fraudulent activity",
                "Remember user preferences and settings",
                "Analyze Website performance and usage patterns",
                "Improve our services and user experience",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-slate-700">
              Cookies may collect technical information such as IP address,
              browser type, device information, and browsing behavior, as
              described in our Privacy Policy.
            </p>
          </section>

          {/* Section 3 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="3">Types of Cookies We Use</SectionTitle>

            <div className="grid gap-4 sm:grid-cols-2">
              <CookieType title="Essential Cookies">
                These cookies are strictly necessary for the Website to
                operate correctly. They enable core functionality such as
                security, page navigation, and access to essential features.
                Without these cookies, the Website may not function properly.
              </CookieType>

              <CookieType title="Performance and Analytics Cookies">
                These cookies help us understand how visitors interact with our
                Website by collecting aggregated and anonymized information.
                This allows us to measure performance, identify errors, and
                improve Website functionality.
              </CookieType>

              <CookieType title="Functional Cookies">
                Functional cookies allow the Website to remember choices you
                make, such as language preferences or region, to provide a more
                personalized experience.
              </CookieType>

              <CookieType title="Advertising and Third-Party Cookies">
                We may allow trusted third-party service providers to place
                cookies on our Website for analytics or advertising purposes.
                These cookies may be used to deliver relevant advertisements
                and measure campaign effectiveness, subject to applicable laws
                and user consent where required as per our Privacy Policy.
              </CookieType>
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="4">
              Third-Party Tracking Technologies
            </SectionTitle>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              We may use third-party services such as Google Analytics to
              analyze Website usage and traffic patterns. These third parties
              may use cookies or similar technologies to collect information
              about your online activities across different websites.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              You can learn more about Google's data practices by visiting
              Google's Privacy & Terms page or opt out using Google's opt-out
              tools, as referenced in our Privacy Policy.
            </p>
          </section>

          {/* Section 5 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="5">
              Your Cookie Choices and Controls
            </SectionTitle>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              You have the right to accept or reject cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser settings to decline cookies or alert you when cookies
              are being sent.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm leading-6 text-slate-700">
                Please note that disabling cookies may affect certain features
                or functionality of the Website. For more information on
                managing cookies, visit your browser's help section.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="6">
              Do Not Track Signals
            </SectionTitle>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Some browsers offer a "Do Not Track" (DNT) feature. At this time,
              there is no uniform industry standard for recognizing DNT
              signals, and Driver Info Hub does not currently respond to such
              signals as detailed in our Privacy Policy.
            </p>
          </section>

          {/* Section 7 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle number="7">
              Updates to This Cookie Policy
            </SectionTitle>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legal requirements, or our practices. Any
              updates will be indicated by a revised "Last Updated" date at
              the top of this policy.
            </p>
          </section>

          {/* Section 8 */}
          <section className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-lg sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
              <InfoIcon className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl">
              8. Learn More
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-50 sm:text-base">
              If you have questions or concerns about this Cookie Policy or
              our use of cookies, you may contact us at:
            </p>

            <a
              href="mailto:support@driverinfohub.com"
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              support@driverinfohub.com
            </a>
          </section>

        </article>

        {/* Footer navigation */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="/privacy"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
              Related Policy
            </span>

            <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-700">
              Privacy Policy →
            </h3>
          </a>

          <a
            href="/terms"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
              Legal Information
            </span>

            <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-700">
              Terms of Service →
            </h3>
          </a>
        </div>

      </div>
    </main>
  );
}