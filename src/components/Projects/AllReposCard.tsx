import { Eyebrow } from '@/components/primitivesUi';
import { SITE } from '@/data/site';

/** Card final do grid, com gradiente próprio, apontando para o GitHub. */
export default function AllReposCard() {
  return (
    <article className="group flex flex-col justify-center overflow-hidden rounded-xl border border-line bg-[linear-gradient(135deg,#101318,rgba(43,216,123,.07))] transition-all duration-300 hover:-translate-y-1 hover:border-brand-line">
      <div className="flex flex-1 flex-col justify-center p-[22px] text-left">
        <Eyebrow num="+" className="mb-4">
          Mais
        </Eyebrow>
        <h4 className="mb-3 text-[17.5px] font-semibold tracking-[-.015em]">
          Todos os repositórios
        </h4>
        <p className="mb-[18px] text-[13.2px] leading-[1.65] text-txt-2">
          Demais projetos, estudos e experimentos disponíveis no GitHub.
        </p>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[7px] font-mono text-[11px] uppercase tracking-[.07em] text-brand"
        >
          github.com/{SITE.githubHandle} ↗
        </a>
      </div>
    </article>
  );
}
