import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  featured?: boolean;
  browserLabel?: string;
}

export interface TechItem {
  name: string;
  icon: ReactNode;
}

export interface TechCategory {
  id: string;
  title: string;
  items: TechItem[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Pillar {
  index: string;
  title: string;
  description: string;
}

export interface ProfileRow {
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}

export interface ContactChannel {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  arrow: string;
}

export type ChatRole = 'bot' | 'user';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  links?: { label: string; href: string }[];
}

export interface ChatShortcut {
  id: string;
  label: string;
}
