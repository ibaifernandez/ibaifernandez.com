# 🤖 AGENTS.md — Guía para agentes IA

> Este documento establece las reglas, convenciones y contexto que cualquier agente IA
> debe conocer antes de trabajar en este proyecto.

## Identidad del proyecto

| Campo                    | Valor                                       |
| ------------------------ | ------------------------------------------- |
| **Proyecto**             | ibaifernandez.com                           |
| **Tipo**                 | Marca personal / Blog                       |
| **Owner**                | Ibai Fernández                              |
| **Framework**            | Astro 5                                     |
| **Deploy**               | Netlify                                     |
| **Idioma del contenido** | Español (es-ES)                             |
| **Idioma del código**    | Inglés (variables, clases CSS, componentes) |

## Documentación de referencia

Toda la documentación vive en `/docs`. Lee estos archivos **antes** de hacer cambios:

| Documento                                 | Propósito                                                |
| ----------------------------------------- | -------------------------------------------------------- |
| [`IA-RULES.md`](docs/IA-RULES.md)         | Reglas estrictas para agentes IA                         |
| [`PRD.md`](docs/PRD.md)                   | Product Requirements Document — qué estamos construyendo |
| [`ROADMAP.md`](docs/ROADMAP.md)           | Fases de desarrollo y prioridades                        |
| [`BACKLOG.md`](docs/BACKLOG.md)           | Tareas pendientes organizadas por prioridad              |
| [`ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Arquitectura técnica del proyecto                        |
| [`CHANGELOG.md`](docs/CHANGELOG.md)       | Historial de cambios                                     |
| [`README.md`](README.md)                  | Guía general del proyecto                                |

## Flujo de trabajo con agentes

### Antes de empezar cualquier tarea

1. **Lee** `AGENTS.md` (este archivo)
2. **Lee** `docs/IA-RULES.md` (reglas obligatorias)
3. **Consulta** `docs/BACKLOG.md` (tareas pendientes)
4. **Verifica** `docs/ARCHITECTURE.md` (estructura del proyecto)

### Al completar una tarea

1. **Actualiza** `docs/CHANGELOG.md` con los cambios realizados
2. **Actualiza** `docs/BACKLOG.md` marcando tareas completadas
3. **Verifica** que el build pasa: `npm run build`
4. **Confirma** visualmente en `npm run dev` si hay cambios de UI

## Estructura del proyecto

```
ibaifernandez.com-astro/
├── AGENTS.md                  ← Estás aquí
├── README.md                  ← Overview del proyecto
├── docs/                      ← Documentación completa
│   ├── IA-RULES.md
│   ├── PRD.md
│   ├── ROADMAP.md
│   ├── BACKLOG.md
│   ├── ARCHITECTURE.md
│   └── CHANGELOG.md
├── src/
│   ├── components/            ← Componentes reutilizables (.astro)
│   ├── content/blog/          ← Artículos en Markdown
│   ├── layouts/               ← Layouts (Base, Blog)
│   ├── pages/                 ← Rutas del sitio
│   └── styles/                ← Design system (global.css)
├── public/                    ← Assets estáticos (imágenes, favicon)
├── astro.config.mjs           ← Configuración de Astro
└── package.json
```

## Convenciones rápidas

- **Componentes**: PascalCase → `BlogCard.astro`
- **Páginas**: kebab-case → `conoceme.astro`
- **CSS**: BEM-like → `.hero__title`, `.btn--primary`
- **Content**: Markdown con frontmatter YAML
- **Imports**: Siempre en el frontmatter de Astro (`---`), nunca `@import` en `<style>`
- **Commits**: Conventional Commits → `feat:`, `fix:`, `docs:`, `style:`
