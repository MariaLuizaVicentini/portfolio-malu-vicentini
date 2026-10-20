import { render, screen } from "@testing-library/react";
import BrowserMock from "./BrowserMock";

describe("BrowserMock (componente) - unit", () => {
  test("navegador pequeno com skeleton e url preenchida", () => {
    render(<BrowserMock url={"controle-series"} />);
    const element = screen.getByText("controle-series");
    expect(element).toBeInTheDocument();
  });
});
