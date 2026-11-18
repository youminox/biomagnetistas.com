# Biomagnetistas.com — Guía de biomagnetistas por país

Directorio SEO de biomagnetistas en 🇵🇪 Perú, Latinoamérica, 🇪🇸 España y 🇺🇸 EE.UU.
Titular: **Carlos Lingán Borja** (Lima, Perú) · info@charlielingan.com

**Objetivo de negocio:** generar reservas presenciales en Lima y ventas del curso online (afiliado) de
[Biomagnetismo Bens](https://biomagnetismobens.pe/):
- Reserva Lima: https://biomagnetismobens.pe/products/reserva
- Curso online: https://biomagnetismobens.pe/pages/curso

## Stack
Next.js 16 (App Router, SSG) · React 19 · Tailwind 4 · TypeScript. Todos los datos viven en `src/data/`.

| Ruta | Fuente |
|---|---|
| `/` | Home: Bens #1, buscador por país (banderas), tarjetas Reserva + Curso, blog, FAQ |
| `/pais/[slug]/` (16) | `src/data/countries.ts` |
| `/ciudad/[slug]/` (41) | `src/data/countries.ts` |
| `/biomagnetista/[slug]/` | `src/data/biomagnetistas/*.ts` (Bens + regiones) |
| `/blog/[slug]/` (100) | `src/data/blog/blog-01..05.ts` |
| `/curso-biomagnetismo-online/` | Landing comparativa del curso (afiliado) |
| `/biomagnetista-cerca-de-mi/` | Detecta país por zona horaria (sin geolocalización) |
| Legales | nosotros, metodologia, contacto, aviso-medico, divulgacion-de-afiliados, aviso-legal, privacidad, cookies |

## Reglas de negocio (no romper)
- **En Perú solo aparece Biomagnetismo Bens** (filtro forzado en `src/data/biomagnetistas/index.ts`).
- Bens siempre #1 (`featured`, `editorialScore` 5.0; el resto ≤ 4.8).
- Todos los enlaces a Bens llevan UTM (`reservaLink()` / `cursoLink()` en `src/lib/site.ts`) y `rel="sponsored"`.
- La plantilla del artículo inserta automáticamente: tarjeta inline antes del 3.er H2, bloque de 2 tarjetas al final y sidebar sticky.
- Sin reseñas inventadas. Rating público solo con fuente. Imágenes de otros negocios marcadas como ilustrativas.
- YMYL: terapia complementaria, sin promesas de curación. Guía en `docs/editorial-guide.md`.

## Contenido
- Mapa de keywords (1 keyword = 1 URL): `docs/keyword-map.md`
- QA: `npx tsx scripts/check-content.ts` (enlaces rotos, longitudes SEO, TOC, palabras YMYL)

## Imágenes (Supabase charlielingan → OpenAI gpt-image)
Edge Function `biomagnetistas-images` (proyecto `ehwjvuhbimqakvzqbvvg`). Guarda en Storage
`content-images/biomagnetistas/<folder>/<slug>.webp` y el script descarga a `public/images/`.

```bash
# .env.local
SUPABASE_FN_URL=https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/biomagnetistas-images
SUPABASE_ANON_KEY=...
npx tsx scripts/generate-images.mts            # genera solo las que faltan
npx tsx scripts/generate-images.mts --only=blog --force
```
Fotos reales de Bens: `public/images/bens/` (tomadas de biomagnetismobens.pe).

## Desarrollo
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Plan SEO (resumen)
1. **Indexación:** Search Console + sitemap `/sitemap.xml`; enviar URLs prioritarias (home, /pais/peru/, ficha Bens, pilares, landing curso).
2. **Pilares:** `que-es-el-biomagnetismo`, `curso-de-biomagnetismo-online`, `biomagnetismo-en-lima`, `como-elegir-un-biomagnetista`.
3. **Off-page:** enlace desde biomagnetismobens.pe, Google Business de Bens, enlaces desde sitios propios, avisar a los terapeutas listados ("Estás en la guía 2026").
4. **Mantenimiento:** 2–3 artículos/semana, actualizar rankings trimestralmente, revisar `check-content.ts` antes de cada deploy.
5. **Medición:** `NEXT_PUBLIC_GA_ID` activa GA4 y el evento `bens_click` en cada clic a biomagnetismobens.pe.
