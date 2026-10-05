import ChannelList from './ChannelList';
import { Eyebrow } from '@/components/ui';
import { SITE } from '@/data/site';

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden py-[76px] text-left min-[620px]:py-[110px]"
    >
      <div className="wrap">
        <Eyebrow num="05" className="mb-[26px]">
          — Contato
        </Eyebrow>

        <div className="grid grid-cols-1 items-end gap-12 min-[980px]:grid-cols-[1.3fr_.7fr] min-[980px]:gap-[70px]">
          <div>
            <h2
              id="contato-title"
              className="mb-[26px] text-[clamp(34px,10vw,48px)] font-semibold leading-[.98] tracking-[-.045em] min-[620px]:text-[clamp(44px,6.4vw,86px)]"
            >
              Vamos
              <br />
              <span className="text-txt-3">conversar.</span>
            </h2>

            <p className="mb-[38px] max-w-[450px] text-[16.5px] leading-[1.7] text-txt-2">
              Aberta a oportunidades e colaborações em desenvolvimento backend e integrações entre
              sistemas.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex max-w-full items-center gap-3.5 break-all border-b border-line-2 pb-3 font-mono text-[clamp(15px,1.9vw,22px)] text-txt transition-all duration-[250ms] hover:border-brand hover:text-brand"
            >
              {SITE.email} <span aria-hidden>↗</span>
            </a>
          </div>

          <ChannelList />
        </div>
      </div>
    </section>
  );
}
