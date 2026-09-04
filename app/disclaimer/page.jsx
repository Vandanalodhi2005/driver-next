import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { InfoIcon, ShieldCheckIcon, ExternalLinkIcon } from "@/components/Icons";

export const metadata = {
  title: "Disclaimer & Non-Affiliation Notice",
  description:
    "Important legal disclaimers and non-affiliation information regarding Driver Info Hub, its educational content, technical guidance, and external links.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <Breadcrumbs items={[{ label: "Disclaimer" }]} />

        {/* Header */}
        <header className="mt-6 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center rounded-full border border-[#024ad8]/15 bg-[#024ad8]/5 px-3 py-1 text-xs font-semibold text-[#024ad8]">
            Legal Notice
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Disclaimer
          </h1>

          <p className="mt-3 max-w-2xl text-base sm:text-lg leading-7 text-slate-600">
            Important legal information and disclaimers regarding the use of
            our services, content, and professional advice.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-500">
            <span>Last updated: May 12, 2026</span>
            <span>•</span>
            <span>Reading time: 3 mins</span>
          </div>
        </header>

        {/* Important Notice */}
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#024ad8]/10">
              <InfoIcon className="h-5 w-5 text-[#024ad8]" />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Important Disclaimer
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                Driver Info Hub provides information for general educational
                and informational purposes only. The information available on
                this website should not be considered professional advice, and
                users should make decisions based on their own circumstances
                and, where appropriate, consult qualified professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 space-y-10 text-sm sm:text-[15px] leading-7 text-slate-700">
          {/* Section 1 */}
          <section id="general-disclaimer" className="scroll-mt-24">
            <SectionTitle number="1" title="General Disclaimer" />

            <p>
              The information provided by Driver Info Hub ("we," "us," or "our")
              on driverinfohub.com (the "Site") is for general informational
              purposes only. All information on the Site is provided in good
              faith, however we make no representation or warranty of any kind,
              express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability or completeness of any information on
              the Site.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold leading-7 text-slate-900">
                UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
                LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE
                SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR
                USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE
                IS SOLELY AT YOUR OWN RISK.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="professional-disclaimer" className="scroll-mt-24">
            <SectionTitle number="2" title="Professional Disclaimer" />

            <p>
              The Site cannot and does not contain legal or medical advice. The
              information is provided for general informational and educational
              purposes only and is not a substitute for professional advice.
              Accordingly, before taking any actions based upon such
              information, we encourage you to consult with the appropriate
              professionals.
            </p>

            <p className="mt-4">
              We do not provide any kind of hardware repair or software
              installation services.
            </p>

            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
              <p className="font-bold leading-7 text-slate-900">
                THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS
                SOLELY AT YOUR OWN RISK.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="external-links" className="scroll-mt-24">
            <SectionTitle number="3" title="External Links Disclaimer" />

            <p>
              The Site may contain (or you may be sent through the Site) links
              to other websites or content belonging to or originating from
              third parties or links to websites and features in banners or
              other advertising. Such external links are not investigated,
              monitored, or checked for accuracy, adequacy, validity,
              reliability, availability or completeness by us.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold leading-7 text-slate-900">
                WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
                FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
                THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
                FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE
                A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
                TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
                SERVICES.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="learn-more" className="scroll-mt-24">
            <SectionTitle number="4" title="Learn More" />

            <p>
              If you require any more information or have any questions about
              our site's disclaimer, please feel free to Learn More by email
              at:
            </p>

            <div className="mt-5 rounded-2xl border border-[#024ad8]/15 bg-gradient-to-br from-[#024ad8]/5 via-white to-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#024ad8]/10">
                  <ShieldCheckIcon className="h-5 w-5 text-[#024ad8]" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Driver Info Hub • Information Compliance Team
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Email:{" "}
                    <a
                      href="mailto:support@driverinfohub.com"
                      className="font-semibold text-[#024ad8] hover:underline"
                    >
                      support@driverinfohub.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Related Legal Pages */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">
            Related Legal Information
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <LegalCard
              href="/privacy"
              title="Privacy Policy"
              description="How we handle and protect your data."
            />

            <LegalCard
              href="/terms"
              title="Terms of Service"
              description="Rules and conditions for using this site."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

/* Section Heading */
function SectionTitle({ number, title }) {
  return (
    <div className="mb-5">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#024ad8]/10 text-sm font-bold text-[#024ad8]">
          {number}
        </span>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      <div className="mt-4 h-px bg-gradient-to-r from-[#024ad8]/20 via-slate-200 to-transparent" />
    </div>
  );
}

/* Legal Page Card */
function LegalCard({ href, title, description }) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#024ad8]/30 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 group-hover:text-[#024ad8]">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <ExternalLinkIcon className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-[#024ad8]" />
      </div>
    </a>
  );
}