import AllReposCard from './AllReposCard';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import { DimWord, Reveal, Section, SectionHeading } from '@/components/ui';
import { FEATURED_PROJECT, PROJECTS } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projetos" alt labelledBy="projetos-title">
      <SectionHeading
        id="projetos-title"
        num="02"
        eyebrow="Projetos"
        title={
          <>
            Seleção de <DimWord>trabalhos</DimWord>
          </>
        }
        description="Aplicações full-stack, automações e integrações com APIs. Código disponível nos repositórios."
      />

      <Reveal>
        <FeaturedProject project={FEATURED_PROJECT} />
      </Reveal>

      <div className="grid grid-cols-1 gap-[22px] min-[620px]:grid-cols-2 min-[1100px]:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        <Reveal delay={PROJECTS.length * 60}>
          <AllReposCard />
        </Reveal>
      </div>
    </Section>
  );
}
