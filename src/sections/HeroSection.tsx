"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT, FLOATING_ELEMENTS } from "@/data/constants";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { GlowBlob }        from "@/components/animations/GlowBlob";
import { Button }          from "@/components/ui/Button";

interface HeroSectionProps {
  onStartQuiz?: () => void;
}

/**
 * HeroSection
 * Cinematic dark-purple hero with big condensed headline,
 * floating vinyl/sticker decorations, and a CTA button.
 *
 * REPLACE:
 *   - /assets/images/hero-bg.jpg  → real atmospheric hero photo
 *   - /assets/images/decorative/* → real vinyl, CD, sticker, magazine PNGs
 */
export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[92vh] overflow-hidden flex flex-col"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        {/*
         * REPLACE: /assets/images/hero-bg.jpg
         * Dark urban/studio scene with neon purple lighting (from the mockup)
         */}
        <Image
          src={HERO_CONTENT.bgImage}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0020]/40 via-[#0A0020]/20 to-[#0A0020]/80" />
      </div>

      {/* ── Ambient glow blobs ── */}
      <GlowBlob color="purple"  size={500} top="30%" left="20%" opacity={0.6} />
      <GlowBlob color="magenta" size={350} top="60%" left="70%" opacity={0.4} />

      {/* ── Floating decorative elements ── */}
      {FLOATING_ELEMENTS.map((el) => (
        <FloatingElement
          key={el.id}
          src={el.src}
          alt={el.alt}
          size={el.size}
          top={el.top}
          left={"left" in el ? el.left : undefined}
          right={"right" in el ? el.right : undefined}
          animDelay={el.animDelay}
          animDuration={el.animDuration}
          spin={el.id.startsWith("vinyl")}
          className="z-10"
        />
      ))}

      {/* ── Hero content ── */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-8 pb-16">
        {/* Headline */}
        <h1
          className="text-hero text-white leading-none mb-4"
          style={{ textShadow: "0 0 80px rgba(168,85,247,0.4), 0 4px 32px rgba(0,0,0,0.5)" }}
        >
          {HERO_CONTENT.headline1}
          <br />
          {HERO_CONTENT.headline2}
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-base md:text-lg font-body mb-8 max-w-sm mx-auto whitespace-pre-line leading-snug">
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA */}
        <Button
          variant="primary"
          size="lg"
          onClick={onStartQuiz}
          className="shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          {HERO_CONTENT.ctaLabel}
        </Button>
      </div>

      {/* ── Progress / scroll indicator ── */}
      <div className="relative z-20 w-full px-4 pb-4">
        <div className="max-w-md mx-auto h-[3px] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
            style={{ width: "35%" }}
          />
        </div>
      </div>
    </section>
  );
}
