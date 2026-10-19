import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact (componente) - unit", () => {
  describe("Elemento clicavel", () => {
    test("linkedin", () => {
      render(<Contact />);
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(5);
    });

    test("GitHub", () => {});
    test("E-mail", () => {});
    test("Currículo", () => {});
  });
});
