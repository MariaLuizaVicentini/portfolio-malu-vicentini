import CodeTerminal from "./CodeTerminal"
import { render, screen } from '@testing-library/react'

describe("CodeTerminal (componente) - unit", ()=> {
    test("deve renderizar o code terminal com as métricas", () => {
        render(<CodeTerminal/>);
        const projetos = screen.getByText("Projetos");
        const tecno = screen.getByText("Tecnologias");
        const areas = screen.getByText("Áreas");
        expect(projetos).toBeInTheDocument();
        expect(tecno).toBeInTheDocument();
        expect(areas).toBeInTheDocument();
    })
})