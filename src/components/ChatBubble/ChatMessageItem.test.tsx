import { render, screen } from "@testing-library/react";
import ChatMessageItem from "./ChatMessageItem";
import { ChatMessage } from "@/types";

describe("ChatMessageItem (componente) - unit", () => {
  test("deve renderizar o texto da mensagem", () => {
    const { chatMsgBot } = makeMocks();

    render(<ChatMessageItem message={chatMsgBot} />);

    expect(screen.getByText(chatMsgBot.text)).toBeInTheDocument();
  });

  test("deve posicionar a mensagem do bot à esquerda", () => {
    const { chatMsgBot } = makeMocks();

    const { container } = render(
      <ChatMessageItem message={chatMsgBot} />,
    );

    expect(container.firstChild).toHaveClass("justify-start");
  });

  test("deve renderizar os links da mensagem", () => {
    const { chatMsgWithLinks } = makeMocks();

    render(<ChatMessageItem message={chatMsgWithLinks} />);

    expect(
      screen.getByRole("link", { name: "Meu portfólio" }),
    ).toHaveAttribute("href", "https://exemplo.com");
  });
});

const makeMocks = () => {
  const chatMsgBot: ChatMessage = {
    id: "01",
    role: "bot",
    text: "Resposta do bot",
  };

  const chatMsgUser: ChatMessage = {
    id: "02",
    role: "user",
    text: "Mensagem do usuário",
  };

  const chatMsgWithLinks: ChatMessage = {
    id: "03",
    role: "bot",
    text: "Confira meu portfólio:",
    links: [
      {
        label: "Meu portfólio",
        href: "https://exemplo.com",
      },
    ],
  };

  return {
    chatMsgBot,
    chatMsgUser,
    chatMsgWithLinks,
  };
};