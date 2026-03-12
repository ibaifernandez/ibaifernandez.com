# 🏛️ ARCHITECTURE — Arquitectura técnica

## Visión general

```
┌────────────────────────────────────────────────────────┐
│                    ibaifernandez.com                    │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │              Astro 5 (SSG + SSR)                 │  │
│  │                                                  │  │
│  │  ┌─────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │  Pages  │  │  Layouts │  │  Components    │  │  │
│  │  │         │  │          │  │                │  │  │
│  │  │ index   │  │ Base     │  │ Header         │  │  │
│  │  │ conoceme│  │ Blog     │  │ Footer         │  │  │
│  │  │ articul.│  │          │  │ BlogCard       │  │  │
│  │  │ contact │  └──────────┘  │ NewsletterForm │  │  │
│  │  │ blog/   │                │ ShareButtons   │  │  │
│  │  │ [slug]  │  ┌──────────┐  │ HighlightShare │  │  │
│  │  └─────────┘  │ Content  │  └────────────────┘  │  │
│  │               │ Collectn │                      │  │
│  │               │          │  ┌────────────────┐  │  │
│  │               │ blog/*.md│  │ Design System  │  │  │
│  │               └──────────┘  │ global.css     │  │  │
│  │                             └────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────┐  ┌────────────┐  ┌──────────────┐  │
│  │   Netlify    │  │  MailerLite│  │   Giscus     │  │
│  │  Host+Forms  │  │  Newsletter│  │  Comentarios │  │
│  └──────────────┘  └────────────┘  └──────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## Estructura de archivos

```
ibaifernandez.com-astro/
│
├── 📄 AGENTS.md                     # Guía para agentes IA
├── 📄 README.md                     # Overview del proyecto
├── 📄 astro.config.mjs              # Config Astro (site, integrations)
├── 📄 package.json                  # Dependencias y scripts
├── 📄 tsconfig.json                 # Config TypeScript
│
├── 📁 docs/                         # Documentación del proyecto
│   ├── IA-RULES.md                  # Reglas obligatorias para agentes
│   ├── PRD.md                       # Product Requirements Document
│   ├── ROADMAP.md                   # Fases de desarrollo
│   ├── BACKLOG.md                   # Tareas pendientes por prioridad
│   ├── ARCHITECTURE.md              # Este archivo
│   └── CHANGELOG.md                 # Historial de cambios
│
├── 📁 public/                       # Assets estáticos (copiados tal cual)
│   ├── favicon.svg
│   └── images/
│       ├── ibai-hero.jpg            # Foto hero homepage
│       └── blog/                    # Imágenes de blog posts
│
└── 📁 src/                          # Código fuente
    ├── 📄 content.config.ts         # Schema de Content Collections
    │
    ├── 📁 components/               # Componentes reutilizables
    │   ├── Header.astro             # Navegación + mobile hamburger
    │   ├── Footer.astro             # Pie de página + redes sociales
    │   ├── BlogCard.astro           # Tarjeta de artículo
    │   ├── NewsletterForm.astro     # Formulario newsletter (MailerLite)
    │   ├── ShareButtons.astro       # Botones compartir en redes
    │   └── HighlightShare.astro     # Compartir texto seleccionado
    │
    ├── 📁 content/                  # Contenido gestionado por Astro
    │   └── blog/                    # Artículos del blog (Markdown)
    │       ├── casa-tomasa.md
    │       ├── el-arte-de-priorizar.md
    │       └── filosofia-rebelde.md
    │
    ├── 📁 layouts/                  # Layouts de página
    │   ├── BaseLayout.astro         # Layout base (head, SEO, OG, fonts)
    │   └── BlogLayout.astro         # Layout para blog posts
    │
    ├── 📁 pages/                    # Rutas del sitio (file-based routing)
    │   ├── index.astro              # Homepage (/)
    │   ├── conoceme.astro           # Sobre Ibai (/conoceme)
    │   ├── articulos.astro          # Grid de artículos (/articulos)
    │   ├── contacto.astro           # Formulario contacto (/contacto)
    │   └── blog/
    │       └── [...slug].astro      # Blog post dinámico (/blog/[slug])
    │
    └── 📁 styles/                   # Sistema de diseño
        └── global.css               # Variables, base, utilidades, componentes
```

---

## Componentes

### Jerarquía de layouts

```
BaseLayout.astro
├── <head> — SEO, OG, fonts, global CSS import
├── <slot /> — Contenido de cada página
│
└── BlogLayout.astro (extiende BaseLayout)
    ├── Header
    ├── Hero (categoría, fecha, título, excerpt)
    ├── Hero image
    ├── <slot /> — Contenido Markdown renderizado
    ├── Tags + ShareButtons
    ├── Giscus comments
    ├── HighlightShare
    └── Footer
```

### Componentes UI

| Componente       | Props                                                  | Descripción                                        |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------- |
| `Header`         | —                                                      | Nav con logo, links, CTA, hamburger mobile         |
| `Footer`         | —                                                      | Info de marca, navegación, redes, tech stack       |
| `BlogCard`       | title, description, pubDate, heroImage, category, slug | Tarjeta para grid de artículos                     |
| `NewsletterForm` | —                                                      | Formulario de suscripción (MailerLite)             |
| `ShareButtons`   | title, url                                             | Compartir en Twitter, Facebook, LinkedIn, WhatsApp |
| `HighlightShare` | —                                                      | Compartir texto seleccionado (clipboard, Twitter)  |

---

## Design System (`global.css`)

### Tipografía

| Variable         | Valor              | Uso               |
| ---------------- | ------------------ | ----------------- |
| `--font-display` | 'Playfair Display' | Títulos, headings |
| `--font-body`    | 'Inter'            | Cuerpo, UI        |

### Paleta de colores

| Variable                   | Valor     | Uso                             |
| -------------------------- | --------- | ------------------------------- |
| `--color-bg-dark`          | `#0d1117` | Fondo hero, secciones dark      |
| `--color-accent-primary`   | `#f59e0b` | Amber — CTAs, botones primarios |
| `--color-accent-secondary` | `#0ea5e9` | Sky — Links, badges, acentos    |
| `--color-text-primary`     | `#1e293b` | Texto principal                 |
| `--color-text-on-dark`     | `#e2e8f0` | Texto sobre fondo oscuro        |

### Spacing scale

Escala de `--space-1` (0.25rem) a `--space-24` (6rem), más `--space-32` (8rem).

### Componentes CSS

- `.btn` — Botón base
- `.btn--primary` — Amber filled
- `.btn--secondary` — Sky blue
- `.btn--outline` — Borde con fondo transparente
- `.section--dark` / `.section--light` / `.section--white` — Secciones con tema
- `.container` — Contenedor centrado (max-width: 1200px)
- `.prose` — Tipografía optimizada para lectura

---

## Flujo de datos

### Blog posts

```
src/content/blog/*.md
        │
        ▼
Content Collections (content.config.ts)
        │ Schema validation
        ▼
getCollection('blog')
        │ Query & sort
        ▼
Pages render via BlogLayout + BlogCard
```

### Formulario de contacto

```
<form> (contacto.astro)
    │ POST via Netlify Forms
    │ data-netlify="true"
    │ netlify-honeypot="bot-field"
    ▼
Netlify Form Submissions
    │ Email notification
    ▼
Ibai's inbox
```

### Newsletter

```
<form> (NewsletterForm.astro)
    │ POST via client-side fetch
    ▼
MailerLite API
    │ Subscriber added
    ▼
Automated welcome email
```

---

## Dependencias

| Paquete            | Versión | Propósito                        |
| ------------------ | ------- | -------------------------------- |
| `astro`            | ^5.17.1 | Framework principal              |
| `@astrojs/netlify` | ^6.6.4  | Adapter para Netlify             |
| `@astrojs/sitemap` | ^3.7.0  | Generación automática de sitemap |

> **Filosofía**: Mínimas dependencias. Vanilla CSS, vanilla JS. No añadir paquetes sin aprobación.

---

## Entornos

| Entorno    | URL                         | Propósito                  |
| ---------- | --------------------------- | -------------------------- |
| Local      | `http://localhost:4321`     | Desarrollo (`npm run dev`) |
| Preview    | TBD (Netlify preview)       | Preview de PRs             |
| Producción | `https://ibaifernandez.com` | Sitio en vivo              |
