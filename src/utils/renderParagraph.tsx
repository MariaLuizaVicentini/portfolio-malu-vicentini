/** Destaca em negrito os trechos marcados no dado de origem. */
export function renderParagraph(text: string, strong?: string[]) {
  if (!strong?.length) return text;

  let parts: React.ReactNode[] = [text];

  strong.forEach((needle, keyIndex) => {
    parts = parts.flatMap((part, partIndex) => {
      if (typeof part !== 'string') return [part];
      const index = part.indexOf(needle);
      if (index === -1) return [part];

      return [
        part.slice(0, index),
        <strong
          key={`${keyIndex}-${partIndex}`}
          className="font-medium text-txt"
        >
          {needle}
        </strong>,
        part.slice(index + needle.length),
      ];
    });
  });

  return parts;
}