import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer (componente) - unit", () => {
  test("deve renderizar nome, cargo e copywright", () => {
    render(<Footer />);
    expect(screen.getByText("Malu Vicentini")).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedora Full-stack")).toBeInTheDocument();
    expect(screen.getByText("© 2026 Malu Vicentini")).toBeInTheDocument();
  });
  test("deve renderizar seções do site", () => {
    render(<Footer />);
    const projetos = screen.getByRole("link", { name: /Projetos/i });
    const tec = screen.getByRole("link", { name: /Tecnologias/i });
    const sobre = screen.getByRole("link", { name: /Sobre/i });

    expect(projetos).toHaveAttribute("href", "#projetos");
    expect(tec).toHaveAttribute("href", "#tecnologias");
    expect(sobre).toHaveAttribute("href", "#sobre");
  });
  test("deve renderizar botao github e linkedin", () => {
    render(<Footer />);
    const git = screen.getByRole("link", { name: /GitHub/i });
    const linkedin = screen.getByRole("link", { name: /LinkedIn/i });
    expect(git).toHaveAttribute(
      "href",
      "https://github.com/MariaLuizaVicentini",
    );
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/malu-vicentini-5b8181201",
    );
  });
});
