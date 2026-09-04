"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@/components/Icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#024ad8] hover:bg-[#013db5] text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out transform cursor-pointer group ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUpIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
