# 🌐 ibaifernandez.com

**Sitio de marca personal de Ibai Fernández** — escritor, fundador de Filosofía Rebelde, nómada digital.

> Blog y portfolio personal construido con Astro 5, desplegado en Netlify.

## ⚡ Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev          # → http://localhost:4321

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Tech Stack

| Tecnología                     | Uso                                   |
| ------------------------------ | ------------------------------------- |
| [Astro 5](https://astro.build) | Framework SSG con Content Collections |
| [Netlify](https://netlify.com) | Hosting, formularios, edge functions  |
| Vanilla CSS                    | Design system con custom properties   |
| Markdown                       | Formato de contenido para blog posts  |
| [Giscus](https://giscus.app)   | Comentarios (GitHub Discussions)      |

## 📄 Páginas

| Ruta           | Página    | Descripción                                                  |
| -------------- | --------- | ------------------------------------------------------------ |
| `/`            | Homepage  | Hero, sobre mí, artículos recientes, creatividad, newsletter |
| `/conoceme`    | Conóceme  | Biografía, valores, CTAs                                     |
| `/articulos`   | Artículos | Grid filtrable de blog posts                                 |
| `/contacto`    | Contacto  | Formulario (Netlify Forms)                                   |
| `/blog/[slug]` | Blog Post | Artículo individual con share + comentarios                  |

## ✍️ Crear un nuevo artículo

1. Crea un archivo `.md` en `src/content/blog/`:

```markdown
---
title: "Título del artículo"
description: "Descripción breve para SEO y preview"
pubDate: 2024-03-09
category: "Desarrollo personal"
tags: ["filosofía", "vida"]
heroImage: "/images/blog/mi-imagen.jpg"
draft: false
---

Contenido del artículo en Markdown...
```

2. Añade la imagen hero en `public/images/blog/`
3. Ejecuta `npm run build` para verificar

## 📐 Design System

El design system vive en `src/styles/global.css` y usa CSS custom properties:

- **Tipografía**: Playfair Display (display) + Inter (body)
- **Paleta**: Dark (#0d1117), Amber (#f59e0b), Sky (#0ea5e9)
- **Spacing**: Scale de 0.25rem a 8rem
- **Componentes**: Buttons (`.btn--primary`, `.btn--secondary`, `.btn--outline`)

## 📚 Documentación

Toda la documentación extendida está en [`/docs`](docs/):

- **[IA-RULES.md](docs/IA-RULES.md)** — Reglas para agentes IA
- **[PRD.md](docs/PRD.md)** — Product Requirements Document
- **[ROADMAP.md](docs/ROADMAP.md)** — Fases y timeline
- **[BACKLOG.md](docs/BACKLOG.md)** — Tareas pendientes
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** — Arquitectura técnica
- **[CHANGELOG.md](docs/CHANGELOG.md)** — Historial de cambios

## 🤖 Para agentes IA

Lee [`AGENTS.md`](AGENTS.md) antes de trabajar en este proyecto.

## 📝 Licencia

© 2024-presente Ibai Fernández. Todos los derechos reservados.
El contenido (textos, imágenes, vídeos) es propiedad exclusiva de Ibai Fernández.
El código fuente se puede consultar como referencia educativa.
