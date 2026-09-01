"use client";

import { useState } from "react";

const tabs = [
  {
    id: "translator",
    label: "The Translator",
    shortLabel: "Translator",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M5 4h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M8 8h5M8 11h4" />
      </svg>
    ),
    title: "The Friendly Translator",
    description: (
      <>
        Picture this: you hit <strong>"Print."</strong> Your document jumps
        from your screen straight onto paper. But here's the secret — your
        computer and your device don't actually speak the same language. The
        driver is the tiny, invisible piece of software in the middle, making
        sure both sides understand each other clearly.
        <br />
        <br />
        Every piece of hardware connected to your computer — keyboards,
        speakers, webcams, hard drives, even the screen you're reading this
        on — needs its own translator. Without one, your operating system
        would simply shrug and say, "Sorry, I have no idea what that thing
        is."
        <br />
        <br />
        The clever part? Hardware makers and OS designers agreed long ago on
        shared "rulebooks" that drivers must follow. That's why the same app
        can print to thousands of different devices — each device's driver
        speaks the same shared dialect with the OS.
      </>
    ),
    points: [
      "A driver is a translator between hardware and your OS.",
      "Every device needs one — keyboards, GPUs, devices, all of it.",
      "Standards keep thousands of devices working with one OS.",
    ],
  },

  {
    id: "why",
    label: "Why You Care",
    shortLabel: "Why It Matters",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Why You Care",
    description: (
      <>
        Drivers quietly decide how good (or how frustrating) your computer
        feels every day. Smooth video calls? A happy webcam driver. Crisp
        speaker sound? An audio driver doing its homework. Lag-free games? A
        graphics driver firing on all cylinders.
        <br />
        <br />
        When drivers are healthy, you don't notice them — and that's exactly
        the point.
        <br />
        <br />
        Now flip it. A grumpy or outdated driver can make a fast laptop feel
        like it's stuck in molasses, or be the reason an app suddenly stops
        responding at the worst possible moment. Because drivers run with deep
        system access, when they misbehave they can affect the whole operating
        system.
        <br />
        <br />
        The good news: keeping drivers in shape is one of the easiest,
        highest-impact things you can do for your PC. A small update can mean
        smoother gameplay, better battery life, steadier performance, and even
        small reliability improvements you didn't know about.
      </>
    ),
    points: [
      "Healthy drivers = smooth, invisible experience.",
      "Outdated drivers = sluggishness, instability, and unexpected restarts.",
      "Updating is the easiest free performance upgrade.",
    ],
  },

  {
    id: "how",
    label: "How It Works",
    shortLabel: "How It Works",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <path d="M7.5 12h9M12 7l4 5-4 5" />
      </svg>
    ),
    title: "How It Works",
    description: (
      <>
        Follow a simple click. You press <strong>"Save."</strong> Your app
        whispers "save this file" to the operating system. The OS turns to the
        storage driver and says, "Hey, can you handle this?" The driver
        translates that polite request into the exact electrical signals your
        hard drive understands. Done — your file is safe.
        <br />
        <br />
        All of this happens in less time than a blink.
        <br />
        <br />
        Behind the scenes, drivers are stacked like a relay team. Each one has
        its own job — one talks to the device, another tidies up the data, one
        handles the physical connection (USB, Wi-Fi, you name it). The request
        passes runner to runner until it reaches the hardware, and the answer
        travels back the same way.
        <br />
        <br />
        What's wild is the speed. A typical request bounces through this whole
        relay in microseconds. You experience it as "instant," but a tiny,
        very organized conversation just took place.
      </>
    ),
    points: [
      "Apps speak to the OS using friendly APIs.",
      "The OS hands work to the right driver.",
      "The driver speaks the device's exact dialect.",
      "Replies travel back up the same stack.",
    ],
  },
];

function DriverIllustration() {
  return (
    
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow */}
      <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.35)]">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Driver System
            </span>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            Active
          </span>
        </div>

        {/* Computer */}
        <div className="rounded-2xl bg-slate-950 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Operating System
              </p>
              <p className="text-xs text-slate-400">
                Request received
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-slate-800">
              <div className="h-full w-3/4 rounded-full bg-blue-500" />
            </div>

            <span className="text-xs text-blue-400">75%</span>
          </div>
        </div>

        {/* Connector */}
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute h-full w-px bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20" />

          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
            </svg>
          </div>
        </div>

        {/* Driver */}
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
              >
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
                <path d="M8 9.5l4 2 4-2M12 11.5V17" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">
                Device Driver
              </p>
              <p className="text-xs text-slate-500">
                Translating system commands
              </p>
            </div>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
              ✓
            </span>
          </div>
        </div>

        {/* Bottom devices */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { name: "Printer", icon: "▣" },
            { name: "GPU", icon: "◆" },
            { name: "Audio", icon: "◉" },
          ].map((device) => (
            <div
              key={device.name}
              className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
            >
              <div className="text-lg text-blue-600">{device.icon}</div>
              <p className="mt-1 text-[11px] font-semibold text-slate-600">
                {device.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default function WhatEDriver() {
  const [activeTab, setActiveTab] = useState("translator");

  const activeContent =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            The Basics
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            So… What Exactly Is a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Driver?
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Three small ideas that unlock everything about drivers. Explore
            each concept and see what happens behind the scenes every time you
            use your computer.
          </p>
        </div>

        {/* Visual + intro */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <DriverIllustration />

          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-8 bg-blue-600" />
              Behind every device
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The invisible software that keeps your hardware talking.
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Drivers work quietly in the background, connecting your
              operating system with the physical devices you use every day.
              You rarely see them — but almost everything your computer does
              depends on them.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  ✓
                </div>
                <h4 className="font-bold text-slate-900">
                  Hardware Support
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Helps your operating system understand connected devices.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  ⚡
                </div>
                <h4 className="font-bold text-slate-900">
                  Better Performance
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Updated drivers can improve stability and device behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Understand the basics
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Three ideas. One simple concept.
            </h3>
          </div>

          {/* Tab navigation */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:flex-row">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-3 rounded-xl px-4 py-4 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-blue-700 shadow-md ring-1 ring-blue-100"
                      : "text-slate-500 hover:bg-white/70 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-400"
                    }`}
                  >
                    {tab.icon}
                  </span>

                  <span className="hidden sm:block">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active content */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left panel */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
                    {activeContent.icon}
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    {activeContent.id === "translator"
                      ? "01 / Translation"
                      : activeContent.id === "why"
                        ? "02 / Impact"
                        : "03 / Process"}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                    {activeContent.title}
                  </h3>

                  <p className="mt-5 leading-7 text-blue-50">
                    {activeContent.id === "translator" &&
                      "The bridge between your operating system and the physical hardware."}

                    {activeContent.id === "why" &&
                      "Healthy drivers quietly make your everyday computing experience better."}

                    {activeContent.id === "how" &&
                      "See how a simple command travels from your application to your hardware."}
                  </p>

                  {/* Mini visual */}
                  <div className="mt-10 space-y-3">
                    {activeContent.id === "translator" && (
                      <>
                        <FlowItem label="Your App" />
                        <FlowLine />
                        <FlowItem label="Operating System" />
                        <FlowLine />
                        <FlowItem label="Driver" active />
                        <FlowLine />
                        <FlowItem label="Hardware" />
                      </>
                    )}

                    {activeContent.id === "why" && (
                      <>
                        <StatusItem
                          label="Smooth video calls"
                          status="Healthy"
                        />
                        <StatusItem
                          label="Crisp audio"
                          status="Healthy"
                        />
                        <StatusItem
                          label="Stable performance"
                          status="Healthy"
                        />
                      </>
                    )}

                    {activeContent.id === "how" && (
                      <>
                        <FlowItem label="Application" />
                        <FlowLine />
                        <FlowItem label="OS API" />
                        <FlowLine />
                        <FlowItem label="Device Driver" active />
                        <FlowLine />
                        <FlowItem label="Hardware" />
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="max-w-2xl">
                  <h4 className="text-2xl font-bold text-slate-950">
                    {activeContent.title}
                  </h4>

                  <div className="mt-6 text-base leading-8 text-slate-600">
                    {activeContent.description}
                  </div>

                  {/* In one breath */}
                  <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                        ✓
                      </div>

                      <h5 className="font-bold text-slate-900">
                        {activeContent.id === "how"
                          ? "The relay race"
                          : activeContent.id === "why"
                            ? "Daily impact"
                            : "In one breath"}
                      </h5>
                    </div>

                    <ul className="mt-5 space-y-4">
                      {activeContent.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device cards */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Drivers are everywhere
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Your devices depend on them.
            </h3>

            <p className="mt-4 text-slate-600">
              From the keyboard on your desk to the graphics processor inside
              your laptop, drivers help your operating system communicate with
              the hardware.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <DeviceCard
              title="Printers"
              description="Print, scan and manage your device."
              icon="▣"
            />

            <DeviceCard
              title="Graphics"
              description="Power displays, games and visual workloads."
              icon="◆"
            />

            <DeviceCard
              title="Audio"
              description="Keep speakers, microphones and sound working."
              icon="◉"
            />

            <DeviceCard
              title="Network"
              description="Connect your computer to Wi-Fi and networks."
              icon="⌁"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Ready to learn more?
              </span>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Your driver problems start with understanding the basics.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Explore driver guides, installation instructions and
                troubleshooting resources to keep your devices working at
                their best.
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Explore Driver Guides →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowItem({ label, active = false }) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
        active
          ? "border-white/30 bg-white/20 text-white"
          : "border-white/10 bg-white/10 text-blue-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>

        {active && (
          <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] uppercase tracking-wider">
            Active
          </span>
        )}
      </div>
    </div>
  );
}

function FlowLine() {
  return (
    <div className="ml-6 h-4 w-px bg-white/30" />
  );
}

function StatusItem({ label, status }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3">
      <span className="text-sm text-blue-50">{label}</span>

      <span className="rounded-full bg-green-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-200">
        {status}
      </span>
    </div>
  );
}

function DeviceCard({ title, description, icon }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(37,99,235,0.35)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h4 className="mt-5 font-bold text-slate-950">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 text-sm font-semibold text-blue-600">
        Learn more →
      </div>
    </div>
  );
}