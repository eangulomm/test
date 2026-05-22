# 🎨 Playland — Asset Placeholders

This directory contains the expected asset structure.
**Replace placeholder files with your real assets to complete the design.**

---

## /assets/images/

| File | Description | Dimensions |
|------|-------------|------------|
| `hero-bg.jpg` | Dark urban/studio hero with neon purple lighting | 1920×1080+ |
| `logo.svg` | Retro TV icon + "Playland" wordmark (white version) | SVG |
| `og-image.jpg` | Open Graph social preview | 1200×630 |

### /assets/images/decorative/
| File | Description | Notes |
|------|-------------|-------|
| `vinyl-lg.png` | Large vinyl record (front view) | PNG transparent bg |
| `vinyl-sm.png` | Small vinyl record | PNG transparent bg |
| `cd.png` | CD disc | PNG transparent bg |
| `sticker-tv.png` | Retro TV sticker graphic | PNG transparent bg |
| `sticker-retro.png` | "Retro Stickers" badge | PNG transparent bg |
| `magazine.png` | Magazine cutout prop | PNG transparent bg |

### /assets/images/results/
| File | Description | Notes |
|------|-------------|-------|
| `vinyl-render.png` | Generic vinyl record render (side view) | PNG transparent bg |
| `daddy-issues-cover.jpg` | Album cover for Daddy Issues | Square, 600×600+ |
| `prey-cover.jpg` | Album cover for Prey | Square, 600×600+ |
| `wiped-out-cover.jpg` | Album cover for Wiped Out! | Square, 600×600+ |
| `cry-baby-cover.jpg` | Album cover for Cry Baby | Square, 600×600+ |

---

## /assets/textures/

| File | Description |
|------|-------------|
| `grain.png` | Subtle noise texture (tileable) — adds analog feel |

---

## /assets/icons/

| File | Description |
|------|-------------|
| `favicon.ico` | Browser tab icon |
| `apple-touch-icon.png` | iOS home screen icon (180×180) |

---

## How to replace

1. Drop your file into the correct directory above.
2. The path is already wired in the component — no code changes needed.
3. For `hero-bg.jpg`, make sure it's ≥ 1920px wide for retina screens.
4. All PNG decorative assets should have **transparent backgrounds**.

---

## Notes on fonts

Fonts are loaded from Google Fonts in `src/styles/globals.css`.
To switch to local fonts, add font files to `/public/fonts/` and update
the `@font-face` rules in `globals.css` instead.

Current fonts:
- **Bebas Neue** — Hero display headline
- **Anton** — Section headings, buttons
- **DM Sans** — Body copy
- **Space Mono** — Prices, monospace labels
- **Playfair Display** — Editorial accents
