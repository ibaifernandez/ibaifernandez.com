# 📝 CHANGELOG

> Todas las fechas en formato ISO (YYYY-MM-DD).
> Formato: [Conventional Commits](https://www.conventionalcommits.org/).

---

## [0.2.0] — 2024-03-09

### Documentación

- ✨ `feat(docs):` Creada infraestructura de documentación profesional
  - `AGENTS.md` — Guía de entrada para agentes IA
  - `README.md` — Overview completo del proyecto
  - `docs/IA-RULES.md` — Reglas obligatorias para agentes IA
  - `docs/PRD.md` — Product Requirements Document
  - `docs/ROADMAP.md` — Fases de desarrollo
  - `docs/BACKLOG.md` — Tareas pendientes por prioridad
  - `docs/ARCHITECTURE.md` — Arquitectura técnica
  - `docs/CHANGELOG.md` — Este archivo

### Bug fixes

- 🐛 `fix(css):` Corregido CSS import en `BaseLayout.astro`
  - **Causa**: `@import` dentro de `<style>` no funciona en Astro
  - **Fix**: Movido a `import '../styles/global.css'` en frontmatter
  - **Impacto**: Resueltos todos los issues de botones, tipografía, contraste, honeypot

---

## [0.1.0] — 2024-03-09

### Fundación

- ✨ `feat:` Proyecto Astro inicializado con `create astro`
- ✨ `feat(config):` Configuración de Astro con Netlify adapter y Sitemap
- ✨ `feat(styles):` Design system completo en `global.css`
  - Tipografía: Playfair Display + Inter
  - Paleta: Dark (#0d1117), Amber (#f59e0b), Sky (#0ea5e9)
  - Spacing scale, border radius, shadows, transitions
  - Componentes: buttons, sections, containers, prose
  - Responsive breakpoints

### Layouts

- ✨ `feat(layout):` `BaseLayout.astro` con SEO, OG tags, fonts
- ✨ `feat(layout):` `BlogLayout.astro` con hero, contenido, comentarios

### Componentes

- ✨ `feat(component):` `Header.astro` — Navegación responsive + hamburger
- ✨ `feat(component):` `Footer.astro` — Pie con redes sociales y tech stack
- ✨ `feat(component):` `BlogCard.astro` — Tarjeta de artículo
- ✨ `feat(component):` `NewsletterForm.astro` — Formulario MailerLite
- ✨ `feat(component):` `ShareButtons.astro` — Compartir en redes
- ✨ `feat(component):` `HighlightShare.astro` — Compartir texto seleccionado

### Páginas

- ✨ `feat(page):` Homepage (`/`) — Hero, about, artículos, creatividad, newsletter
- ✨ `feat(page):` Conóceme (`/conoceme`) — Biografía, valores, CTAs
- ✨ `feat(page):` Artículos (`/articulos`) — Grid filtrable por categoría
- ✨ `feat(page):` Contacto (`/contacto`) — Formulario Netlify Forms
- ✨ `feat(page):` Blog post (`/blog/[slug]`) — Template dinámico

### Contenido

- ✨ `feat(content):` Content Collections configurado (`content.config.ts`)
- ✨ `feat(content):` 3 artículos de muestra:
  - `filosofia-rebelde.md` — "Filosofía Rebelde: la puerta a una vida extraordinaria"
  - `el-arte-de-priorizar.md` — "El arte de priorizar: 5 pasos para organizar tu vida"
  - `casa-tomasa.md` — "Casa Tomasa: ¡Terror en el AirBnB!"
