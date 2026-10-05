import type { TechCategory } from '@/types';
import {
  BootstrapIcon,
  CssIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  LaravelIcon,
  NodeIcon,
  PhpIcon,
  PythonIcon,
  ReactIcon,
  SqliteIcon,
  TypeScriptIcon,
} from '@/components/Technologies/TechIcons';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'backend',
    title: 'Back-end',
    items: [
      { name: 'PHP', icon: <PhpIcon /> },
      { name: 'Laravel', icon: <LaravelIcon /> },
      { name: 'Node.js', icon: <NodeIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
    ],
  },
  {
    id: 'frontend',
    title: 'Front-end',
    items: [
      { name: 'HTML5', icon: <HtmlIcon /> },
      { name: 'CSS3', icon: <CssIcon /> },
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Bootstrap', icon: <BootstrapIcon /> },
    ],
  },
  {
    id: 'database',
    title: 'Banco de dados',
    items: [{ name: 'SQLite', icon: <SqliteIcon /> }],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    items: [{ name: 'Git', icon: <GitIcon /> }],
  },
];

export const DEEPENING = ['Docker', 'Linux', 'Ubuntu'];
