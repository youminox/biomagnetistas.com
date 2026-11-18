import type { City, Country, CountrySlug } from "./types";

export const COUNTRIES: Country[] = [
  {
    slug: "peru",
    name: "Perú",
    flag: "🇵🇪",
    iso: "PE",
    currency: "PEN",
    sessionPrice: "S/ 100 – S/ 250 por sesión (referencial)",
    intro:
      "En Perú, el biomagnetismo se ha consolidado sobre todo en Lima, donde cada vez más personas buscan una terapia complementaria, sin fármacos y con un trato cercano. Tras revisar experiencia, trayectoria formativa, transparencia y atención, nuestro equipo recomienda un único centro en el país: Biomagnetismo Bens, dirigido por el terapeuta Bencio Lingán en Santiago de Surco.",
    order: 1,
  },
  {
    slug: "mexico",
    name: "México",
    flag: "🇲🇽",
    iso: "MX",
    currency: "MXN",
    sessionPrice: "MX$ 500 – MX$ 1,500 por sesión (referencial)",
    intro:
      "México es la cuna del Par Biomagnético: aquí el Dr. Isaac Goiz Durán desarrolló el método en 1988. Por eso concentra la mayor cantidad de terapeutas y escuelas de Latinoamérica, especialmente en la Ciudad de México, Guadalajara, Monterrey, Puebla y Querétaro.",
    order: 2,
  },
  {
    slug: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    iso: "CO",
    currency: "COP",
    sessionPrice: "COP 80.000 – 250.000 por sesión (referencial)",
    intro:
      "Colombia tiene una comunidad de biomagnetistas muy activa, con centros integrativos en Bogotá, Medellín, Cali y Barranquilla. Muchos terapeutas combinan el Par Biomagnético con otras terapias complementarias.",
    order: 3,
  },
  {
    slug: "argentina",
    name: "Argentina",
    flag: "🇦🇷",
    iso: "AR",
    currency: "ARS",
    sessionPrice: "Precio variable en ARS; consultar al terapeuta",
    intro:
      "En Argentina el biomagnetismo crece dentro de los espacios de salud integrativa de Buenos Aires, Córdoba, Rosario y Mendoza, con terapeutas formados en el método Goiz y en escuelas locales.",
    order: 4,
  },
  {
    slug: "chile",
    name: "Chile",
    flag: "🇨🇱",
    iso: "CL",
    currency: "CLP",
    sessionPrice: "CLP 25.000 – 60.000 por sesión (referencial)",
    intro:
      "Chile cuenta con una de las comunidades de biomagnetismo más organizadas de la región, con terapeutas agrupados en asociaciones gremiales y consultas en Santiago, Viña del Mar y Concepción.",
    order: 5,
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    flag: "🇪🇨",
    iso: "EC",
    currency: "USD",
    sessionPrice: "US$ 25 – US$ 60 por sesión (referencial)",
    intro:
      "En Ecuador el biomagnetismo se practica principalmente en Quito, Guayaquil y Cuenca, a menudo dentro de centros de medicina alternativa y bienestar.",
    order: 6,
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    flag: "🇧🇴",
    iso: "BO",
    currency: "BOB",
    sessionPrice: "Bs 150 – Bs 350 por sesión (referencial)",
    intro:
      "En Bolivia la terapia con imanes tiene presencia creciente en Santa Cruz, La Paz y Cochabamba, con terapeutas que atienden tanto de forma presencial como a distancia.",
    order: 7,
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",
    iso: "VE",
    currency: "USD",
    sessionPrice: "US$ 15 – US$ 40 por sesión (referencial)",
    intro:
      "En Venezuela hay terapeutas de biomagnetismo en Caracas, Valencia y Maracaibo; muchos ofrecen también sesiones a distancia para venezolanos en el exterior.",
    order: 8,
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    flag: "🇬🇹",
    iso: "GT",
    currency: "GTQ",
    sessionPrice: "Q 250 – Q 500 por sesión (referencial)",
    intro:
      "Guatemala concentra su oferta de biomagnetismo en la Ciudad de Guatemala, donde existen clínicas de terapias complementarias con terapeutas formados en el método Goiz.",
    order: 9,
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    flag: "🇨🇷",
    iso: "CR",
    currency: "CRC",
    sessionPrice: "₡ 20.000 – ₡ 40.000 por sesión (referencial)",
    intro:
      "En Costa Rica el biomagnetismo forma parte de la amplia oferta de bienestar del Valle Central, con consultas en San José y alrededores.",
    order: 10,
  },
  {
    slug: "panama",
    name: "Panamá",
    flag: "🇵🇦",
    iso: "PA",
    currency: "USD",
    sessionPrice: "US$ 40 – US$ 80 por sesión (referencial)",
    intro:
      "En Panamá la oferta de biomagnetismo se concentra en la Ciudad de Panamá, con terapeutas independientes y centros holísticos.",
    order: 11,
  },
  {
    slug: "republica-dominicana",
    name: "República Dominicana",
    flag: "🇩🇴",
    iso: "DO",
    currency: "DOP",
    sessionPrice: "RD$ 1.500 – RD$ 3.500 por sesión (referencial)",
    intro:
      "En República Dominicana el biomagnetismo ha ganado popularidad en Santo Domingo y Santiago de los Caballeros, impulsado por centros de medicina integrativa.",
    order: 12,
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    flag: "🇺🇾",
    iso: "UY",
    currency: "UYU",
    sessionPrice: "Precio variable en UYU; consultar al terapeuta",
    intro:
      "En Uruguay los biomagnetistas atienden principalmente en Montevideo, en consultorios de terapias complementarias.",
    order: 13,
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    flag: "🇵🇾",
    iso: "PY",
    currency: "PYG",
    sessionPrice: "Gs. 150.000 – 300.000 por sesión (referencial)",
    intro:
      "En Paraguay la oferta de biomagnetismo se concentra en Asunción y Gran Asunción, con terapeutas que también atienden a distancia.",
    order: 14,
  },
  {
    slug: "espana",
    name: "España",
    flag: "🇪🇸",
    iso: "ES",
    currency: "EUR",
    sessionPrice: "50 € – 90 € por sesión (referencial)",
    intro:
      "España es uno de los mercados de biomagnetismo más grandes de habla hispana, con terapeutas en Madrid, Barcelona, Valencia y Sevilla, muchos de ellos formados directamente en la escuela del Dr. Goiz.",
    order: 15,
  },
  {
    slug: "estados-unidos",
    name: "Estados Unidos",
    flag: "🇺🇸",
    iso: "US",
    currency: "USD",
    sessionPrice: "US$ 80 – US$ 150 por sesión (referencial)",
    intro:
      "En Estados Unidos la demanda de biomagnetismo en español es alta en Miami, Los Ángeles, Houston y Nueva York, gracias a la comunidad latina. Muchos terapeutas atienden en inglés y español.",
    order: 16,
  },
];

export const CITIES: City[] = [
  { slug: "lima", name: "Lima", countrySlug: "peru", intro: "Lima concentra la mayor demanda de biomagnetismo del Perú. Nuestro centro recomendado está en Santiago de Surco, con fácil acceso desde Miraflores, San Isidro, San Borja y La Molina." },
  { slug: "ciudad-de-mexico", name: "Ciudad de México", countrySlug: "mexico", intro: "La CDMX es la capital del biomagnetismo: aquí nació el método y se encuentran algunos de los terapeutas y escuelas con más trayectoria." },
  { slug: "guadalajara", name: "Guadalajara", countrySlug: "mexico", intro: "Guadalajara tiene una oferta amplia de biomagnetistas y centros holísticos en Zapopan y el centro de la ciudad." },
  { slug: "monterrey", name: "Monterrey", countrySlug: "mexico", intro: "En Monterrey y San Pedro Garza García hay consultas de biomagnetismo con enfoque integrativo." },
  { slug: "puebla", name: "Puebla", countrySlug: "mexico", intro: "Puebla cuenta con terapeutas de Par Biomagnético con años de experiencia y centros de bienestar." },
  { slug: "queretaro", name: "Querétaro", countrySlug: "mexico", intro: "Querétaro es una ciudad en crecimiento con cada vez más opciones de biomagnetismo." },
  { slug: "bogota", name: "Bogotá", countrySlug: "colombia", intro: "Bogotá concentra la mayor cantidad de biomagnetistas de Colombia, con centros en el norte y el centro de la ciudad." },
  { slug: "medellin", name: "Medellín", countrySlug: "colombia", intro: "Medellín tiene una escena de terapias complementarias muy activa, con biomagnetistas en El Poblado, Laureles y Envigado." },
  { slug: "cali", name: "Cali", countrySlug: "colombia", intro: "En Cali hay terapeutas de biomagnetismo independientes y centros de medicina alternativa." },
  { slug: "barranquilla", name: "Barranquilla", countrySlug: "colombia", intro: "Barranquilla ofrece consultas de biomagnetismo en la costa caribe colombiana." },
  { slug: "buenos-aires", name: "Buenos Aires", countrySlug: "argentina", intro: "Buenos Aires (CABA y GBA) reúne la mayor oferta de biomagnetismo de Argentina." },
  { slug: "cordoba", name: "Córdoba", countrySlug: "argentina", intro: "Córdoba cuenta con biomagnetistas y espacios de terapias holísticas." },
  { slug: "rosario", name: "Rosario", countrySlug: "argentina", intro: "En Rosario hay terapeutas de biomagnetismo con atención presencial y online." },
  { slug: "mendoza", name: "Mendoza", countrySlug: "argentina", intro: "Mendoza tiene una oferta creciente de biomagnetismo y bienestar." },
  { slug: "santiago-de-chile", name: "Santiago de Chile", countrySlug: "chile", intro: "Santiago concentra la mayoría de biomagnetistas de Chile, en comunas como Providencia, Ñuñoa y Las Condes." },
  { slug: "vina-del-mar", name: "Viña del Mar", countrySlug: "chile", intro: "Viña del Mar y Valparaíso cuentan con terapeutas de biomagnetismo." },
  { slug: "concepcion", name: "Concepción", countrySlug: "chile", intro: "Concepción ofrece consultas de biomagnetismo en el sur de Chile." },
  { slug: "quito", name: "Quito", countrySlug: "ecuador", intro: "Quito tiene centros de biomagnetismo y medicina alternativa en el norte de la ciudad y los valles." },
  { slug: "guayaquil", name: "Guayaquil", countrySlug: "ecuador", intro: "Guayaquil y Samborondón concentran la oferta de biomagnetismo de la costa ecuatoriana." },
  { slug: "cuenca", name: "Cuenca", countrySlug: "ecuador", intro: "Cuenca cuenta con terapeutas de biomagnetismo y centros holísticos." },
  { slug: "santa-cruz", name: "Santa Cruz de la Sierra", countrySlug: "bolivia", intro: "Santa Cruz es la ciudad boliviana con más biomagnetistas." },
  { slug: "la-paz", name: "La Paz", countrySlug: "bolivia", intro: "La Paz cuenta con terapeutas de biomagnetismo y centros de medicina alternativa." },
  { slug: "cochabamba", name: "Cochabamba", countrySlug: "bolivia", intro: "Cochabamba tiene oferta de biomagnetismo presencial." },
  { slug: "caracas", name: "Caracas", countrySlug: "venezuela", intro: "Caracas concentra los principales biomagnetistas de Venezuela." },
  { slug: "valencia-venezuela", name: "Valencia (Venezuela)", countrySlug: "venezuela", intro: "Valencia, en Carabobo, tiene terapeutas de biomagnetismo." },
  { slug: "maracaibo", name: "Maracaibo", countrySlug: "venezuela", intro: "Maracaibo cuenta con consultas de biomagnetismo." },
  { slug: "ciudad-de-guatemala", name: "Ciudad de Guatemala", countrySlug: "guatemala", intro: "La Ciudad de Guatemala concentra la oferta de biomagnetismo del país." },
  { slug: "san-jose", name: "San José", countrySlug: "costa-rica", intro: "San José y el Valle Central concentran a los biomagnetistas de Costa Rica." },
  { slug: "ciudad-de-panama", name: "Ciudad de Panamá", countrySlug: "panama", intro: "La Ciudad de Panamá reúne la oferta de biomagnetismo del país." },
  { slug: "santo-domingo", name: "Santo Domingo", countrySlug: "republica-dominicana", intro: "Santo Domingo concentra los centros de biomagnetismo de República Dominicana." },
  { slug: "santiago-de-los-caballeros", name: "Santiago de los Caballeros", countrySlug: "republica-dominicana", intro: "Santiago de los Caballeros tiene terapeutas de biomagnetismo en el Cibao." },
  { slug: "montevideo", name: "Montevideo", countrySlug: "uruguay", intro: "Montevideo concentra a los biomagnetistas de Uruguay." },
  { slug: "asuncion", name: "Asunción", countrySlug: "paraguay", intro: "Asunción y Gran Asunción concentran la oferta de biomagnetismo de Paraguay." },
  { slug: "madrid", name: "Madrid", countrySlug: "espana", intro: "Madrid es la ciudad española con más terapeutas de Par Biomagnético." },
  { slug: "barcelona", name: "Barcelona", countrySlug: "espana", intro: "Barcelona cuenta con biomagnetistas y centros de terapias naturales." },
  { slug: "valencia", name: "Valencia", countrySlug: "espana", intro: "Valencia tiene una oferta consolidada de biomagnetismo." },
  { slug: "sevilla", name: "Sevilla", countrySlug: "espana", intro: "Sevilla y Andalucía cuentan con terapeutas de biomagnetismo." },
  { slug: "miami", name: "Miami", countrySlug: "estados-unidos", intro: "Miami es la ciudad de EE.UU. con más biomagnetistas que atienden en español." },
  { slug: "los-angeles", name: "Los Ángeles", countrySlug: "estados-unidos", intro: "Los Ángeles tiene terapeutas de biomagnetismo para la comunidad latina." },
  { slug: "houston", name: "Houston", countrySlug: "estados-unidos", intro: "Houston cuenta con biomagnetistas que atienden en español." },
  { slug: "nueva-york", name: "Nueva York", countrySlug: "estados-unidos", intro: "Nueva York y Nueva Jersey tienen terapeutas de biomagnetismo en español." },
];

export const COUNTRY_BY_SLUG: Record<CountrySlug, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.slug, c]),
) as Record<CountrySlug, Country>;

export const CITY_BY_SLUG: Record<string, City> = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

export function citiesOf(country: CountrySlug): City[] {
  return CITIES.filter((c) => c.countrySlug === country);
}
