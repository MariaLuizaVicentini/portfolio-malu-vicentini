import { render, screen } from "@testing-library/react";
import ButtonLink from "./Button";
describe("ButtonLink Component", () => {
  it("deve renderizar corretamente com o texto padrão (variante primary)", () => {
    render(<ButtonLink href="/home">Clique aqui</ButtonLink>);

    const link = screen.getByRole("link", { name: /clique aqui/i });
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveClass("bg-brand");
  });

  it("deve aplicar a variante ghost corretamente", () => {
    render(
      <ButtonLink href="/sobre" variant="ghost">
        Sobre
      </ButtonLink>
    );

    const link = screen.getByRole("link", { name: /sobre/i });
    expect(link).toHaveClass("border-line-2");
  });

  it("deve aplicar a variante text corretamente", () => {
    render(
      <ButtonLink href="/contato" variant="text">
        Contato
      </ButtonLink>
    );

    const link = screen.getByRole("link", { name: /contato/i });
    expect(link).toHaveClass("border-b border-transparent");
  });

  it("deve adicionar propriedades de link externo quando external for true", () => {
    render(
      <ButtonLink href="https://example.com" external>
        Externo
      </ButtonLink>
    );

    const link = screen.getByRole("link", { name: /externo/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("não deve adicionar target _blank quando external for falso ou omitido", () => {
    render(<ButtonLink href="/interno">Interno</ButtonLink>);

    const link = screen.getByRole("link", { name: /interno/i });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("deve permitir mesclar classes customizadas via className", () => {
    render(
      <ButtonLink href="/home" className="custom-test-class">
        Custom
      </ButtonLink>
    );
    const link = screen.getByRole("link", { name: /custom/i });
    expect(link).toHaveClass("custom-test-class");
  });

  it("deve repassar atributos adicionais do elemento âncora (ex: aria-label)", () => {
    render(
      <ButtonLink href="/home" aria-label="Página Inicial">
        Home
      </ButtonLink>
    );

    const link = screen.getByRole("link", { name: /página inicial/i });
    expect(link).toHaveAttribute("aria-label", "Página Inicial");
  });
});