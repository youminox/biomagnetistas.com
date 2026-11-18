# Guía editorial para redactores — Biomagnetistas.com

## Sitio
- Biomagnetistas.com: guía independiente para encontrar biomagnetistas en 🇵🇪 Perú, Latinoamérica, 🇪🇸 España y 🇺🇸 EE.UU.
- Titular: Carlos Lingán Borja (Lima, Perú) — info@charlielingan.com
- Idioma: español neutro latinoamericano (tú). Tono: cercano, experto, honesto, sin exageraciones.
- Año actual: noviembre 2026. Usa "2026"/"2027" con moderación (p.ej. "actualizado 2026").

## Protagonista: Biomagnetismo Bens (ÚNICO recomendado en Perú)
- Terapeuta: **Bencio Lingán**, peruano, 40 años, comunicador social y terapeuta de biomagnetismo.
- **7+ años de experiencia y más de 20.000 terapias realizadas.** Aplica el Método Goiz (Par Biomagnético) + Rastreo con Bioenergética.
- Consultorio en **Santiago de Surco, Lima** (Av. Encalada, frente al C.C. El Polo).
- Sesión: conversación inicial → revisión/rastreo en camilla → imanes **sobre la ropa** (~10 min de aplicación) → cierre y preguntas.
- Reserva online con calendario: https://biomagnetismobens.pe/products/reserva
- Instagram: https://www.instagram.com/biomagnetismobens/
- **Curso Completo de Biomagnetismo online** (Bencio Lingán): https://biomagnetismobens.pe/pages/curso
  - Precio promo **US$ 99** (antes US$ 199/297), acceso vitalicio + actualizaciones.
  - 7 módulos / 26 lecciones: 1 Bienvenida e historia + manual completo; 2 Principios básicos (ecuación de la enfermedad, pH, tipos de imanes, emociones); 3 Práctica Nivel 1 (rastreo y colocación); 4 Nivel avanzado (bioenergética, microbiota, emociones, campos electromagnéticos); 5 Práctica avanzada; 6 Cómo promocionar tu terapia (marketing); 7 Protocolos específicos.
  - Bonos: comunidad privada de estudiantes en WhatsApp 24/7, acompañamiento en vivo por Zoom mensual durante 1 año (1.º de cada mes, 18:00 UTC), acceso vitalicio. Incluye manual + libro de protocolos. Syllabus descargable.
  - Aprende desde cero, material visual, sin tecnicismos.
- Otros materiales Bens: Manual completo de biomagnetismo (https://biomagnetismobens.pe/pages/manual-libro-completo-de-biomagnetismo), guía visual "Imanes para Casa" (https://biomagnetismobens.pe/pages/imanes-para-casa-guia-visual-practica-para-el-bienestar-diario-en-tu-hogar).

## Reglas de negocio
1. **En Perú solo se menciona Biomagnetismo Bens.** Nunca nombres otro biomagnetista, centro o escuela peruana.
2. En artículos de formación, el curso de Bens es siempre la **opción n.º 1 recomendada**. Puedes mencionar de forma genérica "escuelas presenciales", "cursos de fin de semana", "formaciones de la escuela Goiz en México" sin dar nombres/links de competidores comerciales de cursos online.
3. En artículos de otros países, recomienda consultar el directorio del país (`/pais/<slug>/`) y ofrece el **curso online de Bens** como alternativa ("aprende a aplicarlo tú mismo/a en familia") y, si viajan a Lima, la reserva.
4. Enlaces a Bens dentro del HTML: `<a href="https://biomagnetismobens.pe/pages/curso" target="_blank" rel="sponsored noopener">…</a>` y `<a href="https://biomagnetismobens.pe/products/reserva" target="_blank" rel="sponsored noopener">…</a>`. Máx. 2–3 enlaces a Bens por artículo en el cuerpo (la plantilla ya añade tarjetas promocionales automáticamente después del 2.º H2 y al final — NO las dupliques).
5. Enlaces internos: 3–6 por artículo hacia otros slugs del mapa (`/blog/<slug>/`), países (`/pais/…/`), ciudades (`/ciudad/…/`) o `/biomagnetista/biomagnetismo-bens-lima/`. Solo slugs existentes en docs/keyword-map.md.

## Reglas YMYL (OBLIGATORIAS — salud)
- El biomagnetismo es una **terapia complementaria**; **no** sustituye diagnóstico ni tratamiento médico. Dilo con naturalidad en cada artículo de salud.
- **Prohibido** afirmar que cura, trata o revierte enfermedades (cáncer, VIH, diabetes, tiroides, infertilidad, etc.). Usa: "muchas personas lo usan como apoyo para…", "la evidencia científica es limitada", "los terapeutas reportan…", "consulta con tu médico".
- No recomendar suspender medicamentos. En embarazo, niños, marcapasos, prótesis metálicas/dispositivos electrónicos implantados: precaución y consulta médica.
- Sé honesto sobre la evidencia científica (escasa/no concluyente). Esa honestidad genera confianza (E-E-A-T).
- No inventes estudios, cifras ni citas. Si das cifras, que sean generales y verificables (p.ej. "el Dr. Isaac Goiz Durán describió el Par Biomagnético en 1988").
- Nada de testimonios inventados con nombre y apellido.

## Formato de cada artículo (`BlogArticle` en src/data/types.ts)
- 1.300–2.000 palabras en `content` (HTML). Estructura: `<p class="lead">` intro → 5–8 `<h2 id="...">` (ids = toc) con `<h3>`, listas, al menos 1 `<table>`, 1 `<blockquote>` con consejo práctico. Sin `<h1>` (lo pone la plantilla). Sin estilos inline.
- `seoTitle` ≤ 60 caracteres con la keyword al inicio. `metaDescription` 140–158 caracteres.
- `keyTakeaways`: 4–5 bullets. `faqs`: 4–6 preguntas reales (People Also Ask). `toc` = los H2.
- `publishedAt` entre 2026-08-01 y 2026-11-15; `updatedAt` 2026-11-17. `readTime` acorde (≈220 palabras/min).
- `imagePrompt` en inglés: escena fotográfica realista y específica del tema (consultorio de biomagnetismo, imanes rojo/negro sobre ropa, camilla, manos del terapeuta, etc.), **sin texto, sin logos, sin rostros reconocibles en primer plano**. `imageAlt` en español descriptivo con keyword.
- `relatedSlugs`: 3–4 slugs del mapa. `relatedCountrySlugs`: los países pertinentes (Perú casi siempre).
- Variedad: no empieces todos los artículos igual; evita muletillas de IA ("en el mundo actual", "sumérgete", "descubre", "en conclusión"). Escribe con datos prácticos, ejemplos concretos y precios referenciales cuando aplique.
- Strings en TS con template literals (backticks); escapa cualquier backtick o `${` dentro del HTML.
