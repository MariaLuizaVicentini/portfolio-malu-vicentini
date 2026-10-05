/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090B',
        'bg-2': '#0D0F13',
        panel: '#101318',
        'panel-2': '#141820',
        line: '#1C212B',
        'line-2': '#262D3A',
        txt: '#F2F4F8',
        'txt-2': '#9AA3B2',
        'txt-3': '#5F6878',
        brand: '#2BD87B',
        'brand-soft': 'rgba(43,216,123,.13)',
        'brand-line': 'rgba(43,216,123,.32)',
        'code-key': '#7C9BFF',
        'code-str': '#8FD98F',
        'code-cmt': '#4A5464',
        'code-fn': '#E6C07B',
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'system-ui', '-apple-system', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      boxShadow: {
        term: '0 32px 70px -28px rgba(0,0,0,.9)',
        browser: '0 26px 60px -22px rgba(0,0,0,.92)',
        'btn-primary': '0 6px 20px rgba(43,216,123,.22)',
        'btn-primary-hover': '0 12px 36px rgba(43,216,123,.48), 0 0 0 1px rgba(43,216,123,.6)',
        'btn-cv-hover': '0 6px 24px rgba(43,216,123,.45), 0 0 0 1px rgba(43,216,123,.5)',
        'ghost-hover': '0 0 22px rgba(43,216,123,.16), inset 0 0 18px rgba(43,216,123,.06)',
        dot: '0 0 0 3px rgba(74,222,128,.16)',
        bubble: '0 10px 30px -6px rgba(43,216,123,.45), 0 0 0 1px rgba(43,216,123,.35)',
        'bubble-hover': '0 16px 44px -8px rgba(43,216,123,.65), 0 0 0 1px rgba(43,216,123,.6)',
        chat: '0 34px 80px -24px rgba(0,0,0,.92), 0 0 0 1px rgba(43,216,123,.14)',
      },
      keyframes: {
        breathe: {
          '0%,100%': { opacity: '.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        pulse2: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '.4' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'bubble-ring': {
          '0%': { transform: 'scale(1)', opacity: '.55' },
          '70%': { transform: 'scale(1.85)', opacity: '0' },
          '100%': { transform: 'scale(1.85)', opacity: '0' },
        },
        'chat-in': {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'chat-out': {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(16px) scale(.96)' },
        },
        'msg-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%,60%,100%': { transform: 'translateY(0)', opacity: '.45' },
          '30%': { transform: 'translateY(-3px)', opacity: '1' },
        },
      },
      animation: {
        breathe: 'breathe 9s ease-in-out infinite',
        pulse2: 'pulse2 2.4s infinite',
        blink: 'blink 1.1s steps(2) infinite',
        'bubble-ring': 'bubble-ring 2.6s ease-out infinite',
        'chat-in': 'chat-in .26s cubic-bezier(.16,1,.3,1) forwards',
        'chat-out': 'chat-out .18s ease-in forwards',
        'msg-in': 'msg-in .24s ease-out both',
        'reveal-up': 'reveal-up .6s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
};
