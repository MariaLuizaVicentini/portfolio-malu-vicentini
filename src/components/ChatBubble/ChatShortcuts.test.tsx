import ChatShortcuts from "./ChatShortcuts";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ChatShortcut } from "@/types";

vi.mock("@/data/chat", () => ({
  CHAT_SHORTCUTS: [{ id: "sobre", label: "Sobre a Malu" }],
}));

describe("ChatShortcuts (componente) - unit", () => {
  test("deve renderizar os atalhos de chat", () => {
    const { onSelect } = makeMocks();

    render(<ChatShortcuts onSelect={onSelect} />);

    expect(
      screen.getByRole("button", { name: "Sobre a Malu" }),
    ).toBeInTheDocument();
  });

  test("deve chamar onSelect com id e label ao clicar no atalho", async () => {
    const { onSelect, user } = makeMocks();

    render(<ChatShortcuts onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Sobre a Malu" }));

    expect(onSelect).toHaveBeenCalledWith("sobre", "Sobre a Malu");
  });

  test("deve desabilitar os atalhos quando disabled for true", () => {
    const { onSelect } = makeMocks();

    render(<ChatShortcuts onSelect={onSelect} disabled />);

    expect(
      screen.getByRole("button", { name: "Sobre a Malu" }),
    ).toBeDisabled();
  });
});

const makeMocks = () => {
  const CHAT_SHORTCUTS: ChatShortcut = {
    id: "sobre",
    label: "Sobre a Malu",
  };

  const onSelect = vi.fn((id: string, label: string) => {});
  const user = userEvent.setup();

  return {
    CHAT_SHORTCUTS,
    onSelect,
    user,
  };
};