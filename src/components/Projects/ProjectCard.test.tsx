import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard (componente) - unit", () => {
  test("titulo", () => {
    const { project } = makeMocks();

    render(<ProjectCard project={project} />);
    let titulo = screen.getByText(project.title);

    expect(titulo).toBeInTheDocument();
  });
  test("descricao", () => {
    const { project } = makeMocks();

    render(<ProjectCard project={project} />);
    let description = screen.getByText(project.description);

    expect(description).toBeInTheDocument();
  });
  test("tags", () => {
    const { project } = makeMocks();

    render(<ProjectCard project={project} />);
    const tag = screen.getByText(project.tags[0]);
    expect(tag).toBeInTheDocument();
  });
  test("botão que leva pro repositório do projeto", () => {
    const { project } = makeMocks();
    render(<ProjectCard project={project} />);

    const linkRepo = screen.getByRole("link", { name: /Repositório/i });

    expect(linkRepo).toBeInTheDocument();
    expect(linkRepo).toHaveAttribute("href", project.repoUrl);
  });
});

const makeMocks = () => {
  const project = {
    id: "busca-vagas",
    index: "02",
    title: "Busca Vagas LinkedIn",
    description:
      "API de Scraping para busca automatizada de vagas com filtros avançados de relevância e segmentação por período.",
    tags: ["Python", "API", "Scraping"],
    repoUrl: "https://github.com/MariaLuizaVicentini/BuscaVagasLinkedin",
  };
  return {
    project,
  };
};
