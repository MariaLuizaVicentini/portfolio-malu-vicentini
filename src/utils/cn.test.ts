import { cn } from "./cn";

describe("cn (utils) - unit", () => {
  test("deve combinar múltiplas classes CSS corretamente", () => {
    const { classes } = makeMocks();

    const result = cn(...classes);

    expect(result).toBe("btn btn-primary bg-blue-500");
  });

  test("deve ignorar valores falsy", () => {
    const { falsyValues } = makeMocks();

    const result = cn("btn", ...falsyValues, "btn-large");

    expect(result).toBe("btn btn-large");
  });

  test("deve combinar classes com condicionais lógicas (&&)", () => {
    const { isActive, isDisabled } = makeMocks();

    const result = cn(
      "base-card",
      isActive && "card-active",
      isDisabled && "card-disabled"
    );

    expect(result).toBe("base-card card-active");
  });

  test("deve retornar uma string vazia quando nenhum argumento válido for passado", () => {
    const { falsyValues } = makeMocks();

    const result = cn(...falsyValues);

    expect(result).toBe("");
  });

  test("deve retornar uma string vazia quando nenhum argumento for passado", () => {
    const result = cn();

    expect(result).toBe("");
  });
});

const makeMocks = () => {
  const classes: Array<string> = [
    "btn",
    "btn-primary",
    "bg-blue-500",
  ];

  const falsyValues = [false, null, undefined] as const;

  const isActive: boolean = true;
  const isDisabled: boolean = false;

  return {
    classes,
    falsyValues,
    isActive,
    isDisabled,
  };
};