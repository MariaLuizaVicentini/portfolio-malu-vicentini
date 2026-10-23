/** Concatena classes ignorando valores falsy. */

export function cn(...classes: Array<string | false | null | undefined>): string {
  const classesValidas = classes.filter((classe) => {
    // Retorna true se a classe existir e for uma string válida
    return Boolean(classe);
  });

  return classesValidas.join(' ');
}