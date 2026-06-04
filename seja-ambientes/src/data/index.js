import cozinha from '../assets/cozinha.jpeg'
import banheiro from '../assets/banheiro.jpeg'
import cadeira from '../assets/cadeira.jpeg'
import centauro from '../assets/centauro.jpeg'
import sala from '../assets/sala.jpeg'
import subway from '../assets/subway.jpeg'
import espelho from '../assets/espelho.jpeg'
import mesa from '../assets/mesa.jpeg'




// ── PROJECTS DATA ──
export const projects = [
  {
    id: 1,
    title: 'Subway',
    category: 'escritorio',
    location: 'North Shoppping · Fortaleza',
    image: subway,
    large: true,
  },
  {
    id: 2,
    title: 'Centauro',
    category: 'escritorio',
    location: 'Residencial · Fortaleza',
    image: centauro,
  },
  {
    id: 3,
    title: 'Sala Integrada',
    category: 'sala',
    location: 'Residencial · Fortaleza',
    image: sala,
  },
  {
    id: 4,
    title: 'Salão de beleza',
    category: 'escritorio',
    location: 'Comercial · Fortaleza',
    image: espelho,
  },
  {
    id: 5,
    title: 'Banheiro aconchegante',
    category: 'banheiro',
    location: 'Residencial · Fortaleza',
    image: banheiro,
  },
  {
    id: 6,
    title: 'Bancada Sofisticada',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: cozinha,
    large: true,
  },
  {
    id: 6,
    title: 'Bancada Sofisticada',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: mesa,
    large: true,
  },
  {
    id: 7,
    title: 'Cadeiras Modernas',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: cadeira,
    large: true,
  },
];

// ── CAROUSEL SLIDES ──
export const carouselSlides = [
  {
    id: 1,
    title: 'Subway',
    category: 'escritorio',
    location: 'North Shoppping · Fortaleza',
    image: subway,
    large: true,
  },
  {
    id: 2,
    title: 'Centauro',
    category: 'escritorio',
    location: 'Residencial · Fortaleza',
    image: centauro,
  },
  {
    id: 3,
    title: 'Sala Integrada',
    category: 'sala',
    location: 'Residencial · Fortaleza',
    image: sala,
  },
  {
    id: 4,
    title: 'Salão de beleza',
    category: 'escritorio',
    location: 'Comercial · Fortaleza',
    image: espelho,
  },
  {
    id: 5,
    title: 'Banheiro aconchegante',
    category: 'banheiro',
    location: 'Residencial · Fortaleza',
    image: banheiro,
  },
  {
    id: 6,
    title: 'Bancada Sofisticada',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: cozinha,
    large: true,
  },
  {
    id: 6,
    title: 'Bancada Sofisticada',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: mesa,
    large: true,
  },
  {
    id: 7,
    title: 'Cadeiras Modernas',
    category: 'cozinha',
    location: 'Residencial · Eusébio',
    image: cadeira,
    large: true,
  },
];

// ── SERVICES DATA ──
export const services = [
  {
    id: 1,
    title: 'Cozinhas Planejadas',
    description: 'Projetos funcionais e elegantes para o coração da sua casa, com aproveitamento máximo do espaço e acabamento impecável.',
    icon: 'kitchen',
  },
  {
    id: 2,
    title: 'Dormitórios e Closets',
    description: 'Ambientes de descanso transformados com armários, closets e painéis personalizados que unem estética e organização.',
    icon: 'bedroom',
  },
  {
    id: 3,
    title: 'Salas e Painéis',
    description: 'Painéis de TV, estantes e mobiliário para salas de estar e jantar que criam atmosferas únicas e sofisticadas.',
    icon: 'living',
  },
  {
    id: 4,
    title: 'Home Office',
    description: 'Espaços de trabalho produtivos e inspiradores, com mesas, estantes e soluções de organização sob medida.',
    icon: 'office',
  },
  {
    id: 5,
    title: 'Banheiros e Lavabos',
    description: 'Gabinetes, nichos e marcenaria especial para banheiros, com materiais resistentes à umidade e beleza garantida.',
    icon: 'bathroom',
  },
  {
    id: 6,
    title: 'Projetos Comerciais',
    description: 'Ambientes corporativos, lojas e escritórios com soluções de marcenaria que transmitem profissionalismo e identidade.',
    icon: 'commercial',
  },
];

// ── PORTFOLIO FILTERS ──
export const portfolioFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'cozinha', label: 'Cozinhas' },
  { value: 'dormitorio', label: 'Dormitórios' },
  { value: 'sala', label: 'Salas' },
  { value: 'escritorio', label: 'Escritório' },
];

// ── COMPANY INFO ──
export const companyInfo = {
  address: 'Av. Virgílio Távora 1901 — Meireles\nFortaleza — CE, 60170-079',
  phone: '(85) 99689-2161',
  email: 'contato@sejambientes.com.br',
  hours: 'Seg–Sex: 8h às 18h | Sáb: 8h às 13h',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3333248737!2d-38.5064!3d-3.7262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74816acaf8ddb%3A0x2ec3c8b61c7b2c93!2sMeireles%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt!2sbr!4v1680000000000!5m2!1spt!2sbr',
  stats: [
    { num: '12+', label: 'Anos de mercado' },
    { num: '850+', label: 'Projetos entregues' },
    { num: '100%', label: 'Sob medida' },
  ],
};
