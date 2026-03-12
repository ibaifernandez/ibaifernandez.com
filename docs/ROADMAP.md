# 🗺️ ROADMAP — Fases de desarrollo

> Hoja de ruta del proyecto ibaifernandez.com.
> Cada fase tiene objetivos claros y criterios de finalización.

---

## Fase 0: Planificación ✅

**Estado**: Completada

- [x] Auditoría del sitio WordPress actual
- [x] Decisión de framework (Astro 5)
- [x] Definición del stack tecnológico
- [x] Plan de migración aprobado

---

## Fase 1: Fundación ✅

**Estado**: Completada

- [x] Inicializar proyecto Astro
- [x] Configurar Netlify adapter + sitemap
- [x] Design system (`global.css`)
- [x] Layout base con SEO completo
- [x] Content Collections para blog
- [x] Header con navegación responsive
- [x] Footer con redes sociales

---

## Fase 2: Páginas Core ✅

**Estado**: Completada

- [x] Homepage (hero, about, posts, creatividad, newsletter)
- [x] Conóceme (bio, valores, CTAs)
- [x] Artículos (grid filtrable)
- [x] Contacto (formulario Netlify)
- [x] Blog template dinámico (`[slug].astro`)
- [x] Componentes: BlogCard, ShareButtons, HighlightShare, NewsletterForm

---

## Fase 3: Infraestructura de proyecto 🟡

**Estado**: En progreso

- [x] Fix CSS import (frontmatter vs @import)
- [x] Documentación profesional (AGENTS, README, docs/)
- [ ] Git init + .gitignore refinado
- [ ] Configuración de deploy Netlify (netlify.toml)
- [ ] robots.txt + llms.txt
- [ ] Favicon set completo (32x32, 180x180, manifest)

---

## Fase 4: Contenido real 📝

**Estado**: No empezada

- [ ] Migrar artículos reales desde WordPress
- [ ] Foto profesional de Ibai para hero
- [ ] Imágenes para blog posts
- [ ] Textos finales revisados por Ibai
- [ ] Páginas legales (Aviso Legal, Privacidad, Cookies)
- [ ] Links a obras reales (libros, música)
- [ ] URLs de redes sociales reales
- [ ] Configuración de Giscus (repo ID, category ID)

### Información requerida del owner:

| Dato                                 | Para qué                 | Estado        |
| ------------------------------------ | ------------------------ | ------------- |
| Foto profesional (hero)              | Homepage hero            | ✅ Completado |
| URLs redes sociales                  | Header, footer, homepage | ⬜ Pendiente  |
| API key MailerLite                   | Newsletter funcional     | ⬜ Pendiente  |
| GitHub repo + IDs para Giscus        | Comentarios              | ⬜ Pendiente  |
| Logo / favicon                       | Branding completo        | ⬜ Pendiente  |
| Artículos de WordPress (.md o .html) | Migración contenido      | ⬜ Pendiente  |

---

## Fase 5: Integraciones 🔌

**Estado**: No empezada

- [ ] MailerLite API real (newsletter)
- [ ] Cloudflare Turnstile (captcha para formularios)
- [ ] Cookie Consent Banner (Aceptar todas/esenciales/rechazar)
- [ ] Giscus configurado y funcional
- [ ] Analytics (¿Plausible? ¿Fathom? ¿Google?)
- [ ] Open Graph images dinámicas
- [ ] RSS feed

---

## Fase 6: Página de Fotografía 📷

**Estado**: No empezada

- [ ] Diseño de galería fotográfica
- [ ] Componente de galería con lightbox
- [ ] Optimización de imágenes (sharp / astro:assets)
- [ ] Carga lazy de imágenes
- [ ] Categorización de fotos

---

## Fase 7: Polish y lanzamiento 🚀

**Estado**: No empezada

- [ ] Test responsive completo (375px → 1440px)
- [ ] Lighthouse audit (target: 95+ en todo)
- [ ] Test de accesibilidad (axe / WAVE)
- [ ] Test de formulario de contacto en Netlify
- [ ] Configuración DNS (dominio → Netlify)
- [ ] HTTPS verificado
- [ ] 301 redirects desde URLs antiguas de WordPress
- [ ] Lanzamiento 🎉

---

## Fase 8: Post-lanzamiento 🔮

**Estado**: Futuro

- [ ] Integración con NotebookLM (Add-on V2: Chatbot RAG embebido)
- [ ] Página de portfolio profesional
- [ ] Página de proyectos
- [ ] Soporte multiidioma (es/en)
- [ ] Dark/light mode toggle
- [ ] Sistema de búsqueda de artículos
- [ ] PWA (Progressive Web App)
