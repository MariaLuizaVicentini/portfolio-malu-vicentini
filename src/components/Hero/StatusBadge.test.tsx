import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";

describe("StatusBadge (componente) - unit", () => {
  test("deve renderizar o selo/cracha de status", () => {
    render(<StatusBadge label="Online e roteando" />);
    const selo = screen.getByText("Online e roteando");
    expect(selo).toBeInTheDocument();
  });
});
