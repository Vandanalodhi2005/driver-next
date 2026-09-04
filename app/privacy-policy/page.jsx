import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Driver Info Hub",
  description:
    "Privacy Policy for Driver Info Hub outlining how we collect, use, share, and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        {/* Header */}
        <header className="mt-8 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Last updated: June 20, 2026</span>
            <span className="text-slate-300">•</span>
            <span>Reading time: 8 mins</span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            Your privacy is our priority. We are committed to protecting your
            personal information and being transparent about how we process it.
          </p>
        </header>

        {/* Content */}
        <article className="mt-10 space-y-10 text-sm sm:text-base leading-7 text-slate-700">

          {/* Introduction */}
          <section>
            <p>
              This Privacy Notice for <strong>Driver Info Hub</strong> ("we,"
              "us," or "our"), describes how and why we might access, collect,
              store, use, and/or share ("process") your personal information
              when you use our services ("Services"), including when you:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Visit our website at driverinfohub.com or any website of ours
                that links to this Privacy Notice
              </li>

              <li>
                Use Driver Info Hub. At Driver Info Hub, we focus on providing
                clear, plain-English driver guides and resources
              </li>

              <li>
                Engage with us in other related ways, including any marketing or
                events
              </li>
            </ul>

            <p className="mt-5">
              Questions or concerns? Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible
              for making decisions about how your personal information is
              processed. If you do not agree with our policies and practices,
              please do not use our Services. If you still have any questions
              or concerns, please contact us at{" "}
              <a
                href="mailto:support@driverinfohub.com"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                support@driverinfohub.com
              </a>
              .
            </p>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Summary of Key Points
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="font-bold text-slate-900">
                  What personal information do we process?
                </h3>
                <p className="mt-2">
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us
                  and the Services, the choices you make, and the products and
                  features you use.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Do we process any sensitive personal information?
                </h3>
                <p className="mt-2">
                  We do not process sensitive personal information.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Do we collect any information from third parties?
                </h3>
                <p className="mt-2">
                  We do not collect any information from third parties.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  How do we process your information?
                </h3>
                <p className="mt-2">
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your
                  consent.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  In what situations and with which parties do we share
                  personal information?
                </h3>
                <p className="mt-2">
                  We may share information in specific situations and with
                  specific third parties.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  How do we keep your information safe?
                </h3>
                <p className="mt-2">
                  We have adequate organizational and technical processes and
                  procedures in place to protect your personal information.
                  However, no electronic transmission over the internet or
                  information storage technology can be guaranteed to be 100%
                  secure.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  What are your rights?
                </h3>
                <p className="mt-2">
                  Depending on where you are located geographically, the
                  applicable privacy law may mean you have certain rights
                  regarding your personal information.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  How do you exercise your rights?
                </h3>
                <p className="mt-2">
                  The easiest way to exercise your rights is by contacting us.
                  We will consider and act upon any request in accordance with
                  applicable data protection laws.
                </p>
              </div>

            </div>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              1. What Information Do We Collect?
            </h2>

            <h3 className="mt-5 font-bold text-slate-900">
              Personal information you disclose to us
            </h3>

            <p className="mt-2">
              We collect personal information that you voluntarily provide to
              us when you express an interest in obtaining information about us
              or our products and Services. The personal information we collect
              may include the following: names, phone numbers, email addresses.
            </p>

            <h3 className="mt-5 font-bold text-slate-900">
              Information automatically collected
            </h3>

            <p className="mt-2">
              Some information — such as your Internet Protocol (IP) address
              and/or browser and device characteristics — is collected
              automatically when you visit our Services. We automatically
              collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity
              but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system,
              language preferences, referring URLs, device name, country,
              location, information about how and when you use our Services,
              and other technical information.
            </p>

            <h3 className="mt-5 font-bold text-slate-900">
              Location Data
            </h3>

            <p className="mt-2">
              We collect location data such as information about your device's
              location, which can be either precise or imprecise. You can opt
              out of allowing us to collect this information either by refusing
              access to the information or by disabling your Location setting
              on your device.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              2. How Do We Process Your Information?
            </h2>

            <p className="mt-4">
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We process your information
              only when we have a valid legal reason to do so.
            </p>

            <h3 className="mt-5 font-bold text-slate-900">
              To deliver services
            </h3>

            <p className="mt-2">
              We may process your information to provide you with the requested
              service.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              3. What Legal Bases Do We Rely On To Process Your Personal
              Information?
            </h2>

            <p className="mt-4">
              We only process your personal information when we believe it is
              necessary and we have a valid legal reason (i.e., legal basis) to
              do so under applicable law. If you are located in Canada, we may
              process your information if you have given us specific permission
              (i.e., express consent) to use your personal information for a
              specific purpose. You can withdraw your consent at any time.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              4. When and With Whom Do We Share Your Personal Information?
            </h2>

            <p className="mt-4">
              We may share information in specific situations and with specific
              third parties. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              5. Do We Use Cookies and Other Tracking Technologies?
            </h2>

            <p className="mt-4">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services, prevent crashes, fix bugs, save
              your preferences, and assist with basic site functions.
            </p>

            <h3 className="mt-5 font-bold text-slate-900">
              Google Analytics
            </h3>

            <p className="mt-2">
              We may share your information with Google Analytics to track and
              analyze the use of the Services. To opt out, visit{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              6. How Long Do We Keep Your Information?
            </h2>

            <p className="mt-4">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              7. How Do We Keep Your Information Safe?
            </h2>

            <p className="mt-4">
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards, no electronic transmission over the Internet or
              information storage technology can be guaranteed to be 100%
              secure.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              8. Do We Collect Information From Minors?
            </h2>

            <p className="mt-4">
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age. By using the Services, you
              represent that you are at least 18 or the equivalent age as
              specified by law in your jurisdiction.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              9. What Are Your Privacy Rights?
            </h2>

            <p className="mt-4">
              In some regions (like Canada), you have certain rights under
              applicable data protection laws. These may include the right to
              request access and obtain a copy of your personal information,
              request rectification or erasure, restrict the processing of your
              personal information, and not be subject to automated
              decision-making.
            </p>

            <p className="mt-4">
              You can make such a request by contacting us at{" "}
              <a
                href="mailto:support@driverinfohub.com"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                support@driverinfohub.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              10. Controls For Do-Not-Track Features
            </h2>

            <p className="mt-4">
              Most web browsers and some mobile operating systems include a
              Do-Not-Track ("DNT") feature or setting you can activate. At this
              stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              11. Do United States Residents Have Specific Privacy Rights?
            </h2>

            <p className="mt-4">
              If you are a resident of Ohio, Colorado, Connecticut, Delaware,
              Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana,
              Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island,
              Tennessee, Texas, Utah, or Virginia, you may have specific rights
              regarding your personal information.
            </p>

            <p className="mt-4">
              You have rights under certain US state data protection laws
              including the right to know, access, correct, delete, and obtain
              a copy of your personal data. To exercise these rights, contact
              us at{" "}
              <a
                href="mailto:support@driverinfohub.com"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                support@driverinfohub.com
              </a>
              .
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              12. Do We Make Updates to This Notice?
            </h2>

            <p className="mt-4">
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top
              of this Privacy Notice. We encourage you to review this Privacy
              Notice frequently. Continued use of Driver Info Hub after any
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              13. How Can You Learn More About This Notice?
            </h2>

            <p className="mt-4">
              If you have questions or comments about this notice, you may
              email us at:{" "}
              <a
                href="mailto:support@driverinfohub.com"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                support@driverinfohub.com
              </a>
              . We aim to respond to all privacy-related inquiries within 5
              business days.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              14. How Can You Review, Update, or Delete the Data We Collect
              From You?
            </h2>

            <p className="mt-4">
              Based on the applicable laws of your country or state of
              residence in the US, you may have the right to request access to
              the personal information we collect from you, correct
              inaccuracies, or delete your personal information. To request to
              review, update, or delete your personal information, please
              contact us via email at{" "}
              <a
                href="mailto:support@driverinfohub.com"
                className="font-semibold text-[#024ad8] hover:underline"
              >
                support@driverinfohub.com
              </a>
              .
            </p>
          </section>

        </article>

        {/* Bottom Contact */}
        <div className="mt-14 rounded-2xl border border-[#024ad8]/15 bg-[#024ad8]/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">
            Questions about your privacy?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            For privacy-related questions or requests, contact us directly.
          </p>

          <a
            href="mailto:support@driverinfohub.com"
            className="mt-4 inline-flex font-bold text-[#024ad8] hover:underline"
          >
            support@driverinfohub.com
          </a>
        </div>

      </div>
    </div>
  );
}