import { render, screen } from "@testing-library/react";
import Pillars from "./Pillars";

describe("Pillars (componente) - unit", () => {
  test("Titulos", () => {
    render(<Pillars />);
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Integrações")).toBeInTheDocument();
    expect(screen.getByText("Arquitetura")).toBeInTheDocument();
    expect(screen.getByText("Ambientes")).toBeInTheDocument();
});
test("Descrições", () => {
    const { description } = makeMocks();
    render(<Pillars />);
    expect(screen.getByText(description[0])).toBeInTheDocument();
    expect(screen.getByText(description[1])).toBeInTheDocument();
    expect(screen.getByText(description[2])).toBeInTheDocument();
    expect(screen.getByText(description[3])).toBeInTheDocument();

  });
});


const makeMocks = () => {
    let description: Array<string> = [
        "Atuação principal em desenvolvimento server-side.",
        "Comunicação e integração entre sistemas.",
        "Estudos em engenharia e arquitetura de software.",
        "Docker, Linux e Ubuntu em aprofundamento.",
    ];

    return {
        description
    }
}