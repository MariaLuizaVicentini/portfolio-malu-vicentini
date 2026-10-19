import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
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
    screen.debug();
    const linkedinButton = screen.getByRole("link", { name: /github/i });
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute(
      "href",
      "https://github.com/MariaLuizaVicentini",
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
