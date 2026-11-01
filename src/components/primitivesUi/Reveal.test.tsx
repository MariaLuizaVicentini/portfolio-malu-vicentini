import React from "react";
import Reveal from "./Reveal";
import { render, screen } from "@testing-library/react";
import * as useRevealMod from "@/hooks";

describe("Reveal (componente)", () => {
  test("elemento não visível", () => {
    const { childrenMock } = makeMocks(false);

    render(<Reveal children={childrenMock} />);

    const element = screen.getByTestId("div-reveal");

    expect(element).toHaveClass("opacity-0");
  });

  test("elemento visível", () => {
    const { childrenMock, useRevealSpy } = makeMocks(true);

    render(<Reveal children={childrenMock} />);

    const element = screen.getByTestId("div-reveal");

    expect(element).toHaveClass("animate-reveal-up");
    expect(element).not.toHaveClass("opacity-0");
    expect(useRevealSpy).toHaveBeenCalled();
  });

  test("atraso na animação com delay informado", () => {
    const { childrenMock, delay } = makeMocks(true);

    render(<Reveal children={childrenMock} delay={delay} />);

    const element = screen.getByTestId("div-reveal");

    expect(element).toHaveStyle({ animationDelay: `${delay}ms` });
  });

  test("classes adicionais", () => {
    const { childrenMock } = makeMocks();

    render(<Reveal children={childrenMock} className="custom-class" />);

    const element = screen.getByTestId("div-reveal");

    expect(element).toHaveClass("custom-class");
  });
});

const makeMocks = (visible = true) => {
  const delay = 6000;

  const childrenMock: React.ReactNode = <p>Olá mundo!</p>;

  const useRevealSpy = vi.spyOn(useRevealMod, "useReveal").mockReturnValue({
    ref: { current: null },
    visible,
  });

  return { childrenMock, useRevealSpy, delay };
};