import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MonitorIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Graphics Drivers (GPU) Guides & Clean Installation",
  description: "Learn how to perform clean GPU driver installations using Display Driver Uninstaller (DDU), resolve black screen errors, and fix game crashes."
};

export default function GraphicsDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Graphics Drivers" }
        ]} 
      />

      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
          <MonitorIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Graphics Drivers &amp; GPU Troubleshooting
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Graphics drivers control video processing units (NVIDIA, AMD, Intel), refresh rates, multi-monitor topologies, and DirectX / Vulkan shader pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">Clean Installation with DDU</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            When upgrading GPU architectures or experiencing driver crashes, residue files in registry can trigger blue screens. Running Display Driver Uninstaller in Safe Mode ensures a pristine environment.
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Boot into Windows Safe Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Run DDU and select &ldquo;Clean and Restart&rdquo;</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Install official WHQL certified package</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">Resolving Display Flickering &amp; Black Screen</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Black screens during boot are frequently tied to Windows fast startup hybrid hibernation or mismatched refresh rate timings over DisplayPort cables.
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Press Win+Ctrl+Shift+B to reset the graphics subsystem</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Disable &ldquo;Fast Startup&rdquo; in Windows Power Options</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-blue-900">Note: </span>
          Always choose WHQL (Windows Hardware Quality Labs) certified drivers for production workstations to prevent kernel instability.
        </div>
      </div>
    </div>
  );
}
