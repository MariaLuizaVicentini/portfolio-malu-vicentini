import { render, screen, waitFor } from "@testing-library/react";
import ChatBubble from "./ChatBubble";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  // função simulada pro metodo scroll
  Element.prototype.scrollTo = vi.fn();
});

describe("ChatBubble (componente) - unit", () => {
  test("deve renderizar o bubble como botão", () => {
    render(<ChatBubble />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-label", "Abrir chat do portfólio");
  });
  test("deve renderizar a janela do chat ao clicar no botao", async () => {
    const { user } = makeMocks();
    render(<ChatBubble />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });
  test("deve fechar a janela ao clicar novamente no botão", async () => {
    const { user } = makeMocks();
    render(<ChatBubble />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.click(button);

    await waitFor(() => {
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
  });
});

const makeMocks = () => {
  const user = userEvent.setup();

  return {
    user,
  };
};
