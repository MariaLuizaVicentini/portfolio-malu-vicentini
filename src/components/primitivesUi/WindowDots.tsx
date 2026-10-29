import { cn } from "@/utils/cn";

/** Os três pontinhos das janelas (terminal / browser). */
export default function WindowDots({ small }: { small?: boolean }) {
  const dotColors = [
      "bg-red-500 hover:opacity-80",
      "bg-yellow-500 hover:opacity-80",
      "bg-emerald-500 hover:opacity-80", // Verde padrão seguro
  ];

  return (
    <>
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          aria-hidden
          className={cn(
            "shrink-0 rounded-full bg-[#2A2F3A]",
            small ? "h-[7px] w-[7px]" : "h-[9px] w-[9px]",
            dotColors[index],
          )}
        />
      ))}
    </>
  );
}
