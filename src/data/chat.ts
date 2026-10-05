import type { ChatMessage, ChatShortcut } from '@/types';
import { SITE } from './site';
import { FEATURED_PROJECT, PROJECTS } from './projects';
import { TECH_CATEGORIES } from './technologies';

/**
 * Respostas locais do chat.
 * Todo o conteúdo abaixo vem exclusivamente de informações que já existem
 * no portfólio — nada é inventado sobre a Malu.
 */

export const CHAT_SHORTCUTS: ChatShortcut[] = [
  { id: 'sobre', label: 'Sobre a Malu' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
  { id: 'github', label: 'GitHub' },
  { id: 'linkedin', label: 'LinkedIn' },
];

export const CHAT_GREETING: ChatMessage = {
  id: 'greeting',
  role: 'bot',
  text: `Oi! Sou o assistente do portfólio da ${SITE.name}. Posso falar sobre os projetos, a stack técnica e as formas de contato. Escolha um atalho ou escreva sua pergunta.`,
};

const projectList = [FEATURED_PROJECT, ...PROJECTS]
  .map((project) => `${project.index} · ${project.title} — ${project.tags.join(', ')}`)
  .join('\n');

const techList = TECH_CATEGORIES.map(
  (category) => `${category.title}: ${category.items.map((item) => item.name).join(', ')}`,
).join('\n');

interface Answer {
  id: string;
  keywords: string[];
  text: string;
  links?: { label: string; href: string }[];
}

const ANSWERS: Answer[] = [
  {
    id: 'sobre',
    keywords: ['sobre', 'malu', 'quem', 'voce', 'você', 'bio', 'perfil', 'apresenta'],
    text: `${SITE.name} é ${SITE.role}, com atuação em backend e desenvolvimento de integrações entre sistemas. Além da experiência prática com Python, PHP, JS/TS e React, direciona os estudos para engenharia e arquitetura de software. Atualmente aprofunda ambientes de desenvolvimento com Docker, Linux e Ubuntu.`,
  },
  {
    id: 'projetos',
    keywords: ['projeto', 'projetos', 'trabalho', 'trabalhos', 'repositorio', 'repositório', 'portfolio', 'portfólio'],
    text: `São 6 projetos publicados:\n\n${projectList}\n\nO destaque é o ${FEATURED_PROJECT.title}: ${FEATURED_PROJECT.description}`,
    links: [{ label: 'Ver todos os repositórios ↗', href: SITE.github }],
  },
  {
    id: 'tecnologias',
    keywords: ['tecnologia', 'tecnologias', 'stack', 'linguagem', 'linguagens', 'ferramenta', 'skill', 'habilidade'],
    text: `Stack técnica do portfólio:\n\n${techList}\n\nEm aprofundamento: Docker, Linux e Ubuntu.`,
  },
  {
    id: 'contato',
    keywords: ['contato', 'email', 'e-mail', 'falar', 'conversar', 'mensagem', 'contratar'],
    text: `Para contato direto, o e-mail é ${SITE.email}. Ela está aberta a oportunidades e colaborações em desenvolvimento backend e integrações entre sistemas.`,
    links: [
      { label: `${SITE.email} ↗`, href: `mailto:${SITE.email}` },
      { label: 'LinkedIn ↗', href: SITE.linkedin },
    ],
  },
  {
    id: 'github',
    keywords: ['github', 'git hub', 'codigo', 'código', 'repo'],
    text: `O GitHub é @${SITE.githubHandle} — lá estão os projetos publicados, estudos e experimentos.`,
    links: [{ label: `github.com/${SITE.githubHandle} ↗`, href: SITE.github }],
  },
  {
    id: 'linkedin',
    keywords: ['linkedin', 'linked in', 'rede'],
    text: `No LinkedIn ela está como ${SITE.linkedinHandle}.`,
    links: [{ label: 'Abrir LinkedIn ↗', href: SITE.linkedin }],
  },
  {
    id: 'curriculo',
    keywords: ['curriculo', 'currículo', 'cv', 'resume', 'pdf'],
    text: 'O currículo está disponível em PDF para download.',
    links: [{ label: 'Baixar currículo ↗', href: SITE.resume }],
  },
  {
    id: 'disponibilidade',
    keywords: ['disponivel', 'disponível', 'vaga', 'freela', 'freelance', 'oportunidade', 'trabalhar'],
    text: `Status atual: ${SITE.availability}. Aberta a oportunidades e colaborações em desenvolvimento backend e integrações entre sistemas.`,
    links: [{ label: `Falar por e-mail ↗`, href: `mailto:${SITE.email}` }],
  },
];

const FALLBACK: Omit<ChatMessage, 'id'> = {
  role: 'bot',
  text: 'Só consigo responder com base no que está publicado neste portfólio. Posso falar sobre a Malu, os projetos, as tecnologias, o currículo ou as formas de contato — é só escolher um dos atalhos.',
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/** Resolve a resposta do bot para um texto livre ou um id de atalho. */
export function resolveAnswer(input: string): Omit<ChatMessage, 'id'> {
  const normalized = normalize(input.trim());

  if (!normalized) return FALLBACK;

  const direct = ANSWERS.find((answer) => answer.id === normalized);
  if (direct) {
    return { role: 'bot', text: direct.text, links: direct.links };
  }

  const match = ANSWERS.find((answer) =>
    answer.keywords.some((keyword) => normalized.includes(normalize(keyword))),
  );

  if (!match) return FALLBACK;

  return { role: 'bot', text: match.text, links: match.links };
}
