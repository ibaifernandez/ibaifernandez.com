# ibaifernandez.com — Estado del proyecto
> Última actualización: 2026-04-28

---

## Visión del sitio

**ibaifernandez.com** = hub personal/creativo de Ibai Fernández. Escritor, cineasta, fotógrafo, filósofo, nómada digital. NO es el portfolio tech (ese vive en portfolio.ibaifernandez.com).

Objetivo: fama, prestigio, suscriptores de newsletter, ventas de libros, comisiones de fotografía/vídeo.

---

## Stack

- Astro 5.17.1 + Netlify SSR adapter
- Tailwind CSS 3.4 + custom design system en `src/styles/global.css`
- Cormorant Garamond (display) + Instrument Sans (body)
- MailerLite API → `/api/subscribe`
- Preview local: `node_modules/.bin/astro dev --port 8080`

---

## Tokens de diseño (CSS custom properties)

```
--ink: #0e0c0a        (negro cálido — fondos oscuros, texto sobre claro)
--paper: #f4f0e8      (off-white suave — fondo principal)
--cream: #faf8f3      (blanco roto — article body)
--blood: #9b2020      (rojo oscuro — acento primario)
--blood-hover: #7d1a1a
--blood-light: #c42828
--gold: #b8902a
--stone: #6b6560      (gris cálido)
--fog: #d4cfc8        (gris muy claro — bordes)
--font-display: "Cormorant Garamond", Georgia, serif
--font-body: "Instrument Sans", -apple-system, sans-serif
```

---

## Archivos clave completados ✅

| Archivo | Estado |
|---|---|
| `src/styles/global.css` | ✅ Reescrito completo |
| `src/layouts/BaseLayout.astro` | ✅ Actualizado |
| `src/layouts/BlogLayout.astro` | ✅ Reescrito + CSS article-contact añadido |
| `src/components/Header.astro` | ✅ Reescrito (nav con dropdown Escritura) |
| `src/components/BlogCard.astro` | ✅ Reescrito (editorial, sin border-radius) |
| `src/components/Footer.astro` | ✅ Reescrito (4 columnas) |
| `src/pages/index.astro` | ✅ Reescrito (El Archivo del Artista) |
| `src/pages/articulos.astro` | ✅ Reescrito (filtros por series) |
| `src/pages/filosofia-rebelde.astro` | ✅ Nuevo |
| `src/pages/api/subscribe.ts` | ✅ JSON + FormData, MailerLite |
| `src/content.config.ts` | ✅ Campo `series` añadido |
| `src/pages/blog/[slug].astro` | ✅ prev/next por serie |
| `.claude/launch.json` | ✅ Puerto 8080 |

---

## Series de blog (taxonomy)

| Serie | Posts |
|---|---|
| `Filosofía Rebelde` | filosofia-rebelde-*, rebelion-consciente-*, cambio-adaptacion-*, mejora-tus-relaciones-*, tu-puedes-ser-el-mejor-*, sabes-que-es-*, que-tal-si-todos-se-equivocan, paraisos-de-necesidad-artificial, todo-lo-que-buscas-*, la-clave-esta-en-las-circunstancias, no-lo-intentes |
| `No Somos Héroes` | no-somos-heroes-prologo, no-somos-heroes-ep-1, no-somos-heroes-ep-2 |
| `Un Final Para Su Final` | un-final-para-su-final-prologo, entrevista-sobre-un-final-para-su-final, segunda-entrevista-sobre-un-final-para-su-final |
| `El Oficio de Escritor` | el-oficio-de-escritor-introduccion, encuentra-tu-voz, la-inspiracion-no-es-indispensable, la-originalidad-no-existe, sobre-el-bloqueo-del-escritor, consejos-de-libro-de-recetas-para-escritores, nuestra-voz-es-nuestra, el-miedo-a-escribir |
| `Las Cartas de Arturo` | las-cartas-de-arturo-i (y siguientes) |
| Sin serie | alan-arkin-y-el-mar, anticonsejos-para-2023, casa-tomasa-terror-en-el-airbnb, como-prefieres-el-pescado, descubre-las-5-claves-*, el-aspecto-fisico-*, el-lado-oscuro-de-la-fuerza, prepara-tu-curriculum-vitae, reflexion-sobre-el-trabajo-en-equipo-de-las-hormigas |

---

## Gold Standard post (plantilla de referencia)

**Archivo:** `src/content/blog/filosofia-rebelde-la-puerta-a-una-vida-extraordinaria.md`

### Frontmatter correcto:
```yaml
---
title: "Título del artículo"
description: "Frase propia que resume el artículo — NO igual al título, con valor SEO"
pubDate: "YYYY-MM-DD"
heroImage: "/images/wp-archive/nombre-del-archivo.jpeg"   # ruta local, nunca URL WP
category: "Artículos"                                      # u otra categoría
series: "Nombre De La Serie"                               # si aplica, si no: omitir
tags: ["tag-1", "tag-2", "tag-3"]
---
```

### Qué limpiar en cada post (checklist):

- [ ] `description` ≠ `title` — escribir frase propia descriptiva
- [ ] `heroImage` — cambiar URL de WP (`https://ibaifernandez.com/wp-content/...`) a ruta local (`/images/wp-archive/...`)
- [ ] Añadir `series` si el post pertenece a una serie
- [ ] Añadir `tags` relevantes
- [ ] Eliminar formularios de newsletter de WordPress (fragmentos HTML con "Nombre / Email / Aceptación / Enviar")
- [ ] Convertir citas sueltas a blockquote Markdown (`> "cita"`)
- [ ] Imágenes inline — cambiar URL WP a ruta local; eliminar líneas huérfanas de caption debajo (nombre/título sueltos)
- [ ] Limpiar sección final de WordPress (comentarios, WhatsApp, redes sociales, botones de share con URLs absolutas de WP)
- [ ] Eliminar firma final ("Con entusiasmo, ~Ibai Fernández") — BlogLayout la renderiza automáticamente
- [ ] Eliminar links internos con URLs absolutas de WP (`https://ibaifernandez.com/...`) → convertir a rutas relativas (`/blog/slug`) o eliminar si son CTAs de WP

### Lo que NO tocar:
- El contenido y la prosa de Ibai — no resumir, no reescribir, no "mejorar"
- La estructura de secciones (H2, H3) — respetarla tal cual
- Énfasis (`**bold**`, `_italic_`) — preservarlos exactamente

---

## Imágenes de WP (pendiente)

Las imágenes referenciadas como `/images/wp-archive/*.jpeg` en los posts deben existir en `/public/images/wp-archive/`. Pendiente confirmar si Ibai tiene esos archivos del backup de WP o hay que buscarlos.

---

## Páginas pendientes de construir

| Página | Ruta | Estado |
|---|---|---|
| Contacto | `/hablemos` | ✅ Construido |
| Sobre mí | `/quien-soy` | ✅ Construido |
| Fotografía hub | `/fotografia` | ✅ Construido (reemplaza fotografia.md) |
| Cine hub | `/cine` | ✅ Construido |
| Poesía | `/poesia` | ✅ Construido (reemplaza poesia.md) |
| Libros hub | `/libros` | ✅ Construido |

---

## Posts de blog — estado de limpieza

| Post | Limpio | Serie asignada |
|---|---|---|
| filosofia-rebelde-la-puerta-a-una-vida-extraordinaria | ✅ | Filosofía Rebelde |
| alan-arkin-y-el-mar | ✅ | — |
| anticonsejos-para-2023 | ✅ | — |
| cambio-adaptacion-y-evolucion-... | ✅ | Filosofía Rebelde |
| casa-tomasa-terror-en-el-airbnb | ✅ | — |
| como-prefieres-el-pescado | ✅ | — |
| consejos-de-libro-de-recetas-para-escritores | ✅ | El Oficio de Escritor |
| descubre-las-5-claves-... | ✅ | — |
| el-arte-de-priorizar-... | ✅ | Filosofía Rebelde |
| el-aspecto-fisico-... | ✅ | — |
| el-lado-oscuro-de-la-fuerza | ✅ | — |
| el-miedo-a-escribir | ✅ | El Oficio de Escritor |
| el-oficio-de-escritor-introduccion | ✅ | El Oficio de Escritor |
| encuentra-tu-voz | ✅ | El Oficio de Escritor |
| entrevista-sobre-un-final-para-su-final | ✅ | Un Final Para Su Final |
| la-clave-esta-en-las-circunstancias | ✅ | Filosofía Rebelde |
| la-inspiracion-no-es-indispensable | ✅ | El Oficio de Escritor |
| la-originalidad-no-existe | ✅ | El Oficio de Escritor |
| las-cartas-de-arturo-i | ✅ | Las Cartas de Arturo |
| mejora-tus-relaciones-personales-... | ✅ | Filosofía Rebelde |
| no-lo-intentes | ✅ | Filosofía Rebelde |
| no-somos-heroes-ep-1-... | ✅ | No Somos Héroes |
| no-somos-heroes-ep-2-... | ✅ | No Somos Héroes |
| no-somos-heroes-prologo | ✅ | No Somos Héroes |
| nuestra-voz-es-nuestra | ✅ | El Oficio de Escritor |
| paraisos-de-necesidad-artificial | ✅ | Filosofía Rebelde |
| prepara-tu-curriculum-vitae | ✅ | — |
| que-tal-si-todos-se-equivocan | ✅ | Filosofía Rebelde |
| rebelion-consciente-... | ✅ | Filosofía Rebelde |
| reflexion-sobre-el-trabajo-en-equipo-de-las-hormigas | ✅ | — |
| sabes-que-es-lo-que-mas-impacto-... | ✅ | Filosofía Rebelde |
| segunda-entrevista-sobre-un-final-para-su-final | ✅ | Un Final Para Su Final |
| sobre-el-bloqueo-del-escritor | ✅ | El Oficio de Escritor |
| sobre-las-editoriales-de-auto-edicion | ✅ | El Oficio de Escritor |
| todo-lo-que-buscas-esta-en-tu-cerebro | ✅ | Filosofía Rebelde |
| tu-puedes-ser-el-mejor-... | ✅ | Filosofía Rebelde |
| un-final-para-su-final-prologo | ✅ | Un Final Para Su Final |
