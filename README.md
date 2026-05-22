# 🎵 Playland — Frontend

A cinematic, vinyl-collector music quiz experience for Playland.
Built with **Next.js 14 · TypeScript · TailwindCSS · Framer Motion**.

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 14 (App Router)** | SSR, image optimization, file-based routing |
| Styling | **TailwindCSS + CSS custom properties** | Utility-first with full design token control |
| Animations | **CSS keyframes + Framer Motion** | CSS handles ambient floats; Framer for page transitions |
| Language | **TypeScript** | Type-safe props, quiz data, and result scoring |
| Images | **next/image** | Automatic WebP conversion, lazy loading |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar, Footer, fonts, metadata)
│   ├── page.tsx            ← Home page (QuizOrchestrator)
│   └── vinilos/
│       └── page.tsx        ← Vinyl catalog page
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx   ← Scrolling top strip
│   │   ├── Navbar.tsx            ← Sticky header with nav links
│   │   └── Footer.tsx            ← Footer with link columns
│   │
│   ├── ui/
│   │   ├── Button.tsx      ← Primary / outline / ghost variants
│   │   ├── ProgressBar.tsx ← Quiz progress with glow fill
│   │   └── Badge.tsx       ← Limited / Autographed / Price tags
│   │
│   ├── quiz/
│   │   ├── QuizAnswerCard.tsx    ← Individual answer button
│   │   └── QuizOrchestrator.tsx  ← State machine → routes to correct section
│   │
│   ├── product/
│   │   └── ProductCard.tsx ← Vinyl product card for catalog
│   │
│   ├── animations/
│   │   ├── FloatingElement.tsx   ← CSS float animation wrapper
│   │   └── GlowBlob.tsx          ← Ambient radial glow blob
│   │
│   └── index.ts            ← Barrel exports
│
├── sections/
│   ├── HeroSection.tsx     ← Full-bleed hero with headline + CTA
│   ├── QuizSection.tsx     ← Question + answer grid
│   └── ResultSection.tsx   ← Song result + vinyl buy CTA
│
├── styles/
│   └── globals.css         ← Design tokens, base reset, utility classes
│
├── assets/
│   └── README.md           ← Asset replacement guide
│
├── data/
│   └── constants.ts        ← All editable content (nav, quiz, results)
│
├── lib/
│   └── utils.ts            ← cn(), calculateResult(), helpers
│
└── hooks/
    └── useQuiz.ts          ← Quiz state machine hook
```

---

## Replacing Assets

See **`src/assets/README.md`** for the full asset checklist.

Quick summary:
- `public/assets/images/hero-bg.jpg` → Hero background photo
- `public/assets/images/logo.svg` → Retro TV logo
- `public/assets/images/decorative/*.png` → Floating vinyls, CDs, stickers
- `public/assets/images/results/*.jpg` → Album covers per song
- `public/assets/textures/grain.png` → Noise texture overlay

---

## Editing Content

All text, quiz questions, and product data live in one file:

```
src/data/constants.ts
```

Change quiz questions, add new results, update nav links — all without touching components.

---

## Adding New Pages

```bash
src/app/
  preventa/page.tsx      ← /preventa
  exclusivos/page.tsx    ← /exclusivos
  revista/page.tsx       ← /revista
```

Each page uses the same `RootLayout` (Navbar + Footer) automatically.

---

## Extending the Quiz

To add more questions:
1. Add entries to `QUIZ_QUESTIONS` in `src/data/constants.ts`
2. Add corresponding result entries to `QUIZ_RESULTS`
3. Update `calculateResult()` in `src/lib/utils.ts` if needed

---

## Build for Production

```bash
npm run build
npm start
```
