import type { Biomagnetista } from "../types";

/**
 * Biomagnetistas de la región andina (Colombia, Ecuador, Bolivia, Venezuela).
 * Datos verificados en fuentes públicas (ver `sourceUrls` de cada ficha) en noviembre de 2026.
 * Sin reseñas inventadas: `reviews` vacío salvo extractos públicos verificados.
 * Ratings públicos solo cuando se vieron en la fuente indicada en `publicRatingSource`.
 */
export const BIOMAGNETISTAS_ANDINA: Biomagnetista[] = [
  // ───────────────────────── COLOMBIA · BOGOTÁ ─────────────────────────
  {
    slug: "camino-de-luz-bogota",
    name: "Camino de Luz – Biomagnetismo Integral (Natalia Galindo)",
    countrySlug: "colombia",
    citySlug: "bogota",
    district: "Usaquén",
    modalities: ["presencial"],
    website: "https://www.caminodeluz.com.co/",
    instagram: "https://www.instagram.com/caminodeluzbienestar/",
    facebook: "https://www.facebook.com/profile.php?id=61576883639394",
    phone: "+57 320 835 7430",
    editorialScore: 4.4,
    specialties: ["Par biomagnético", "Biodescodificación emocional", "Sonoterapia con cuencos", "Terapia vibracional"],
    description:
      "Camino de Luz es el espacio de la psicóloga Natalia Galindo en Usaquén, al norte de Bogotá. Su propuesta, llamada Biomagnetismo Integral, combina el rastreo y la colocación de imanes según la técnica de pares biomagnéticos con un trabajo de biodescodificación emocional, de modo que cada sesión mira tanto el cuerpo como la historia personal del consultante. Complementa la consulta con experiencias de sonoterapia con cuencos tibetanos y de cuarzo pensadas para reducir el estrés. Atiende solo con cita previa y la reserva se gestiona por WhatsApp. Es una buena opción para quien busca un acompañamiento cercano y con enfoque emocional; como toda terapia complementaria, conviene usarla junto al seguimiento médico habitual y no como sustituto.",
    highlights: [
      "Terapeuta con formación en psicología",
      "Integra biomagnetismo y biodescodificación en la misma sesión",
      "Atención con cita previa en Usaquén",
      "Contacto directo por WhatsApp",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.caminodeluz.com.co/",
      "https://www.caminodeluz.com.co/biomagnetismo-integral/",
    ],
    imagePrompt:
      "Calm therapy room in a Bogotá apartment, padded treatment table with white linen, small red and black biomagnetism magnets arranged on a wooden tray, Tibetan singing bowls on a shelf, warm natural light through sheer curtains, plants, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "victoria-cogollos-bogota",
    name: "Dra. Victoria Marelys Cogollos Munévar – Medicina Alternativa",
    countrySlug: "colombia",
    citySlug: "bogota",
    address: "Transversal 75 # 82-89, piso 1, Bogotá",
    modalities: ["presencial"],
    publicRating: 5,
    publicReviewCount: 107,
    publicRatingSource: "Doctoralia",
    editorialScore: 4.5,
    specialties: ["Biomagnetismo", "Acupuntura y moxibustión", "Terapia neural", "Homeopatía", "Campos magnéticos"],
    priceNote: "Biomagnetismo: COP 80.000 por sesión (precio publicado en Doctoralia, referencial)",
    description:
      "La Dra. Victoria Marelys Cogollos Munévar es médica alternativa y atiende en un consultorio de primer piso en la Transversal 75, en el noroccidente de Bogotá. Su perfil en Doctoralia es uno de los más valorados de la ciudad dentro de la categoría de biomagnetismo, con más de cien opiniones públicas. El biomagnetismo forma parte de un abanico amplio de terapias que ella misma ofrece, como acupuntura, terapia neural, homeopatía, reflexología y campos magnéticos, lo que permite armar planes combinados según cada caso. Publica sus tarifas de forma transparente y permite agendar en línea. Es una alternativa interesante para quien prefiere un profesional con formación médica que integre el par biomagnético dentro de una consulta más amplia, siempre como complemento de su tratamiento convencional.",
    highlights: [
      "Formación médica con enfoque alternativo",
      "Más de 100 opiniones públicas en Doctoralia",
      "Precios publicados y reserva en línea",
      "Combina biomagnetismo con otras terapias complementarias",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.co/perfil/victoria-marelys-cogollos-munevar",
      "https://www.doctoralia.co/tratamientos-servicios/biomagnetismo/bogota",
    ],
    imagePrompt:
      "Bright medical consulting room for complementary therapy, treatment couch with paper sheet, pairs of red and black therapy magnets on a stainless tray, acupuncture model on a side table, clean white walls, soft daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "maria-del-rosario-marturet-bogota",
    name: "María del Rosario Marturet – Biomagnetismo y Bioneuroemoción",
    countrySlug: "colombia",
    citySlug: "bogota",
    address: "Cra. 22 #137-17, Bogotá",
    modalities: ["presencial"],
    publicRating: 5,
    publicReviewCount: 14,
    publicRatingSource: "Doctoralia",
    editorialScore: 4.4,
    specialties: ["Biomagnetismo", "Bioneuroemoción", "Barras de Access", "Terapia floral"],
    description:
      "María del Rosario Marturet es terapeuta complementaria en el norte de Bogotá, con consultorio en la Carrera 22 con calle 137. Licenciada en Bioanálisis, cuenta en su perfil público con seis años de ejercicio como biomagnetista, a los que en los últimos años ha sumado formación en Bioneuroemoción, Barras de Access y terapia floral. Su forma de trabajar es personalizada: el par biomagnético se integra en un acompañamiento que también atiende lo emocional y la manera en que cada persona vive su proceso. Las opiniones que recibe en Doctoralia son pocas pero uniformemente positivas. Encaja bien con quienes buscan una terapeuta con base científica de laboratorio y un trato pausado, entendiendo el biomagnetismo como apoyo complementario y no como reemplazo de la atención médica.",
    highlights: [
      "Seis años de práctica como biomagnetista",
      "Formación de base en Bioanálisis",
      "Enfoque que integra cuerpo y emociones",
      "Perfil verificado en Doctoralia con valoraciones de 5/5",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.co/perfil/maria-del-rosario-marturet-a",
      "https://www.doctoralia.co/tratamientos-servicios/biomagnetismo/bogota",
    ],
    imagePrompt:
      "Cozy holistic therapy studio, massage table with soft beige blanket, red and black biomagnetism magnets placed on a folded towel, small glass bottles of flower essences on a wooden shelf, warm lamp light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "biomagnetismo-por-bogota-bogota",
    name: "Biomagnetismo por Bogotá",
    countrySlug: "colombia",
    citySlug: "bogota",
    modalities: ["presencial", "a-distancia"],
    instagram: "https://instagram.com/biomagnetismo_por_bogota",
    website: "https://linktr.ee/biomagnetismoporbogota",
    editorialScore: 4.1,
    specialties: ["Par biomagnético a domicilio", "Sesiones a distancia"],
    description:
      "Biomagnetismo por Bogotá es un servicio de par biomagnético con un formato poco habitual: en lugar de un consultorio fijo, el terapeuta se desplaza al domicilio del consultante en Bogotá y municipios cercanos, y atiende al resto de Colombia mediante sesiones a distancia. Esta modalidad resulta práctica para personas mayores, con movilidad reducida o con agendas apretadas que prefieren no cruzar la ciudad. Los canales de contacto, el catálogo de servicios y el WhatsApp de reservas se concentran en su página de enlaces y en su perfil de Instagram. Antes de agendar, recomendamos preguntar por la formación del terapeuta, la duración estimada y el costo del desplazamiento. Como cualquier terapia complementaria, el biomagnetismo debe acompañar, no sustituir, la atención médica.",
    highlights: [
      "Atención a domicilio en Bogotá y alrededores",
      "Sesiones a distancia para el resto del país",
      "Catálogo de servicios y reserva por WhatsApp",
    ],
    reviews: [],
    sourceUrls: ["https://linktr.ee/biomagnetismoporbogota"],
    imagePrompt:
      "Home living room prepared for a biomagnetism session, portable folding therapy table with white sheet, small case of red and black magnets open on a coffee table, natural window light, plants, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── COLOMBIA · MEDELLÍN ─────────────────────────
  {
    slug: "biomagnetismo-medellin-medellin",
    name: "Biomagnetismo Medellín",
    countrySlug: "colombia",
    citySlug: "medellin",
    district: "Envigado / Llanogrande",
    modalities: ["presencial"],
    website: "https://biomagnetismomedellin.com/",
    instagram: "https://www.instagram.com/biomagnetismo.medellin_1",
    facebook: "https://www.facebook.com/1579893762283462",
    phone: "+1 978 704 5902 (WhatsApp)",
    editorialScore: 4.3,
    specialties: ["Biomagnetismo médico", "Par biomagnético (método Goiz)"],
    description:
      "Biomagnetismo Medellín es un proyecto dedicado exclusivamente al par biomagnético, con base en Envigado y atención también en Medellín y Llanogrande, en el oriente antioqueño. Sus terapeutas indican estar certificados por el Dr. Isaac Goiz Durán, creador del método, y el sitio web está disponible en español, inglés y ruso, algo útil para la comunidad extranjera que vive en el Valle de Aburrá. Las citas se reservan por WhatsApp y funcionan siempre con agenda previa, de lunes a sábado. El proyecto mantiene además una sede en Florida (Estados Unidos), de ahí el prefijo internacional de su número de contacto. Recomendado para quien busca un centro especializado en biomagnetismo, entendido como terapia complementaria que no reemplaza el diagnóstico ni el tratamiento médico.",
    highlights: [
      "Centro dedicado solo al biomagnetismo",
      "Atención en Envigado, Medellín y Llanogrande",
      "Sitio web en español, inglés y ruso",
      "Reservas por WhatsApp con cita previa",
    ],
    reviews: [],
    sourceUrls: [
      "https://biomagnetismomedellin.com/",
      "https://biomagnetismomedellin.com/contacto",
      "https://www.instagram.com/biomagnetismo.medellin_1/",
    ],
    imagePrompt:
      "Modern therapy room in Medellín with tropical plants, padded treatment table, neatly arranged red and black biomagnetism magnets on a white tray, large window with green hills view, soft daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "federico-gomez-medellin",
    name: "Dr. Federico Gómez – Fisioterapia y Terapias Complementarias",
    countrySlug: "colombia",
    citySlug: "medellin",
    district: "Laureles",
    address: "Carrera 77B #53A-112, Medellín",
    modalities: ["presencial", "a-distancia"],
    website: "https://www.federicogomezfisio.com/",
    phone: "+57 300 2041878",
    publicRating: 5,
    publicReviewCount: 104,
    publicRatingSource: "Doctoralia",
    editorialScore: 4.3,
    specialties: ["Fisioterapia", "Terapia manual", "Biomagnetismo", "Acupuntura", "Terapia neural", "Biodescodificación"],
    priceNote: "Consultas desde COP 100.000 (referencial, según su web)",
    description:
      "Federico Gómez es fisioterapeuta y terapeuta complementario con más de diez años de experiencia y consultorio en Laureles, Medellín. Su práctica se centra en el dolor crónico, la fascia y la relación entre lo físico y lo emocional, y combina terapia manual y liberación miofascial con herramientas como acupuntura, terapia neural, homeopatía, biodescodificación y biomagnetismo, que aplica según el caso y no como protocolo fijo. Esta mezcla resulta atractiva para quien llega con molestias musculares o articulares y quiere que el biomagnetismo forme parte de un abordaje más amplio, guiado por un profesional de la salud colegiado. Atiende de forma presencial y también ofrece consulta en línea. Su perfil en Doctoralia acumula más de cien opiniones públicas.",
    highlights: [
      "Fisioterapeuta colegiado con más de 10 años de experiencia",
      "Biomagnetismo integrado en un abordaje del dolor",
      "Más de 100 opiniones públicas en Doctoralia",
      "Consulta presencial en Laureles y en línea",
    ],
    reviews: [],
    sourceUrls: ["https://www.federicogomezfisio.com/", "https://www.doctoralia.co/perfil/federico-gomez"],
    imagePrompt:
      "Physiotherapy and complementary therapy clinic room, treatment table, anatomical spine model, pairs of red and black magnets on a side cart, foam rollers in the corner, clean bright interior, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── COLOMBIA · CALI ─────────────────────────
  {
    slug: "carlos-alberto-ramirez-parada-cali",
    name: "Carlos Alberto Ramírez Parada – Biomagnetismo Médico",
    countrySlug: "colombia",
    citySlug: "cali",
    address: "Cra 23 D 10-52, Cali",
    modalities: ["presencial"],
    publicRating: 5,
    publicReviewCount: 33,
    publicRatingSource: "Doctoralia",
    editorialScore: 4.6,
    specialties: ["Biomagnetismo médico", "Par biomagnético (escuela Goiz)", "Campos magnéticos"],
    description:
      "Carlos Alberto Ramírez Parada es terapeuta complementario en Cali y uno de los perfiles con trayectoria más visible en biomagnetismo del suroccidente colombiano. En su perfil público figura formación en la Escuela de Biomagnetismo Isaac Goiz Durán de México, además de estudios en otras escuelas de terapias complementarias, y reconocimientos como ponente en los congresos internacionales de biomagnetismo médico celebrados en Ciudad de México. Atiende en su consultorio de la Carrera 23D y permite reservar a través de Doctoralia, donde acumula decenas de opiniones con valoración máxima. Es una opción recomendable para quien valora la formación directa en la escuela del creador del método y la participación activa en la comunidad internacional del biomagnetismo, siempre como apoyo complementario a la medicina convencional.",
    highlights: [
      "Formación en la Escuela de Biomagnetismo Isaac Goiz Durán",
      "Ponente en congresos internacionales de biomagnetismo",
      "33 opiniones con 5/5 en Doctoralia",
      "Reserva en línea",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.co/perfil/carlos-alberto-ramirez-parada",
      "https://www.doctoralia.co/tratamientos-servicios/biomagnetismo/cali",
    ],
    imagePrompt:
      "Professional biomagnetism consulting room in Cali, treatment couch with white cover, framed certificates on the wall blurred and unreadable, red and black magnets lined up on a glass tray, warm afternoon light, realistic photography, no people, no faces, no readable text, no logos",
  },
  {
    slug: "dr-gonzalo-munoz-biomagnetismo-cali",
    name: "Biomagnetismo Médico Dr. Gonzalo Muñoz",
    countrySlug: "colombia",
    citySlug: "cali",
    district: "Los Cámbulos",
    address: "Calle 9D # 40A-104, Barrio Los Cámbulos, Cali",
    modalities: ["presencial"],
    website: "https://drgonzalobiomagnetismo.com/",
    phone: "+57 316 845 2057",
    editorialScore: 4.5,
    specialties: ["Biomagnetismo médico", "Neuropsicología", "Medicina alternativa"],
    description:
      "El consultorio del Dr. Gonzalo Muñoz, en el barrio Los Cámbulos, es una referencia veterana del biomagnetismo en Cali: su sitio web está activo desde 2017 y presenta al equipo como especialistas en medicina alternativa. Además del par biomagnético, el consultorio ofrece un servicio de neuropsicología, lo que da un enfoque algo más amplio que el de un gabinete exclusivamente de imanes. Publica horarios extensos, de lunes a viernes en jornada de mañana y tarde y los sábados por la mañana, y atiende tanto por teléfono fijo como por celular. Para quien vive en el sur de Cali es una opción cómoda y con años de continuidad. Recordamos que el biomagnetismo es una terapia complementaria con evidencia científica limitada y que no sustituye el tratamiento médico.",
    highlights: [
      "Consultorio con trayectoria en Cali desde 2017",
      "Biomagnetismo y neuropsicología en el mismo lugar",
      "Horario amplio entre semana y sábados",
      "Dirección y teléfonos publicados",
    ],
    reviews: [],
    sourceUrls: ["https://drgonzalobiomagnetismo.com/", "https://drgonzalobiomagnetismo.com/contacto/"],
    imagePrompt:
      "Traditional medical consulting office in Cali converted for biomagnetism therapy, wooden desk, padded examination table, small red and black magnets in a labeled-free organizer box, ceiling fan, tropical daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── COLOMBIA · BARRANQUILLA ─────────────────────────
  {
    slug: "claudia-maria-diaz-buelvas-barranquilla",
    name: "Claudia María Díaz Buelvas – Fisioterapias IPS",
    countrySlug: "colombia",
    citySlug: "barranquilla",
    address: "Carrera 51B # 82-141, Barranquilla",
    modalities: ["presencial"],
    publicRating: 5,
    publicReviewCount: 189,
    publicRatingSource: "Doctoralia",
    editorialScore: 4.3,
    specialties: ["Fisioterapia", "Biomagnetismo", "Drenaje linfático manual", "Biofeedback"],
    description:
      "Claudia María Díaz Buelvas es fisioterapeuta en Barranquilla y atiende en la sede de Fisioterapias IPS, sobre la Carrera 51B en el norte de la ciudad. Su perfil en Doctoralia es de los más reseñados de la costa caribe en su área, con cerca de doscientas opiniones públicas, y entre sus servicios figura el biomagnetismo junto a fisioterapia convencional, drenaje linfático manual, biofeedback y acondicionamiento físico. Esta combinación es útil para pacientes en rehabilitación que quieren sumar una terapia complementaria sin salir del marco de una institución prestadora de salud. Recomendamos confirmar al agendar que la sesión incluya rastreo biomagnético y no solo fisioterapia. El biomagnetismo debe entenderse como apoyo complementario, nunca como reemplazo del tratamiento indicado por el médico.",
    highlights: [
      "Fisioterapeuta en una IPS habilitada",
      "Cerca de 190 opiniones públicas en Doctoralia",
      "Biomagnetismo como complemento a la rehabilitación",
      "Ubicación en el norte de Barranquilla",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.co/perfil/claudia-maria-diaz-buelvas-2",
      "https://www.doctoralia.co/tratamientos-servicios/biomagnetismo/barranquilla",
    ],
    imagePrompt:
      "Physiotherapy clinic room in Barranquilla, treatment bed, exercise balls and resistance bands on the wall, small set of red and black biomagnetism magnets on a side table, bright Caribbean daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── ECUADOR · QUITO ─────────────────────────
  {
    slug: "biomagnetismo-medicinal-jorge-mena-quito",
    name: "Centro de Biomagnetismo Medicinal Dr. Jorge Mena",
    countrySlug: "ecuador",
    citySlug: "quito",
    district: "Norte (Av. 10 de Agosto)",
    address: "Av. 10 de Agosto N44-52 y Río Coca, piso 2, Quito",
    modalities: ["presencial"],
    website: "https://biomagnetismomedicinal.org/",
    facebook: "https://www.facebook.com/JorgeMena.BiomagnetismoMedicinal",
    phone: "+593 2 2435 289 / +593 96 849 2717",
    editorialScore: 4.6,
    specialties: ["Par biomagnético (método Goiz)", "Formación de terapeutas", "Curso online"],
    description:
      "El Centro de Biomagnetismo Medicinal, dirigido por el Dr. Jorge Mena Flores, doctor en Psicología, es uno de los referentes históricos del par biomagnético en Ecuador. Su director figura como instructor autorizado por el Centro de Biomagnetismo de México, y el centro ha organizado cursos de formación en Ecuador y otros países durante más de una década. Atiende en el segundo piso de un edificio de la Av. 10 de Agosto, en el norte de Quito, con horario de lunes a viernes en jornada partida y sábados por la mañana, siempre con cita previa. Además de las sesiones, ofrece un curso online para quienes quieren aprender la técnica. Es una elección sólida para quien prioriza trayectoria y vínculo directo con la escuela original, entendiendo el biomagnetismo como terapia complementaria.",
    highlights: [
      "Director instructor autorizado por el Centro de Biomagnetismo de México",
      "Más de una década formando terapeutas",
      "Horario publicado y atención con cita previa",
      "Curso online de biomagnetismo",
    ],
    reviews: [],
    sourceUrls: [
      "https://biomagnetismomedicinal.org/",
      "https://biomagnetismomedicinal.org/contactenos/",
      "https://biomagnetismomedicinal.org/nuestro-equipo/",
      "https://www.facebook.com/JorgeMena.BiomagnetismoMedicinal",
    ],
    imagePrompt:
      "Established biomagnetism center in Quito, spacious treatment room with two padded tables, shelves with neatly stacked red and black magnets, Andean mountain view through the window, soft high-altitude daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "provital-quito",
    name: "Provital – Servicio Integral de Salud",
    countrySlug: "ecuador",
    citySlug: "quito",
    modalities: ["presencial"],
    website: "https://provital.ec/biomagnetismo-medico/",
    instagram: "https://www.instagram.com/provital_ec/",
    facebook: "https://www.facebook.com/ProvitalQuito",
    phone: "+593 98 447 0354 (WhatsApp)",
    editorialScore: 4.2,
    specialties: ["Biomagnetismo médico", "Evaluación energética", "Medicina integrativa"],
    description:
      "Provital es un centro de salud integral en Quito que reúne varias especialidades y dedica un servicio específico al biomagnetismo médico. Su página describe la terapia de forma prudente, como complemento que puede combinarse con tratamientos convencionales, y detalla un esquema de trabajo que parte de una evaluación energética personalizada mediante rastreo biomagnético y continúa con sesiones de seguimiento y mantenimiento. Al tratarse de un centro multidisciplinario, es una opción cómoda para quien quiere tener en un mismo lugar consultas de otras especialidades y la terapia con imanes. Las citas se agendan por WhatsApp o desde su web, y mantiene perfiles activos en Instagram y Facebook. Recomendamos preguntar por el terapeuta asignado y su formación antes de la primera sesión.",
    highlights: [
      "Centro multidisciplinario con servicio propio de biomagnetismo",
      "Enfoque explícitamente complementario",
      "Agenda en línea y por WhatsApp",
    ],
    reviews: [],
    sourceUrls: ["https://provital.ec/biomagnetismo-medico/", "https://provital.ec/"],
    imagePrompt:
      "Contemporary integrative health clinic in Quito, clean consultation room with treatment table, tablet on a desk, set of red and black biomagnetism magnets on a white shelf, minimalist decor, bright daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "dr-jorge-jaramillo-tumbaco-quito",
    name: "Dr. Jorge Alejandro Jaramillo Eguez – Biomagnetismo Medicinal",
    countrySlug: "ecuador",
    citySlug: "quito",
    district: "Tumbaco",
    address: "Calle Jama OE2 N4331, Parroquia Tumbaco, Quito",
    modalities: ["presencial"],
    editorialScore: 4.3,
    specialties: ["Biomagnetismo medicinal", "Par biomagnético"],
    description:
      "El Dr. Jorge Alejandro Jaramillo Eguez es médico y atiende biomagnetismo medicinal en su consultorio de Tumbaco, en el valle oriental de Quito, una zona residencial cada vez más poblada que suele quedar lejos de los centros del norte de la ciudad. Su perfil en el directorio Doctoranytime lo presenta específicamente como profesional de biomagnetismo y facilita el contacto por chat y teléfono, además de indicaciones precisas para llegar al consultorio. Para los vecinos de Tumbaco, Cumbayá y Puembo, contar con un médico que practique el par biomagnético cerca de casa es una ventaja práctica. Sugerimos confirmar horarios y tarifas antes de acudir, y recordar que el biomagnetismo es un recurso complementario que no sustituye el diagnóstico ni el tratamiento médico.",
    highlights: [
      "Médico que se dedica al biomagnetismo",
      "Consultorio en el valle de Tumbaco",
      "Contacto por chat y teléfono vía Doctoranytime",
    ],
    reviews: [],
    sourceUrls: ["https://www.doctoranytime.ec/d/especialista-en-medicina-alternativa/jorge-alejandro-eugenio-jaramillo-eguez"],
    imagePrompt:
      "Small home-based medical office in a suburban valley near Quito, padded treatment table, wooden cabinet with red and black biomagnetism magnets, garden visible through window, warm natural light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "biomagnetismo-mitad-del-mundo-quito",
    name: "Biomagnetismo Mitad del Mundo (Alberto Martín Carlier Palomeque)",
    countrySlug: "ecuador",
    citySlug: "quito",
    address: "Pasaje A N45-48 y Zamora, Quito",
    modalities: ["presencial"],
    editorialScore: 4.1,
    specialties: ["Biomagnetismo", "Par biomagnético"],
    description:
      "Biomagnetismo Mitad del Mundo es el consultorio de Alberto Martín Carlier Palomeque, registrado en el directorio Doctoranytime Ecuador como especialista en medicina alternativa con cédula profesional publicada. Atiende en el norte de Quito, en un pasaje cercano a la calle Zamora, y se dedica de manera específica al biomagnetismo, lo que lo diferencia de los centros que lo ofrecen como un servicio más entre muchos. Su perfil aún no está reclamado en la plataforma y no admite reserva en línea, de modo que lo recomendable es solicitar el teléfono desde el directorio y coordinar la cita directamente. Es una opción a considerar para quien vive en el norte de la capital y busca un consultorio especializado y de escala pequeña, siempre entendiendo la terapia como complemento de la atención médica.",
    highlights: [
      "Consultorio dedicado específicamente al biomagnetismo",
      "Cédula profesional visible en Doctoranytime",
      "Ubicación en el norte de Quito",
    ],
    reviews: [],
    sourceUrls: ["https://www.doctoranytime.ec/d/especialista-en-medicina-alternativa/alberto-martin-carlier-palomeque"],
    imagePrompt:
      "Simple neighborhood biomagnetism office in Quito, single treatment table with blue cover, plastic box with red and black magnets, small potted plant, overcast Andean daylight through window, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── ECUADOR · GUAYAQUIL ─────────────────────────
  {
    slug: "biomagnetismo-guayaquil-guayaquil",
    name: "Biomagnetismo Guayaquil",
    countrySlug: "ecuador",
    citySlug: "guayaquil",
    district: "Centro",
    address: "Vélez 1114 y Machala, 2.º piso, Guayaquil",
    modalities: ["presencial"],
    phone: "+593 97 918 4810",
    editorialScore: 4.1,
    specialties: ["Biomagnetismo", "Quiropraxia"],
    priceNote: "En noviembre de 2026 anunciaba primera terapia promocional de US$ 20 (referencial)",
    description:
      "Biomagnetismo Guayaquil ofrece sesiones de biomagnetismo combinadas con quiropraxia en el centro de la ciudad, en el segundo piso de un edificio de la calle Vélez esquina Machala. Funciona sobre todo mediante jornadas de atención anunciadas en su canal de YouTube y redes, con fechas concretas y horarios de mañana a tarde; en noviembre de 2026 publicó una de estas campañas con precio promocional para la primera sesión. Las citas se piden por WhatsApp o llamada indicando nombre y día preferido. Es una alternativa accesible para quien vive o trabaja en el centro de Guayaquil. Su publicidad usa mensajes muy optimistas, por lo que recordamos que el biomagnetismo no reemplaza exámenes, diagnósticos ni medicamentos indicados por un médico: debe usarse solo como complemento.",
    highlights: [
      "Biomagnetismo y quiropraxia en la misma visita",
      "Ubicación céntrica en Guayaquil",
      "Jornadas con precio promocional anunciadas públicamente",
      "Reservas por WhatsApp o teléfono",
    ],
    reviews: [],
    sourceUrls: ["https://www.youtube.com/shorts/1Gd5ZVmGAyU", "https://www.youtube.com/@biomagnetismoguayaquil"],
    imagePrompt:
      "Downtown Guayaquil therapy office on an upper floor, chiropractic table and a padded biomagnetism couch, red and black magnets on a metal tray, ceiling fan, humid tropical daylight through blinds, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "heidy-cueva-romero-guayaquil",
    name: "Heidy Cueva Romero – Medicina Alternativa",
    countrySlug: "ecuador",
    citySlug: "guayaquil",
    district: "Vía a Samborondón",
    address: "Edificio Global Center, oficina 114, km 5 vía a Samborondón, Guayaquil",
    modalities: ["presencial"],
    editorialScore: 4.0,
    specialties: ["Terapéuticas con biomagnetismo", "Acupuntura", "Electroacupuntura", "Terapia con ventosas", "Terapia neural"],
    description:
      "Heidy Cueva Romero es especialista en medicina alternativa con consultorio en el edificio Global Center, a la altura del kilómetro 5 de la vía a Samborondón, una zona de fácil acceso para quienes viven en Samborondón, La Puntilla y el norte de Guayaquil. Su currículo público en Doctoranytime incluye una formación en terapéuticas con biomagnetismo cursada en 2021 en el Instituto Pedagógico ASEDU de Ecuador, y su consulta se orienta también a la acupuntura, la electroacupuntura, las ventosas y la terapia neural, con especial atención a contracturas y lesiones. El perfil indica cédula profesional y dirección, aunque no permite reservar en línea, por lo que conviene pedir el teléfono desde la plataforma. El biomagnetismo debe entenderse aquí como complemento, no como alternativa al tratamiento médico.",
    highlights: [
      "Formación en terapéuticas con biomagnetismo (2021)",
      "Combina biomagnetismo con acupuntura y terapia neural",
      "Consultorio en la vía a Samborondón",
    ],
    reviews: [],
    sourceUrls: ["https://www.doctoranytime.ec/d/especialista-en-medicina-alternativa/heidy-cueva-romero"],
    imagePrompt:
      "Office-building therapy room near Samborondón, treatment table, acupuncture needles case and cupping glasses on a cart beside red and black biomagnetism magnets, modern clean interior, bright daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── ECUADOR · CUENCA ─────────────────────────
  {
    slug: "espacio-holistico-luz-divina-cuenca",
    name: "Espacio Holístico Luz Divina (Rocío Ullauri)",
    countrySlug: "ecuador",
    citySlug: "cuenca",
    district: "Vía a Barabón",
    address: "Vía a Barabón Soldados, a 500 m del Tenis Club, Cuenca",
    modalities: ["presencial", "a-distancia"],
    website: "https://www.rocioluzdivina.com/",
    facebook: "https://www.facebook.com/rocioluzdivina/",
    phone: "+593 99 450 2150",
    editorialScore: 4.2,
    specialties: ["Biomagnetismo", "Bioneuroemoción", "Constelaciones familiares", "Kinesiología aplicada", "Sanación con cuencos"],
    description:
      "Luz Divina es el espacio holístico de la terapeuta Rocío Ullauri, ubicado en la vía a Barabón, a las afueras de Cuenca y cerca del Tenis Club, en un entorno tranquilo y verde. El biomagnetismo forma parte de un menú amplio de terapias que incluye bioneuroemoción, constelaciones familiares, kinesiología aplicada, ThetaHealing, rebirthing y sesiones con cuencos de cuarzo. Ofrece atención presencial, virtual y a distancia, lo que facilita el seguimiento a personas que no viven en Cuenca. Es una opción adecuada para quien busca un enfoque espiritual y emocional amplio en el que el par biomagnético sea una herramienta más. Quien quiera una consulta centrada solo en el rastreo biomagnético debería indicarlo al reservar. Como siempre, se trata de terapias complementarias a la atención médica.",
    highlights: [
      "Espacio holístico en entorno natural de Cuenca",
      "Biomagnetismo dentro de un enfoque emocional amplio",
      "Sesiones presenciales, virtuales y a distancia",
      "Web y Facebook activos con datos de contacto",
    ],
    reviews: [],
    sourceUrls: ["https://www.rocioluzdivina.com/", "https://www.facebook.com/rocioluzdivina/"],
    imagePrompt:
      "Serene holistic therapy room in a countryside house near Cuenca Ecuador, treatment table with woven blanket, quartz singing bowls, red and black biomagnetism magnets on a wooden tray, green hills through window, soft light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "andrea-patino-sanchez-cuenca",
    name: "Andrea María Patiño Sánchez – Psicología y Biomagnetismo",
    countrySlug: "ecuador",
    citySlug: "cuenca",
    modalities: ["presencial", "a-distancia"],
    phone: "+593 98 086 2442",
    editorialScore: 4.1,
    specialties: ["Psicología clínica", "Biomagnetismo", "Constelaciones familiares", "PNL"],
    description:
      "Andrea María Patiño Sánchez es psicóloga clínica en Cuenca, con maestría en psicoterapia y en programación neurolingüística, y figura en el directorio de salud ecuatoriano Doctopro también como terapeuta con biomagnetismo y consteladora familiar. Su perfil está catalogado en telemedicina y psicología clínica, por lo que puede atender tanto en persona como de forma remota. Para quien busca integrar el biomagnetismo dentro de un proceso terapéutico con respaldo de una profesional de la psicología, esta combinación resulta interesante, especialmente cuando el motivo de consulta tiene un componente emocional importante. El teléfono de contacto está publicado en el directorio. Recomendamos aclarar al agendar si se desea una sesión de biomagnetismo o de psicoterapia, y recordar que el biomagnetismo no sustituye la atención médica.",
    highlights: [
      "Psicóloga clínica con maestría en psicoterapia",
      "Terapeuta con biomagnetismo",
      "Atención presencial y por telemedicina",
    ],
    reviews: [],
    sourceUrls: ["https://www.doctopro.com/dr/andreapatinosanchez"],
    imagePrompt:
      "Warm psychotherapy office in Cuenca, armchair and a padded therapy couch, small box of red and black biomagnetism magnets on a side table, bookshelf with blurred spines, colonial-style window with soft light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── BOLIVIA · SANTA CRUZ ─────────────────────────
  {
    slug: "alejandro-pardo-santa-cruz",
    name: "Lic. Alejandro Pardo – Biomagnetismo Integral y Masaje Bioenergético",
    countrySlug: "bolivia",
    citySlug: "santa-cruz",
    district: "Av. Banzer",
    address: "Av. Banzer 222, Condominio Torres Gemelas, Torre Norte, piso 11, dpto. 1101, Santa Cruz de la Sierra",
    modalities: ["presencial"],
    website: "https://masajebioenergetico.com.bo/",
    phone: "+591 62837735 (WhatsApp)",
    editorialScore: 4.4,
    specialties: ["Biomagnetismo Integral (sistema AzulCamet)", "Masaje bioenergético", "Psicología integrativa"],
    priceNote: "Sesiones desde Bs 450, con reserva de Bs 200 (referencial, según su web)",
    description:
      "Alejandro Pardo es licenciado en psicología y terapeuta corporal en Santa Cruz de la Sierra, con consultorio en un piso alto del condominio Torres Gemelas, sobre la Av. Banzer. Su trabajo gira en torno al masaje bioenergético, un abordaje psicofísico para liberar tensión acumulada, y al Biomagnetismo Integral según el sistema AzulCamet, una variante que coloca los imanes siguiendo pautas anatómicas en cráneo, columna y trayectos nerviosos. Comunica sus precios y horarios con claridad, trabaja solo con cita y su web muestra más de un centenar de reseñas procedentes de Google. Es una de las propuestas más activas y profesionalizadas de la ciudad. Hay que tener en cuenta que el sistema AzulCamet no es idéntico al par biomagnético clásico de Goiz, y que ambos son terapias complementarias.",
    highlights: [
      "Psicólogo y terapeuta corporal con amplia experiencia",
      "Biomagnetismo Integral sistema AzulCamet",
      "Precios y horarios publicados",
      "Más de un centenar de reseñas de Google mostradas en su web",
    ],
    reviews: [],
    sourceUrls: [
      "https://masajebioenergetico.com.bo/",
      "https://masajebioenergetico.com.bo/aviso-legal/",
      "https://www.youtube.com/watch?v=ZDIvBO3nynE",
    ],
    imagePrompt:
      "High-rise therapy apartment in Santa Cruz de la Sierra, massage table with crisp white linen, red and black biomagnetism magnets arranged along a towel, city skyline through large window, warm tropical light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "larry-hansler-bell-santa-cruz",
    name: "Tpa. Larry Hansler Bell – BioMagnetismo Medicina Alternativa",
    countrySlug: "bolivia",
    citySlug: "santa-cruz",
    district: "Pampa de la Isla",
    address: "Barrio Venezuela, Calle 2 # 650 (entre calles 6 y 7), Zona Pampa de la Isla, Santa Cruz de la Sierra",
    modalities: ["presencial"],
    website: "https://tarjetadigital.app/biomagnetismo",
    editorialScore: 4.2,
    specialties: ["Medicina homeostática", "Tetraterapia", "Biomagnetismo"],
    description:
      "Larry Hansler Bell es terapeuta en Santa Cruz de la Sierra y atiende en la zona de Pampa de la Isla, al este de la ciudad. Su tarjeta digital lo presenta con más de diez años de experiencia en medicina homeostática y tetraterapia, una corriente que deriva del biomagnetismo y que trabaja con imanes buscando el equilibrio del organismo. Indica además ser docente del Instituto Mexicano de Medicina Homeostática y Tetraterapia y formar parte de una red latinoamericana de terapeutas certificados. Para quienes viven en el este de Santa Cruz es una opción cercana y con experiencia docente. La reserva se solicita desde su tarjeta digital. Conviene saber que la medicina homeostática no es exactamente el par biomagnético clásico, y que ambas son terapias complementarias, no sustitutos del médico.",
    highlights: [
      "Más de 10 años de experiencia",
      "Docente de medicina homeostática y tetraterapia",
      "Consultorio en la zona este de Santa Cruz",
    ],
    reviews: [],
    sourceUrls: ["https://tarjetadigital.app/biomagnetismo"],
    imagePrompt:
      "Modest home-based therapy room in eastern Santa Cruz Bolivia, treatment table with patterned sheet, red and black magnets on a plastic tray, fan and window with tropical plants, warm afternoon light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "natural-farma-santa-cruz",
    name: "Natural Farma – Medicina Natural y Terapias Alternativas",
    countrySlug: "bolivia",
    citySlug: "santa-cruz",
    modalities: ["presencial"],
    website: "https://www.picktime.com/c3a586c3-f255-4fc5-bb72-6ad1858eea6f",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo", "Acupuntura", "Consulta médica naturista", "Terapias faciales naturales"],
    description:
      "Natural Farma es un centro de medicina natural en Santa Cruz de la Sierra que combina consulta médica naturista con terapias alternativas como acupuntura y biomagnetismo, además de tratamientos faciales naturales. Las consultas naturistas están a cargo de la Dra. Simone Irala, médica naturista que el centro presenta con más de treinta años de experiencia. Funciona con un sistema de reservas en línea, lo que facilita elegir horario sin necesidad de llamar. Es una alternativa para quien prefiere un centro con orientación médica naturista donde el biomagnetismo se integra en un enfoque de salud general. Sugerimos confirmar al reservar qué profesional realiza las sesiones de biomagnetismo y la dirección exacta del local. Recordamos que se trata de terapias complementarias a la medicina convencional.",
    highlights: [
      "Centro con médica naturista de larga trayectoria",
      "Biomagnetismo junto a acupuntura y consulta naturista",
      "Reserva en línea",
    ],
    reviews: [],
    sourceUrls: ["https://www.picktime.com/c3a586c3-f255-4fc5-bb72-6ad1858eea6f"],
    imagePrompt:
      "Natural medicine center in Santa Cruz Bolivia, wooden shelves with herbal jars, treatment table with green towel, red and black biomagnetism magnets beside acupuncture tools on a tray, warm natural light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── BOLIVIA · LA PAZ ─────────────────────────
  {
    slug: "centro-sabu-la-paz",
    name: "Centro de Terapias Alternativas SABU",
    countrySlug: "bolivia",
    citySlug: "la-paz",
    district: "Sopocachi",
    address: "Av. 6 de Agosto entre Rosendo Gutiérrez y Fernando Guachalla, Edificio María Cecilia, planta baja, of. 5, La Paz",
    modalities: ["presencial"],
    phone: "+591 70195119 / +591 2 2912670",
    editorialScore: 4.1,
    specialties: ["Biomagnetismo médico", "Neuropsicología biomagnética", "Liberación de emociones", "Reiki", "Termoterapia"],
    description:
      "SABU es un centro de terapias alternativas de La Paz que ofrece biomagnetismo médico desde hace varios años y que se presenta como reconocido por la Escuela Superior de Biomagnetismo Isaac Goiz Durán de México. Actualmente figura con local en la Av. 6 de Agosto, en Sopocachi, junto al cine 6 de Agosto, una zona céntrica y bien conectada por minibús y teleférico. Además del par biomagnético trabaja neuropsicología biomagnética, liberación de emociones atrapadas, reiki, termoterapia y maderoterapia, lo que lo convierte en un centro de bienestar polivalente. Las citas se coordinan por WhatsApp o teléfono. Algunas guías antiguas lo ubican en la Av. Arce, por lo que recomendamos confirmar la dirección antes de acudir. El biomagnetismo debe usarse como complemento, no como tratamiento único.",
    highlights: [
      "Centro con varios años de trayectoria en La Paz",
      "Vinculado a la escuela del Dr. Goiz según su propia presentación",
      "Ubicación céntrica en Sopocachi",
      "Varias terapias complementarias en un mismo lugar",
    ],
    reviews: [],
    sourceUrls: [
      "https://sites.google.com/view/consume-lo-nuestro/inicio/la-paz/salud-medicina-farmacia-la-paz",
      "https://www.youtube.com/watch?v=Tt31kxwerN0",
    ],
    imagePrompt:
      "Ground-floor therapy center in La Paz Bolivia, treatment table with alpaca wool blanket, red and black biomagnetism magnets on a wooden tray, reiki candles unlit on a shelf, cool high-altitude daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "terapia-biomagnetismo-medico-la-paz",
    name: "Terapia Biomagnetismo Médico La Paz – Bolivia",
    countrySlug: "bolivia",
    citySlug: "la-paz",
    modalities: ["presencial"],
    facebook: "https://www.facebook.com/BiomagnetismoElAlto",
    phone: "+591 77282496",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo médico", "Par biomagnético"],
    description:
      "Terapia Biomagnetismo Médico La Paz es un servicio de par biomagnético que se promociona principalmente a través de su página de Facebook, con más de mil seguidores, orientada al público de La Paz y El Alto. Comparte contenido divulgativo sobre el método del Dr. Goiz y atiende consultas por teléfono y mensajería, sin un sitio web propio ni dirección publicada de forma destacada. Es una opción más informal que la de un centro establecido, adecuada para quienes viven en El Alto o la zona norte paceña y prefieren coordinar directamente con el terapeuta. Recomendamos preguntar por su formación, el lugar exacto de atención y el costo antes de reservar. Algunas de sus publicaciones son muy entusiastas: insistimos en que el biomagnetismo es un complemento y no sustituye al médico.",
    highlights: [
      "Página de Facebook con más de 1.000 seguidores",
      "Orientado a La Paz y El Alto",
      "Contacto telefónico directo",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.facebook.com/BiomagnetismoElAlto",
      "https://www.findhealthclinics.com/BO/Unknown/289799535079032/Terapia-Biomagnetismo-Medico-La-Paz---Bolivia",
    ],
    imagePrompt:
      "Simple therapy room in El Alto Bolivia, treatment bed with colorful aguayo textile, red and black biomagnetism magnets on a small table, brick wall, bright cold Andean light from a window, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── BOLIVIA · COCHABAMBA ─────────────────────────
  {
    slug: "biomagnetismo-medicina-alternativa-cochabamba",
    name: "Biomagnetismo Medicina Alternativa Cochabamba",
    countrySlug: "bolivia",
    citySlug: "cochabamba",
    district: "Centro",
    address: "Calle Jordán #741, oficina 3 (entre Antezana y 16 de Julio), Cochabamba",
    modalities: ["presencial"],
    phone: "+591 72244496",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo", "Terapias con imanes"],
    description:
      "Biomagnetismo Medicina Alternativa Cochabamba es un consultorio dedicado a la terapia con imanes en pleno centro de la ciudad, en una oficina de la calle Jordán entre Antezana y 16 de Julio, a pocas cuadras de la plaza principal. Figura en directorios locales de negocios como un espacio orientado al equilibrio físico y emocional mediante biomagnetismo, con teléfono de contacto publicado. Su ubicación céntrica lo hace accesible desde cualquier punto de Cochabamba en transporte público. La información disponible en línea es escasa: no tiene web propia ni detalla la formación del terapeuta, por lo que recomendamos llamar antes para confirmar horarios, tarifas y que el servicio siga activo. Como cualquier terapia complementaria, el biomagnetismo no debe reemplazar la consulta ni el tratamiento médico.",
    highlights: [
      "Consultorio dedicado al biomagnetismo",
      "Ubicación céntrica cerca de la plaza principal",
      "Teléfono de contacto publicado",
    ],
    reviews: [],
    sourceUrls: ["https://bolivia.worldplaces.me/es/review/97152350-biomagnetismo-medicina-alternativa-cochabamba.html"],
    imagePrompt:
      "Small downtown office in Cochabamba converted into a biomagnetism consulting room, treatment table, red and black magnets in a wooden box, colonial building window with warm valley sunlight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "marco-montero-fisioterapia-biomagnetismo-cochabamba",
    name: "Marco Montero Fisioterapia y Biomagnetismo",
    countrySlug: "bolivia",
    citySlug: "cochabamba",
    modalities: ["presencial"],
    phone: "+591 71468596",
    editorialScore: 4.0,
    specialties: ["Fisioterapia", "Kinesiología", "Biomagnetismo"],
    description:
      "Marco Montero Fisioterapia y Biomagnetismo es un consultorio de Cochabamba que une la rehabilitación física con la terapia de pares biomagnéticos. Según los directorios comerciales locales, atiende de lunes a viernes en horario de tarde, aproximadamente de 14:30 a 19:30, y permanece cerrado los fines de semana, con un número de celular publicado para coordinar citas. La combinación de fisioterapia y biomagnetismo puede resultar útil para pacientes con molestias musculares o en recuperación de lesiones que quieran sumar un recurso complementario a su programa de ejercicios. No dispone de sitio web propio, por lo que conviene llamar antes para confirmar la dirección exacta del consultorio y sus tarifas. Recordamos que el biomagnetismo no sustituye el diagnóstico ni el tratamiento médico.",
    highlights: [
      "Fisioterapia y biomagnetismo en un mismo consultorio",
      "Horario de tarde de lunes a viernes",
      "Contacto por celular",
    ],
    reviews: [],
    sourceUrls: ["https://bo.todosnegocios.com/marco-montero-fisioterapia-y-71468596"],
    imagePrompt:
      "Physiotherapy room in Cochabamba, treatment table, therapy bands and small weights on a rack, red and black biomagnetism magnets on a towel, afternoon sunlight through window, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── VENEZUELA · CARACAS ─────────────────────────
  {
    slug: "consultorio-biomagnetismo-miguel-marquez-caracas",
    name: "Consultorio Biomagnetismo Miguel Márquez",
    countrySlug: "venezuela",
    citySlug: "caracas",
    district: "Prados del Este",
    address: "Torre Humboldt, planta baja, Av. Río Caura, Urb. Prados del Este, Caracas",
    modalities: ["presencial"],
    googleMapsUrl:
      "https://www.google.com/maps/place/Consultorio+Biomagnetismo+Miguel+M%C3%A1rquez/data=!4m7!3m6!1s0x8c2af7ec3a052ecb:0x8f643508fcf28932!8m2!3d10.452222!4d-66.871389",
    editorialScore: 4.3,
    specialties: ["Biomagnetismo", "Evaluación energética", "Relajación y manejo del estrés"],
    description:
      "El Consultorio Biomagnetismo Miguel Márquez está en la planta baja de la Torre Humboldt, sobre la Av. Río Caura de Prados del Este, uno de los edificios de oficinas más reconocibles del sureste de Caracas. Es un consultorio dedicado al biomagnetismo, con ficha en Google Maps, y ofrece sesiones de par biomagnético, evaluaciones energéticas, sesiones orientadas a la relajación y asesorías personalizadas de bienestar. Los directorios que recogen opiniones de pacientes destacan la atención personalizada y el ambiente cómodo del consultorio, y mencionan que la disponibilidad de horarios puede ser limitada, por lo que conviene reservar con antelación. Es una buena opción para quienes viven en Baruta, El Hatillo o Chacao. El biomagnetismo debe usarse como apoyo complementario a la atención médica.",
    highlights: [
      "Consultorio dedicado al biomagnetismo",
      "Ubicación fácil de encontrar en la Torre Humboldt",
      "Ficha pública en Google Maps",
      "Opiniones que destacan la atención personalizada",
    ],
    reviews: [],
    sourceUrls: [
      "https://servicaracas.redsucursalesve.com/profesional-de-medicina-alternativa/consultorio-biomagnetismo-miguel-marquez/",
      "https://www.google.com/maps/place/Consultorio+Biomagnetismo+Miguel+M%C3%A1rquez/data=!4m7!3m6!1s0x8c2af7ec3a052ecb:0x8f643508fcf28932!8m2!3d10.452222!4d-66.871389",
    ],
    imagePrompt:
      "Office tower consulting room in Caracas, padded treatment table, red and black biomagnetism magnets neatly lined on a white tray, green Ávila mountain visible through window, bright daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "sanacion-bioenergetica-y-biomagnetismo-caracas",
    name: "Sanación Bioenergética y Biomagnetismo",
    countrySlug: "venezuela",
    citySlug: "caracas",
    district: "Los Dos Caminos",
    modalities: ["presencial"],
    phone: "+58 414-2390649",
    googleMapsUrl:
      "https://www.google.com/maps/place/Sanaci%C3%B3n+Bioenerg%C3%A9tica+y+Biomagnetismo/data=!4m7!3m6!1s0x8c2a592c602e8f49:0x510f40cf4480fa4!8m2!3d10.4971102!4d-66.8345006",
    editorialScore: 4.1,
    specialties: ["Biomagnetismo", "Sanación bioenergética"],
    description:
      "Sanación Bioenergética y Biomagnetismo es un consultorio de terapias complementarias ubicado en Los Dos Caminos, en el municipio Sucre del este de Caracas, con ficha en Google Maps y número de WhatsApp público. Combina sesiones de sanación bioenergética con la aplicación de biomagnetismo y asesorías personalizadas de bienestar, con un enfoque marcadamente espiritual. Según los directorios locales, atiende de lunes a viernes en horario de oficina y los sábados por la mañana, y cierra los domingos, por lo que recomiendan reservar con anticipación. Los testimonios recopilados en esos directorios hablan de experiencias muy positivas, aunque son subjetivos. Es una opción a considerar para quien vive en el este de la ciudad, siempre entendiendo estas terapias como complemento y no sustituto del médico.",
    highlights: [
      "Biomagnetismo y sanación bioenergética",
      "Ubicación en Los Dos Caminos, este de Caracas",
      "Atención entre semana y sábados por la mañana",
      "Contacto por WhatsApp",
    ],
    reviews: [],
    sourceUrls: [
      "https://servicaracas.redsucursalesve.com/profesional-de-medicina-alternativa/sanacion-bioenergetica-y-biomagnetismo/",
      "https://www.google.com/maps/place/Sanaci%C3%B3n+Bioenerg%C3%A9tica+y+Biomagnetismo/data=!4m7!3m6!1s0x8c2a592c602e8f49:0x510f40cf4480fa4!8m2!3d10.4971102!4d-66.8345006",
    ],
    imagePrompt:
      "Peaceful bioenergetic therapy room in eastern Caracas, treatment table with white sheet, crystals and red and black biomagnetism magnets on a low wooden table, soft diffused light, tropical plant, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "biomagnetismo-caracas-ivan-caracas",
    name: "Biomagnetismo Caracas Iván – Terapias Biomagnéticas",
    countrySlug: "venezuela",
    citySlug: "caracas",
    district: "Chacao",
    address: "Avenida Guaicaipuro, Municipio Chacao, Caracas",
    modalities: ["presencial"],
    phone: "+58 412 360 0273",
    editorialScore: 4.0,
    specialties: ["Terapias biomagnéticas", "Quiropraxia", "Masajes antiestrés"],
    description:
      "Biomagnetismo Caracas Iván es un consultorio privado de terapias biomagnéticas ubicado en la avenida Guaicaipuro, en el municipio Chacao, una zona céntrica y comercial del este caraqueño con buena conexión de metro. Según su ficha en Yandex Maps, además del biomagnetismo ofrece quiropraxia, masajes antiestrés y limpieza de cutis, con teléfono de contacto publicado. Esta mezcla de servicios lo sitúa a medio camino entre un gabinete de bienestar y un consultorio de terapias complementarias, adecuado para quien busca aliviar tensiones y sumar sesiones de par biomagnético en el mismo lugar. La información en línea es limitada, así que recomendamos llamar antes para confirmar horarios, tarifas y la formación del terapeuta. El biomagnetismo es un complemento, no una alternativa al tratamiento médico.",
    highlights: [
      "Biomagnetismo, quiropraxia y masajes en un mismo consultorio",
      "Ubicación céntrica en Chacao",
      "Teléfono publicado en Yandex Maps",
    ],
    reviews: [],
    sourceUrls: ["https://yandex.com/maps/org/14488793748/"],
    imagePrompt:
      "Compact wellness office in Chacao Caracas, chiropractic-style treatment table, massage oils and red and black biomagnetism magnets on a side shelf, city light through blinds, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── VENEZUELA · MARACAIBO ─────────────────────────
  {
    slug: "biomagnetismo-medico-maracaibo",
    name: "Biomagnetismo Médico Maracaibo",
    countrySlug: "venezuela",
    citySlug: "maracaibo",
    modalities: ["presencial"],
    phone: "+58 416-2638493",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo médico", "Par biomagnético"],
    description:
      "Biomagnetismo Médico Maracaibo es un servicio de par biomagnético que figura en Todainfo, el directorio comercial de Venezuela, dentro de la categoría de biomagnetismo médico para el estado Zulia. Se presenta como una terapia no invasiva basada en la idea del equilibrio del pH y publica un número de celular para coordinar citas. Es, a la fecha de nuestra revisión, una de las pocas fichas públicas de biomagnetismo específicas de Maracaibo, una ciudad con mucha demanda y poca oferta indexada en internet. Su descripción incluye afirmaciones sobre enfermedades graves que no compartimos: el biomagnetismo carece de evidencia sólida para tratar el cáncer u otras patologías serias y nunca debe reemplazar la atención oncológica o médica. Recomendamos llamar antes para conocer la formación del terapeuta y la dirección de atención.",
    highlights: [
      "Ficha en el directorio comercial Todainfo",
      "Una de las pocas opciones públicas en Maracaibo",
      "Contacto por celular",
    ],
    reviews: [],
    sourceUrls: [
      "https://todainfo.com/directorio/biomagnetismo-medico-maracaibo/",
      "https://todainfo.com/categoria/biomagnetismo-medico/",
    ],
    imagePrompt:
      "Air-conditioned therapy room in Maracaibo, treatment table with light blue sheet, red and black biomagnetism magnets on a white tray, strong tropical sunlight filtered through blinds, minimalist decor, realistic photography, no people, no faces, no text, no logos",
  },
];
