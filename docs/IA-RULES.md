# 🧠 IA-RULES.md — Reglas para agentes IA

> Reglas **obligatorias** que todo agente IA debe seguir al trabajar en este proyecto.
> Incumplir estas reglas genera deuda técnica y experiencia de usuario degradada.

---

## 1. Reglas de código

### 1.1. Framework y lenguaje

- **Framework**: Astro 5. No introducir React, Vue, Svelte ni otro framework de UI salvo instrucción explícita.
- **CSS**: Vanilla CSS con custom properties. NO usar Tailwind, Bootstrap, ni ningún framework CSS.
- **Imports CSS**: Siempre en el frontmatter de Astro (`import '../styles/global.css'`). **NUNCA** usar `@import` dentro de un bloque `<style>`.
- **JavaScript**: Vanilla JS en `<script>` tags. Minimizar dependencias externas.

### 1.2. Estructura de archivos

```
src/components/   → Componentes UI reutilizables (PascalCase.astro)
src/layouts/      → Layouts de página (PascalCase.astro)
src/pages/        → Rutas del sitio (kebab-case.astro)
src/content/blog/ → Artículos en Markdown (.md)
src/styles/       → Design system (global.css)
public/           → Assets estáticos (imágenes, favicon, fonts)
public/images/    → Imágenes organizadas por tipo
```

### 1.3. Convenciones de nombrado

| Tipo          | Convención             | Ejemplo                         |
| ------------- | ---------------------- | ------------------------------- |
| Componentes   | PascalCase             | `BlogCard.astro`                |
| Páginas       | kebab-case             | `conoceme.astro`                |
| Clases CSS    | BEM-like               | `.hero__title`, `.btn--primary` |
| Variables CSS | kebab-case con prefijo | `--color-accent-primary`        |
| Blog posts    | kebab-case             | `filosofia-rebelde.md`          |
| Imágenes      | kebab-case             | `ibai-hero.jpg`                 |

### 1.4. CSS: Design System

- **SIEMPRE** usar variables CSS del design system (`var(--color-*)`). No hardcodear colores.
- **SIEMPRE** usar la escala de espaciado (`var(--space-*)`). No usar valores mágicos.
- **SIEMPRE** usar las tipografías definidas (`var(--font-display)`, `var(--font-body)`).
- Los estilos scoped (bloque `<style>`) son para estilos específicos del componente.
- Los estilos globales van exclusivamente en `global.css`.

### 1.5. Content Collections

El esquema de blog posts está definido en `src/content.config.ts`. Los campos obligatorios son:

```yaml
---
title: "string" # Obligatorio
description: "string" # Obligatorio (SEO)
pubDate: Date # Obligatorio
category: "string" # Obligatorio
tags: ["string"] # Opcional
heroImage: "/path.jpg" # Opcional
draft: boolean # Opcional (default: false)
---
```

---

## 2. Reglas de contenido

### 2.1. Idioma

- **Todo el contenido visible** está en **español** (es-ES).
- **El código** (variables, funciones, clases, comentarios técnicos) está en **inglés**.
- **Comentarios HTML** explicativos pueden estar en español.

### 2.2. Tono y voz

- **Auténtico y personal**: Ibai habla en primera persona.
- **Filosófico pero accesible**: Profundo sin ser pedante.
- **Inspirador sin ser motivador genérico**: Evitar clichés tipo "sal de tu zona de confort".
- **Rebelde consciente**: Cuestionar la norma con amor, no con agresividad.

### 2.3. SEO

- Toda página DEBE tener `title` y `description` via `BaseLayout`.
- Las imágenes DEBEN tener atributo `alt` descriptivo.
- Una sola `<h1>` por página.
- Estructura semántica: `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`.

---

## 3. Reglas de proceso

### 3.1. Antes de cada sesión de trabajo

1. Leer `AGENTS.md` y este archivo (`IA-RULES.md`)
2. Consultar `docs/BACKLOG.md` para saber qué tareas son prioritarias
3. Verificar `docs/CHANGELOG.md` para entender qué se hizo recientemente

### 3.2. Validación obligatoria

Antes de considerar una tarea completada:

1. **`npm run build`** — debe pasar sin errores
2. **Verificación visual** — si la tarea afecta UI, abrir `npm run dev` y verificar
3. **Responsive** — verificar al menos en viewport mobile (375px) y desktop

### 3.3. Actualizaciones de documentación

Al completar trabajo:

- [ ] Actualizar `docs/CHANGELOG.md` con fecha y cambios
- [ ] Marcar tareas completadas en `docs/BACKLOG.md`
- [ ] Si se añaden archivos/componentes, actualizar `docs/ARCHITECTURE.md`

### 3.4. Flujo para crear contenido (blog posts)

1. Recibir texto del owner (puede ser `.docx`, PDF, o texto plano)
2. Convertir a Markdown con frontmatter completo
3. Optimizar imágenes y colocar en `public/images/blog/`
4. Crear el `.md` en `src/content/blog/`
5. Verificar que `npm run build` genera la página
6. Verificar visualmente en `npm run dev`

---

## 4. Restricciones

### ❌ NO hacer sin instrucción explícita

- No instalar dependencias nuevas
- No cambiar la estructura de carpetas
- No modificar `astro.config.mjs`
- No añadir frameworks CSS o de componentes
- No eliminar archivos existentes
- No hacer refactors grandes "de limpieza"
- No publicar ni hacer deploy

### ✅ SÍ se puede hacer libremente

- Crear nuevos blog posts en `src/content/blog/`
- Añadir imágenes en `public/images/`
- Ajustar estilos dentro del design system existente
- Corregir errores tipográficos o bugs
- Mejorar accesibilidad (a11y)
- Optimizar rendimiento sin cambiar arquitectura
