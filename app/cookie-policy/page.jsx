import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Cookie Policy",
  description: "Learn how cookies and local storage are utilized on Driver Info Hub."
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Cookie Policy
        </h1>
        <p className="text-slate-500 text-sm mt-2 font-medium">
          Last Updated: {new Date().getFullYear()}
        </p>
      </header>

      <div className="prose max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by web browsers to store state, retain theme preferences, and generate anonymous performance metrics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">How We Use Cookies</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong>Essential Cookies:</strong> Required for site navigation, security, and search state management.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand which driver guides are most helpful to readers without collecting personally identifiable information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Managing Cookies in Your Browser</h2>
          <p>
            You can configure your browser (Chrome, Edge, Firefox, Safari) to reject all cookies or notify you when a cookie is set. Disabling cookies will not hinder your ability to read educational articles on Driver Info Hub.
          </p>
        </section>
      </div>
    </div>
  );
}
