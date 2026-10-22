import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact (componente)", () => {
  test("deve renderizar titulo", () => {
    render(<Contact />);
    expect(screen.getByText("Vamos")).toBeInTheDocument();
    expect(screen.getByText("conversar.")).toBeInTheDocument();
  });
  test("deve renderizar descrição", () => {
    render(<Contact />);
    expect(
      screen.getByText(
        "Aberta a oportunidades e colaborações em desenvolvimento backend e integrações entre sistemas.",
      ),
    ).toBeInTheDocument();
  });
  test("deve renderizar link e-mail", () => {
    render(<Contact />);
    const email = screen.getAllByRole("link", {
      name: /vicentinimalu1@gmail.com/i,
    });
    expect(email).toHaveLength(2);
    expect(email[1]).toHaveAttribute("href", "mailto:vicentinimalu1@gmail.com");
  });
});
