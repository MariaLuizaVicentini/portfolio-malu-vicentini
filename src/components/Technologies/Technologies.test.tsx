import Technologies from "./Technologies";
import { render, screen } from "@testing-library/react";

describe("Technologies (componente) - unit", () => {
  describe("stack", () => {
    test("backend", () => {
      render(<Technologies />);
      expect(screen.getByText("Back-end"));
    });
    test("frontend", () => {
      render(<Technologies />);
      expect(screen.getByText("Front-end")).toBeInTheDocument();
    });
    test("banco de dados", () => {
      render(<Technologies />);
      expect(screen.getByText("Banco de dados")).toBeInTheDocument();
    });
    test("ferramentas", () => {
      render(<Technologies />);
      expect(screen.getByText("Ferramentas")).toBeInTheDocument();
    });
  });

  test("Título da seção", () => {
    render(<Technologies />);
    expect(screen.getByText("Stack")).toBeInTheDocument();
    expect(screen.getByText("técnica")).toBeInTheDocument();
  });
  test("Descrição da seção", () => {
      const { description } = makeMocks();
      render(<Technologies />);
      expect(screen.getByText(description)).toBeInTheDocument();
  });
  test("Aprofundamento em novas tecnologias", () => {
      const { aprofundamento } = makeMocks();
      render(<Technologies />);
      expect(screen.getByText(aprofundamento)).toBeInTheDocument();
  });
});

const makeMocks = () => {
  const description =
    "Tecnologias aplicadas em projetos de desenvolvimento web, backend e automação.";
  const aprofundamento = "Em aprofundamento";

  return {
    description,
    aprofundamento,
  };
};
