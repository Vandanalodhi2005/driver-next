import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import {
  MailIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  InfoIcon,
  HelpCircleIcon,
  ArrowRightIcon,
  MessageCircleIcon,
  BookOpenIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Get in Touch | Contact Us – Driver Info Hub",
  description:
    "Have a question, topic suggestion, or content feedback? Contact the Driver Info Hub editorial team. We read every message and use your feedback to improve our guides.",
};

const directChannels = [
  {
    icon: <MailIcon className="w-5 h-5" />,
    label: "Email Us",
    value: "support@driverinfohub.com",
    href: "mailto:support@driverinfohub.com",
    color: "text-[#024ad8]",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "2–3 working days",
    href: null,
    color: "text-cyan-700",
    bg: "bg-cyan-50 border-cyan-100",
  },
  {
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    label: "Privacy",
    value: "We never share your details",
    href: null,
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-100",
  },
];

const faqs = [
  {
    emoji: "💻",
    q: "Can you fix my PC remotely?",
    a: "No, we are an educational publisher. We provide guides and point you to official sources.",
  },
  {
    emoji: "📝",
    q: "Will you cover my suggestion?",
    a: "Very likely! Many of our articles start as reader questions. Tell us what you need.",
  },
  {
    emoji: "🔒",
    q: "Is my data safe?",
    a: "Absolutely. We only use your information to reply to your inquiry. See our privacy policy for more.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-900 selection:text-white">

      {/* ── Breadcrumb ── */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SPLIT HERO — image left, headline right (editorial look)   
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#024ad8] overflow-hidden min-h-[480px] lg:min-h-[560px]">

        {/* Left: large editorial image */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0">
          <Image
            src="/images/driver-support.jpg"
            alt="Driver Info Hub team at work"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Strong overlay so text reads on mobile */}
          <div className="absolute inset-0 bg-blue-950/80 lg:bg-gradient-to-r lg:from-blue-950/60 lg:via-blue-950/40 lg:to-transparent" />
        </div>

        {/* Right: headline content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[480px] lg:min-h-[560px] flex items-center">
          <div className="w-full lg:ml-auto lg:w-1/2 lg:pl-12 xl:pl-20 text-white py-16 sm:py-20">

            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
              </span>
              Get in Touch
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white max-w-lg">
              Have a Question or{" "}
              <em className="not-italic underline decoration-cyan-300/70 decoration-4 underline-offset-3">
                Topic Idea?
              </em>
            </h1>

            <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
              We love hearing from our readers. Drop us a line below — we read every message and use your feedback to improve our guides.
            </p>

            {/* 3 stat chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: <CheckCircleIcon className="w-3.5 h-3.5" />, text: "Every message read" },
                { icon: <ShieldCheckIcon className="w-3.5 h-3.5" />, text: "Data stays private" },
                { icon: <MailIcon className="w-3.5 h-3.5" />, text: "2–3 day reply" },
              ].map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 backdrop-blur-sm text-xs font-semibold text-white"
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 inset-x-0 z-20">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-10 text-slate-50" aria-hidden>
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MAIN BODY
      ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 pb-20 space-y-16 sm:space-y-24">

        {/* ── Row 1: Form card + sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* FORM CARD */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white shadow-2xl shadow-slate-300/40 overflow-hidden border border-slate-100">
              {/* Coloured top bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#024ad8] via-cyan-400 to-indigo-500" />

              <div className="p-7 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-11 h-11 rounded-2xl bg-[#024ad8] flex items-center justify-center text-white shadow-md shadow-[#024ad8]/30 shrink-0">
                    <MessageCircleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                      Send a Message
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 leading-snug">
                      While we can&rsquo;t offer one-to-one technical support, we read every message and use your feedback to improve our guides.
                    </p>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-5 space-y-6 lg:pt-0">

            {/* About image card */}
            <div className="rounded-3xl overflow-hidden relative bg-slate-950 shadow-xl shadow-slate-300/30 aspect-[4/3] border border-slate-200">
              <Image
                src="/images/about-team.jpg"
                alt="The Driver Info Hub editorial team"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Independent Editorial Team
                </span>
                <h3 className="text-lg font-extrabold text-white leading-snug">
                  Real People.<br />Genuine Feedback Loop.
                </h3>
                <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                  Your messages directly shape which guides we write next.
                </p>
              </div>
            </div>

            {/* Direct contact card */}
            <div className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-7 space-y-4">
              <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-[#024ad8] inline-block" />
                Other Ways to Reach Us
              </h3>

              {directChannels.map((ch, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${ch.bg} transition-all hover:shadow-md`}
                >
                  <span className={`shrink-0 ${ch.color}`}>{ch.icon}</span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{ch.label}</div>
                    {ch.href ? (
                      <a href={ch.href} className={`text-sm font-bold ${ch.color} hover:underline break-all`}>
                        {ch.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-semibold ${ch.color}`}>{ch.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Amber note */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 mt-2">
                <InfoIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  We can&rsquo;t diagnose individual machines. For hardware fixes, consult your device manufacturer&rsquo;s official support.
                </p>
              </div>
            </div>

            {/* Knowledge base CTA */}
            <div
              className="rounded-3xl overflow-hidden relative shadow-xl shadow-[#024ad8]/15 border border-[#024ad8]/20"
              style={{ background: "linear-gradient(135deg, #024ad8 0%, #1e3a8a 60%, #0e1e5e 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -right-4 -bottom-8 w-28 h-28 rounded-full bg-cyan-400/10" />

              <div className="relative z-10 p-7">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpenIcon className="w-5 h-5 text-cyan-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    Still Looking for Help?
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                  Our Knowledge Base Has Answers
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed mb-6">
                  Browse step-by-step fix overviews and common driver symptom guides before reaching out.
                </p>
                <Link
                  href="/knowledge-base"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#024ad8] text-xs font-bold shadow-md hover:bg-blue-50 transition-all"
                >
                  Browse Knowledge Base
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </aside>
        </div>

        {/* ── FAQ strip ── */}
        <section>
          {/* Section label */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#024ad8]/10 border border-[#024ad8]/20 text-[#024ad8] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircleIcon className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Quick Answers
            </h2>
            <p className="mt-2 text-slate-500 text-sm max-w-sm mx-auto">
              Common questions before reaching out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-slate-200 hover:border-[#024ad8]/40 p-8 shadow-xs hover:shadow-2xl hover:shadow-[#024ad8]/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col gap-4"
              >
                {/* Accent corner dot */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-[#024ad8]/5 group-hover:bg-[#024ad8]/10 transition-colors" />

                <span className="text-3xl">{faq.emoji}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#024ad8] transition-colors leading-snug">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
