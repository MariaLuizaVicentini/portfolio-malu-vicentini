import { SITE } from '@/data/site';

export default function Logo() {
  return (
    <a
      href="#topo"
      className="font-mono text-[15px] font-semibold tracking-[.02em]"
      aria-label={`${SITE.name} — início`}
    >
      {SITE.initials}
      <b className="text-brand">.</b>
    </a>
  );
}
