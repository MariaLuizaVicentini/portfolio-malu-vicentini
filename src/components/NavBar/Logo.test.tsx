import Logo from "./Logo";
import { render, screen } from "@testing-library/react";

describe("Logo (componente) - unit", () => {
  test("deve renderizar o logo e redirecionar o usuário para o topo", () => {
    render(<Logo />);
    screen.debug();
    const elementLogo = screen.getByRole("link", {
      name: /Malu Vicentini — início/i,
    });
    expect(elementLogo).toBeInTheDocument();
    expect(elementLogo).toHaveAttribute("href", "#topo");
  });
});
