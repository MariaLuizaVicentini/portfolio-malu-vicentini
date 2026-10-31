import React from "react";
import Eyebrow from "./Eyebrow";
import { render, screen } from "@testing-library/react";

describe("EyebrowProps (componente) - unit", () => {
  test("deve renderizar o conteudo de children ", () => {
    const { childrenMock, numMocks } = makeMocks();
    render(<Eyebrow num={numMocks} children={childrenMock} />);
    const elementChildren = screen.getByText("Olá mundo!");
    expect(elementChildren).toBeInTheDocument();
  });
  test("deve incrementar o classname passado como parm ", () => {
    const { childrenMock, numMocks, classNameMock } = makeMocks();
    render(
      <Eyebrow
        num={numMocks}
        children={childrenMock}
        className={classNameMock}
      />,
    );
    const elementChildren = screen.getByText("Olá mundo!");
    expect(elementChildren).toHaveClass(classNameMock);
  });
});

const makeMocks = () => {
  const numMocks: string = "01";

  const classNameMock: string = "text-red-300";

  const childrenMock: React.ReactNode = (
    <p className={classNameMock}>Olá mundo!</p>
  );
  return {
    childrenMock,
    numMocks,
    classNameMock,
  };
};
