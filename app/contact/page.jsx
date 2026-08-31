"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, MapPinIcon, BuildingIcon, CheckCircleIcon } from "@/components/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 inline-block mb-3">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Contact Driver Info Hub
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
          {siteConfig.company.contactNote}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Information Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900">Direct Information</h2>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  EMAIL
                </div>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-base font-bold text-blue-600 hover:text-blue-700 transition-colors break-all"
                >
                  {siteConfig.company.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  ADDRESS
                </div>
                <div className="text-slate-700 text-sm font-medium leading-relaxed">
                  {siteConfig.company.address}
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <BuildingIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  COMPANY
                </div>
                <div className="text-slate-900 text-sm font-bold">
                  {siteConfig.company.name}
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-600 leading-relaxed">
            <p>
              We typically respond to editorial queries, correction requests, and hardware guide suggestions within 1–2 business days.
            </p>
          </div>
        </div>

        {/* Contact / Suggestion Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
          <p className="text-slate-600 text-sm mb-6">
            Suggest a hardware troubleshooting topic or ask our editorial team a question.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
              <CheckCircleIcon className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Thank You for Reaching Out!</h3>
              <p className="text-sm text-slate-600">
                Your message has been received. Our team will review your topic suggestion or query shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject / Hardware Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Printer Spooler Guide for Windows 11"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Feedback
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your question, suggestion, or feedback here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-white text-sm shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
