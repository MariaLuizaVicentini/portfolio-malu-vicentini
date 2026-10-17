import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutMe (componente) - Unit", () => {
  test("deve renderizar botao pra baixar o curriculo", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("sobre-mim-curriculo-pdf")).toBeInTheDocument();
  });
  test("deve renderizar o titulo da seção", () => {
    render(<AboutMe />);
    expect(screen.getByText("Quem")).toBeInTheDocument();
    expect(screen.getByText("desenvolve")).toBeInTheDocument();
  });
});
