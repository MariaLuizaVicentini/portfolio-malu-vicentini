import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
describe("NavBar (componente) - unit", () => {
  test("baixar CV", () => {
    render(<NavBar/>);
    const cvButton = screen.getByRole("link", {name: /Baixar CV/i})
    expect(cvButton).toBeInTheDocument();
    expect(cvButton).toHaveAttribute("target", "_blank");
    expect(cvButton).toHaveAttribute("href", "https://maluvicentini.onrender.com/curriculo/DEVMALU_09.2026.pdf");
  });
});
