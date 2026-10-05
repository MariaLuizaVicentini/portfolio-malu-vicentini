import WindowDots from '@/components/ui/WindowDots';

interface BrowserMockProps {
  url: string;
}

/** Mock de navegador com skeleton — placeholder visual do projeto em destaque. */
export default function BrowserMock({ url }: BrowserMockProps) {
  return (
    <div className="w-full max-w-[440px] overflow-hidden rounded-[9px] border border-line-2 bg-panel shadow-browser">
      <div className="flex items-center gap-1.5 border-b border-line bg-panel-2 px-3 py-2.5">
        <WindowDots small />
        <div className="ml-2 flex h-[19px] flex-1 items-center rounded border border-line bg-bg px-[9px] font-mono text-[9.5px] text-txt-3">
          {url}
        </div>
      </div>

      <div className="flex flex-col gap-[11px] p-5" aria-hidden>
        <div className="h-[11px] w-[34%] rounded-[3px] bg-brand opacity-[.55]" />
        <div className="h-[9px] w-[88%] rounded-[3px] bg-line" />
        <div className="h-[9px] w-[60%] rounded-[3px] bg-line" />
        <div className="mt-[5px] flex gap-[9px]">
          <div className="h-[46px] flex-1 rounded-[5px] border border-line-2 bg-line" />
          <div className="h-[46px] flex-1 rounded-[5px] border border-line-2 bg-line" />
          <div className="h-[46px] flex-1 rounded-[5px] border border-line-2 bg-line" />
        </div>
        <div className="h-[9px] w-[70%] rounded-[3px] bg-line" />
        <div className="h-[9px] w-[45%] rounded-[3px] bg-line" />
      </div>
    </div>
  );
}
