import { LEARNING_NOW, PROFILE_ROWS } from '@/data/aboutMe';

export default function ProfilePanel() {
  return (
    <aside className="overflow-hidden rounded-xl border border-line bg-panel min-[980px]:sticky min-[980px]:top-[100px]">
      <div className="border-b border-line bg-white/[.012] px-5 py-4 font-mono text-[10.5px] uppercase tracking-[.14em] text-txt-3">
        Perfil
      </div>

      <dl>
        {PROFILE_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 border-b border-line px-5 py-[15px] last:border-b-0"
          >
            <dt className="font-mono text-[10.5px] uppercase tracking-[.09em] text-txt-3">
              {row.label}
            </dt>
            <dd className="text-right text-[13.5px] text-txt">
              {row.href ? (
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand transition-opacity hover:opacity-80"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line bg-brand/[.05] p-5">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[.13em] text-brand">
          Estudando agora
        </div>
        <div className="flex flex-wrap gap-[7px]">
          {LEARNING_NOW.map((item) => (
            <span
              key={item}
              className="rounded-[5px] border border-brand-line bg-brand-soft px-2.5 py-[5px] font-mono text-[11px] text-txt"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
