import { cn } from "@/utils/cn";

/** Os três pontinhos das janelas (terminal / browser). */
export default function WindowDots({ small }: { small?: boolean }) {
  const dotColors = [
    "bg-[#FF5F56] hover:opacity-80",
    "bg-[#FFBD2E] hover:opacity-80",
    "bg-[#27C93F] hover:opacity-80",
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
