// =============================================================
// PLAYLAND — Data Constants
// All editable content lives here. No hardcoded strings in components.
// =============================================================

// ─────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Inicio",        href: "/",           active: true  },
  { label: "Preventa",      href: "/preventa",   active: false },
  { label: "Lo Nuevo",      href: "/lo-nuevo",   active: false },
  { label: "Exclusivos",    href: "/exclusivos", active: false },
  { label: "Autografiados", href: "/autografiados", active: false },
  { label: "Nostalgia",     href: "/nostalgia",  active: false },
  { label: "Vinilos",       href: "/vinilos",    active: false },
  { label: "Revista",       href: "/revista",    active: false },
  { label: "Contacto",      href: "/contacto",   active: false },
] as const;

// ─────────────────────────────────────────
// Announcement Bar
// ─────────────────────────────────────────
export const ANNOUNCEMENT_TEXT =
  '"La vida es una como para quedarse con el antojo de un artículo de tu artista favorito →';

// ─────────────────────────────────────────
// Hero
// ─────────────────────────────────────────
export const HERO_CONTENT = {
  headline1:   "WHICH SONG",
  headline2:   "ARE YOU?",
  subtitle:    "Discover your song from Wiped Out!\nby The Neighbourhood",
  ctaLabel:    "START THE TEST",
  ctaHref:     "#quiz",
  // REPLACE: swap with your actual hero background
  bgImage:     "/assets/images/hero-bg.jpg",
} as const;

// ─────────────────────────────────────────
// Quiz Questions
// ─────────────────────────────────────────
export interface QuizQuestion {
  id:      number;
  question: string;
  answers: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you deal with missing someone?",
    answers: [
      "I disappear into my thoughts",
      "I romanticize everything",
      "I pretend I'm okay",
      "I turn pain into art",
    ],
  },
  {
    id: 2,
    question: "What does your ideal late night look like?",
    answers: [
      "Driving alone with music loud",
      "Crying to old photos",
      "Writing in my journal",
      "Numb and staring at the ceiling",
    ],
  },
  {
    id: 3,
    question: "Pick a color that matches your soul:",
    answers: [
      "Deep violet — mysterious",
      "Washed-out white — empty",
      "Crimson — passionate",
      "Grey — numb",
    ],
  },
  {
    id: 4,
    question: "What kind of love do you believe in?",
    answers: [
      "Obsessive and all-consuming",
      "Quiet and constant",
      "Tragic and beautiful",
      "I don't anymore",
    ],
  },
  {
    id: 5,
    question: "Your relationship with the past:",
    answers: [
      "I replay it constantly",
      "I've buried it",
      "It haunts every song I love",
      "I'm still living in it",
    ],
  },
];

// ─────────────────────────────────────────
// Quiz Results
// ─────────────────────────────────────────
export interface QuizResult {
  id:          string;
  songTitle:   string;
  albumTitle:  string;
  artist:      string;
  description: string;
  price:       string;
  isLimited:   boolean;
  isAutographed: boolean;
  // REPLACE: point to real album art and vinyl renders
  albumCover:  string;
  vinylImage:  string;
  buyHref:     string;
}

export const QUIZ_RESULTS: QuizResult[] = [
  {
    id:           "daddy-issues",
    songTitle:    "Daddy Issues",
    albumTitle:   "Wiped Out!",
    artist:       "The Neighbourhood",
    description:
      "An emotionally raw portrait of vulnerability and unresolved longing. The moody atmosphere mirrors the visuals perfectly — immersive, brooding, and inspired by music magazines.",
    price:        "$3.00",
    isLimited:    true,
    isAutographed: true,
    albumCover:   "/assets/images/results/daddy-issues-cover.jpg",
    vinylImage:   "/assets/images/results/vinyl-render.png",
    buyHref:      "/vinilos/daddy-issues",
  },
  {
    id:           "prey",
    songTitle:    "Prey",
    albumTitle:   "Wiped Out!",
    artist:       "The Neighbourhood",
    description:
      "Obsessive, cinematic, and heavy with tension. You see beauty in things that ache. You hold on longer than you should.",
    price:        "$3.00",
    isLimited:    true,
    isAutographed: false,
    albumCover:   "/assets/images/results/prey-cover.jpg",
    vinylImage:   "/assets/images/results/vinyl-render.png",
    buyHref:      "/vinilos/prey",
  },
  {
    id:           "wiped-out",
    songTitle:    "Wiped Out!",
    albumTitle:   "Wiped Out!",
    artist:       "The Neighbourhood",
    description:
      "Hazy and meditative. You exist in the in-between — present but somewhere else entirely.",
    price:        "$3.00",
    isLimited:    false,
    isAutographed: false,
    albumCover:   "/assets/images/results/wiped-out-cover.jpg",
    vinylImage:   "/assets/images/results/vinyl-render.png",
    buyHref:      "/vinilos/wiped-out",
  },
  {
    id:           "cry-baby",
    songTitle:    "Cry Baby",
    albumTitle:   "Wiped Out!",
    artist:       "The Neighbourhood",
    description:
      "Tender and bleeding. You feel everything ten times over and refuse to apologize for it.",
    price:        "$3.00",
    isLimited:    true,
    isAutographed: true,
    albumCover:   "/assets/images/results/cry-baby-cover.jpg",
    vinylImage:   "/assets/images/results/vinyl-render.png",
    buyHref:      "/vinilos/cry-baby",
  },
];

// ─────────────────────────────────────────
// Floating Decorative Elements (Hero)
// ─────────────────────────────────────────
export const FLOATING_ELEMENTS = [
  // REPLACE: swap src with real decorative asset paths
  { id: "vinyl-1",   src: "/assets/images/decorative/vinyl-lg.png",   alt: "vinyl record",    size: 120, top: "15%", left: "3%",  animDelay: "0s",    animDuration: "7s"  },
  { id: "vinyl-2",   src: "/assets/images/decorative/vinyl-sm.png",   alt: "vinyl record",    size: 80,  top: "60%", left: "5%",  animDelay: "1.5s",  animDuration: "9s"  },
  { id: "cd-1",      src: "/assets/images/decorative/cd.png",         alt: "CD disc",         size: 90,  top: "20%", right: "8%", animDelay: "0.8s",  animDuration: "6s"  },
  { id: "sticker-1", src: "/assets/images/decorative/sticker-tv.png", alt: "retro TV sticker",size: 70,  top: "10%", right: "3%", animDelay: "2s",    animDuration: "8s"  },
  { id: "sticker-2", src: "/assets/images/decorative/sticker-retro.png", alt: "retro sticker",size: 60, top: "70%", right: "5%", animDelay: "1s",    animDuration: "7.5s"},
  { id: "mag-1",     src: "/assets/images/decorative/magazine.png",   alt: "magazine",        size: 100, top: "55%", right: "2%", animDelay: "3s",    animDuration: "10s" },
] as const;

// ─────────────────────────────────────────
// Footer
// ─────────────────────────────────────────
export const FOOTER_LINKS = [
  {
    heading: "Tienda",
    links: [
      { label: "Preventa",      href: "/preventa"      },
      { label: "Lo Nuevo",      href: "/lo-nuevo"      },
      { label: "Exclusivos",    href: "/exclusivos"    },
      { label: "Autografiados", href: "/autografiados" },
    ],
  },
  {
    heading: "Colecciones",
    links: [
      { label: "Nostalgia",     href: "/nostalgia" },
      { label: "Vinilos",       href: "/vinilos"   },
      { label: "Edición Limitada", href: "/limitada" },
    ],
  },
  {
    heading: "Revista",
    links: [
      { label: "Últimos artículos", href: "/revista"          },
      { label: "Entrevistas",       href: "/revista/entrevistas" },
      { label: "Reviews",           href: "/revista/reviews"     },
    ],
  },
  {
    heading: "Ayuda",
    links: [
      { label: "Contacto",   href: "/contacto"   },
      { label: "FAQ",        href: "/faq"        },
      { label: "Envíos",     href: "/envios"     },
      { label: "Devoluciones", href: "/devoluciones" },
    ],
  },
] as const;
