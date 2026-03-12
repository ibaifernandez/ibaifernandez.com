# 📋 PRD — Product Requirements Document

## ibaifernandez.com — Marca Personal

### Visión

Crear la **mejor página de marca personal en español** del ecosistema de desarrollo humano y creatividad. Un sitio que combine la profundidad filosófica de Ibai Fernández con una experiencia digital de nivel premium, donde la tecnología está al servicio del mensaje.

### Owner

**Ibai Fernández** — Escritor, fundador de Filosofía Rebelde, nómada digital.

---

## 1. Objetivos del producto

### 1.1. Objetivos primarios

1. **Plataforma de publicación**: Blog fácil de actualizar con asistencia IA (Markdown)
2. **Marca personal**: Comunicar quién es Ibai y qué ofrece
3. **Generación de leads**: Captar suscriptores para newsletter (MailerLite)
4. **Portfolio creativo**: Mostrar libros, música, fotografía y proyectos

### 1.2. Objetivos técnicos

1. **Performance**: Lighthouse 95+ en todas las métricas
2. **SEO**: Posicionamiento orgánico en español
3. **Mantenibilidad**: Contenido actualizable por IA agents sin tocar código
4. **Autonomía**: Deploy automático desde Git
5. **Costes**: Hosting gratuito/económico (Netlify free tier)

---

## 2. Usuarios objetivo

### Perfil primario: Buscador consciente

- 25-45 años
- Hispanohablante
- Interesado en desarrollo personal, filosofía de vida, creatividad
- Lee blogs, escucha podcasts, busca autenticidad
- No le interesan los gurús motivacionales genéricos

### Perfil secundario: Profesional curioso

- Busca el portfolio profesional de Ibai
- Potenciales colaboradores, editores, clientes freelance

---

## 3. Páginas y funcionalidad

### 3.1. Homepage (`/`)

| Sección             | Propósito                                    | Estado                        |
| ------------------- | -------------------------------------------- | ----------------------------- |
| Hero                | Primera impresión: nombre, bio, foto, CTAs   | ✅ Implementado               |
| Sobre mí            | Breve introducción + redes sociales          | ✅ Implementado               |
| Artículos recientes | Grid de últimos 3 posts                      | ✅ Implementado               |
| Creatividad         | Grid de proyectos creativos (libros, música) | ✅ Implementado               |
| Newsletter          | Formulario suscripción MailerLite            | ✅ Implementado (placeholder) |

### 3.2. Conóceme (`/conoceme`)

| Sección   | Propósito                       | Estado          |
| --------- | ------------------------------- | --------------- |
| Hero      | Título y contexto               | ✅ Implementado |
| Biografía | Historia personal y profesional | ✅ Implementado |
| CTAs      | Links a libro y portfolio       | ✅ Implementado |
| Valores   | Grid de valores fundamentales   | ✅ Implementado |

### 3.3. Artículos (`/articulos`)

| Sección       | Propósito                    | Estado          |
| ------------- | ---------------------------- | --------------- |
| Hero          | Título descriptivo           | ✅ Implementado |
| Filtros       | Categorías clickeables       | ✅ Implementado |
| Grid de posts | Todos los posts con BlogCard | ✅ Implementado |

### 3.4. Contacto (`/contacto`)

| Sección    | Propósito                      | Estado                          |
| ---------- | ------------------------------ | ------------------------------- |
| Hero       | Invitación a conversar         | ✅ Implementado                 |
| Formulario | Nombre, email, asunto, mensaje | ✅ Implementado (Netlify Forms) |

### 3.5. Blog Post (`/blog/[slug]`)

| Sección           | Propósito                         | Estado                            |
| ----------------- | --------------------------------- | --------------------------------- |
| Hero              | Categoría, fecha, título, excerpt | ✅ Implementado                   |
| Contenido         | Prose con tipografía optimizada   | ✅ Implementado                   |
| Tags              | Etiquetas del artículo            | ✅ Implementado                   |
| Share             | Botones para compartir en redes   | ✅ Implementado                   |
| Highlight & Share | Compartir texto seleccionado      | ✅ Implementado                   |
| Comentarios       | Giscus (GitHub Discussions)       | ✅ Implementado (configurar repo) |

### 3.6. Fotografía (`/fotografia`) — PENDIENTE

| Sección | Propósito             | Estado         |
| ------- | --------------------- | -------------- |
| Galería | Portfolio fotográfico | ⬜ No empezado |

---

## 4. Integraciones

| Servicio     | Propósito                             | Estado                                 |
| ------------ | ------------------------------------- | -------------------------------------- |
| Netlify      | Hosting + Forms + Edge                | ✅ Configurado                         |
| MailerLite   | Newsletter                            | ⬜ API pendiente                       |
| Giscus       | Comentarios                           | ✅ Componente listo (config pendiente) |
| Google Fonts | Tipografía (Inter + Playfair Display) | ✅ Implementado                        |
| Sitemap      | SEO                                   | ✅ Generado automáticamente            |
| NotebookLM   | Base de conocimiento de Ibai          | 🔮 Futuro                              |

---

## 5. Flujo de creación de contenido

```
┌─────────────────────────────────────────┐
│  1. Ibai escribe en Pages/Word/texto    │
│     plano + entrega assets multimedia   │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  2. Agente IA recibe .docx/PDF/texto    │
│     + imágenes/vídeos/audios            │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  3. Agente convierte a Markdown:        │
│     - Frontmatter completo (título,     │
│       descripción, categoría, tags)     │
│     - Imágenes optimizadas en public/   │
│     - Contenido formateado              │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  4. Verificación:                       │
│     - npm run build (sin errores)       │
│     - npm run dev (check visual)        │
│     - SEO meta tags correctos           │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  5. Git commit + push → deploy auto     │
└─────────────────────────────────────────┘
```

---

## 6. Requisitos no funcionales

| Requisito              | Objetivo                                     |
| ---------------------- | -------------------------------------------- |
| **Performance**        | Lighthouse 95+ (todas las métricas)          |
| **Accesibilidad**      | WCAG 2.1 AA                                  |
| **Responsive**         | Mobile-first, testado en 375px-1440px        |
| **SEO**                | Meta tags, OG, sitemap, estructura semántica |
| **Velocidad de carga** | < 3s en 3G                                   |
| **Tamaño del bundle**  | Mínimo JS, máximo CSS estático               |
| **Seguridad**          | Formulario con honeypot, HTTPS               |
