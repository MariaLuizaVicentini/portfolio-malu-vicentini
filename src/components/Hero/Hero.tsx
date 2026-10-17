import CodeTerminal from "./CodeTerminal";
import { ButtonLink } from "@/components/primitivesUi";
import { MAIN_STACK, SITE } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="relative px-0 pb-20 pt-[130px] min-[980px]:pb-[110px] min-[980px]:pt-[170px]"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 items-center gap-[52px] min-[980px]:grid-cols-[1.15fr_.85fr] min-[980px]:gap-[70px]">
          <div>
            <h1
              id="hero-title"
              className="mb-[22px] text-[clamp(28px,8vw,40px)] font-semibold leading-[.93] tracking-[-.045em] min-[620px]:text-[clamp(36px,5vw,64px)]"
            >
              Malu
              <span className="block text-txt-3">Vicentini</span>
            </h1>

            <div className="mb-[26px] flex items-center gap-2.5 font-mono text-[clamp(14px,1.5vw,17px)] tracking-[.01em] text-brand">
              <span
                aria-hidden
                className="inline-block h-[17px] w-[9px] animate-blink bg-brand"
              />
              {SITE.role}
            </div>

            <p className="mb-10 max-w-[470px] text-[16.5px] leading-[1.7] text-txt-2">
              {SITE.lead}
            </p>

            <div className="flex w-full flex-wrap items-center gap-3.5">
              <ButtonLink
                href="#projetos"
                variant="primary"
                className="max-[620px]:flex-1"
              >
                Ver projetos →
              </ButtonLink>
              <ButtonLink
                href={SITE.github}
                variant="ghost"
                external
                className="max-[620px]:flex-1"
              >
                GitHub
              </ButtonLink>
              <ButtonLink href={SITE.linkedin} variant="text" external>
                LinkedIn ↗
              </ButtonLink>
            </div>
          </div>

          <CodeTerminal />
        </div>

        <div className="mt-[90px] flex flex-col items-start justify-between gap-3.5 border-t border-line pt-[22px] font-mono text-[11px] uppercase tracking-[.13em] text-txt-3 min-[980px]:flex-row min-[980px]:items-center">
          <span>Stack principal</span>
          <div className="flex flex-wrap gap-x-[26px] gap-y-2">
            {MAIN_STACK.map((tech) => (
              <span key={tech} className="text-txt-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
