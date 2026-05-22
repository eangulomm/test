"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/data/constants";

/**
 * Footer
 * Dark violet footer with link columns, logo, and social icons.
 * REPLACE: /assets/images/logo.svg with real logo
 */
export function Footer() {
  return (
    <footer className="bg-[#0A0020] border-t border-purple-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Top: Logo + columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col items-start gap-1 mb-4 group">
              {/* REPLACE: /assets/images/logo.svg */}
              <div className="w-10 h-8 relative">
                <Image src="/assets/images/logo.svg" alt="Playland" fill className="object-contain" />
              </div>
              <span className="text-white font-body text-sm font-medium tracking-wide group-hover:text-purple-300 transition-colors">
                'Playland'
              </span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed max-w-[180px]">
              Artículos exclusivos de tus artistas favoritos. Cultura musical en tu hogar.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {["instagram", "twitter", "tiktok", "spotify"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-full border border-purple-800/50 flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500 transition-all hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white/80 text-xs font-heading tracking-[0.12em] uppercase mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-purple-900/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-xs">
          <span>© {new Date().getFullYear()} Playland. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white/50 transition-colors">Privacidad</Link>
            <Link href="/terminos"   className="hover:text-white/50 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const size = 14;
  switch (name) {
    case "instagram":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
    case "twitter":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case "tiktok":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>;
    case "spotify":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.779.779 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.779.779 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.779.779 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.935.935 0 0 1-.955 1.609z"/></svg>;
    default:
      return null;
  }
}
