export const AMAZON_TAG_US = "biomagnetistas-20";
export const AMAZON_TAG_ES = "biomagnetistas-21";

export type AmazonStoreRegion = "US" | "ES";

export type BiomagnetismoProductCategory =
  | "magnet"
  | "table"
  | "meter"
  | "tape"
  | "anatomy"
  | "storage"
  | "hygiene";

export interface AmazonProductRecommendation {
  id: string;
  badge: string;
  brand: string;
  title: string;
  subtitle: string;
  features: string[];
  categoryType: BiomagnetismoProductCategory;
  /** Direct ASIN on Amazon.com when verified */
  asinUS?: string;
  /** Direct ASIN on Amazon.es when verified */
  asinES?: string;
  /** Optimized search query on Amazon.com */
  queryUS: string;
  /** Optimized search query on Amazon.es */
  queryES: string;
  ctaLabel: string;
  specHighlight?: string;
}

/**
 * Generates an official Amazon Affiliate link with automatic geolocation store support:
 * - USA, Peru & Latin America (US): amazon.com with tag=biomagnetistas-20
 * - Spain & Europe (ES): amazon.es with tag=biomagnetistas-21
 */
export function buildAmazonUrl(
  product: AmazonProductRecommendation,
  region: AmazonStoreRegion
): string {
  if (region === "ES") {
    if (product.asinES) {
      return `https://www.amazon.es/dp/${product.asinES}?tag=${AMAZON_TAG_ES}`;
    }
    const q = encodeURIComponent(product.queryES);
    return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_TAG_ES}`;
  }

  if (product.asinUS) {
    return `https://www.amazon.com/dp/${product.asinUS}?tag=${AMAZON_TAG_US}`;
  }
  const q = encodeURIComponent(product.queryUS);
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG_US}`;
}

/**
 * Detects whether the user is browsing from Spain/Europe or Americas
 * based on browser timezone and language locale.
 */
export function detectUserAmazonRegion(): AmazonStoreRegion {
  if (typeof window === "undefined") {
    return "US"; // Default SSR fallback for Peru/LatAm/USA (biomagnetistas-20)
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();

    if (
      tz === "Europe/Madrid" ||
      tz === "Atlantic/Canary" ||
      tz === "Europe/Ceuta" ||
      lang === "es-es" ||
      tz.startsWith("Europe/")
    ) {
      return "ES";
    }

    return "US";
  } catch {
    return "US";
  }
}

// ============================================================================
// CURATED BIOMAGNETISM & CLINIC EQUIPMENT CATALOG (AMAZON.COM & AMAZON.ES)
// ============================================================================

export const BIOMAGNETISMO_CATALOG: Record<string, AmazonProductRecommendation> = {
  // --- IMANES Y KITS ---
  IMANES_NEODIMIO_N52_CUERO: {
    id: "imanes-neodimio-n52-cuero",
    badge: "🏆 #1 Más Vendidos en Biomagnetismo",
    brand: "Biomagnetism Pro",
    title: "Par de Imanes de Neodimio N52 Forrados en Cuero Bicolor (Rojo / Negro)",
    subtitle:
      "Imanes terapéuticos de alta densidad magnética con polaridad Norte (negro) y Sur (rojo) verificada y costuras reforzadas.",
    features: [
      "Núcleo de Neodimio grado N52 (>3.500–4.500 Gauss reales en superficie de contacto)",
      "Forro en cuero vacuno / piel resistente al sudor y a la desinfección entre pacientes",
      "Identificación cromática estándar del Método Goiz: Negro (Negativo/Norte) y Rojo (Positivo/Sur)",
    ],
    categoryType: "magnet",
    queryUS: "biomagnetism therapy magnets leather pair red black neodymium",
    queryES: "imanes biomagnetismo forrados cuero rojo negro par biomagnetico",
    ctaLabel: "Ver Imanes en Amazon",
    specHighlight: "Neodimio N52 · Bicolor Rojo/Negro · Costura Reforzada",
  },

  IMANES_FERRITA_4000_VINIL: {
    id: "imanes-ferrita-4000-vinil",
    badge: "🧲 Clásico para Rastreo Corporal",
    brand: "Ceramic Magnet Therapy",
    title: "Par de Imanes de Ferrita Cerámica (3.800–4.000 Gauss) Forrados en Vinipiel",
    subtitle:
      "El imán cerámico tradicional de campo magnético amplio y estable, ideal para estudiantes y rastreo general en tronco.",
    features: [
      "Ferrita cerámica grado C8 con campo magnético uniforme y seguro sin riesgo de pellizco brusco",
      "Forro en vinipiel / cuero sintético impermeable, lavable y termosellado de alta higiene",
      "Excelente relación calidad/precio para armar tus primeros 6 a 10 pares de práctica",
    ],
    categoryType: "magnet",
    queryUS: "ceramic biomagnetism magnets pair red black vinyl therapy",
    queryES: "imanes ferrita biomagnetismo forrados rojo negro par biomagnetico",
    ctaLabel: "Ver Imanes de Ferrita en Amazon",
    specHighlight: "Ferrita C8 · ~3.800 Gauss · Impermeable",
  },

  IMANES_REDONDOS_50MM_CUERO: {
    id: "imanes-redondos-50mm-cuero",
    badge: "⭕ Cobertura Profunda en Tronco",
    brand: "Biomagnetism Pro",
    title: "Imanes Redondos de 50 mm en Cuero Bicolor para Espalda, Abdomen y Cadera",
    subtitle:
      "Formato circular de gran diámetro para pares viscerales, lumbares, hepáticos y articulares sobre ropa gruesa.",
    features: [
      "Diámetro de 50 mm con distribución simétrica de líneas de flujo magnético",
      "Bordes redondeados sin esquinas que no marcan ni incomodan al paciente recostado",
      "Estabilidad superior sobre tórax, abdomen, sacro y articulaciones de rodilla",
    ],
    categoryType: "magnet",
    queryUS: "round biomagnetism magnets leather red black therapy pair",
    queryES: "imanes redondos biomagnetismo cuero rojo negro terapia",
    ctaLabel: "Ver Imanes Redondos en Amazon",
    specHighlight: "Diámetro 50 mm · Cuero Bicolor · Corporal",
  },

  IMANES_MEDIANOS_35MM_CERVICAL: {
    id: "imanes-medianos-35mm-cervical",
    badge: "🎯 Versatilidad Cervical y Articular",
    brand: "Biomagnetism Pro",
    title: "Par de Imanes Medianos de 35 mm Bicolor para Cuello, Garganta y Extremidades",
    subtitle:
      "Tamaño intermedio de peso equilibrado que se sujeta fácilmente con una sola tira de cinta Micropore en zonas curvas.",
    features: [
      "Diámetro de 35 mm ideal para tiroides, carótida, ángulo mandibular, muñeca y tobillo",
      "Peso contenido que no se desliza al colocarlo en los laterales del cuello",
      "Potencia terapéutica superior a 1.000 Gauss en superficie con forro suave al tacto",
    ],
    categoryType: "magnet",
    queryUS: "medium biomagnetism magnets pair red black therapy",
    queryES: "imanes medianos biomagnetismo par biomagnetico rojo negro",
    ctaLabel: "Ver Imanes Medianos en Amazon",
    specHighlight: "35 mm · Peso Ligero · Cuello y Articulaciones",
  },

  MINI_IMANES_FACIALES_15MM: {
    id: "mini-imanes-faciales-15mm",
    badge: "✨ Especial Rostro y Pares Craneales",
    brand: "MicroMag Therapy",
    title: "Set de Mini Imanes Faciales de 15 mm (2.500 Gauss) para Rostro, Sienes y Oídos",
    subtitle:
      "Micro-imanes de neodimio ultraligeros diseñados para párpados, senos paranasales, ATM, pineal e hipófisis.",
    features: [
      "Diámetro compacto de 15 mm y menos de 12 gramos para no presionar globos oculares ni nariz",
      "Permiten colocar pares muy próximos entre sí en el rostro sin que se atraigan y choquen",
      "Forro suave hipoalergénico bicolor fácil de fijar con cinta de papel",
    ],
    categoryType: "magnet",
    queryUS: "small facial biomagnetism magnets neodymium therapy pair",
    queryES: "imanes pequenos faciales biomagnetismo neodimio rojo negro",
    ctaLabel: "Ver Mini Imanes en Amazon",
    specHighlight: "15 mm · Ultraligeros · Rostro y Cráneo",
  },

  IMANES_INDUCTORES_NUCLEO: {
    id: "imanes-inductores-nucleo",
    badge: "⚡ Campo Concentrado Profundo",
    brand: "Biomagnetism Pro",
    title: "Par de Imanes Inductores de Núcleo Concentrado para Biomagnetismo Avanzado",
    subtitle:
      "Diseño con núcleo ferroso central que dirige y focaliza el flujo magnético hacia órganos profundos.",
    features: [
      "Geometría inductora que concentra las líneas de campo en el eje central del imán",
      "Muy utilizados por terapeutas experimentados en pares hepáticos, renales y pélvicos",
      "Forro en cuero de alta resistencia con costura perimetral reforzada",
    ],
    categoryType: "magnet",
    queryUS: "inductor biomagnetism magnets therapy pair leather",
    queryES: "imanes inductores biomagnetismo cuero par biomagnetico",
    ctaLabel: "Ver Imanes Inductores en Amazon",
    specHighlight: "Núcleo Inductor · Alta Penetración · Pro",
  },

  IMANES_RECTANGULARES_DOMINO: {
    id: "imanes-rectangulares-domino",
    badge: "📏 Formato Dominó Paravertebral",
    brand: "Biomagnetism Pro",
    title: "Par de Imanes Rectangulares (70×30 mm) para Columna Vertebral y Sacro",
    subtitle:
      "El formato rectangular clásico que abarca con comodidad vértebras cervicales, dorsales, lumbares y línea media.",
    features: [
      "Superficie rectangular plana de 7×3 cm que apoya sin balancearse sobre la columna",
      "Fácil sujeción con dos tiras paralelas de cinta adhesiva sobre la camiseta del paciente",
      "Bicolor rojo/negro de alta visibilidad para verificar la polaridad de un vistazo",
    ],
    categoryType: "magnet",
    queryUS: "rectangular biomagnetism magnets therapy pair red black",
    queryES: "imanes rectangulares biomagnetismo rojo negro par biomagnetico",
    ctaLabel: "Ver Imanes Rectangulares en Amazon",
    specHighlight: "70×30 mm · Formato Dominó · Columna y Tronco",
  },

  KIT_PROFESIONAL_30_IMANES: {
    id: "kit-profesional-30-imanes",
    badge: "💼 Kit Completo de Consultorio",
    brand: "Biomagnetism Master Kit",
    title: "Kit Profesional de Biomagnetismo (20 a 30 Imanes Surtidos) con Estuche Organizador",
    subtitle:
      "Dotación completa con pares grandes, medianos, rectangulares y mini faciales para impactar múltiples pares en una sola sesión.",
    features: [
      "Incluye combinación de imanes corporales de alto Gauss, medianos cervicales y mini craneales",
      "Permite trabajar de 8 a 15 pares simultáneos sin tener que esperar a retirar unos para poner otros",
      "Viene con maletín o estuche organizador con divisiones para proteger los forros",
    ],
    categoryType: "magnet",
    queryUS: "biomagnetism magnets kit set leather case therapy",
    queryES: "kit imanes biomagnetismo profesional maletin par biomagnetico",
    ctaLabel: "Ver Kit Profesional en Amazon",
    specHighlight: "Surtido Completo · Multitamaño · Con Estuche",
  },

  KIT_BASICO_12_IMANES_CASA: {
    id: "kit-basico-12-imanes-casa",
    badge: "🎓 Ideal Estudiantes y Familia",
    brand: "Biomagnetism Starter",
    title: "Kit Inicial de 10 a 12 Imanes Bicolor para Estudiantes de Biomagnetismo y Hogar",
    subtitle:
      "El set recomendado para empezar a practicar los protocolos del curso online en casa con familiares.",
    features: [
      "5 a 6 pares de imanes terapéuticos forrados en rojo y negro listos para usar desde el primer día",
      "Superan ampliamente el umbral mínimo de 1.000 Gauss requerido por el Par Biomagnético",
      "Inversión inicial accesible y fácil de transportar en mochila o bolso de mano",
    ],
    categoryType: "magnet",
    queryUS: "biomagnetism starter kit magnets pair red black",
    queryES: "kit basico imanes biomagnetismo par biomagnetico",
    ctaLabel: "Ver Kit Inicial en Amazon",
    specHighlight: "5–6 Pares Bicolor · >1.000 Gauss · Estudiantes",
  },

  PARCHES_MAGNETICOS_800_GAUSS: {
    id: "parches-magneticos-800-gauss",
    badge: "🩹 Micro-Puntos y Uso Continuo",
    brand: "AcuMag Patch",
    title: "Pack de Parches Magnéticos Adhesivos Hipoalergénicos (800–1.000 Gauss)",
    subtitle:
      "Micro-imanes con adhesivo color piel para puntos auriculares, digitales o apoyo local suave tras la consulta.",
    features: [
      "Adhesivo transpirable resistente al agua con micro-imán central de ferrita/neodimio",
      "Útiles en puntos de difícil sujeción como pabellón auricular, dedos o articulación temporomandibular",
      "Presentación en blíster higiénico de múltiples unidades desechables",
    ],
    categoryType: "magnet",
    queryUS: "magnetic acupressure patches therapy magnets adhesive",
    queryES: "parches magneticos acupuntura imanes adhesivos",
    ctaLabel: "Ver Parches Magnéticos en Amazon",
    specHighlight: "800–1.000 Gauss · Adhesivo Piel · Micro-Puntos",
  },

  KIT_CUERO_FORRAR_IMANES: {
    id: "kit-cuero-forrar-imanes",
    badge: "🪡 Para Forrar o Reparar tu Kit",
    brand: "LeatherCraft Pro",
    title: "Kit de Láminas de Cuero / Vinipiel Rojo y Negro + Adhesivo para Forrar Imanes",
    subtitle:
      "Materiales resistentes para renovar los forros desgastados de tu kit o encapsular imanes de neodimio vírgenes.",
    features: [
      "Pliegos en colores rojo intenso (Sur/Positivo) y negro mate (Norte/Negativo) de grosor uniforme",
      "Superficie no porosa fácil de limpiar con toallitas desinfectantes sin decolorarse",
      "Ideal para terapeutas que fabrican o dan mantenimiento periódico a sus propios pares",
    ],
    categoryType: "magnet",
    queryUS: "red and black faux leather sheets craft vinyl adhesive",
    queryES: "laminas cuero sintetico rojo negro polipiel manualidades",
    ctaLabel: "Ver Materiales en Amazon",
    specHighlight: "Rojo + Negro · Alta Resistencia · Fácil Limpieza",
  },

  // --- INSTRUMENTOS DE MEDICIÓN Y POLARIDAD ---
  DETECTOR_POLARIDAD_LED: {
    id: "detector-polaridad-led",
    badge: "🔬 Identificación Instantánea N/S",
    brand: "MagTest Electronic",
    title: "Detector Electrónico de Polaridad Magnética tipo Bolígrafo con LED (Norte / Sur)",
    subtitle:
      "Presiona el botón, acerca la punta al imán forrado y el LED te indica al instante si es Polo Norte o Polo Sur.",
    features: [
      "Doble indicador luminoso LED (Rojo para Polo Norte / Verde o Azul para Polo Sur) sin margen de duda",
      "Funciona a través del forro de cuero o vinipiel para auditar imanes comprados o recién forrados",
      "Tamaño bolsillo tipo lapicero con alta sensibilidad (±5 mT / 50 Gauss)",
    ],
    categoryType: "meter",
    queryUS: "magnetic pole detector pen LED north south tester",
    queryES: "detector polaridad magnetica boligrafo LED norte sur",
    ctaLabel: "Ver Detector LED en Amazon",
    specHighlight: "Sensor Hall · LED Norte/Sur · Tamaño Bolsillo",
  },

  GAUSSIMETRO_DIGITAL_WT10A: {
    id: "gaussimetro-digital-wt10a",
    badge: "📊 Medidor Profesional de Gauss",
    brand: "WT10A TeslaMeter",
    title: "Gaussímetro / Teslámetro Digital Portátil WT10A con Sonda Hall Transversal",
    subtitle:
      "Mide con exactitud científica los miliTeslas (mT) y Gauss reales en la superficie de tus imanes terapéuticos.",
    features: [
      "Rango de medición de 0 a 2.000 mT (0 a 20.000 Gauss) con pantalla LCD retroiluminada",
      "Incluye sonda Hall metálica de punta fina para medir el centro exacto del imán sobre el cuero",
      "Permite comprobar que cada imán de tu consultorio supera los 1.000 Gauss reales en superficie",
    ],
    categoryType: "meter",
    queryUS: "WT10A digital tesla meter gaussmeter magnetic flux probe",
    queryES: "gaussimetro digital WT10A teslametro medidor campo magnetico",
    ctaLabel: "Ver Gaussímetro en Amazon",
    specHighlight: "0–20.000 Gauss · Sonda Hall · Indica N/S",
  },

  BRUJULA_POLOS_MAGNETICOS: {
    id: "brujula-polos-magneticos",
    badge: "🧭 Método Clásico Sin Baterías",
    brand: "FieldCompass",
    title: "Brújula Magnética Identificadora de Polos Norte y Sur de Alta Sensibilidad",
    subtitle:
      "La herramienta infalible que no depende de pilas para verificar rápidamente la cara negativa y positiva de cualquier imán.",
    features: [
      "Aguja imantada de respuesta rápida con dial claro para distinguir atracción y repulsión",
      "Permite aplicar la regla física estándar sin confusiones al etiquetar tus pares",
      "Carcasa metálica compacta que cabe en cualquier compartimento del maletín de biomagnetismo",
    ],
    categoryType: "meter",
    queryUS: "magnetic pole identifier compass directional pocket compass",
    queryES: "brujula bolsillo metalica identificadora polos magneticos",
    ctaLabel: "Ver Brújula en Amazon",
    specHighlight: "Sin Pilas · Respuesta Inmediata · Compacta",
  },

  TIRAS_REACTIVAS_PH_SALIVA: {
    id: "tiras-reactivas-ph-saliva",
    badge: "🧪 Control Educativo de pH",
    brand: "pH Health Strips",
    title: "Tiras Reactivas de pH de Alta Precisión (Rango 4.5 a 9.0) con Tabla Colorimétrica",
    subtitle:
      "Lectura en 15 segundos con doble almohadilla indicadora para medir de forma orientativa el pH en saliva, orina o agua.",
    features: [
      "Escala estrecha de 4.5 a 9.0 con incrementos de 0.25 unidades (mucho más precisa que el papel tornasol 1–14)",
      "Doble almohadilla reactiva que no destiñe y facilita comparar el color con exactitud",
      "Envase hermético de 100 a 150 tiras protegido contra la humedad ambiental",
    ],
    categoryType: "meter",
    queryUS: "pH test strips saliva urine 4.5-9.0 high accuracy",
    queryES: "tiras reactivas ph saliva orina 4.5 9.0 precision",
    ctaLabel: "Ver Tiras de pH en Amazon",
    specHighlight: "Rango 4.5–9.0 · Lectura 15 s · Doble Pad",
  },

  MEDIDOR_DIGITAL_PH_AGUA: {
    id: "medidor-digital-ph-agua",
    badge: "💧 Precisión 0.01 pH en Líquidos",
    brand: "AquaTester Digital",
    title: "Medidor Digital de pH de Bolsillo (0.01 Resolución) con Compensación Automática ATC",
    subtitle:
      "Electrodo de vidrio de alta sensibilidad con calibración automática por botón para verificar el pH del agua de bebida.",
    features: [
      "Pantalla LCD iluminada con lectura exacta de 0.00 a 14.00 pH en menos de 5 segundos",
      "Compensación automática de temperatura (ATC) e incluye sobres de solución buffer para calibrar",
      "Ideal para comprobar la calidad y alcalinidad del agua filtrada en casa o en el consultorio",
    ],
    categoryType: "meter",
    queryUS: "digital pH meter water tester 0.01 high accuracy ATC",
    queryES: "medidor ph digital agua precision 0.01 calibracion automatica",
    ctaLabel: "Ver Medidor Digital en Amazon",
    specHighlight: "Resolución 0.01 pH · Calibración Automática",
  },

  // --- CAMILLAS Y MOBILIARIO DE CONSULTORIO ---
  CAMILLA_PLEGABLE_MADERA_2ZONAS: {
    id: "camilla-plegable-madera-2zonas",
    badge: "🛏️ Camilla #1 para Biomagnetistas",
    brand: "Sierra Comfort / BestMassage",
    title: "Camilla Plegable de Madera de Haya de 2 Zonas (Sin Interferencia Metálica)",
    subtitle:
      "Estructura en madera noble natural que evita que los imanes craneales y dorsales se desvíen o se peguen al chasis.",
    features: [
      "Patas y bastidor en madera de haya maciza (soporta hasta 225–250 kg de carga dinámica)",
      "Superficie plana de 2 cuerpos ideal para que los talones del paciente queden libres y alineados en el rastreo",
      "Acolchado de espuma de alta densidad tapizado en PVC clínico impermeable + funda de transporte",
    ],
    categoryType: "table",
    queryUS: "portable wooden massage table 2 fold carrying case",
    queryES: "camilla masaje plegable madera 2 zonas portatil",
    ctaLabel: "Ver Camilla de Madera en Amazon",
    specHighlight: "Madera de Haya · 2 Zonas Planas · Hasta 250 kg",
  },

  CAMILLA_MADERA_3ZONAS_RECLINABLE: {
    id: "camilla-madera-3zonas-reclinable",
    badge: "🛋️ Respaldo Reclinable Multipunto",
    brand: "Master Massage / SpaPro",
    title: "Camilla Plegable de Madera de 3 Zonas con Respaldo Elevable y Cabezal Ergonómico",
    subtitle:
      "Se abate 100% plana para el rastreo biomagnético y permite reclinar el respaldo para pacientes con reflujo o adultos mayores.",
    features: [
      "Tercer cuerpo abatible en múltiples ángulos que queda totalmente horizontal durante el test de pies",
      "Espuma multicapa de 6 a 7 cm de grosor que mantiene al paciente cómodo durante los 20 min de impactación",
      "Incluye cabezal ajustable, apoyabrazos desmontables y bolso de hombro reforzado",
    ],
    categoryType: "table",
    queryUS: "3 section portable wooden massage table adjustable backrest",
    queryES: "camilla plegable madera 3 zonas respaldo reclinable",
    ctaLabel: "Ver Camilla 3 Zonas en Amazon",
    specHighlight: "3 Zonas · 100% Plana o Reclinable · Madera",
  },

  COJIN_BOLSTER_SEMICILINDRICO: {
    id: "cojin-bolster-semicilindrico",
    badge: "🦵 Descanso Lumbar sin Mover Talones",
    brand: "Earthlite / ProBolster",
    title: "Cojín Cilíndrico / Semicilíndrico (Bolster) Impermeable para Camilla de Terapia",
    subtitle:
      "Alivia la tensión lumbar del paciente al colocarlo bajo las rodillas una vez finalizado el rastreo de pies.",
    features: [
      "Base plana (formato medio rulo) que no rueda por la camilla y mantiene la pelvis estable",
      "Tapizado en vinipiel médica antibacteriana fácil de desinfectar en 10 segundos",
      "Con asa lateral reforzada para retirarlo durante el rastreo y colocarlo durante la impactación",
    ],
    categoryType: "table",
    queryUS: "massage table bolster pillow half round waterproof",
    queryES: "cojin rulo semicilindrico camilla masaje impermeable",
    ctaLabel: "Ver Cojín Bolster en Amazon",
    specHighlight: "Espuma Firme · Base Estable · Vinipiel",
  },

  TABURETE_GIRATORIO_TERAPEUTA: {
    id: "taburete-giratorio-terapeuta",
    badge: "🪑 Ergonomía a los Pies de Camilla",
    brand: "Ergonomic Clinic Stool",
    title: "Taburete Giratorio Ajustable en Altura con Ruedas Silenciosas para Terapeuta",
    subtitle:
      "Permite realizar el rastreo de talones con la espalda recta y desplazarte alrededor de la camilla para colocar los pares.",
    features: [
      "Pistón hidráulico regulable en altura (45 a 62 cm) para alinear tus ojos con los talones del paciente",
      "5 ruedas de poliuretano de giro 360° que se deslizan sin ruido sobre parquet, cerámico o vinilo",
      "Asiento acolchado de alta densidad (disponible en formato redondo o silla de montar Saddle)",
    ],
    categoryType: "table",
    queryUS: "rolling swivel stool adjustable height massage therapist",
    queryES: "taburete giratorio ruedas regulable altura clinica masaje",
    ctaLabel: "Ver Taburete en Amazon",
    specHighlight: "Altura Regulable · Giro 360° · Ruedas Suaves",
  },

  CARRITO_AUXILIAR_NO_MAGNETICO: {
    id: "carrito-auxiliar-no-magnetico",
    badge: "🗄️ Estación No Magnética para Imanes",
    brand: "ClinicCart Wood/ABS",
    title: "Carrito Auxiliar con Bandejas No Magnéticas (Madera / Polímero ABS) y Ruedas",
    subtitle:
      "Evita el error clásico de las mesas metálicas: tus imanes de neodimio no se pegan a la bandeja y puedes ordenarlos por pares.",
    features: [
      "3 niveles amplios de polímero de alta densidad o madera natural 100% libres de hierro",
      "Bandeja superior ideal para separar la fila de imanes negativos (negros) y positivos (rojos) más la cinta 3M",
      "Ruedas con freno para acercar todo tu instrumental al costado de la camilla",
    ],
    categoryType: "table",
    queryUS: "plastic wood rolling utility cart 3 tier spa clinic",
    queryES: "carrito auxiliar ruedas bandejas plastico madera estetica clinica",
    ctaLabel: "Ver Carrito Auxiliar en Amazon",
    specHighlight: "100% No Magnético · 3 Niveles · Con Freno",
  },

  ESCALON_SUBIDA_CAMILLA: {
    id: "escalon-subida-camilla",
    badge: "🪜 Seguridad para Adultos Mayores",
    brand: "MedStep Safe",
    title: "Escalón / Peldaño Clínico Antideslizante para Subir a la Camilla con Seguridad",
    subtitle:
      "Imprescindible en consultorio para que pacientes mayores, niños o personas con dolor lumbar suban a la camilla sin esfuerzo.",
    features: [
      "Plataforma ancha con alfombrilla de goma estriada antideslizante y patas con tacos de caucho",
      "Estructura reforzada de alta capacidad (soporta más de 150–180 kg sin tambalearse)",
      "Altura óptima de 20–23 cm que reduce a la mitad el escalón hacia la camilla de biomagnetismo",
    ],
    categoryType: "table",
    queryUS: "medical step stool non slip platform clinic massage table",
    queryES: "peldano escalon clinico antideslizante subir camilla",
    ctaLabel: "Ver Peldaño Clínico en Amazon",
    specHighlight: "Base Antideslizante · >150 kg · Altura 22 cm",
  },

  MANTA_TERMICA_LIGERA_CAMILLA: {
    id: "manta-termica-ligera-camilla",
    badge: "🌡️ Confort Térmico en Consulta",
    brand: "SpaWarm Comfort",
    title: "Manta Térmica / Cobertor Ultraligero de Microfibra para Pacientes en Camilla",
    subtitle:
      "Mantiene la temperatura corporal del paciente en reposo sin aplastar ni desplazar los imanes colocados sobre la ropa.",
    features: [
      "Tejido polar de microfibra ultraligero y cálido que abriga sin ejercer peso sobre los pares",
      "100% libre de hilos metálicos (puede colocarse encima del paciente con los imanes ya puestos)",
      "Lavable a máquina y de secado rápido para uso intensivo en consultorio",
    ],
    categoryType: "table",
    queryUS: "lightweight fleece blanket massage table spa clinic",
    queryES: "manta ligera microfibra camilla masaje consulta",
    ctaLabel: "Ver Manta de Camilla en Amazon",
    specHighlight: "Ultraligera · No Mueve los Imanes · Lavable",
  },

  // --- CINTAS Y SUJECIÓN DE IMANES ---
  CINTA_3M_MICROPORE_CAJA: {
    id: "cinta-3m-micropore-caja",
    badge: "🩹 La Cinta #1 en Consultorios",
    brand: "3M Micropore",
    title: "Caja de 12 Rollos de Cinta 3M Micropore Hipoalergénica de Papel (2.5 cm × 9.1 m)",
    subtitle:
      "El estándar mundial en biomagnetismo: sujeta los imanes con firmeza sobre ropa o rostro y se retira sin dejar residuo pegajoso.",
    features: [
      "Adhesivo acrílico hipoalergénico libre de látex que cuida la piel sensible en pares faciales y cervicales",
      "No deja manchas de pegamento en las camisetas o pantalones de tus pacientes al retirar el imán",
      "Se corta fácilmente con los dedos sin necesidad de tijeras para agilizar la sesión",
    ],
    categoryType: "tape",
    asinUS: "B000BMHX2Y",
    queryUS: "3M Micropore Paper Tape 1 inch box of 12",
    queryES: "3M Micropore esparadrapo papel hipoalergenico 2.5 cm caja 12",
    ctaLabel: "Ver Caja 3M Micropore en Amazon",
    specHighlight: "2.5 cm (1\") · Hipoalergénica · No Mancha Ropa",
  },

  CINTA_3M_TRANSPORE_FUERTE: {
    id: "cinta-3m-transpore-fuerte",
    badge: "💪 Sujeción Extra para Imanes Pesados",
    brand: "3M Transpore",
    title: "Caja de 12 Rollos de Cinta 3M Transpore Transparente Microperforada (2.5 cm)",
    subtitle:
      "Mayor tracción inicial para fijar imanes grandes de neodimio en zonas verticales, costados, mandíbula o calzado.",
    features: [
      "Plástico transparente microperforado con corte bidireccional instantáneo (a lo ancho y a lo largo)",
      "Adherencia superior sobre telas sintéticas, lana o prendas deportivas donde la cinta de papel resbala",
      "Hipoalergénica, resistente a la humedad y fácil de manipular incluso con guantes",
    ],
    categoryType: "tape",
    queryUS: "3M Transpore Clear Surgical Tape 1 inch box of 12",
    queryES: "3M Transpore esparadrapo transparente 2.5 cm caja 12",
    ctaLabel: "Ver Caja 3M Transpore en Amazon",
    specHighlight: "Alta Adherencia · Corte Bidireccional · 2.5 cm",
  },

  BANDAS_ELASTICAS_VELCRO_IMANES: {
    id: "bandas-elasticas-velcro-imanes",
    badge: "♻️ Reutilizables Sin Gastar Cinta",
    brand: "MagStrap Elastic",
    title: "Set de Bandas y Correas Elásticas con Velcro para Sujetar Imanes en Cuerpo y Cabeza",
    subtitle:
      "Coloca pares en cráneo, cuello, rodillas, tobillos y cintura en 3 segundos sin pegar cinta sobre el cabello ni la ropa.",
    features: [
      "Incluye medidas variadas: cintas craneales/cervicales, bandas de extremidades y faja torácica/lumbar",
      "Permiten deslizar el imán entre la banda y la prenda del paciente con presión suave y constante",
      "Lavables, reutilizables por años y ahorran decenas de rollos de cinta adhesiva al mes",
    ],
    categoryType: "tape",
    queryUS: "elastic velcro straps wrap bands physical therapy medical",
    queryES: "bandas elasticas velcro correas sujecion fisioterapia",
    ctaLabel: "Ver Bandas con Velcro en Amazon",
    specHighlight: "Set Multitamaño · Sin Adhesivo · Lavables",
  },

  // --- MALETINES Y ALMACENAMIENTO ---
  MALETIN_RIGIDO_ESPUMA_IMANES: {
    id: "maletin-rigido-espuma-imanes",
    badge: "🛡️ Máxima Protección Anti-Impacto",
    brand: "Apache / Pick & Pluck Case",
    title: "Maletín Rígido Estanco con Espuma Precortada (Pick & Pluck) para Imanes de Neodimio",
    subtitle:
      "Crea celdas individuales a medida en la espuma de alta densidad para que tus imanes de neodimio nunca choquen entre sí.",
    features: [
      "Espuma interior cuadriculada personalizable que mantiene cada par separado por barreras de 2–3 cm",
      "Aísla el campo magnético hacia el exterior para proteger tarjetas, llaves o electrónicos cercanos",
      "Carcasa de polipropileno resistente a caídas con cierres dobles y asa ergonómica",
    ],
    categoryType: "storage",
    queryUS: "hard case with pick and pluck foam waterproof organizer",
    queryES: "maletin rigido espuma precortada estanco organizador",
    ctaLabel: "Ver Maletín con Espuma en Amazon",
    specHighlight: "Espuma Personalizable · Anti-Choque · Rígido",
  },

  ESTUCHE_EVA_SEPARADORES_IMANES: {
    id: "estuche-eva-separadores-imanes",
    badge: "🎒 Ligero para Visitas a Domicilio",
    brand: "TravelEva Organizer",
    title: "Estuche Semirrígido EVA con Separadores Acolchados Ajustables para Kit de Imanes",
    subtitle:
      "Organizador portátil con tabiques de velcro acolchados y bolsillo superior para rollos de cinta 3M, detector y manual.",
    features: [
      "Divisiones internas acolchadas reconfigurables para clasificar imanes por tamaño (grandes, medianos, mini)",
      "Peso ultraligero con cierre de doble cremallera y correa de transporte",
      "Perfecto para terapeutas que atienden a domicilio o estudiantes que llevan su kit a prácticas",
    ],
    categoryType: "storage",
    queryUS: "hard EVA travel case adjustable padded dividers organizer",
    queryES: "estuche rigido EVA separadores acolchados ajustables",
    ctaLabel: "Ver Estuche Organizador en Amazon",
    specHighlight: "Separadores Acolchados · Portátil · Ligero",
  },

  // --- HIGIENE Y TEXTILES DE CAMILLA ---
  SABANAS_MICROFIBRA_CAMILLA: {
    id: "sabanas-microfibra-camilla",
    badge: "✨ Presentación Profesional Lavable",
    brand: "ForPro / SpaLinen",
    title: "Set de Sábanas y Fundas Ajustables de Microfibra para Camilla de Terapia (3 Piezas)",
    subtitle:
      "Ajuste elástico firme que no se arruga bajo los pies del paciente y resiste cientos de lavados sin perder color.",
    features: [
      "Incluye sábana bajera ajustable con elástico perimetral, sábana encimera y funda para el cabezal",
      "Tejido hipoalergénico antimanchas que no genera estática ni atrapa pelusas",
      "Medida universal compatible con camillas plegables de madera de 60 a 75 cm de ancho",
    ],
    categoryType: "hygiene",
    queryUS: "massage table sheet set fitted microfiber washable",
    queryES: "sabanas ajustables camilla masaje microfibra lavables",
    ctaLabel: "Ver Set de Sábanas en Amazon",
    specHighlight: "3 Piezas Ajustables · Antiarrugas · Lavable",
  },

  ROLLO_PAPEL_CAMILLA_PRECORTADO: {
    id: "rollo-papel-camilla-precortado",
    badge: "🧻 Higiene Desechable por Paciente",
    brand: "MedRoll Clinic",
    title: "Pack de Rollos de Papel Camilla Precortado (60 cm × 50–70 m) Grado Clínico",
    subtitle:
      "Barrera higiénica individual que se cambia en 5 segundos frente al paciente, protegiendo el tapizado y la zona de calzado.",
    features: [
      "Celulosa virgen de doble capa resistente al roce de los zapatos durante el rastreo de talones",
      "Precorte troquelado cada 40–50 cm para cortar sin tijeras y cubrir toda la camilla o solo la piecera",
      "Transmite máxima confianza sanitaria desde el momento en que el paciente entra al consultorio",
    ],
    categoryType: "hygiene",
    queryUS: "exam table paper roll creped smooth massage table",
    queryES: "rollo papel camilla precortado 60 cm resistente",
    ctaLabel: "Ver Rollos de Papel en Amazon",
    specHighlight: "60 cm Ancho · Troquelado · Alta Resistencia",
  },

  TOALLITAS_DESINFECTANTES_SIN_ALCOHOL: {
    id: "toallitas-desinfectantes-sin-alcohol",
    badge: "🧴 Cuida el Cuero y la Vinipiel",
    brand: "Clinell / Cavicide Wipes",
    title: "Bote de Toallitas Desinfectantes Clínicas Sin Alcohol ni Cloro para Cuero y Camilla",
    subtitle:
      "Limpia y desinfecta tus imanes forrados y el tapizado de la camilla en 30 segundos sin resecar ni cuartear el cuero.",
    features: [
      "Fórmula libre de alcohol y lejía que no destiñe el tinte rojo/negro de los imanes terapéuticos",
      "Secado rápido sin dejar película grasosa que impida que la cinta Micropore pegue después",
      "Bote dispensador con tapa hermética para tener siempre a mano en el carrito auxiliar",
    ],
    categoryType: "hygiene",
    queryUS: "alcohol free disinfectant wipes medical vinyl leather",
    queryES: "toallitas desinfectantes sin alcohol superficies clinicas cuero",
    ctaLabel: "Ver Toallitas Sin Alcohol en Amazon",
    specHighlight: "0% Alcohol · No Cuartea el Cuero · Secado Rápido",
  },

  ANTIFACES_DESCANSO_PACIENTE: {
    id: "antifaces-descanso-paciente",
    badge: "😌 Relajación Profunda en Sesión",
    brand: "SpaRest EyeMask",
    title: "Antifaz de Descanso Ergonómico de Seda / Algodón + Protectores Faciales de Camilla",
    subtitle:
      "Bloquea la luz del techo mientras el paciente descansa boca arriba durante los 15–20 minutos de aplicación de imanes.",
    features: [
      "Tejido transpirable y ligero sin piezas metálicas que interfieran con pares craneales o pineal",
      "Ayuda al paciente a entrar en estado parasimpático de relajación profunda durante la sesión",
      "Fácilmente lavable o combinable con fundas higiénicas desechables individuales",
    ],
    categoryType: "hygiene",
    queryUS: "silk sleep eye mask breathable spa relaxation",
    queryES: "antifaz dormir seda suave relajacion spa",
    ctaLabel: "Ver Antifaces en Amazon",
    specHighlight: "100% Sin Metal · Bloqueo de Luz · Lavable",
  },

  // --- ANATOMÍA, EDUCACIÓN Y BIENESTAR ---
  LAMINAS_ANATOMICAS_ORGANOS: {
    id: "laminas-anatomicas-organos",
    badge: "🗺️ Mapa Visual para Consultorio",
    brand: "3B Scientific / Palace Learning",
    title: "Pack de Pósters y Láminas Anatómicas Laminadas (Órganos, Sistema Nervioso y Muscular)",
    subtitle:
      "Ilustraciones médicas plastificadas de alta resolución para ubicar referencias anatómicas y explicar el rastreo al paciente.",
    features: [
      "Incluye láminas de órganos internos (hígado, timo, bazo, páncreas, riñones), esqueleto y sistema linfático",
      "Acabado laminado resistente sobre el que puedes señalar puntos sin deteriorar el papel",
      "Aporta autoridad visual, orden clínico y claridad educativa a la pared de tu consultorio",
    ],
    categoryType: "anatomy",
    queryUS: "anatomical poster set laminated human organs muscular system",
    queryES: "poster anatomia laminado organos cuerpo humano sistema muscular",
    ctaLabel: "Ver Láminas Anatómicas en Amazon",
    specHighlight: "Laminado Resistente · Órganos y Músculos",
  },

  MODELO_TORSO_ANATOMICO_3D: {
    id: "modelo-torso-anatomico-3d",
    badge: "🫀 Didáctica 3D de Órganos Internos",
    brand: " Anatomical Model 3D",
    title: "Modelo Anatómico de Torso Humano 3D con Órganos Desmontables (15 a 20 Piezas)",
    subtitle:
      "La mejor herramienta didáctica para estudiantes de biomagnetismo: visualiza la posición y profundidad real de cada órgano.",
    features: [
      "Órganos extraíbles a color: pulmones, corazón, hígado, estómago, páncreas, bazo, riñones e intestinos",
      "Permite comprender en 3 dimensiones por qué los pares biomagnéticos atraviesan planos anteriores y posteriores",
      "Tamaño compacto de escritorio ideal para tener sobre la mesa de consulta",
    ],
    categoryType: "anatomy",
    queryUS: "human torso anatomy model removable organs medical study",
    queryES: "modelo anatomico torso humano organos desmontables",
    ctaLabel: "Ver Torso Anatómico 3D en Amazon",
    specHighlight: "15+ Órganos Desmontables · Estudio 3D",
  },

  DIFUSOR_AROMAS_CONSULTORIO: {
    id: "difusor-aromas-consultorio",
    badge: "🌿 Ambiente Clínico Relajante",
    brand: "SpaAroma Ultrasonic",
    title: "Difusor Ultrasónico Silencioso de Aceites Esenciales (500 ml) Acabado Madera",
    subtitle:
      "Humidifica y aromatiza suavemente la sala de terapia con lavanda o eucalipto sin hacer ruido durante la sesión.",
    features: [
      "Tecnología ultrasónica de menos de 25 dB con apagado automático al agotarse el agua",
      "Temporizador de 1, 3 y 6 horas para mantener el consultorio fresco toda la jornada",
      "Estética cálida en veta de madera que armoniza con camillas de haya y espacios de bienestar",
    ],
    categoryType: "anatomy",
    queryUS: "ultrasonic essential oil diffuser 500ml wood grain quiet",
    queryES: "difusor aceites esenciales ultrasonico silencioso 500ml madera",
    ctaLabel: "Ver Difusor en Amazon",
    specHighlight: "<25 dB Silencioso · 500 ml · Apagado Auto",
  },

  ELECTROLITOS_MINERALES_HIDRATACION: {
    id: "electrolitos-minerales-hidratacion",
    badge: "💧 Hidratación Pre y Post-Sesión",
    brand: "Trace Minerals / Electrolytes",
    title: "Gotas de Minerales Traza Iónicos y Electrolitos Sin Azúcar para Agua de Bebida",
    subtitle:
      "Oligoelementos naturales (magnesio, potasio, sodio y cloruros) para una hidratación conductiva óptima antes y después de la sesión.",
    features: [
      "Fórmula iónica concentrada sin azúcar, colorantes ni estimulantes artificiales",
      "Basta añadir unas gotas al vaso de agua para reponer electrolitos tras el descanso en camilla",
      "Rinde más de 40 a 60 porciones por envase con dosificador de gotero",
    ],
    categoryType: "anatomy",
    queryUS: "ionic trace mineral drops sugar free electrolytes hydration",
    queryES: "electrolitos sin azucar gotas minerales traza hidratacion",
    ctaLabel: "Ver Electrolitos en Amazon",
    specHighlight: "Minerales Iónicos · 0% Azúcar · Alta Pureza",
  },
};

export type BiomagnetismoProductKey = keyof typeof BIOMAGNETISMO_CATALOG;

/**
 * Resolves 3 Amazon product recommendations from an explicit tuple of catalog keys
 * or falls back dynamically based on slug/title keywords.
 */
export function resolveBiomagnetismoAmazonProducts(
  productKeys?: [string, string, string],
  slug = "",
  title = ""
): [
  AmazonProductRecommendation,
  AmazonProductRecommendation,
  AmazonProductRecommendation,
] {
  if (
    productKeys &&
    BIOMAGNETISMO_CATALOG[productKeys[0]] &&
    BIOMAGNETISMO_CATALOG[productKeys[1]] &&
    BIOMAGNETISMO_CATALOG[productKeys[2]]
  ) {
    return [
      BIOMAGNETISMO_CATALOG[productKeys[0]],
      BIOMAGNETISMO_CATALOG[productKeys[1]],
      BIOMAGNETISMO_CATALOG[productKeys[2]],
    ];
  }

  const text = `${slug} ${title}`.toLowerCase();

  if (text.includes("camilla") || text.includes("cojin") || text.includes("bolster") || text.includes("taburete") || text.includes("escalon") || text.includes("peldano") || text.includes("manta")) {
    return [
      BIOMAGNETISMO_CATALOG.CAMILLA_PLEGABLE_MADERA_2ZONAS,
      BIOMAGNETISMO_CATALOG.COJIN_BOLSTER_SEMICILINDRICO,
      BIOMAGNETISMO_CATALOG.SABANAS_MICROFIBRA_CAMILLA,
    ];
  }

  if (text.includes("cinta") || text.includes("micropore") || text.includes("transpore") || text.includes("velcro") || text.includes("banda") || text.includes("pegar") || text.includes("sujetar")) {
    return [
      BIOMAGNETISMO_CATALOG.CINTA_3M_MICROPORE_CAJA,
      BIOMAGNETISMO_CATALOG.CINTA_3M_TRANSPORE_FUERTE,
      BIOMAGNETISMO_CATALOG.BANDAS_ELASTICAS_VELCRO_IMANES,
    ];
  }

  if (text.includes("gaussimetro") || text.includes("polaridad") || text.includes("brujula") || text.includes("polo") || text.includes("gauss")) {
    return [
      BIOMAGNETISMO_CATALOG.GAUSSIMETRO_DIGITAL_WT10A,
      BIOMAGNETISMO_CATALOG.DETECTOR_POLARIDAD_LED,
      BIOMAGNETISMO_CATALOG.BRUJULA_POLOS_MAGNETICOS,
    ];
  }

  if (text.includes("maletin") || text.includes("estuche") || text.includes("guardar") || text.includes("avion") || text.includes("viajar")) {
    return [
      BIOMAGNETISMO_CATALOG.MALETIN_RIGIDO_ESPUMA_IMANES,
      BIOMAGNETISMO_CATALOG.ESTUCHE_EVA_SEPARADORES_IMANES,
      BIOMAGNETISMO_CATALOG.KIT_PROFESIONAL_30_IMANES,
    ];
  }

  if (text.includes("ph") || text.includes("alcalin") || text.includes("electrolito")) {
    return [
      BIOMAGNETISMO_CATALOG.TIRAS_REACTIVAS_PH_SALIVA,
      BIOMAGNETISMO_CATALOG.MEDIDOR_DIGITAL_PH_AGUA,
      BIOMAGNETISMO_CATALOG.ELECTROLITOS_MINERALES_HIDRATACION,
    ];
  }

  return [
    BIOMAGNETISMO_CATALOG.IMANES_NEODIMIO_N52_CUERO,
    BIOMAGNETISMO_CATALOG.KIT_PROFESIONAL_30_IMANES,
    BIOMAGNETISMO_CATALOG.CINTA_3M_MICROPORE_CAJA,
  ];
}
