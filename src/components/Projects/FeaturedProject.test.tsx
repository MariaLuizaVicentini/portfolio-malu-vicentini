import FeaturedProject from "./FeaturedProject";
import { render, screen } from "@testing-library/react";
import { FEATURED_PROJECT } from '@/data/projects';


describe("FeaturedProject (componente) - unit", () => {
  test("deve renderizar projeto em destaque", () => {
    render(<FeaturedProject project={FEATURED_PROJECT}/>);
    screen.debug();
    const element = screen.getByText("★ Projeto em destaque");
    expect(element).toBeInTheDocument();
  });
});
