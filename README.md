# Malu Vicentini — Portfólio

## Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção:
```bash
npm run build
npm run preview
```

Checagem de tipos:
```bash
npm run typecheck
```

## Estrutura
```text
src/
├── components/
│   ├── About/            # Seção "Quem desenvolve" + painel de perfil
│   ├── ChatBubble/       # Bubble flutuante + janela de chat
│   ├── Contact/          # Seção de contato e canais
│   ├── Footer/
│   ├── Header/           # Nav fixa + menu mobile
│   ├── Hero/             # Hero, terminal developer.php e métricas
│   ├── Projects/         # Projeto em destaque + grid de cards
│   ├── Technologies/     # Colunas de stack com ícones SVG
│   └── ui/               # Primitivos reutilizáveis (Button, Tag, Section…)
├── data/                 # Conteúdo do site (projetos, stack, perfil, chat)
├── hooks/                # useScrollSpy, useLockBodyScroll, useMediaQuery…
├── layouts/              # Layout raiz com fundo, header e footer
├── pages/                # HomePage
├── types/                # Tipos compartilhados
├── App.tsx
├── main.tsx
└── index.css
```

## Chat

O `ChatBubble` é uma interface de chat local, sem IA. As respostas vêm de
`src/data/chat.ts` e usam **apenas informações que já existem no portfólio**
(projetos, tecnologias, contato, links de GitHub/LinkedIn e currículo).
