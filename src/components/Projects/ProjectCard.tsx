import { TagList } from "@/components/primitivesUi";
import type { ProjectCardProps } from "@/types/projects";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-brand-line">
      <div className="card-visual relative flex h-[132px] items-center justify-center border-b border-line">
        <span className="font-mono text-[44px] font-semibold tracking-[-.03em] text-line-2">
          {project.index}
        </span>
        <span
          aria-hidden
          className="absolute bottom-2.5 left-3 font-mono text-[8.5px] tracking-[.12em] text-txt-3"
        >
        </span>
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <h4 className="mb-2 text-[17.5px] font-semibold tracking-[-.015em]">
          {project.title}
        </h4>
        <p className="mb-[18px] flex-1 text-[13.2px] leading-[1.65] text-txt-2">
          {project.description}
        </p>

        <TagList tags={project.tags} size="sm" className="mb-[18px]" />

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[7px] font-mono text-[11px] uppercase tracking-[.07em] text-txt-3 transition-colors duration-200 group-hover:text-brand"
        >
          Repositório ↗
        </a>
      </div>
    </article>
  );
}
