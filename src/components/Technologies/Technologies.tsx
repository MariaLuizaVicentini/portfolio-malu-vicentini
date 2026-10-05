import TechColumn from './TechColumn';
import { DimWord, Section, SectionHeading, Tag } from '@/components/ui';
import { DEEPENING, TECH_CATEGORIES } from '@/data/technologies';

export default function Technologies() {
  return (
    <Section id="tecnologias" labelledBy="tecnologias-title">
      <SectionHeading
        id="tecnologias-title"
        num="03"
        eyebrow="Tecnologias"
        title={
          <>
            Stack <DimWord>técnica</DimWord>
          </>
        }
        description="Tecnologias aplicadas em projetos de desenvolvimento web, backend e automação."
      />

      <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-line min-[620px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {TECH_CATEGORIES.map((category) => (
          <TechColumn key={category.id} category={category} />
        ))}
      </div>

      <div className="mt-[26px] flex items-center gap-3 font-mono text-[11.5px] tracking-[.05em] text-txt-3">
        <span className="shrink-0">Em aprofundamento</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <span className="flex flex-wrap gap-2">
          {DEEPENING.map((item) => (
            <Tag key={item} size="sm">
              {item}
            </Tag>
          ))}
        </span>
      </div>
    </Section>
  );
}
