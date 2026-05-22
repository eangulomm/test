"use client";

import Image from "next/image";
import Link  from "next/link";
import { type QuizResult } from "@/data/constants";
import { Badge }           from "@/components/ui/Badge";
import { Button }          from "@/components/ui/Button";
import { GlowBlob }        from "@/components/animations/GlowBlob";

interface ResultSectionProps {
  result:    QuizResult;
  onRetake:  () => void;
}

/**
 * ResultSection
 * Shown when quiz state === "complete".
 * Displays the matched song, vinyl art, description, and "Own the Vinyl" CTA.
 *
 * REPLACE:
 *   - result.albumCover → real album cover image per song
 *   - result.vinylImage → real vinyl render PNG (transparent bg)
 */
export function ResultSection({ result, onRetake }: ResultSectionProps) {
  return (
    <section
      id="result"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4"
      style={{ background: "linear-gradient(135deg, #0A0020 0%, #1A0040 40%, #3B1F6E 100%)" }}
    >
      {/* Ambient glow */}
      <GlowBlob color="purple"  size={600} top="30%" left="60%" opacity={0.35} />
      <GlowBlob color="magenta" size={400} top="70%" left="20%" opacity={0.25} />

      {/* Subtle light ray — replicates the purple laser in the mockup */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg, transparent 40%, rgba(168,85,247,0.12) 60%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{
            background:    "rgba(20,5,50,0.7)",
            border:        "1px solid rgba(109,40,217,0.35)",
            backdropFilter:"blur(16px)",
            boxShadow:     "0 20px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* ── Left: Vinyl visual ── */}
          <div className="relative flex items-center justify-center p-10 md:p-14 min-h-[340px]">
            {/* Glow behind vinyl */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <div
                className="w-64 h-64 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
                  filter:     "blur(40px)",
                }}
              />
            </div>

            {/* Album cover + vinyl stack */}
            <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
              {/* Vinyl peeking behind — rotate offset */}
              {/*
               * REPLACE: result.vinylImage → your actual vinyl render PNG
               */}
              <div
                className="absolute"
                style={{
                  width:     "90%",
                  height:    "90%",
                  top:       "5%",
                  left:      "15%",
                  animation: "vinylSpin 20s linear infinite",
                }}
              >
                <Image
                  src={result.vinylImage}
                  alt="Vinyl record"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="260px"
                />
              </div>

              {/* Album cover on top */}
              {/*
               * REPLACE: result.albumCover → actual album art per song
               */}
              <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                <Image
                  src={result.albumCover}
                  alt={`${result.songTitle} album cover`}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </div>

            {/* Badges overlay */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              {result.isLimited && (
                <Badge variant="limited" rotate>
                  Limited edition
                </Badge>
              )}
              {result.isAutographed && (
                <Badge variant="autographed" rotate>
                  Autographed available
                </Badge>
              )}
            </div>
          </div>

          {/* ── Right: Song info + CTA ── */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            {/* "You are:" label */}
            <p className="text-white/50 text-sm font-body mb-1 tracking-wide">You are:</p>

            {/* Song title */}
            <h2
              className="font-heading text-white mb-5 leading-none"
              style={{
                fontSize:    "clamp(36px, 5vw, 56px)",
                letterSpacing: "0.01em",
                textShadow:  "0 0 40px rgba(168,85,247,0.5)",
              }}
            >
              {result.songTitle}
            </h2>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[340px]">
              {result.description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href={result.buyHref}>
                <Button variant="primary" size="md">
                  Own the Vinyl
                </Button>
              </Link>
              <Badge variant="price" rotate>
                {result.price}
              </Badge>
            </div>

            {/* Sub-label */}
            <p className="text-white/30 text-xs mt-3">
              Limited collector edition available now
            </p>

            {/* Retake quiz */}
            <button
              onClick={onRetake}
              className="mt-6 text-white/40 text-xs underline hover:text-white/70 transition-colors self-start"
            >
              Take the quiz again →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
