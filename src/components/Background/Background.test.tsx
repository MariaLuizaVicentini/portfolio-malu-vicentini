import { render, screen } from "@testing-library/react";
import Background from "./Background";

describe("Background (componente) - unit", () => {
  test("grid-bg - deve renderizar grade de fundo", () => {
    const {container} = render(<Background/>);
    const element = container.querySelectorAll("[aria-hidden]");
    expect(element[0]).toHaveClass("grid-bg pointer-events-none fixed inset-0 z-0");
  });

  test("bloom-gradiente - deve renderizar brilho verde", () => {
    const {container} = render(<Background/>);
    const element = container.querySelectorAll("[aria-hidden]");
    expect(element[1]).toHaveClass("bloom-gradient pointer-events-none fixed -right-[180px] -top-[280px] z-0 h-[900px] w-[900px] animate-breathe");
  });
});
