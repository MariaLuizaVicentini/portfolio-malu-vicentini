/**
 * Camadas decorativas de fundo: grid mascarado + bloom verde pulsante.
 * Ficam fixas atrás de todo o conteúdo e não capturam ponteiro.
 */
export default function Background() {
  return (
    <>
      <div className="grid-bg pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div
        className="bloom-gradient pointer-events-none fixed -right-[180px] -top-[280px] z-0 h-[900px] w-[900px] animate-breathe"
        aria-hidden
      />
    </>
  );
}
