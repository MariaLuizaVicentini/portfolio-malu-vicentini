import { ABOUT_PARAGRAPHS } from '@/data/about';
import { cn } from '@/utils/cn';

/** Destaca em negrito os trechos marcados no dado de origem. */
function renderParagraph(text: string, strong?: string[]) {
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

export default function AboutText() {
  return (
    <div>
      {ABOUT_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={paragraph.text.slice(0, 24)}
          className={cn(
            'mb-[22px] max-w-[620px]',
            index === 0
              ? 'text-[19px] leading-[1.7] text-txt'
              : 'text-base leading-[1.85] text-txt-2',
          )}
        >
          {renderParagraph(paragraph.text, paragraph.strong)}
        </p>
      ))}
    </div>
  );
}
