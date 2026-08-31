import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BluetoothIcon, CheckCircleIcon, InfoIcon } from "@/components/Icons";

export const metadata = {
  title: "Bluetooth Drivers & Wireless Pairing Guides",
  description: "Troubleshoot missing Bluetooth toggle in Windows, solve audio stuttering on Bluetooth headphones, and update Bluetooth adapters."
};

export default function BluetoothDriversPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs 
        items={[
          { label: "All Drivers", href: "/drivers" },
          { label: "Bluetooth Drivers" }
        ]} 
      />

      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
          <BluetoothIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Bluetooth Drivers &amp; Connectivity Guides
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
          Bluetooth drivers handle RFCOMM, A2DP audio streaming, GATT peripheral communication, and HID device pairing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">Missing Bluetooth Toggle in Windows Settings</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            When Bluetooth disappears entirely from the action center, the adapter has often entered an unrecoverable USB suspend state or the Bluetooth Support Service stopped.
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Launch `services.msc` and set Bluetooth Support Service to Automatic</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Perform a full power cycle (unplug desktop power cord for 60s)</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">Bluetooth Headphone Audio Stuttering</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Stutter occurs when Windows attempts to use the Hands-Free Telephony protocol simultaneously with stereo audio, capping bandwidth at 16kHz mono.
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Control Panel &rarr; Devices and Printers &rarr; Headphone Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Under Services tab, uncheck &ldquo;Handsfree Telephony&rdquo;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
        <InfoIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-blue-900">Note: </span>
          Most modern laptops combine Wi-Fi and Bluetooth on a single M.2 PCIe card. Updating your Wi-Fi driver often updates the underlying Bluetooth chipset firmware.
        </div>
      </div>
    </div>
  );
}
