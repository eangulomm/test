// =============================================================
// PLAYLAND — Data Constants
// All editable content lives here. No hardcoded strings in components.
// =============================================================

// ─────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Inicio", href: "/", active: true },
  { label: "Preventa", href: "/preventa", active: false },
  { label: "Lo Nuevo", href: "/lo-nuevo", active: false },
  { label: "Exclusivos", href: "/exclusivos", active: false },
  { label: "Autografiados", href: "/autografiados", active: false },
  { label: "Nostalgia", href: "/nostalgia", active: false },
  { label: "Vinilos", href: "/vinilos", active: false },
  { label: "Revista", href: "/revista", active: false },
  { label: "Contacto", href: "/contacto", active: false },
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
  headline1: "QUE CANCIÓN",
  headline2: "ERES?",
  subtitle: "¡Descubre tu cancion de Vessel\nde Twenty One Pilots!",
  ctaLabel: "EMPIEZA EL TEST",
  ctaHref: "#quiz",
  // REPLACE: swap with your actual hero background
  bgImage: "/assets/images/hero.png",
} as const;

// ─────────────────────────────────────────
// Quiz Questions
// ─────────────────────────────────────────
export interface QuizQuestion {
  id: number;
  question: string;
  answers: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cómo describes tu relación con tu propia mente?",
    answers: [
      "Es ruidosa, nunca se calla — me agota",
      "La peleo constantemente pero no me rindo",
      "Me abruma cuando estoy quieto",
      "Es mi refugio aunque a veces me pierdo en ella",
    ],
  },
  {
    id: 2,
    question: "¿Qué haces cuando sientes que todo se derrumba?",
    answers: [
      "Me quedo en silencio y lo proceso solo",
      "Actúo como si todo estuviera bien",
      "Me muevo, necesito escapar o hacer algo",
      "Busco algo o alguien en qué aferrarme",
    ],
  },
  {
    id: 3,
    question: "¿Qué ambiente te representa?",
    answers: [
      "Una habitación oscura con música a todo volumen",
      "Una iglesia vacía o un lugar que alguna vez fue sagrado",
      "Una carretera de madrugada sin destino",
      "Un cuarto tranquilo, solo tú y tus pensamientos",
    ],
  },
  {
    id: 4,
    question: "¿Cuál es tu mayor miedo?",
    answers: [
      "Perder el control de mis pensamientos",
      "Decepcionar a las personas que amo",
      "Quedarme atrapado sin poder escapar",
      "Que nadie entienda realmente lo que siento",
    ],
  },
  {
    id: 5,
    question: "¿Cómo te relacionas con las personas cercanas?",
    answers: [
      "Les muestro una versión de mí, no la completa",
      "Soy intenso — lo doy todo o no doy nada",
      "Los necesito más de lo que admito",
      "Me cuesta dejar entrar a la gente",
    ],
  },
  {
    id: 6,
    question: "¿Qué frase te golpea más?",
    answers: [
      '"Estoy luchando con mis pensamientos"',
      '"Quiero escapar de mi propia cabeza"',
      '"Finjo estar bien mejor de lo que debería"',
      '"Hay algo más grande que yo en todo esto"',
    ],
  },
  {
    id: 7,
    question: "¿Cómo termina tu historia?",
    answers: [
      "En paz, aunque costó muchísimo llegar ahí",
      "Corriendo hacia algo, sin mirar atrás",
      "En silencio, finalmente en calma",
      "Con alguien al lado, eso es suficiente",
    ],
  },
];

// ─────────────────────────────────────────
// Quiz Results
// ─────────────────────────────────────────
export interface QuizResult {
  id: string;
  songTitle: string;
  albumTitle: string;
  artist: string;
  description: string;
  price: string;
  isLimited: boolean;
  isAutographed: boolean;
  // REPLACE: point to real album art and vinyl renders
  albumCover: string;
  vinylImage: string;
  buyHref: string;
}

export const QUIZ_RESULTS: QuizResult[] = [
  {
    id: "ode-to-sleep",
    songTitle: "Ode to Sleep",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Una batalla caótica entre la luz y la oscuridad. Captura la transición cruda de los pensamientos nocturnos a la fría realidad del día, combinando vulnerabilidad pura con un ritmo implacable.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: true,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "holding-on-to-you",
    songTitle: "Holding On to You",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Una declaración de control sobre tu propia mente. Ritmos intensos y líricas editoriales que invitan a pelear contra la inercia, tomando el mando de lo que dejas entrar a tu cabeza.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "migraine",
    songTitle: "Migraine",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Un mapa detallado e introspectivo del dolor mental. Cruelmente honesta, es una canción para quienes saben lo pesado que es lidiar con un espacio de trabajo lleno de dudas complejas.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: false,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "house-of-gold",
    songTitle: "House of Gold",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Acústica, nostálgica y profundamente ligada a los lazos más profundos. Un recordatorio de lo que darías por proteger y dar refugio a quienes más te importan.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: true,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "car-radio",
    songTitle: "Car Radio",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "El silencio absoluto como detonante del caos. Minimalista en su estructura pero brutal en su clímax; representa el abrumador peso de quedarse a solas con tus propios pensamientos.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "semi-automatic",
    songTitle: "Semi-Automatic",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Doble personalidad y ritmos electrónicos de alto contraste. Muestra la dualidad de fingir que todo funciona en automático mientras por dentro se procesa una desconexión constante.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: false,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "screen",
    songTitle: "Screen",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Un cristal transparente que revela tus grietas. Habla sobre la imposibilidad de ocultar lo que sientes ante las personas que realmente te conocen, desarmando cualquier fachada.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: false,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "the-run-and-go",
    songTitle: "The Run and Go",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Ritmo acelerado para un escape constante. La necesidad de moverse y buscar un hombro en el cual apoyarse cuando se vuelve demasiado difícil cargar los secretos en solitario.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: false,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "guns-for-hands",
    songTitle: "Guns for Hands",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Una catarsis rítmica y solidaria. Reconoce el peligro latente de una mente ruidosa pero canaliza toda esa energía destructiva en un movimiento colectivo y liberador.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: true,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "trees",
    songTitle: "Trees",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Cinematográfica, solemne y masiva. Un grito en medio de un bosque vacío, buscando una conexión real o una respuesta oculta detrás de la calma aparente.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "fake-you-out",
    songTitle: "Fake You Out",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Finamente pulida pero líricamente desgarradora. La fachada perfecta ante el mundo exterior mientras se libra una guerra silenciosa para no dejar caer la máscara.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: false,
    isAutographed: false,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
  {
    id: "truce",
    songTitle: "Truce",
    albumTitle: "Vessel",
    artist: "Twenty One Pilots",
    description:
      "Una tregua cruda e íntima en el piano. El final del ruido nocturno, recordándote en un susurro despojado de artificios que vale la pena quedarse a ver el sol salir mañana.",
    price: "$Desde 85.000 hasta 190.000",
    isLimited: true,
    isAutographed: true,
    albumCover: "/assets/images/results/vessel.jpg",
    vinylImage: "/assets/images/results/vinil.png",
    buyHref: "https://www.playlandstore.co/search?q=vessel&options%5Bprefix%5D=last",
  },
];

// ─────────────────────────────────────────
// Floating Decorative Elements (Hero)
// ─────────────────────────────────────────
export const FLOATING_ELEMENTS = [
  // REPLACE: swap src with real decorative asset paths
  {
    id: "vinyl-1",
    src: "/assets/images/decorative/point.png",
    alt: "vinyl record",
    size: 120,
    top: "15%",
    left: "3%",
    animDelay: "0s",
    animDuration: "7s",
  },
  {
    id: "vinyl-2",
    src: "/assets/images/decorative/point.png",
    alt: "vinyl record",
    size: 80,
    top: "60%",
    left: "5%",
    animDelay: "1.5s",
    animDuration: "9s",
  },
  {
    id: "cd-1",
    src: "/assets/images/decorative/point.png",
    alt: "CD disc",
    size: 90,
    top: "20%",
    right: "8%",
    animDelay: "0.8s",
    animDuration: "6s",
  },
  {
    id: "sticker-1",
    src: "/assets/images/decorative/point.png",
    alt: "retro TV sticker",
    size: 70,
    top: "10%",
    right: "3%",
    animDelay: "2s",
    animDuration: "8s",
  },
  {
    id: "sticker-2",
    src: "/assets/images/decorative/point.png",
    alt: "retro sticker",
    size: 60,
    top: "70%",
    right: "5%",
    animDelay: "1s",
    animDuration: "7.5s",
  },
  {
    id: "mag-1",
    src: "/assets/images/decorative/point.png",
    alt: "magazine",
    size: 100,
    top: "55%",
    right: "2%",
    animDelay: "3s",
    animDuration: "10s",
  },
] as const;

// ─────────────────────────────────────────

// Footer
// ─────────────────────────────────────────
export const FOOTER_LINKS = [
  {
    heading: "Tienda",
    links: [
      { label: "Preventa", href: "/preventa" },
      { label: "Lo Nuevo", href: "/lo-nuevo" },
      { label: "Exclusivos", href: "/exclusivos" },
      { label: "Autografiados", href: "/autografiados" },
    ],
  },
  {
    heading: "Colecciones",
    links: [
      { label: "Nostalgia", href: "/nostalgia" },
      { label: "Vinilos", href: "/vinilos" },
      { label: "Edición Limitada", href: "/limitada" },
    ],
  },
  {
    heading: "Revista",
    links: [
      { label: "Últimos artículos", href: "/revista" },
      { label: "Entrevistas", href: "/revista/entrevistas" },
      { label: "Reviews", href: "/revista/reviews" },
    ],
  },
  {
    heading: "Ayuda",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "FAQ", href: "/faq" },
      { label: "Envíos", href: "/envios" },
      { label: "Devoluciones", href: "/devoluciones" },
    ],
  },
] as const;
