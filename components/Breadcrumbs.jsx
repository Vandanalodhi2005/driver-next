import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-400">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.label || idx} className="flex items-center gap-1.5">
            <ChevronRightIcon className="w-3 h-3 text-slate-600" />
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-300 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
