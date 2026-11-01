import { render, screen } from "@testing-library/react";
import Section from "./Section";
import React from "react";

describe("Section (componente) - unit", () => {
  test("deve manter o conteúdo da seção dentro de um contêiner responsivo", () => {
    const { childrenMock } = makeMocks();
    const { container } = render(<Section children={childrenMock} />);
    const divElement = container.querySelector(".wrap");
    expect(divElement).toBeInTheDocument();
  });

  test("deve exibir o conteúdo recebido pelo componente", () => {
    const { childrenMock } = makeMocks();
    render(<Section children={childrenMock} />);
    const result = screen.getByText("Eu sou o conteudo de ChildrenMock");
    expect(result).toBeInTheDocument();
  });

  test("deve associar a seção ao labelledby informado e identificá-la pelo id recebido", () => {
    const { childrenMock, id, rotuladoPor } = makeMocks();
    const { container } = render(
      <Section id={id} labelledBy={rotuladoPor} children={childrenMock} />,
    );
    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveAttribute("aria-labelledby", rotuladoPor);
    expect(sectionElement).toHaveAttribute("id", id);
  });
});

const makeMocks = () => {
  const childrenMock: React.ReactNode = (
    <p>Eu sou o conteudo de ChildrenMock</p>
  );

  const rotuladoPor: string = "sobre-title";

  const id: string = "sobre";

  return {
    id,
    rotuladoPor,
    childrenMock,
  };
};
