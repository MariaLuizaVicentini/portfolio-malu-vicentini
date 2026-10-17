import AboutText from './AboutText';
import Pillars from './Pillars';
import ProfilePanel from './ProfilePanel';
import { DimWord, Section, SectionHeading } from '@/components/ui';

export default function AboutMe() {
  return (
    <Section id="sobre" alt labelledBy="sobre-title">
      <SectionHeading
        id="sobre-title"
        num="04"
        eyebrow="Sobre"
        title={
          <>
            Quem <DimWord>desenvolve</DimWord>
          </>
        }
      />

      <div className="grid grid-cols-1 items-start gap-11 min-[980px]:grid-cols-[1.25fr_.75fr] min-[980px]:gap-16">
        <div>
          <AboutText />
          <Pillars />
        </div>
        <ProfilePanel />
      </div>
    </Section>
  );
}
