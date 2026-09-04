import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Accessibility Statement | Driver Info Hub",
  description:
    "Driver Info Hub's commitment to providing an accessible and usable digital experience for all visitors.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Accessibility" }]} />

      {/* Header */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Accessibility Statement
        </h1>

        <p className="text-slate-500 text-sm mt-2 font-medium">
          Our commitment to digital accessibility for people with disabilities.
        </p>
      </header>

      {/* Introduction */}
      <div className="rounded-2xl bg-blue-50/80 border border-blue-200 p-6">
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          At Driver Info Hub, we strive to make our website accessible and
          usable for all visitors, regardless of technology or ability. Our
          goal is to create an inclusive online environment that enables every
          user to access information and services efficiently.
        </p>
      </div>

      {/* Content */}
      <div className="prose max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">

        {/* Accessibility Standards */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Accessibility Standards
          </h2>

          <p>
            We aim to conform to the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA wherever possible. These guidelines explain
            how to make web content more accessible for people with a wide
            range of disabilities, including visual, auditory, cognitive, and
            motor impairments.
          </p>
        </section>

        {/* Accessibility Features */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Accessibility Features
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Clear and consistent navigation throughout the site.</li>
            <li>
              Keyboard-accessible menus and interactive elements.
            </li>
            <li>
              Alternative text for meaningful images.
            </li>
            <li>
              Sufficient color contrast for readability.
            </li>
            <li>
              Responsive layouts for various screen sizes.
            </li>
            <li>
              Structured headings for screen reader support.
            </li>
          </ul>
        </section>

        {/* Ongoing Improvements */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Ongoing Improvements
          </h2>

          <p>
            Accessibility is an ongoing effort. We regularly review our
            website, test new features, and identify areas for improvement to
            enhance usability for all visitors. We welcome feedback from users
            regarding accessibility barriers they may encounter.
          </p>
        </section>

        {/* Third-Party Content */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Third-Party Content
          </h2>

          <p>
            While we strive to ensure accessibility across our website, some
            third-party tools, plugins, or external content may not fully meet
            accessibility standards. We encourage providers to improve
            accessibility wherever possible.
          </p>
        </section>

        {/* Feedback */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Feedback and Assistance
          </h2>

          <p>
            If you experience any difficulty accessing content on this website
            or require assistance, please contact our support team. We value
            your feedback and will make reasonable efforts to address
            accessibility concerns promptly.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Contact Us
          </h2>

          <p>
            Email:{" "}
            <a
              href="mailto:support@driverinfohub.com"
              className="text-blue-600 font-medium hover:underline"
            >
              support@driverinfohub.com
            </a>
          </p>

          <p className="mt-2">
            Website:{" "}
            <a
              href="https://www.driverinfohub.com"
              className="text-blue-600 font-medium hover:underline"
            >
              www.driverinfohub.com
            </a>
          </p>

          <p className="mt-3">
            We are committed to responding to accessibility-related feedback
            and inquiries in a timely manner.
          </p>
        </section>
      </div>

      {/* Related Policies */}
      <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
        >
          Contact Us →
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