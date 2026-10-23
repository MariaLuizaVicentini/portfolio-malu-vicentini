import { render, screen } from "@testing-library/react";
import RootLayout from "./RootLayout";

describe("RootLayout (layouts) - unit", () => {
  test("deve renderizar os componentes compartilhados do layout", () => {
    render(<RootLayout>Conteúdo da página</RootLayout>);

    expect(screen.getByText("Background")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText("ChatBubble")).toBeInTheDocument();
  });

  test("deve renderizar o conteúdo recebido dentro da área principal", () => {
    const { children } = makeMocks();
    render(<RootLayout>{children}</RootLayout>);
    expect(screen.getByRole("main")).toHaveTextContent(children);
  });

  test("deve permitir navegar diretamente para o conteúdo principal", () => {
    render(<RootLayout>Conteúdo da página</RootLayout>);
    expect(
      screen.getByRole("link", { name: "Pular para o conteúdo" }),
    ).toHaveAttribute("href", "#conteudo");
    expect(screen.getByRole("main")).toHaveAttribute("id", "conteudo");
  });
});

const makeMocks = () => {
  let children = "Conteudo da pagina";
  return { children };
};

vi.mock("@/components/Background/Background", () => ({
  default: () => <div>Background</div>,
}));

vi.mock("@/components/ChatBubble", () => ({
  default: () => <div>ChatBubble</div>,
}));

vi.mock("@/components/Footer/Footer", () => ({
  default: () => <footer>Footer</footer>,
}));

vi.mock("@/components/NavBar/NavBar", () => ({
  default: () => <header>Header</header>,
}));
