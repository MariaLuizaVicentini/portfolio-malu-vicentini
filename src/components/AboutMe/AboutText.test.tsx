import { render, screen } from '@testing-library/react';
import AboutText from './AboutText';



describe('<AboutText />', () => {
  test('deve renderizar todos os parágrafos do dado de origem', () => {
    render(<AboutText />);

    expect(screen.getByText(/Olá, eu sou um/i)).toBeInTheDocument();
    expect(screen.getByText(/Trabalho criando interfaces/i)).toBeInTheDocument();
    expect(screen.getByText(/Trecho com palavra inexistente/i)).toBeInTheDocument();
  });

  test('deve envolver em <strong> os trechos marcados em strong', () => {
    render(<AboutText />);

    const strongDev = screen.getByText('desenvolvedor');
    const strongReact = screen.getByText('React');

    expect(strongDev.tagName).toBe('STRONG');
    expect(strongDev).toHaveClass('font-medium text-txt');

    expect(strongReact.tagName).toBe('STRONG');
    expect(strongReact).toHaveClass('font-medium text-txt');
  });

  test('deve aplicar estilos diferenciados no primeiro parágrafo', () => {
    const { container } = render(<AboutText />);
    const paragraphs = container.querySelectorAll('p');

    // Primeiro parágrafo
    expect(paragraphs[0]).toHaveClass('text-[19px] text-txt');

    // Segundo parágrafo
    expect(paragraphs[1]).toHaveClass('text-base text-txt-2');
  });

  test('deve renderizar o texto normalmente se a palavra do strong não for encontrada', () => {
    render(<AboutText />);

    // Não deve existir tag <strong> com "Angular"
    expect(screen.queryByText('Angular')).not.toBeInTheDocument();
    expect(screen.getByText(/Trecho com palavra inexistente no texto/i)).toBeInTheDocument();
  });
});


vi.mock('@/data/aboutMe', () => ({
  ABOUT_PARAGRAPHS: [
    {
      text: 'Olá, eu sou um desenvolvedor apaixonado por React e TypeScript.',
      strong: ['desenvolvedor', 'React'],
    },
    {
      text: 'Trabalho criando interfaces modernas e acessíveis para a web.',
      // Sem propriedade strong
    },
    {
      text: 'Trecho com palavra inexistente no texto.',
      strong: ['Angular'],
    },
  ],
}));