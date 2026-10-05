import Eyebrow from './Eyebrow';

interface SectionHeadingProps {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  id?: string;
}

export default function SectionHeading({
  num,
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-[18px] min-[980px]:mb-14 min-[980px]:flex-row min-[980px]:items-end min-[980px]:gap-10">
      <div>
        <Eyebrow num={num} className="mb-[18px]">
          — {eyebrow}
        </Eyebrow>
        <h2
          id={id}
          className="text-[clamp(30px,3.4vw,46px)] font-semibold leading-[1.08] tracking-[-.025em]"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-[330px] text-[14.5px] leading-[1.65] text-txt-2">{description}</p>
      ) : null}
    </div>
  );
}
