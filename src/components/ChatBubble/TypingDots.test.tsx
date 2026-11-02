import { render, screen } from "@testing-library/react";
import TypingDots from "./TypingDots";

describe("TypingDots (componente) - unit", () => {
  test("deve renderizar balão na interface a esquerda", () => {
    const { container } = render(<TypingDots />);
    expect(container.firstChild).toHaveClass("justify-start");
  });
  test("deve possuir o atributo aria-label de acessibilidade na web", () => {
    const { container } = render(<TypingDots />);
    const balloon = container.querySelector("div.animate-msg-in");
    expect(balloon).toHaveAttribute("aria-label", "Digitando");
  });
  test("deve renderizar 3 pontos de digitação que ficam dentro do balão", () => {
    const { container } = render(<TypingDots />);
    const points = container.querySelectorAll("span.rounded-full");
    expect(points).toHaveLength(3);
  });
});
