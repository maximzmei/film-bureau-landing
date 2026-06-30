"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-ink">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-lg font-black tracking-tight">
          film bureau
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted">•</span>}
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition-colors"
              >
                {link}
              </a>
            </span>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink bg-white">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-4 text-sm font-bold tracking-[0.15em] border-b border-ink last:border-0 hover:bg-accent/10"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
