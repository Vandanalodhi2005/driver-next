"use client";

import React, { useState } from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
} from "@/components/Icons";

const SUBJECTS = [
  { value: "", label: "Select a topic…" },
  { value: "topic", label: "Topic Suggestion" },
  { value: "feedback", label: "Content Feedback" },
  { value: "question", label: "General Question" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.subject) e.subject = "Please select a topic.";
    // if (!form.message.trim() || form.message.trim().length < 20)
    //   e.message = "Message must be at least 20 characters.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (serverError) setServerError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setServerError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }


  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 space-y-5">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-100">
          <CheckCircleIcon className="w-8 h-8 text-emerald-500" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-950">Message Sent!</h3>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
            Thanks for reaching out, <span className="font-semibold text-slate-700">{form.name}</span>. We aim to reply within 2–3 working days.
          </p>
        </div>
        <button
          onClick={() => {
            setForm({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
          }}
          className="mt-5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#024ad8] hover:bg-[#0140c0] transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/80 border border-slate-200 focus:outline-none focus:bg-white focus:border-[#024ad8] focus:ring-2 focus:ring-[#024ad8]/15 transition-all";

  const errorClass = "border-rose-400 bg-rose-50/60 focus:border-rose-500 focus:ring-rose-500/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? errorClass : ""}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? errorClass : ""}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
          Subject
        </label>
        <div className="relative">
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer pr-10 ${errors.subject ? errorClass : ""}`}
          >
            {SUBJECTS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {errors.subject && (
          <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us your question, topic suggestion, or feedback…"
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none leading-relaxed ${errors.message ? errorClass : ""}`}
        />
        <div className="mt-1.5 flex items-center justify-between">
          {errors.message ? (
            <p className="text-xs text-rose-600 font-medium">{errors.message}</p>
          ) : (
            <span />
          )}
          <span className={`text-[11px] font-semibold ml-auto ${form.message.length < 20 ? "text-slate-400" : "text-emerald-600"}`}>
            {form.message.length} / 20 min
          </span>
        </div>
      </div>

      {/* Server error banner */}
      {serverError && (
        <div className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
          <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-rose-700 font-medium leading-relaxed">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#024ad8] hover:bg-[#0140c0] disabled:bg-[#024ad8]/50 text-white text-sm font-bold shadow-md shadow-[#024ad8]/25 hover:shadow-lg hover:shadow-[#024ad8]/30 transition-all transform hover:-translate-y-0.5 disabled:transform-none cursor-pointer"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400 leading-relaxed">
        We never share your details. Your data is safe with us.
      </p>
    </form>
  );
}
