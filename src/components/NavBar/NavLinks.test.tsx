import { render, screen } from "@testing-library/react";
import NavLinks from "./NavLinks";

describe("NavLinks (componente) - unit", () => {
  test("projetos", () => {
    render(<NavLinks />);
    const projetos = screen.getByRole("link", { name: /Projetos/i });
    expect(projetos).toBeInTheDocument();
    expect(projetos).toHaveAttribute("href", "#projetos");
  });
  test("tecnologias", () => {
    render(<NavLinks />);
    const tecno = screen.getByRole("link", { name: /Tecnologias/i });
    expect(tecno).toBeInTheDocument();
    expect(tecno).toHaveAttribute("href", "#tecnologias");
  });
  test("sobre", () => {
    render(<NavLinks />);
    const sobre = screen.getByRole("link", { name: /Sobre/i });
    expect(sobre).toBeInTheDocument();
    expect(sobre).toHaveAttribute("href", "#sobre");
  });
  test("contato", () => {
    render(<NavLinks />);
    const contato = screen.getByRole("link", { name: /Contato/i });
    expect(contato).toBeInTheDocument();
    expect(contato).toHaveAttribute("href", "#contato");
  });
});
