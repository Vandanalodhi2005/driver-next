import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { VolumeIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Audio Drivers Guide & Sound Troubleshooting",
  description: "Fix audio driver problems, Realtek High Definition Audio issues, crackling sound, and missing microphone endpoints."
};

export default function AudioDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Audio Drivers" }
        ]} 
      />

      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/40 border border-slate-800 rounded-3xl p-8 sm:p-10">
        <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
          <VolumeIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Audio Drivers &amp; Sound Configuration
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Audio drivers manage digital-to-analog converters (DAC), integrated motherboards (Realtek, Conexant), HDMI audio pass-through, and microphone sample rate synchronization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Fixing No Audio Output in Windows</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Windows feature updates often reset audio endpoint routing to unattached monitor speakers or disable High Definition Audio Controller drivers.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Right click speaker icon &rarr; Sound settings &rarr; Choose active output</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Switch driver from Realtek to generic High Definition Audio Device</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Resolving Audio Stutter &amp; Crackling (DPC Latency)</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Stuttering audio is typically caused by high Deferred Procedure Call (DPC) latency triggered by conflicting power-saving states or Wi-Fi driver interrupts.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Run LatencyMon to identify interrupting driver DLLs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Disable audio enhancements in sound control panel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Tip: </span>
          Setting your default format to 24-bit, 48000 Hz (Studio Quality) provides maximum compatibility with gaming and communication software like Discord and Teams.
        </div>
      </div>
    </div>
  );
}
