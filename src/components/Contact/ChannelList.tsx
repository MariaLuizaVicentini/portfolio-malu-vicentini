import { CONTACT_CHANNELS } from '@/data/contact';

export default function ChannelList() {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-line bg-line">
      {CONTACT_CHANNELS.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="group flex items-center justify-between gap-5 bg-bg py-[21px] pl-[22px] pr-[22px] transition-all duration-[250ms] hover:bg-panel-2 hover:pl-7"
        >
          <span>
            <span className="block text-[15px] font-medium">{channel.title}</span>
            <span className="mt-[3px] block break-all font-mono text-[11px] tracking-[.03em] text-txt-3">
              {channel.subtitle}
            </span>
          </span>
          <span
            aria-hidden
            className="shrink-0 font-mono text-[15px] text-txt-3 transition-colors duration-200 group-hover:text-brand"
          >
            {channel.arrow}
          </span>
        </a>
      ))}
    </div>
  );
}
