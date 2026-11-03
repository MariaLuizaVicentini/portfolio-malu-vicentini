import { render, renderHook, screen } from "@testing-library/react";
import { useLockBodyScroll } from "./useLockBodyScroll";
import { act } from "react";

describe("useLockBodyScroll (hook) - unit", () => {
  /* Limpando o estilo do body após a cada teste*/
  afterEach(() => {
    document.body.style.overflow = "";
  });

  test("deve bloquear a rolagem do body quando locked for true", () => {
    renderHook(({ locked }) => useLockBodyScroll(locked), {
      initialProps: { locked: true },
    });

    expect(document.body.style.overflow).toBe("hidden");
  });

  test("não deve alterar a rolagem do body quando locked for false", () => {
    document.body.style.overflow = "auto";

    renderHook(({ locked }) => useLockBodyScroll(locked), {
      initialProps: { locked: false },
    });

    expect(document.body.style.overflow).toBe("auto");
  });
});
