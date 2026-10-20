import BrowserMock from './BrowserMock';
import { TagList } from '@/components/primitivesUi';
import type { Project } from "@/types/projects";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="mb-[26px] grid grid-cols-1 overflow-hidden rounded-[14px] border border-line bg-gradient-to-br from-panel to-bg-2 transition-colors duration-300 hover:border-brand-line min-[980px]:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col justify-center px-[30px] py-9 min-[980px]:px-11 min-[980px]:py-12">
        <span className="mb-6 inline-flex select-none items-center gap-[7px] self-start rounded-[5px] border border-brand-line bg-brand-soft px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[.14em] text-brand">
          ★ Projeto em destaque
        </span>

        <h3 className="mb-4 text-[29px] font-semibold leading-[1.1] tracking-[-.03em] min-[980px]:text-4xl">
          {project.title}
        </h3>

        <p className="mb-7 max-w-[420px] text-[15px] leading-[1.72] text-txt-2">
          {project.description}
        </p>

        <TagList tags={project.tags} className="mb-8" />

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[9px] self-start border-b border-line-2 pb-[5px] text-[13.5px] font-medium text-txt transition-all duration-200 hover:border-brand hover:text-brand"
        >
          Visualizar repositório <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="feat-visual relative flex min-h-[300px] items-center justify-center border-t border-line p-8 min-[980px]:min-h-[400px] min-[980px]:border-l min-[980px]:border-t-0 min-[980px]:p-11">
        <BrowserMock url={project.browserLabel ?? project.id} />
        <span className="absolute bottom-[18px] right-5 rounded border border-dashed border-line-2 px-[9px] py-1 font-mono text-[9.5px] uppercase tracking-[.09em] text-txt-3">
          Área para screenshot
        </span>
      </div>
    </article>
  );
}
