import type { Pillar, ProfileRow } from '@/types';
import { SITE } from './site';

export const ABOUT_PARAGRAPHS: { text: string; strong?: string[] }[] = [
  {
    text: 'Sou Web Developer com atuação em backend e desenvolvimento de integrações entre sistemas.',
    strong: ['Web Developer'],
  },
  {
    text: 'Nos últimos anos, além da experiência prática com Python, PHP, JS/TS e React, passei a direcionar também meus estudos para engenharia de software e arquitetura de software, buscando compreender não apenas como desenvolver uma aplicação, mas também como estruturar ambientes, processos e ferramentas que a sustentam.',
    strong: ['Python, PHP, JS/TS e React', 'engenharia de software e arquitetura de software'],
  },
  {
    text: 'Meu interesse vai muito além da linguagem de programação. Procuro entender o papel de cada ferramenta dentro do ecossistema de desenvolvimento, quais problemas ela resolve e em quais contextos sua adoção faz sentido.',
  },
];

export const PILLARS: Pillar[] = [
  { index: '01', title: 'Backend', description: 'Atuação principal em desenvolvimento server-side.' },
  { index: '02', title: 'Integrações', description: 'Comunicação e integração entre sistemas.' },
  { index: '03', title: 'Arquitetura', description: 'Estudos em engenharia e arquitetura de software.' },
  { index: '04', title: 'Ambientes', description: 'Docker, Linux e Ubuntu em aprofundamento.' },
];

export const PROFILE_ROWS: ProfileRow[] = [
  { label: 'Nome', value: SITE.name },
  { label: 'Cargo', value: SITE.role },
  { label: 'Atuação', value: 'Backend · Frontend · Integrações' },
  { label: 'Projetos', value: '49 publicados' },
  { label: 'Currículo', value: 'Baixar PDF ↗', href: SITE.resume, highlight: true },
];

export const LEARNING_NOW = ['Docker', 'Linux', 'Ubuntu', 'Arquitetura'];
