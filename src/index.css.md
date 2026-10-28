# Documentando e relembrando sintaxe css

Sintaxe básica do css

```css

seletor {
    propriedade: valor;
}

```

----

### Tipos de seletores


Elemento HTML
```css
seletor
```

classe - utiliza .
```css
seletor
```
ID -  utiliza #
```css
seletor
```
----

### As três diretivas do Tailwinds

- Diretivas são instruções especiais que escrevemos no CSS para controlar como o Tailwind funciona.
- Começam com @ e permitem incluir estilos do Tailwind e organizar suas camadas de estilos.

@tailwind base
- Inclui estilos-base para padronizar elementos HTML.

@tailwind components
- Inclui a camada de componentes, utilizada para organizar estilos reutilizáveis.

@tailwind utilities
- Inclui as classes utilitárias, como flex, p-4 e text-white.

Observação: essa sintaxe é utilizada no Tailwind CSS v3. No v4, normalmente se utiliza @import "tailwindcss";.

