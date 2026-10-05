import type { Metric, NavLink } from '@/types';

export const SITE = {
  name: 'Malu Vicentini',
  role: 'Desenvolvedora Back-end',
  initials: 'MV',
  year: 2026,
  email: 'vicentinimalu1@gmail.com',
  github: 'https://github.com/MariaLuizaVicentini',
  githubHandle: 'MariaLuizaVicentini',
  linkedin: 'https://www.linkedin.com/in/malu-vicentini-5b8181201',
  linkedinHandle: 'malu-vicentini',
  resume: 'https://maluvicentini.onrender.com/curriculo/DEVMALU_09.2026.pdf',
  availability: 'Disponível para projetos',
  lead: 'Desenvolvimento backend e integrações entre sistemas, com foco em arquitetura de software, ambientes bem estruturados e boas práticas.',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'GitHub', href: SITE.github, external: true },
  { label: 'LinkedIn', href: SITE.linkedin, external: true },
];

export const SECTION_IDS = ['projetos', 'tecnologias', 'sobre', 'contato'];

export const HERO_METRICS: Metric[] = [
  { value: '06', label: 'Projetos' },
  { value: '12', label: 'Tecnologias' },
  { value: '04', label: 'Áreas' },
];

export const MAIN_STACK = [
  'PHP',
  'Laravel',
  'Python',
  'Node.js',
  'TypeScript',
  'SQLite',
  'Git',
];
