import DimWord from "./DimWord";
import { render, screen } from "@testing-library/react";

describe("DimWord (componente) - unit", () => {
  test("deve renderizar children (conteudo) apagado", () => {
    render(<DimWord children={"conteudo"} />);
    const element = screen.getByText("conteudo");
    expect(element).toHaveClass("not-italic");
  });
});
