import type { Biomagnetista } from "../types";

/**
 * Biomagnetistas verificados en México, Centroamérica y República Dominicana.
 * Datos tomados solo de fuentes públicas (webs propias, Doctoralia, Doctosan,
 * Waze, directorios). Verificación: noviembre 2026.
 * Las reseñas se dejan vacías a propósito: los testimonios publicados por los
 * propios centros suelen incluir afirmaciones de salud no aptas (YMYL).
 */
export const BIOMAGNETISTAS_MX_CA: Biomagnetista[] = [
  // ───────────────────────── MÉXICO · CIUDAD DE MÉXICO ─────────────────────────
  {
    slug: "escuela-superior-biomagnetismo-isaac-goiz-ciudad-de-mexico",
    name: "Escuela Superior de Biomagnetismo Isaac Goiz Durán",
    countrySlug: "mexico",
    citySlug: "ciudad-de-mexico",
    district: "Tepeyac Insurgentes, Gustavo A. Madero",
    address: "Av. Insurgentes Norte 1865, Col. Tepeyac Insurgentes, C.P. 07020, CDMX",
    modalities: ["presencial"],
    website: "https://escuelaisaacgoiz.com/",
    instagram: "https://www.instagram.com/escuelaisaacgoizduran/",
    facebook: "https://www.facebook.com/escuelaisaacgoiz/",
    phone: "+52 55 5577 0058",
    editorialScore: 4.8,
    specialties: ["Par Biomagnético", "Bioenergética", "Formación de terapeutas"],
    description:
      "La Escuela Superior de Biomagnetismo Isaac Goiz Durán es la institución vinculada directamente al legado del médico mexicano que describió el Par Biomagnético. Su sede está sobre Insurgentes Norte, en la alcaldía Gustavo A. Madero, y su actividad principal es la formación: cursos de primer nivel (rastreo apoyado con imán), bioenergética como segundo nivel y talleres temáticos que se imparten en la CDMX y en otras ciudades. Para quien busca un terapeuta, es un buen punto de partida porque publica un verificador de constancias, lo que permite comprobar si una persona realmente se formó allí. Conviene escribir antes para confirmar si hay atención a pacientes en el día que te interesa. Como en cualquier centro de biomagnetismo, se trata de un enfoque complementario que no reemplaza la consulta ni el tratamiento médico.",
    highlights: [
      "Institución ligada al legado del Dr. Isaac Goiz Durán",
      "Verificador público de constancias de terapeutas",
      "Calendario de cursos en CDMX y otras ciudades",
    ],
    reviews: [],
    sourceUrls: [
      "https://escuelaisaacgoiz.com/",
      "https://www.facebook.com/escuelaisaacgoiz/",
    ],
    imagePrompt:
      "Bright training room of a biomagnetism school in Mexico City, padded treatment tables in a row, small red and black therapy magnets arranged on trays, anatomical posters without text, warm daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "suria-biomagnetismo-medico-ciudad-de-mexico",
    name: "Suria Biomagnetismo Médico",
    countrySlug: "mexico",
    citySlug: "ciudad-de-mexico",
    district: "Escandón, Miguel Hidalgo",
    address: "Ingenieros 32, Int. 201, Col. Escandón I Secc., Miguel Hidalgo, C.P. 11800, CDMX",
    modalities: ["presencial"],
    website: "https://suria.lat/",
    instagram: "https://instagram.com/surialat",
    facebook: "https://www.facebook.com/surialat",
    phone: "+52 55 3661 3909",
    editorialScore: 4.5,
    specialties: ["Biomagnetismo médico", "Nutrición", "Reiki", "Acupuntura"],
    description:
      "Suria es un pequeño centro en la colonia Escandón que reúne a un equipo con roles bien definidos: Ismael De Lorenz se presenta como terapeuta de biomagnetismo médico, Aurora Ramos combina biomagnetismo y nutrición, y Josefina Pegueros atiende reiki, acupuntura y auriculoterapia. Esa mezcla resulta práctica para quien quiere complementar las sesiones con imanes con orientación alimentaria en el mismo lugar. Su web incluye blog, sección de cursos y contacto directo por WhatsApp, lo que facilita resolver dudas antes de reservar. La ubicación, entre Tacubaya y la Condesa, tiene buen acceso en transporte público. Recomendamos preguntar por la duración y el costo vigente de la primera sesión, y recordar que el biomagnetismo se usa como apoyo complementario, nunca como sustituto del seguimiento médico.",
    highlights: [
      "Equipo con biomagnetismo, nutrición y acupuntura",
      "Contacto directo por WhatsApp desde la web",
      "Ofrece también cursos de formación",
    ],
    reviews: [],
    sourceUrls: ["https://suria.lat/", "https://www.facebook.com/surialat"],
    imagePrompt:
      "Cozy therapy room in a renovated Mexico City apartment building, treatment table with white linen, red and black biomagnetism magnets on a wooden side table, potted plants, soft afternoon light through tall windows, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "mexico-ayurveda-dr-eduardo-zarco-ciudad-de-mexico",
    name: "México Ayurveda – Dr. Eduardo Zarco",
    countrySlug: "mexico",
    citySlug: "ciudad-de-mexico",
    district: "Coyoacán",
    address: "Av. Miguel Ángel de Quevedo 1144, Coyoacán, CDMX",
    modalities: ["presencial"],
    editorialScore: 4.3,
    specialties: ["Biomagnetismo", "Medicina integrativa", "Ayurveda"],
    priceNote: "Referencial en Doctoralia: MXN 1,297 por sesión de biomagnetismo",
    description:
      "El consultorio del Dr. Eduardo Octavio Zarco Valdivieso, que opera bajo el nombre México Ayurveda, se encuentra sobre Miguel Ángel de Quevedo, en Coyoacán. Su perfil en Doctoralia lo identifica como médico general con enfoque en bienestar y salud, y lista el biomagnetismo entre sus servicios junto con propuestas de medicina ayurvédica. Para el paciente, la ventaja de este perfil es que la terapia con imanes la ofrece alguien con formación médica, lo que facilita conversar sobre estudios previos o medicamentos en curso. El precio publicado es de los más altos de la zona, así que conviene confirmar qué incluye la consulta. La agenda se gestiona en línea desde Doctoralia. El biomagnetismo debe entenderse como un complemento y no como reemplazo de diagnósticos o tratamientos convencionales.",
    highlights: [
      "Atendido por un médico general",
      "Perfil con opiniones en Doctoralia",
      "Agenda en línea",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.com.mx/perfil/eduardo-octavio-zarco-valdivieso",
      "https://www.doctoralia.com.mx/tratamientos-servicios/biomagnetismo/coyoacan",
    ],
    imagePrompt:
      "Calm integrative medicine consulting room in Coyoacán, Mexico City, wooden furniture, treatment table, red and black therapy magnets on a tray, brass bowls and dried herbs on a shelf, warm natural light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "priscilla-rico-barcenas-ciudad-de-mexico",
    name: "Dra. Priscilla Grisbet Rico Bárcenas",
    countrySlug: "mexico",
    citySlug: "ciudad-de-mexico",
    district: "Hipódromo, Cuauhtémoc",
    address: "Tlaxcala 151, Col. Hipódromo, Cuauhtémoc, C.P. 06760, CDMX",
    modalities: ["presencial"],
    editorialScore: 4.4,
    specialties: ["Biomagnetismo", "Acupuntura"],
    priceNote: "Referencial en Doctoralia: MXN 550 por sesión de biomagnetismo",
    description:
      "La Dra. Priscilla Grisbet Rico Bárcenas atiende en un consultorio privado en la calle Tlaxcala, en la colonia Hipódromo, a pocas cuadras de la Condesa. Su perfil de Doctoralia la presenta como acupuntora y lista el biomagnetismo como servicio con un precio publicado que está dentro del rango medio de la ciudad. Uno de sus puntos fuertes es el volumen de opiniones verificadas en la plataforma, algo poco habitual entre terapeutas de imanes y útil para conocer la experiencia de otros pacientes antes de agendar. Combinar acupuntura y biomagnetismo puede interesar a quien busca un enfoque complementario para el manejo del estrés o del bienestar general. Recuerda informar siempre a tu médico de cabecera y no suspender tratamientos indicados.",
    highlights: [
      "Unas 40 opiniones publicadas en Doctoralia",
      "Precio publicado y agenda en línea",
      "Ubicación céntrica cerca de la Condesa",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.com.mx/perfil/priscilla-grisbet-rico-barcenas",
      "https://www.doctoralia.com.mx/tratamientos-servicios/biomagnetismo/benito-juarez",
    ],
    imagePrompt:
      "Minimalist acupuncture and biomagnetism office in a Condesa-style art deco building, Mexico City, padded table, small red and black magnets and acupuncture tray, green plants, soft daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── MÉXICO · GUADALAJARA ─────────────────────────
  {
    slug: "centro-magnetico-guadalajara",
    name: "Centro Magnético (Centro Bio Magnético)",
    countrySlug: "mexico",
    citySlug: "guadalajara",
    district: "Loma Bonita Ejidal, Zapopan",
    address: "Cruz del Sur 3367-B, Col. Loma Bonita Ejidal, C.P. 45085, Zapopan, Jalisco",
    modalities: ["presencial", "a-distancia"],
    website: "https://centromagnetico.com/",
    facebook: "https://www.facebook.com/cmagnetico/",
    phone: "+52 33 3631 1240",
    editorialScore: 4.4,
    specialties: ["Terapia con imanes", "Venta de imanes terapéuticos", "Cursos de biomagnetismo"],
    description:
      "Centro Magnético es una empresa de Zapopan conocida sobre todo como fabricante y distribuidora de imanes industriales y terapéuticos, con envíos a todo México. Dentro de su estructura opera el Centro Bio Magnético, un consultorio donde se aplican imanes con fines terapéuticos, y una plataforma de cursos en línea sobre biomagnetismo. Esto lo hace interesante para dos perfiles: quien quiere recibir sesiones en Guadalajara y quien está aprendiendo la técnica y necesita imanes de ferrita o neodimio de calidad. La tienda en línea muestra precios de cada pieza, lo que aporta transparencia. Antes de acudir conviene llamar para agendar con el área de salud, ya que la sede también atiende clientes industriales. Como siempre, el biomagnetismo es un apoyo complementario a la atención médica.",
    highlights: [
      "Consultorio propio dentro de la empresa",
      "Tienda de imanes terapéuticos con precios públicos",
      "Cursos de biomagnetismo en línea",
    ],
    reviews: [],
    sourceUrls: ["https://centromagnetico.com/", "https://www.facebook.com/cmagnetico/"],
    imagePrompt:
      "Clean therapy room inside a magnet supply company in Zapopan, Jalisco, treatment table, neatly organized shelves of ferrite therapy magnets in red and black covers, bright fluorescent and daylight mix, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "bioenergetica-par-biomagnetico-guadalajara",
    name: "Par Biomagnético – Terapia con Imanes (Bioenergetica.mx)",
    countrySlug: "mexico",
    citySlug: "guadalajara",
    modalities: ["presencial", "a-distancia"],
    website: "https://bioenergetica.mx/",
    facebook: "https://www.facebook.com/profile.php?id=100064829915103",
    phone: "+52 33 3628 0415",
    editorialScore: 4.1,
    specialties: ["Par Biomagnético", "Bioenergética", "Telebioenergética", "Imanes terapéuticos"],
    description:
      "Bioenergetica.mx es un proyecto tapatío que combina sesiones de Par Biomagnético según la técnica del Dr. Isaac Goiz Durán con la venta de productos magnéticos. En su web describe atención para Guadalajara y municipios conurbados como Zapopan, Tlaquepaque, Tonalá y Tlajomulco, además de una modalidad de telebioenergética a distancia para quienes no pueden desplazarse. Publica teléfonos fijos y un número de WhatsApp para consultar existencias de imanes y disponibilidad de citas. La información sobre quién atiende y la dirección exacta del consultorio no aparece de forma destacada, por lo que recomendamos pedir esos datos al agendar. Es una alternativa útil si buscas comprar imanes y recibir orientación en el mismo lugar, siempre entendiendo la terapia como complementaria y no sustitutiva.",
    highlights: [
      "Sigue la técnica del Dr. Isaac Goiz Durán",
      "Opción de sesiones a distancia",
      "Venta de imanes terapéuticos",
    ],
    reviews: [],
    sourceUrls: ["https://bioenergetica.mx/"],
    imagePrompt:
      "Simple home-based biomagnetism practice in Guadalajara, Jalisco, massage table with patterned blanket, red and black magnets in a woven basket, terracotta tiles and arched window, warm light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "monica-garcia-betancourt-guadalajara",
    name: "Dra. Mónica Araceli García Betancourt – Medicina Holística y Alternativa",
    countrySlug: "mexico",
    citySlug: "guadalajara",
    address: "Av. Javier Mina 3361, Guadalajara, Jalisco",
    modalities: ["presencial"],
    editorialScore: 4.3,
    specialties: ["Biomagnetismo", "Medicina holística", "Control de peso"],
    priceNote: "Referencial en Doctoralia: MXN 500 por sesión de biomagnetismo",
    description:
      "La Dra. Mónica Araceli García Betancourt es médica general con perfil en Doctoralia, donde aparece también como especialista en obesidad y delgadez, y atiende en un consultorio de medicina holística y alternativa sobre la avenida Javier Mina, en el oriente de Guadalajara. Entre sus servicios publica el biomagnetismo con un precio referencial accesible para la ciudad. El hecho de que la terapia la aplique una profesional con formación médica permite conversar con tranquilidad sobre antecedentes, análisis clínicos y fármacos en uso. Su perfil reúne opiniones de pacientes y agenda en línea, lo que facilita comparar antes de reservar. Te sugerimos confirmar la duración de la sesión y si se combina con otros enfoques. Recuerda que el biomagnetismo es un complemento y no sustituye tratamientos indicados.",
    highlights: [
      "Médica general con enfoque holístico",
      "Precio publicado y agenda en Doctoralia",
      "Opiniones de pacientes visibles en su perfil",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.com.mx/perfil/monica-araceli-garcia-betancourt",
      "https://www.doctoralia.com.mx/tratamientos-servicios/biomagnetismo/guadalajara",
    ],
    imagePrompt:
      "Holistic medical consulting room in Guadalajara, Mexico, desk and padded examination table, small red and black biomagnetism magnets on a steel tray, potted succulents, soft natural light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── MÉXICO · MONTERREY ─────────────────────────
  {
    slug: "curo-con-imanes-esperanza-lavin-monterrey",
    name: "Curo con Imanes – Esperanza Lavín",
    countrySlug: "mexico",
    citySlug: "monterrey",
    district: "Rincón de San Jerónimo",
    address: "Barcelona 115, Rincón de San Jerónimo, Monterrey, N.L.",
    modalities: ["presencial"],
    website: "https://curoconimanes.mx/",
    instagram: "https://www.instagram.com/curoconimanes",
    facebook: "https://www.facebook.com/curoconimanes",
    phone: "+52 81 1586 1148",
    editorialScore: 4.6,
    specialties: ["Par Biomagnético", "Bioenergética", "Microbioenergética"],
    description:
      "Esperanza Lavín atiende en la zona de San Jerónimo, al poniente de Monterrey, bajo la marca Curo con Imanes. Su web explica que trabaja con biomagnetismo y bioenergética, y que actualiza su formación de forma constante en áreas como microbioenergética, programación bioenergética aplicada y otras variantes derivadas del Par Biomagnético. Ese interés por la formación continua es una buena señal para quien busca una terapeuta con trayectoria y no solo un curso básico. Las citas se agendan desde la propia página o por WhatsApp, y mantiene perfiles activos en Instagram y Facebook donde comparte contenido divulgativo. El nombre comercial es llamativo, pero conviene recordar que el biomagnetismo se ofrece como terapia complementaria: úsalo junto a, y no en lugar de, tu atención médica.",
    highlights: [
      "Formación continua en bioenergética y técnicas afines",
      "Agenda en línea y por WhatsApp",
      "Presencia activa en redes sociales",
    ],
    reviews: [],
    sourceUrls: [
      "https://curoconimanes.mx/",
      "https://www.instagram.com/curoconimanes",
      "https://www.facebook.com/curoconimanes",
    ],
    imagePrompt:
      "Modern biomagnetism therapy room in a residential house in Monterrey, view of mountains through a window, treatment table with neutral linens, red and black magnets in a ceramic dish, clean white walls, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "biorganismo-monterrey",
    name: "Biorganismo",
    countrySlug: "mexico",
    citySlug: "monterrey",
    district: "Casa Bella, San Nicolás de los Garza",
    address: "Casa de Juárez 409, Col. Casa Bella 1er sector, San Nicolás de los Garza, N.L.",
    modalities: ["presencial"],
    website: "https://www.biorganismo.com/",
    phone: "+52 81 4646 0403",
    editorialScore: 4.4,
    specialties: ["Biomagnetismo", "Terapia con imanes"],
    description:
      "Biorganismo es un consultorio de biomagnetismo en San Nicolás de los Garza, dentro del área metropolitana de Monterrey. Su web, muy orientada a resolver dudas, responde de forma ordenada las preguntas frecuentes: qué es la técnica, cómo es una sesión, qué ropa llevar y si se considera una terapia alternativa, a lo que responden con claridad que sí. Afirman haber realizado más de 7,000 terapias a lo largo de nueve años, lo que habla de una práctica constante. Destacan también las indicaciones detalladas para llegar en Metro línea 2, Transmetro o rutas urbanas, algo útil para pacientes sin auto. Teléfono y WhatsApp están publicados. Recomendamos acudir con tus estudios médicos recientes y entender la terapia como un complemento a la atención convencional.",
    highlights: [
      "Más de 7,000 terapias declaradas en nueve años",
      "FAQ detallada en su web",
      "Acceso en Metro línea 2",
    ],
    reviews: [],
    sourceUrls: ["https://www.biorganismo.com/"],
    imagePrompt:
      "Small neighborhood biomagnetism clinic room in San Nicolás de los Garza, Nuevo León, treatment table, wall shelf with red and black magnets, simple tiled floor, bright daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "dr-angel-reyes-padilla-monterrey",
    name: "Dr. Ángel Reyes Padilla",
    countrySlug: "mexico",
    citySlug: "monterrey",
    district: "San Pedro Garza García",
    address: "Río Suchiate 710, San Pedro Garza García, N.L.",
    modalities: ["presencial"],
    editorialScore: 4.2,
    specialties: ["Biomagnetismo", "Homeopatía", "Acupuntura"],
    description:
      "El Dr. Ángel Reyes Padilla atiende en un consultorio privado de San Pedro Garza García y aparece en Doctoralia como homeópata y acupuntor, con áreas de interés en homeopatía clásica avanzada, organoterapia y enfoque emocional. Entre los servicios listados en su perfil figura el biomagnetismo, que integra dentro de una consulta de medicina complementaria más amplia. Para pacientes de la zona de San Pedro y el sur de Monterrey es una opción cercana con agenda en línea y opiniones verificadas de otros pacientes. El precio de la sesión no está publicado, por lo que conviene preguntarlo al reservar, así como confirmar si la sesión de imanes se cobra aparte de la consulta. Mantén informado a tu médico tratante sobre cualquier terapia complementaria que inicies.",
    highlights: [
      "Unas 26 opiniones en Doctoralia",
      "Integra homeopatía, acupuntura y biomagnetismo",
      "Ubicado en San Pedro Garza García",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctoralia.com.mx/perfil/angel-reyes-padilla",
      "https://www.doctoralia.com.mx/tratamientos-servicios/biomagnetismo/monterrey",
    ],
    imagePrompt:
      "Upscale complementary medicine office in San Pedro Garza García, Mexico, wooden desk, padded treatment table, homeopathy vials and red and black therapy magnets on a shelf, large window, soft light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── MÉXICO · PUEBLA ─────────────────────────
  {
    slug: "mesana-puebla",
    name: "Mesana Medicina Alternativa",
    countrySlug: "mexico",
    citySlug: "puebla",
    district: "Huexotitla",
    address: "B Poniente de la 16 de Septiembre 4506, Col. Huexotitla, C.P. 72534, Puebla",
    modalities: ["presencial"],
    website: "https://mesanapuebla.com.mx/",
    instagram: "https://www.instagram.com/auriculoterapia_puebla/",
    phone: "+52 222 357 2005",
    publicRating: 5.0,
    publicReviewCount: 52,
    publicRatingSource: "Google (cifra mostrada en su web)",
    editorialScore: 4.4,
    specialties: ["Biomagnetismo", "Auriculoterapia", "Reflexología", "Reiki"],
    priceNote: "MXN 449 por sesión de biomagnetismo de 60 min (precio publicado en su web)",
    description:
      "Mesana es un centro de terapias complementarias en Huexotitla, a unos minutos de Plaza Dorada, con estacionamiento y atención con cita previa. Su web destaca por la transparencia: publica precios de cada servicio, duración aproximada y paquetes, y aclara que sus terapias no sustituyen la atención médica ni el tratamiento de un especialista, un mensaje que valoramos. La sesión de biomagnetismo dura alrededor de una hora y se describe como colocación de imanes de baja intensidad dentro de un enfoque complementario. Ofrecen además una orientación inicial sin costo para elegir el servicio adecuado. El centro reúne muchas otras disciplinas, desde auriculoterapia hasta masajes, por lo que conviene confirmar quién aplica específicamente el biomagnetismo y su formación.",
    highlights: [
      "Precios y duraciones publicados en la web",
      "Orientación inicial sin costo",
      "Aviso claro de terapia complementaria",
    ],
    reviews: [],
    sourceUrls: [
      "https://mesanapuebla.com.mx/",
      "https://www.instagram.com/auriculoterapia_puebla/",
    ],
    imagePrompt:
      "Warm wellness center treatment room in Puebla, Mexico, colonial-inspired details, talavera tile accent, treatment table, red and black magnets on a small wooden tray, soft lamps, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "paco-terapias-biomagnetismo-puebla",
    name: "Biomagnetismo Terapeuta Paco Terapias",
    countrySlug: "mexico",
    citySlug: "puebla",
    modalities: ["presencial"],
    phone: "+52 222 100 3024",
    publicRating: 5.0,
    publicReviewCount: 106,
    publicRatingSource: "Google (vía Doctosan)",
    editorialScore: 4.5,
    specialties: ["Biomagnetismo"],
    description:
      "Paco Terapias es un terapeuta de biomagnetismo en la ciudad de Puebla cuya ficha pública acumula más de un centenar de reseñas en Google con calificación perfecta, una cifra notable para un consultorio independiente. Su ficha en el directorio Doctosan lo clasifica como centro de salud y bienestar, publica teléfono y enlace de WhatsApp, y muestra un horario amplio: de lunes a sábado en jornada extendida y los domingos por la mañana. Esa disponibilidad es práctica para quien trabaja entre semana. La información sobre su formación no está detallada en las fuentes públicas, así que recomendamos preguntarle directamente por su certificación y por el costo de la sesión antes de agendar. Como toda terapia de imanes, debe usarse como complemento y no como reemplazo de la atención médica.",
    highlights: [
      "5.0 con más de 100 reseñas en Google",
      "Atiende de lunes a sábado y domingos por la mañana",
      "Contacto por WhatsApp",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.doctosan.com/mx/es/medico/heroica-puebla-de-zaragoza/biomagnetismo-terapeuta-paco-terapias-heroica-puebla-de-zaragoza-aypdiw/",
    ],
    imagePrompt:
      "Compact independent biomagnetism practice room in Puebla, Mexico, treatment table with clean sheets, red and black therapy magnets on a side cart, pastel walls, morning light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── MÉXICO · QUERÉTARO ─────────────────────────
  {
    slug: "biostar-centro-holistico-queretaro",
    name: "Biostar Centro Holístico",
    countrySlug: "mexico",
    citySlug: "queretaro",
    district: "Jardines de la Hacienda",
    address: "Blvd. Hacienda del Jacal 408-1, Jardines de la Hacienda, C.P. 76180, Santiago de Querétaro, Qro.",
    modalities: ["presencial"],
    website: "https://centroholisticobiostar.com/",
    phone: "+52 442 613 5599",
    editorialScore: 4.6,
    specialties: ["Biomagnetismo médico", "Campos pulsados", "Pandora Star"],
    priceNote: "Paquete de 6 sesiones biomagnetismo + campos pulsados: MXN 5,000 (publicado en su web)",
    description:
      "Biostar es un centro holístico en Jardines de la Hacienda dirigido por el terapeuta Andrés Cruz, quien declara contar con certificación desde 2015, unos diez años de experiencia y más de 2,000 personas atendidas en Querétaro. Su servicio principal es el biomagnetismo médico basado en el método del Dr. Isaac Goiz Durán, que el centro combina opcionalmente con cama de campos pulsados y la experiencia de luz Pandora Star. La web publica membresías y paquetes con precios, algo que facilita planear el presupuesto. Las citas se coordinan por WhatsApp con atención directa del terapeuta. Recomendamos valorar si realmente necesitas los paquetes combinados o si prefieres empezar con una sesión individual de biomagnetismo, y mantener siempre el seguimiento con tu médico.",
    highlights: [
      "Terapeuta certificado desde 2015",
      "Precios de paquetes publicados",
      "Atención directa con el terapeuta por WhatsApp",
    ],
    reviews: [],
    sourceUrls: ["https://centroholisticobiostar.com/"],
    imagePrompt:
      "Contemporary holistic therapy room in Querétaro, Mexico, treatment table, red and black biomagnetism magnets on a tray, a pulsed field therapy mat in the background, neutral stone walls, soft indirect light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "sandra-guerrero-biomagnetismo-queretaro",
    name: "Sandra Guerrero Biomagnetismo",
    countrySlug: "mexico",
    citySlug: "queretaro",
    district: "San Antonio de la Punta, Corregidora",
    address: "Av. Prol. El Jacal 959, Local 10 (Plaza Atzimba), San Antonio de la Punta, C.P. 76900, Corregidora, Qro.",
    modalities: ["presencial"],
    website: "https://sandraguerrero.com.mx/",
    phone: "+52 442 476 5906",
    editorialScore: 4.6,
    specialties: ["Biomagnetismo", "Reiki", "Terapias vibracionales"],
    description:
      "Sandra Guerrero atiende en un local de Plaza Atzimba, en Corregidora, dentro de la zona metropolitana de Querétaro. En su web se presenta como alumna directa del Dr. Isaac Goiz Durán, con más de doce años de experiencia en biomagnetismo y otras terapias vibracionales, además de siete años enseñando reiki. Esa formación de origen es un dato relevante para quienes buscan un terapeuta formado en la línea goiziana. El sitio permite agendar cita y contactar por WhatsApp, e incluye reseñas tomadas de Google con comentarios de pacientes recurrentes. La dirección está bien señalizada y es de fácil acceso desde el sur de la ciudad. Recomendamos preguntar por el costo vigente y la duración de la primera sesión, y recordar que se trata de un enfoque complementario.",
    highlights: [
      "Formada directamente con el Dr. Isaac Goiz Durán",
      "Más de 12 años de experiencia declarada",
      "Agenda en línea y WhatsApp",
    ],
    reviews: [],
    sourceUrls: ["https://sandraguerrero.com.mx/"],
    imagePrompt:
      "Serene biomagnetism and reiki room in a small plaza in Corregidora, Querétaro, treatment table with soft blanket, red and black magnets, crystals on a shelf, warm lamp light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "salud-integral-xochitl-antuna-queretaro",
    name: "Salud Integral Xochitl Antuna",
    countrySlug: "mexico",
    citySlug: "queretaro",
    modalities: ["presencial"],
    website: "https://www.xantunas.com/",
    facebook: "https://www.facebook.com/xochitl.bolanos.501",
    phone: "+52 442 475 1136",
    editorialScore: 4.1,
    specialties: ["Biomagnetismo", "Homeopatía", "Terapia craneosacral", "Terapia psicoemocional"],
    description:
      "Salud Integral Xochitl Antuna es una consulta de terapias alternativas en Querétaro que reúne biomagnetismo, homeopatía, terapia craneosacral, somato y acompañamiento psicoemocional. Su web es sencilla y se enfoca en la idea de terapias breves y accesibles, con atención exclusivamente bajo cita previa y dos teléfonos publicados para agendar. La combinación de técnicas puede ser atractiva para quien busca un abordaje que no se limite a los imanes, aunque la web no detalla la formación específica de la terapeuta ni la dirección exacta del consultorio, por lo que conviene solicitar ambos datos al llamar. También menciona promociones periódicas. Como en cualquier práctica de este tipo, el biomagnetismo debe tomarse como un complemento y no como sustituto del diagnóstico ni del tratamiento médico.",
    highlights: [
      "Combina biomagnetismo con homeopatía y craneosacral",
      "Atención solo con cita previa",
      "Promociones periódicas",
    ],
    reviews: [],
    sourceUrls: ["https://www.xantunas.com/"],
    imagePrompt:
      "Simple integrative therapy room in Querétaro, Mexico, treatment table, red and black magnets beside small homeopathy bottles on a wooden shelf, warm beige walls, soft daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── GUATEMALA ─────────────────────────
  {
    slug: "clinica-integral-tatiana-llort-ciudad-de-guatemala",
    name: "Clínica Integral – Tatiana Llort",
    countrySlug: "guatemala",
    citySlug: "ciudad-de-guatemala",
    district: "Zona 13",
    address: "15 Avenida 16-14, Zona 13, Edificio Narama, Oficina 339, Ciudad de Guatemala",
    modalities: ["presencial"],
    website: "https://clinicaintegral.com.gt/",
    phone: "+502 4432 9092",
    editorialScore: 4.6,
    specialties: ["Biomagnetismo", "Reflexología", "Cursos de biomagnetismo"],
    description:
      "Clínica Integral, dirigida por Tatiana Llort, es una de las consultas de biomagnetismo con más años en Guatemala: su web afirma más de 26 años de funcionamiento, con el biomagnetismo como servicio principal. Se ubica en el Edificio Narama de la zona 13, cerca del aeropuerto y de la zona 9. Además de las sesiones, imparte cursos breves de dos días pensados para quien quiere aplicar la técnica en familia, y complementa su oferta con reflexología, acupuntura electrónica y otras terapias. Su trayectoria es un punto a favor, aunque algunos textos de la web usan un lenguaje de curación que no compartimos: sugerimos acudir con expectativas realistas, usar la terapia como complemento y mantener el control médico de cualquier enfermedad diagnosticada.",
    highlights: [
      "Más de 26 años de trayectoria declarada",
      "Cursos de biomagnetismo de dos días",
      "Ubicada en zona 13",
    ],
    reviews: [],
    sourceUrls: ["https://clinicaintegral.com.gt/"],
    imagePrompt:
      "Office-building therapy room in Guatemala City, treatment table, red and black biomagnetism magnets on a tray, essential oil bottles on a shelf, window with view of volcano silhouettes, soft daylight, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "intoku-bienestar-ciudad-de-guatemala",
    name: "Intoku Bienestar",
    countrySlug: "guatemala",
    citySlug: "ciudad-de-guatemala",
    district: "Zona 14",
    address: "4a Avenida 9-40, Zona 14, Etú Plaza, 3er nivel, local 24, Ciudad de Guatemala",
    modalities: ["presencial"],
    website: "https://www.intokubienestar.com/",
    instagram: "https://instagram.com/intokubienestar",
    facebook: "https://facebook.com/intokubienestar",
    phone: "+502 3046 3487",
    editorialScore: 4.3,
    specialties: ["Biomagnetismo", "Kinesiología", "Acupuntura", "Reiki"],
    description:
      "Intoku Bienestar es un centro de terapias en Etú Plaza, zona 14, con un catálogo amplio que incluye biomagnetismo, kinesiología, acupuntura, reiki, reflexología, flores de Bach y distintos masajes. En su web el biomagnetismo se describe con sobriedad como un reequilibrio del pH mediante imanes, sin promesas exageradas. La ubicación, en una zona de oficinas y residencias, y el estacionamiento de la plaza lo hacen cómodo para quienes trabajan en zonas 10, 14 o 15. Las citas se agendan por WhatsApp o teléfono fijo, y tiene perfiles activos en Instagram y Facebook. Al ser un centro multidisciplinario, recomendamos preguntar qué terapeuta aplica el biomagnetismo y con qué formación, y recordar que la terapia es complementaria a la atención médica.",
    highlights: [
      "Centro multidisciplinario en zona 14",
      "Reserva por WhatsApp",
      "Descripción prudente de la terapia en su web",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.intokubienestar.com/servicios",
      "https://instagram.com/intokubienestar",
    ],
    imagePrompt:
      "Elegant minimalist wellness suite in a modern Guatemala City plaza, dark wood accents, treatment table, red and black biomagnetism magnets on a stone tray, bamboo plant, soft indirect light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "elan-med-center-ciudad-de-guatemala",
    name: "Elán Med Center",
    countrySlug: "guatemala",
    citySlug: "ciudad-de-guatemala",
    district: "Zona 10",
    address: "16 Calle 6-17, Zona 10, Edificio Pialé, Nivel 6, Oficina 604, Ciudad de Guatemala",
    modalities: ["presencial"],
    website: "https://www.elan.com.gt/biomagnetismo",
    instagram: "https://www.instagram.com/elanmedguatemala/",
    facebook: "https://www.facebook.com/elanmedguatemala",
    phone: "+502 2296 5986",
    editorialScore: 4.2,
    specialties: ["Biomagnetismo médico", "Medicina integrativa", "Control hormonal"],
    description:
      "Elán Med Center es una clínica de medicina integrativa y antienvejecimiento en la zona 10, conocida por su trabajo en control hormonal y sueroterapia, que incluye el biomagnetismo médico entre sus servicios. Para el paciente, la ventaja es acceder a la terapia con imanes dentro de un entorno clínico donde también se atienden análisis, control de peso o salud hormonal, lo que facilita una visión de conjunto. El centro está en un edificio de oficinas de la Zona Viva, con teléfonos fijos, WhatsApp y correo publicados. Como su oferta es amplia, conviene preguntar quién realiza las sesiones de biomagnetismo, cuánto duran y cuál es su costo. La terapia debe considerarse un apoyo complementario y no un sustituto de tratamientos médicos.",
    highlights: [
      "Biomagnetismo dentro de una clínica integrativa",
      "Ubicada en la Zona Viva (zona 10)",
      "Varios canales de contacto publicados",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.elan.com.gt/",
      "https://www.elan.com.gt/biomagnetismo",
    ],
    imagePrompt:
      "Modern integrative clinic consultation room in Guatemala City zone 10, white and sage green palette, treatment table, red and black biomagnetism magnets on a medical tray, city view through window, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── COSTA RICA ─────────────────────────
  {
    slug: "biomagnetismo-costa-rica-san-jose",
    name: "Biomagnetismo Costa Rica",
    countrySlug: "costa-rica",
    citySlug: "san-jose",
    district: "Los Yoses",
    address: "Barrio Francisco Peralta, 100 m oeste de la antigua Casa Italia, Los Yoses, San José",
    modalities: ["presencial"],
    website: "https://biomagnetismocr.com/",
    editorialScore: 4.1,
    specialties: ["Biomagnetismo", "Cursos", "Venta de imanes"],
    description:
      "Biomagnetismo Costa Rica es un proyecto con web bilingüe que ofrece terapia de biomagnetismo en Los Yoses, en el barrio Francisco Peralta, una zona tranquila entre el centro de San José y San Pedro de Montes de Oca. Además de las sesiones, el sitio incluye blog, cursos y una tienda en línea, lo que lo vuelve un recurso útil tanto para pacientes como para quien quiere iniciarse en la técnica. La web no detalla con claridad el nombre ni la formación del terapeuta responsable, así que recomendamos preguntarlo antes de reservar, junto con la duración y el costo de la primera sesión. Su ubicación es cómoda para quienes viven en el este de la capital. Como toda terapia de imanes, debe utilizarse como complemento de la atención médica.",
    highlights: [
      "Ubicado en Los Yoses, este de San José",
      "Web bilingüe con blog y cursos",
      "Tienda en línea",
    ],
    reviews: [],
    sourceUrls: ["https://biomagnetismocr.com/"],
    imagePrompt:
      "Bright tropical-style therapy room in San José, Costa Rica, treatment table, red and black biomagnetism magnets in a wooden bowl, lush green plants by an open window, natural light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "consultorio-biomagnetismo-respuesta-cuantica-san-jose",
    name: "Consultorio Biomagnetismo y Respuesta Cuántica",
    countrySlug: "costa-rica",
    citySlug: "san-jose",
    district: "Nunciatura",
    modalities: ["presencial"],
    phone: "+506 7102 1125",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo", "Respuesta cuántica"],
    description:
      "Este consultorio de San José, ubicado en la zona de Nunciatura, cerca de La Sabana y Rohrmoser, figura en mapas públicos bajo el nombre Consultorio Biomagnetismo y Respuesta Cuántica. Como su nombre indica, combina sesiones de biomagnetismo con un método de evaluación energética llamado respuesta cuántica. Su ficha pública indica un teléfono de contacto y horario diurno de lunes a viernes con algunos días alternos, por lo que es imprescindible llamar antes para confirmar disponibilidad. La información sobre el terapeuta y su formación no está publicada en línea, así que sugerimos pedir referencias y aclarar el costo y la duración de la sesión. Su ubicación es práctica para el oeste de la capital. Recuerda que estos enfoques son complementarios y no reemplazan el diagnóstico médico.",
    highlights: [
      "Ubicado en Nunciatura, cerca de La Sabana",
      "Combina biomagnetismo y respuesta cuántica",
      "Atención con cita telefónica",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.waze.com/es-419/live-map/directions/cr/san-jose/san-jose/consultorio-biomagnetismo-y-respuesta-cuantica?to=place.ChIJscpyiqj8oI8R1AcwltDt4uA",
    ],
    imagePrompt:
      "Small private therapy office in a residential house in San José, Costa Rica, treatment table, red and black magnets on a side table, simple desk with a laptop showing nothing readable, warm daylight, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── PANAMÁ ─────────────────────────
  {
    slug: "biomagnetic-ciudad-de-panama",
    name: "Biomagnetic",
    countrySlug: "panama",
    citySlug: "ciudad-de-panama",
    district: "Avenida Balboa",
    address: "Av. Balboa, Edificio Sky Business Center, Torre B, Piso 8, Local 809 (al lado de Multicentro), Ciudad de Panamá",
    modalities: ["presencial"],
    website: "https://biomagneticpty.com/",
    phone: "+507 400 3192",
    editorialScore: 4.5,
    specialties: ["Biomagnetismo médico", "Orientación alimentaria", "Terapias complementarias"],
    description:
      "Biomagnetic es un centro de terapias alternativas en Avenida Balboa, en el Sky Business Center junto a Multicentro, cuya especialidad central es el biomagnetismo médico. Su web describe una atención personalizada que combina las sesiones de imanes con protocolos de alimentación y otras técnicas complementarias como el pediluvio. Publica teléfono fijo, celular con WhatsApp, correo y un horario claro de lunes a viernes de 9:00 a 18:00 y sábados por la mañana, algo que facilita planificar visitas. La ubicación en una torre de oficinas con estacionamiento es cómoda para quien trabaja en el área bancaria o en Paitilla. Recomendamos tomar los testimonios de su web con prudencia y mantener el biomagnetismo como complemento del seguimiento médico.",
    highlights: [
      "Centro especializado en biomagnetismo médico",
      "Horario publicado, incluye sábados",
      "Ubicado en Av. Balboa junto a Multicentro",
    ],
    reviews: [],
    sourceUrls: ["https://biomagneticpty.com/"],
    imagePrompt:
      "Modern high-rise therapy office in Panama City, floor-to-ceiling window with bay and skyline view, treatment table, red and black biomagnetism magnets on a tray, white minimalist decor, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "mayolm-health-center-ciudad-de-panama",
    name: "Mayolm Health Center",
    countrySlug: "panama",
    citySlug: "ciudad-de-panama",
    district: "Avenida Balboa",
    address: "Av. Balboa, Rali Business Center, Torre A, PB, Local 103, Ciudad de Panamá",
    modalities: ["presencial"],
    website: "https://www.mayolmcenter.com/",
    instagram: "https://www.instagram.com/mayolmhealthcenter/",
    phone: "+507 373 5110",
    editorialScore: 4.3,
    specialties: ["Biomagnetismo", "Salud integrativa", "Consultas funcionales"],
    description:
      "Mayolm Health Center es un centro de salud integrativa con sede principal en Avenida Balboa y una segunda sucursal en La Chorrera. Entre sus terapias complementarias destaca el biomagnetismo, que aparece de forma recurrente en las opiniones publicadas en su web, junto con consultas con especialistas en medicina funcional, análisis y programas de bienestar para empresas. Su horario es amplio, de lunes a sábado desde temprano, y publica teléfono fijo y celular para cada sede. Para quien vive o trabaja en el área de Balboa o en Panamá Oeste es una opción accesible con estructura de centro. Conviene preguntar quién realiza las sesiones de imanes y su costo, y tener presente que el biomagnetismo no reemplaza tratamientos médicos indicados.",
    highlights: [
      "Sede en Av. Balboa y sucursal en La Chorrera",
      "Abre de lunes a sábado",
      "Biomagnetismo dentro de un enfoque integrativo",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.mayolmcenter.com/",
      "https://www.instagram.com/mayolmhealthcenter/",
    ],
    imagePrompt:
      "Integrative health center treatment room on the ground floor of a Panama City business tower, light wood and teal accents, treatment table, red and black magnets on a tray, tropical plant, bright light, realistic photography, no people, no faces, no text, no logos",
  },

  // ───────────────────────── REPÚBLICA DOMINICANA ─────────────────────────
  {
    slug: "longevity-clinic-santo-domingo",
    name: "Longevity Clinic",
    countrySlug: "republica-dominicana",
    citySlug: "santo-domingo",
    district: "Bella Vista, Distrito Nacional",
    address: "Bella Vista Mall, Suite C5, 3er piso, Av. Sarasota 62, Distrito Nacional, Santo Domingo",
    modalities: ["presencial"],
    website: "https://www.longevitycliniccenter.com/",
    phone: "+1 849 449 3901",
    editorialScore: 4.2,
    specialties: ["Par Biomagnético", "Medicina integrativa", "Medicina tradicional oriental"],
    description:
      "Longevity Clinic es un centro de medicina integrativa y regenerativa con sede en Bella Vista Mall, en el Distrito Nacional, y una segunda ubicación en Punta Cana. Dentro de su catálogo de terapias complementarias figura la terapia con Par Biomagnético, junto a medicina tradicional oriental, homeopatía, reflexología, terapia neural y orientación nutricional. Para el paciente de Santo Domingo, la ventaja es acceder al biomagnetismo en un entorno clínico con horario extendido de lunes a sábado y fácil acceso en un centro comercial con estacionamiento. Al tratarse de un centro con muchas disciplinas, recomendamos preguntar qué profesional aplica el par biomagnético y con qué formación, así como el costo por sesión. El biomagnetismo debe tomarse como apoyo complementario a la atención médica.",
    highlights: [
      "Par Biomagnético en una clínica integrativa",
      "Ubicada en Bella Vista Mall, con parqueo",
      "Abre de lunes a sábado",
    ],
    reviews: [],
    sourceUrls: ["https://www.longevitycliniccenter.com/terapiasyservicios"],
    imagePrompt:
      "Bright integrative clinic room in a Santo Domingo shopping center, Dominican Republic, white and soft blue decor, treatment table, red and black biomagnetism magnets on a tray, palm plant, natural light, realistic photography, no people, no faces, no text, no logos",
  },
  {
    slug: "cenbiocib-santiago-de-los-caballeros",
    name: "Centro de Biomagnetismo del Cibao (CENBIOCIB)",
    countrySlug: "republica-dominicana",
    citySlug: "santiago-de-los-caballeros",
    district: "Jardines del Norte",
    address: "Calle Penetración 1, Jardines del Norte, Santiago de los Caballeros",
    modalities: ["presencial"],
    facebook: "https://www.facebook.com/100475185536660",
    phone: "+1 829 940 4186",
    editorialScore: 4.0,
    specialties: ["Biomagnetismo", "Medicina natural"],
    description:
      "El Centro de Biomagnetismo del Cibao, conocido como CENBIOCIB, es una de las pocas consultas de Santiago de los Caballeros que se presenta públicamente con el biomagnetismo como servicio central, combinado con orientación en medicina natural. Se ubica en el sector Jardines del Norte y su presencia en línea se basa sobre todo en su página de Facebook, recogida por directorios locales con dirección y teléfono. Al no disponer de web propia con detalles sobre el terapeuta, recomendamos llamar o escribir antes de ir para confirmar horarios, costo de la sesión y formación de quien atiende. Es una alternativa práctica para quienes viven en el Cibao y no quieren desplazarse a la capital. Recuerda que el biomagnetismo es un enfoque complementario que no sustituye la atención médica.",
    highlights: [
      "Centro dedicado al biomagnetismo en el Cibao",
      "Ubicado en Jardines del Norte",
      "Contacto principal por Facebook y teléfono",
    ],
    reviews: [],
    sourceUrls: [
      "https://www.findglocal.com/DO/Santiago/100475185536660/Medicina-natural.-Centro-de-Biomagnetismo-del-Cibao---Cenbiocib",
      "https://www.facebook.com/100475185536660",
    ],
    imagePrompt:
      "Simple natural medicine and biomagnetism room in Santiago de los Caballeros, Dominican Republic, treatment table, red and black magnets in a basket, herbal remedy jars on shelves, bright Caribbean daylight, realistic photography, no people, no faces, no text, no logos",
  },
];
