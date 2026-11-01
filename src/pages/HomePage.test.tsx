import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage (page) - integration", () => {
  describe("deve renderizar", () => {
    test("Página inicial", () => {
      const { container } = render(<HomePage />);
      const sectionElement = container.querySelector("#topo");
      expect(sectionElement).toHaveAttribute("id", "topo");
    });
    test("Página de projetos", () => {
      const { container } = render(<HomePage />);
      const sectionElement = container.querySelector("#projetos");
      expect(sectionElement).toHaveAttribute("id", "projetos");
    });
    test("Página de tecnologias", () => {
      const { container } = render(<HomePage />);
      const sectionElement = container.querySelector("#tecnologias");
      expect(sectionElement).toHaveAttribute("id", "tecnologias");
    });
    test("Página sobre mim", () => {
      const { container } = render(<HomePage />);
      const sectionElement = container.querySelector("#sobre");
      expect(sectionElement).toHaveAttribute("id", "sobre");
    });
    test("Página de contato", () => {
        const { container } = render(<HomePage/>);
        const sectionElement = container.querySelector("#contato");
        expect(sectionElement).toHaveAttribute("id", "contato");
    });
  });
});
