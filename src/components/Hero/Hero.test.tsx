import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Hero from "./Hero";

describe("Hero (componente) - unit", () => {
  test("botão de projetos", () => {
    render(<Hero />);

    const projetosButton = screen.getByRole("link", { name: /Ver projetos/i });
    expect(projetosButton).toBeInTheDocument();
    expect(projetosButton).toHaveAttribute("href", "#projetos");
  });
  test("botão do linkedin", () => {
    render(<Hero />);
    const linkedinButton = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/malu-vicentini-5b8181201",
    );
  });
  test("botão do github", () => {
    render(<Hero />);
    const gitButton = screen.getByRole("link", { name: /github/i });
    expect(gitButton).toBeInTheDocument();
    expect(gitButton).toHaveAttribute(
      "href",
      "https://github.com/MariaLuizaVicentini",
    );
  });
});
