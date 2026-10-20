import AllReposCard from "./AllReposCard";
import { render, screen } from "@testing-library/react";

describe("AllReposCard (componente) - unit", () => {
  test("titulo", () => {
    const { titulo } = makeMocks();

    render(<AllReposCard />);

    const tituloElement = screen.getByText(titulo);
    expect(tituloElement).toBeInTheDocument();
  });

  test("descrição", () => {
    const { description } = makeMocks();

    render(<AllReposCard />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("link do github com todos os repositórios", () => {
    const { linkAllRepos } = makeMocks();

    render(<AllReposCard />);

    const linkElement = screen.getByRole("link", {
      name: /github.com\/MariaLuizaVicentini/i,
    });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      `https://${linkAllRepos}`,
    );
  });
});

const makeMocks = () => {
  const titulo = "Todos os repositórios";
  const description =
    "Demais projetos, estudos e experimentos disponíveis no GitHub.";
  const linkAllRepos = "github.com/MariaLuizaVicentini";

  return {
    titulo,
    description,
    linkAllRepos,
  };
};