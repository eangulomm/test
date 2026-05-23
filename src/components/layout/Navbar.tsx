"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

/**
 * Navbar
 * Deep violet header with centered logo, nav links, and icon actions.
 * Logo: REPLACE /assets/images/logo.svg with your actual logo file.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Top row: search | logo | account+cart ── */}
        <div className="flex items-center justify-between h-16">

          {/* Search icon */}
          <button
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          {/* Logo — centered */}
          <Link href="/" className="flex flex-col items-center gap-0.5 group">
            {/*
             * REPLACE: /assets/images/logo.svg — your actual logo SVG
             * The retro TV icon + wordmark from the mockup
             */}
            <div className="w-10 h-8 relative">
              <Image
                src="/assets/images/logo.png"
                alt="Playland logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-white font-body text-sm font-medium tracking-wide group-hover:text-purple-300 transition-colors"
            >
              'Playland'
            </span>
          </Link>

          {/* Account + Cart */}
          <div className="flex items-center gap-2">
            <button
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Account"
            >
              <PersonIcon />
            </button>
            <button
              className="text-white/70 hover:text-white transition-colors p-2 relative"
              aria-label="Cart"
            >
              <CartIcon />
              {/* Cart badge — replace 0 with dynamic count */}
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C026D3] rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors p-2 ml-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* ── Nav links row (desktop) ── */}
        <nav className="hidden md:flex items-center justify-center gap-6 pb-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium transition-colors hover:text-white",
                link.active
                  ? "text-white border-b border-white pb-0.5"
                  : "text-white/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1A0050] border-t border-purple-900/40 px-4 py-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block text-sm font-medium py-1 transition-colors hover:text-white",
                    link.active ? "text-white" : "text-white/60"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ─── Inline SVG Icons ─── */

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="21" y2="6"  />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
