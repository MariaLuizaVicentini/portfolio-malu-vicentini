import { render, screen } from "@testing-library/react";
import { renderParagraph } from "./renderParagraph";

describe("renderParagraph (utils) - unit", () => {
  test("deve retornar <p><p/> sem nenhuma alterção, caso strong não seja passado", () => {
    const { text } = makeMocks();
    render(<p>{renderParagraph(text)}</p>);
    const result = screen.getByText(text);
    expect(result.tagName).toBe("P");
  });
  test("deve retornar o texto com alteração se a assinatura estiver completa", () => {
    const { text, strong } = makeMocks();
    render(<p>{renderParagraph(text, strong)}</p>);
    expect(screen.getByText(strong[0]).tagName).toBe("STRONG");
    expect(screen.getByText(strong[1]).tagName).toBe("STRONG");
  });
});

const makeMocks = () => {
  const text: string =
    "Nos últimos anos, além da experiência prática com Python, PHP, JS/TS e React, passei a direcionar também meus estudos para engenharia de software e arquitetura de software, buscando compreender não apenas como desenvolver uma aplicação, mas também como estruturar ambientes, processos e ferramentas que a sustentam.";

  const strong: Array<string> = [
    "Python, PHP, JS/TS e React",
    "engenharia de software e arquitetura de software",
  ];

  return {
    text,
    strong,
  };
};
