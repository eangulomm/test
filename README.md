# Playland Test

Proyecto frontend desarrollado como parte de mi portafolio personal. Consiste en una experiencia interactiva tipo quiz donde el usuario responde una serie de preguntas y obtiene como resultado una canción del álbum *Vessel* de Twenty One Pilots que refleja su personalidad emocional — junto con la opción de adquirir el vinilo correspondiente.

---

## ¿Qué es?

Una aplicación web que combina una tienda de coleccionables musicales con una experiencia de usuario interactiva. El flujo principal es:

**Hero → Quiz → Resultado personalizado → CTA de compra**

El resultado varía según las respuestas del usuario gracias a un sistema de puntuación por canción implementado desde cero.

---

## Stack

- **Next.js 14** — App Router, SSR, optimización de imágenes
- **TypeScript** — tipado estricto en componentes, datos y lógica
- **Tailwind CSS** — sistema de utilidades con tokens de diseño personalizados
- **Framer Motion** — preparado para animaciones de transición
- **CSS Keyframes** — animaciones de float, glow y fade para elementos decorativos

---

## Estructura del proyecto

```
src/
├── app/               # Rutas y layout global (Next.js App Router)
├── components/
│   ├── layout/        # AnnouncementBar, Navbar, Footer
│   ├── ui/            # Button, ProgressBar, Badge
│   ├── quiz/          # QuizAnswerCard, QuizOrchestrator
│   ├── product/       # ProductCard
│   └── animations/    # FloatingElement, GlowBlob
├── sections/          # HeroSection, QuizSection, ResultSection
├── styles/            # globals.css con tokens y clases base
├── data/              # constants.ts — todo el contenido editable
├── lib/               # utils.ts — helpers y lógica de resultado
└── hooks/             # useQuiz.ts — máquina de estados del quiz
```

---

## Características

- Quiz de 7 preguntas con sistema de puntuación por canción
- 12 resultados posibles (una por track del álbum Vessel)
- Diseño responsive — mobile, tablet y desktop
- Identidad visual oscura con paleta violeta/magenta, tipografía display y efectos de glow
- Elementos decorativos flotantes con animación CSS
- Arquitectura modular y escalable — componentes reutilizables con props limpias
- Todo el contenido editable centralizado en un solo archivo (`data/constants.ts`)

---

## Correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Notas

Los assets (portadas, renders de vinilo, imágenes decorativas) se reemplazan colocando los archivos en `public/assets/` — las rutas ya están conectadas en el código.