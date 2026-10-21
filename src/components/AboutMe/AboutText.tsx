import { ABOUT_PARAGRAPHS } from '@/data/aboutMe';
import { cn } from '@/utils/cn';
import { renderParagraph } from '@/utils/renderParagraph';

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
