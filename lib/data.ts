export type Fiesta = {
  slug: string;
  nombre: string;
  provincia: string;
  region: string;
  tipo: string;
  fecha: string;
  mes: number;
  duracion: string;
  asistentes: string;
  desde: string | number;
  color: string;
  short: string;
  img: string;
  badge?: string;
};

export type Region = {
  id: string;
  nombre: string;
  color: string;
  count: number;
  img: string;
  desc: string;
};

export type Tipo = {
  id: string;
  nombre: string;
  count: number;
  color: string;
  emoji: string;
};

export const FIESTAS: Fiesta[] = [
  {
    slug: 'vendimia-mendoza',
    nombre: 'Fiesta Nacional de la Vendimia',
    provincia: 'Mendoza',
    region: 'Cuyo',
    tipo: 'Vendimia',
    fecha: '28 Feb — 5 Mar',
    mes: 2,
    duracion: '6 días',
    asistentes: '~ 300.000',
    desde: 1936,
    color: '#7A2E3F',
    short: 'La fiesta más importante del vino argentino: bendición de los frutos, elección de reina y un acto central monumental.',
    img: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=1200&auto=format&fit=crop',
    badge: 'Imperdible',
  },
  {
    slug: 'carnaval-gualeguaychu',
    nombre: 'Carnaval del País',
    provincia: 'Entre Ríos',
    region: 'Litoral',
    tipo: 'Carnaval',
    fecha: 'Enero — Marzo',
    mes: 1,
    duracion: '8 sábados',
    asistentes: '~ 400.000',
    desde: 1980,
    color: '#2F8C82',
    short: 'Plumas, samba y comparsas. El carnaval más grande de Argentina, en el corsódromo de Gualeguaychú.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&auto=format&fit=crop',
    badge: 'Próximas fechas',
  },
  {
    slug: 'pachamama-jujuy',
    nombre: 'Fiesta de la Pachamama',
    provincia: 'Jujuy',
    region: 'NOA',
    tipo: 'Andina',
    fecha: '1 Agosto',
    mes: 8,
    duracion: 'Todo el mes',
    asistentes: 'Comunitario',
    desde: 'ancestral',
    color: '#C2502E',
    short: 'Ofrenda a la Madre Tierra en la Quebrada de Humahuaca: copla, sahumerio y comida ritual.',
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&auto=format&fit=crop',
    badge: 'Ancestral',
  },
  {
    slug: 'cosquin-folklore',
    nombre: 'Festival Nacional del Folklore',
    provincia: 'Córdoba',
    region: 'Centro',
    tipo: 'Folklórica',
    fecha: '24 Ene — 2 Feb',
    mes: 1,
    duracion: '9 lunas',
    asistentes: '~ 200.000',
    desde: 1961,
    color: '#A06A2C',
    short: 'Las nueve lunas de Cosquín en la Plaza Próspero Molina: zambas, chacareras y consagración nacional.',
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop',
    badge: 'Clásica',
  },
  {
    slug: 'jineteada-jesus-maria',
    nombre: 'Doma y Folklore',
    provincia: 'Córdoba',
    region: 'Centro',
    tipo: 'Gaucha',
    fecha: '5 — 14 Enero',
    mes: 1,
    duracion: '10 noches',
    asistentes: '~ 250.000',
    desde: 1966,
    color: '#544C3F',
    short: 'Diez noches de jineteada y festival folclórico en el corazón del país, con tradición criolla viva.',
    img: 'https://images.unsplash.com/photo-1551273981-91d9d9748f97?w=1200&auto=format&fit=crop',
    badge: 'Tradición',
  },
  {
    slug: 'inmigrante-obera',
    nombre: 'Fiesta Nacional del Inmigrante',
    provincia: 'Misiones',
    region: 'NEA',
    tipo: 'Inmigración',
    fecha: '4 — 13 Septiembre',
    mes: 9,
    duracion: '10 días',
    asistentes: '~ 150.000',
    desde: 1980,
    color: '#6B8E3D',
    short: 'Quince colectividades en el Parque de las Naciones. Comidas, danzas y el reencuentro de Misiones con el mundo.',
    img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=1200&auto=format&fit=crop',
    badge: 'Multicultural',
  },
  {
    slug: 'fiesta-trucha-bariloche',
    nombre: 'Fiesta del Cordero y la Trucha',
    provincia: 'Río Negro',
    region: 'Patagonia',
    tipo: 'Gastronómica',
    fecha: '15 — 17 Marzo',
    mes: 3,
    duracion: '3 días',
    asistentes: '~ 40.000',
    desde: 1970,
    color: '#1E3F6E',
    short: 'Cordero patagónico al asador y trucha de los lagos en un fin de semana junto al Nahuel Huapi.',
    img: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&auto=format&fit=crop',
    badge: 'Patagónica',
  },
  {
    slug: 'tradicion-san-antonio',
    nombre: 'Fiesta de la Tradición',
    provincia: 'Buenos Aires',
    region: 'Pampa',
    tipo: 'Gaucha',
    fecha: '6 — 10 Noviembre',
    mes: 11,
    duracion: '5 días',
    asistentes: '~ 100.000',
    desde: 1939,
    color: '#B8A24B',
    short: 'En San Antonio de Areco, cuna del gaucho. Desfile, jineteada y la pampa que late como hace 200 años.',
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&auto=format&fit=crop',
    badge: 'Pampeana',
  },
  {
    slug: 'cerveza-villa-general-belgrano',
    nombre: 'Oktoberfest Argentina',
    provincia: 'Córdoba',
    region: 'Centro',
    tipo: 'Inmigración',
    fecha: '3 — 12 Octubre',
    mes: 10,
    duracion: '10 días',
    asistentes: '~ 120.000',
    desde: 1963,
    color: '#A06A2C',
    short: 'La fiesta de la cerveza en la villa centroeuropea de las sierras: música, choppes y trajes típicos.',
    img: 'https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=1200&auto=format&fit=crop',
    badge: 'Sierras',
  },
];

export const REGIONES: Region[] = [
  { id: 'noa',       nombre: 'NOA',       color: 'var(--r-noa)',       count: 312, img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop', desc: 'Quebrada, copla y carnaval andino.' },
  { id: 'cuyo',      nombre: 'Cuyo',      color: 'var(--r-cuyo)',      count: 184, img: 'https://images.unsplash.com/photo-1574482620881-23a2da16cb02?w=800&auto=format&fit=crop', desc: 'Vid, montaña y tradición huarpe.' },
  { id: 'litoral',   nombre: 'Litoral',   color: 'var(--r-litoral)',   count: 268, img: 'https://images.unsplash.com/photo-1553521179-cb98c9ecc15c?w=800&auto=format&fit=crop', desc: 'Río, chamamé y carnaval.' },
  { id: 'pampa',     nombre: 'Pampa',     color: 'var(--r-pampa)',     count: 421, img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop', desc: 'Gaucho, fogón y horizonte.' },
  { id: 'patagonia', nombre: 'Patagonia', color: 'var(--r-patagonia)', count: 156, img: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop', desc: 'Lago, viento y mapuche.' },
  { id: 'nea',       nombre: 'NEA',       color: 'var(--r-nea)',       count: 142, img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800&auto=format&fit=crop', desc: 'Selva, yerba y litoral guaraní.' },
];

export const TIPOS: Tipo[] = [
  { id: 'carnaval',    nombre: 'Carnavales',  count: 287, color: '#2B7BD6', emoji: 'plumas' },
  { id: 'vendimia',    nombre: 'Vendimias',   count:  64, color: '#7A2E3F', emoji: 'racimos' },
  { id: 'folklorica',  nombre: 'Folklóricas', count: 412, color: '#A06A2C', emoji: 'guitarra' },
  { id: 'gaucha',      nombre: 'Gauchas',     count: 198, color: '#544C3F', emoji: 'caballo' },
  { id: 'andina',      nombre: 'Andinas',     count: 156, color: '#C2502E', emoji: 'erkencho' },
  { id: 'inmigracion', nombre: 'Inmigración', count: 132, color: '#6B8E3D', emoji: 'banderas' },
  { id: 'artesanal',   nombre: 'Artesanales', count: 224, color: '#B8A24B', emoji: 'telar' },
];
