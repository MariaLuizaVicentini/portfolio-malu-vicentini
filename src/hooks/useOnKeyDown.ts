import { useEffect } from 'react';

/** Dispara `handler` quando a tecla informada é pressionada. */
export function useOnKeyDown(key: string, handler: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) handler();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [key, handler, enabled]);
}
