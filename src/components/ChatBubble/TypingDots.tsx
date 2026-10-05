export default function TypingDots() {
  return (
    <div className="flex animate-msg-in justify-start" aria-live="polite" aria-label="Digitando">
      <div className="flex items-center gap-1 rounded-[10px] rounded-bl-[3px] border border-line-2 bg-panel-2 px-3.5 py-3">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-brand"
            style={{
              animation: 'typing 1.1s ease-in-out infinite',
              animationDelay: `${index * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
