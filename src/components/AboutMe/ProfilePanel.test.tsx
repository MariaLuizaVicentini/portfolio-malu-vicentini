import ProfilePanel from "./ProfilePanel";
import { render, screen } from "@testing-library/react";

describe("ProfilePanel (componente) - unit", () => {
  test("perfil", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Perfil")).toBeInTheDocument();
  });
  test("nome", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
  });
  test("cargo", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Cargo")).toBeInTheDocument();
  });
  test("atuação", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Atuação")).toBeInTheDocument();
  });
  test("projetos", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });
  test("curriculo (pdf)", () => {
    render(<ProfilePanel />);
    screen.debug();
    const element = screen.getByRole("link", { name: /Baixar PDF ↗/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("target", "_blank");
  });
  test("estudando agora", () => {
    render(<ProfilePanel />);
    expect(screen.getByText("Estudando agora")).toBeInTheDocument();
  });
});
