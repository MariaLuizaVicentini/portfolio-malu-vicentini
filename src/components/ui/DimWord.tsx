/** Palavra em destaque apagado — equivale ao `<em>` do título original. */
export default function DimWord({ children }: { children: React.ReactNode }) {
  return <em className="not-italic text-txt-3">{children}</em>;
}
