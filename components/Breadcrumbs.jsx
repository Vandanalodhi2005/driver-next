import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500 font-medium">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.label || idx} className="flex items-center gap-1.5">
            <ChevronRightIcon className="w-3 h-3 text-slate-400" />
            {item.href ? (
              <Link href={item.href} className="text-slate-600 hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-blue-700 font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
