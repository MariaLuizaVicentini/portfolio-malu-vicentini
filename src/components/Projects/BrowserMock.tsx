import WindowDots from '@/components/primitivesUi/WindowDots';

interface BrowserMockProps {
  url: string;
}

/** Mock de navegador com skeleton — placeholder visual do projeto em destaque. */
export default function BrowserMock({ url }: BrowserMockProps) {
  const skeleton = 'animate-pulse rounded-[4px] bg-line';

  return (
    <div className="w-full max-w-[440px] overflow-hidden rounded-[9px] border border-line-2 bg-panel shadow-browser">
      <div className="flex items-center gap-1.5 border-b border-line bg-panel-2 px-3 py-2.5">
        <WindowDots small />

        <div className="ml-2 flex h-[19px] flex-1 items-center rounded border border-line bg-bg px-[9px] font-mono text-[9.5px] text-txt-3">
          {url}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5" aria-hidden="true">
        {/* Barra de pesquisa */}
        <div className="flex h-8 items-center gap-2 rounded-md border border-line bg-bg px-3">
          <div className="h-3 w-3 rounded-full border border-line-2" />
          <div className={`${skeleton} h-2 w-[45%]`} />
        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-3 gap-2">
          {['w-[65%]', 'w-[45%]', 'w-[55%]'].map((width, index) => (
            <div
              key={index}
              className="rounded-md border border-line bg-panel-2 p-3"
            >
              <div className={`${skeleton} mb-3 h-2 ${width}`} />
              <div
                className={`h-4 rounded-[3px] bg-brand opacity-40 ${
                  index === 1 ? 'w-[45%]' : 'w-[60%]'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Catálogo de séries */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div className={`${skeleton} h-3 w-[32%]`} />
            <div className={`${skeleton} h-2 w-[18%]`} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="min-w-0">
                <div className="relative h-[58px] overflow-hidden rounded-md border border-line-2 bg-line">
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-brand opacity-40" />
                </div>

                <div className={`${skeleton} mt-2 h-2 w-[80%]`} />
                <div className={`${skeleton} mt-1.5 h-2 w-[50%]`} />
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 border-t border-line pt-3">
          <span className="h-1.5 w-1.5 rounded-full bg-brand opacity-80" />
          <div className={`${skeleton} h-2 w-[35%]`} />
          <div className="ml-auto font-mono text-[9px] text-txt-3">
            LOADING...
          </div>
        </div>
      </div>
    </div>
  );
}