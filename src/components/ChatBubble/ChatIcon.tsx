interface IconProps {
  className?: string;
}

export const ChatGlyph = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9.8L5.4 19.6A.9.9 0 0 1 4 18.9V5.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="8.6" cy="9.6" r="1.05" fill="currentColor" />
    <circle cx="12" cy="9.6" r="1.05" fill="currentColor" />
    <circle cx="15.4" cy="9.6" r="1.05" fill="currentColor" />
  </svg>
);

export const CloseGlyph = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="m6.5 6.5 11 11m0-11-11 11"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const SendGlyph = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M4.2 11.9 19.4 5.1a.5.5 0 0 1 .68.64l-5.3 13.6a.5.5 0 0 1-.93.02l-2.4-5.3-5.3-2.4a.5.5 0 0 1 .05-.93Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);
