import type { Project } from "@/types/projects";

export const FEATURED_PROJECT: Project = {
  id: "controle-series",
  index: "01",
  title: "Controle de Séries",
  description:
    "Sistema Full-Stack em PHP com Laravel e Bootstrap. Autenticação, gestão de catálogo e controle de episódios assistidos.",
  tags: ["PHP", "Laravel", "Bootstrap", "MVC", "Auth"],
  img: "/cards.png",
  repoUrl: "https://github.com/MariaLuizaVicentini/controle-series",
  featured: true,
  browserLabel: "controle-series",
};

export const PROJECTS: Project[] = [
  {
    id: "busca-vagas",
    index: "02",
    title: "Busca Vagas LinkedIn",
    description:
      "API de Scraping para busca automatizada de vagas com filtros avançados de relevância e segmentação por período.",
    tags: ["Python", "API", "Scraping"],
    img: "/cards.png",
    repoUrl: "https://github.com/MariaLuizaVicentini/BuscaVagasLinkedin",
  },
  {
    id: "cotacao-bc",
    index: "03",
    title: "Cotação Banco Central",
    description:
      "Aplicação em PHP que consome a API do Banco Central para consultar a cotação do dólar e realizar conversões em tempo real.",
    tags: ["PHP", "API REST", "Integração"],
    img: "/cards.png",
    repoUrl: "https://github.com/MariaLuizaVicentini/CotacaoBancoCentral",
  },
  {
    id: "automacao-web",
    index: "04",
    title: "Automação Web Login",
    description:
      "Script em Python utilizando Selenium para automatizar login em aplicações web e executar interações repetitivas no navegador.",
    tags: ["Python", "Selenium", "Automação"],
    img: "/cards.png",
    repoUrl: "https://github.com/MariaLuizaVicentini/AutomacaoWeb-Python",
  },
  {
    id: "portfolio-dev",
    index: "05",
    title: "Portfólio Dev",
    description:
      "Aplicação web desenvolvida em Laravel para apresentação de projetos, habilidades técnicas e repositórios de desenvolvimento.",
    tags: ["Laravel", "PHP", "Blade"],
    img: "/cards.png",
    repoUrl: "https://github.com/MariaLuizaVicentini/MeuPortifolioDev",
  },
  {
    id: "barbearia-alura",
    index: "06",
    title: "Barbearia Alura",
    description:
      "Projeto responsivo de landing page desenvolvido com HTML e CSS, adaptado para diferentes dispositivos e tamanhos de tela.",
    tags: ["HTML5", "CSS3", "Responsivo"],
    img: "/cards.png",
    repoUrl: "https://github.com/MariaLuizaVicentini/barbeariaAlura",
  },
];
