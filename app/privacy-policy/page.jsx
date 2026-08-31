import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Driver Info Hub outlining data practices, log files, cookies, and user privacy protections."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mt-2 font-medium">
          Effective Date: January 1, 2026 | Last Updated: {new Date().getFullYear()}
        </p>
      </header>

      <div className="prose max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview &amp; Data Controller</h2>
          <p>
            This Privacy Policy applies to Driver Info Hub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operated by <strong>{siteConfig.company.name}</strong>, located at {siteConfig.company.address}. We respect your privacy and are committed to protecting any information gathered while you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
          <p>
            As an educational informational portal, Driver Info Hub does not require user accounts, registration, or credit card collection. We only collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-600">
            <li><strong>Log Data:</strong> Browser user agent, IP address, referral URLs, and access timestamps for diagnostic performance.</li>
            <li><strong>Contact Submissions:</strong> Your name and email address when you voluntarily send an inquiry through our contact form.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">3. Cookies and Web Beacons</h2>
          <p>
            Like most websites, Driver Info Hub uses cookies to store user preferences and track aggregate site analytics. You can disable cookies at any time through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">4. Third-Party Links</h2>
          <p>
            Our articles may include outbound links to third-party OEM websites (such as Microsoft, HP, Canon, etc.). We do not control and are not responsible for the privacy practices or content of third-party domains.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">5. Contact Us Regarding Privacy</h2>
          <p>
            If you have questions regarding this Privacy Policy, you may contact our Data Officer at <a href={`mailto:${siteConfig.company.email}`} className="text-blue-600 font-bold hover:underline">{siteConfig.company.email}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
