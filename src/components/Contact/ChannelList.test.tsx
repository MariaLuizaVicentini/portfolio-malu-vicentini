import { render, screen } from "@testing-library/react";
import ChannelList from "./ChannelList";

describe("ChannelList (componente) - unit", () => {
  test("deve renderizar os canais", () => {
    render(<ChannelList />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("Currículo")).toBeInTheDocument();
  });
});
