import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetterAppear({
  children,
  className,
  initialDelay,
  duration = 60,
}: {
  children: string;
  className?: string;
  duration?: number;
  initialDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span
      ref={ref}
      className={cn(" relative  flex h-fit justify-center  ", className)}
    >
      {children.split(" ").map((word, index) => {
        let time =
          index < 1
            ? duration
            : duration *
              children
                .split(" ")
                .splice(0, index)
                .reduce((a, b) => {
                  return a + b.length;
                }, 0);

        time += initialDelay || 0;
        return (
          <span key={index} className="mr-4 flex">
            {word.split("").map((char, ind) => {
              time += 80;
              return (
                <span
                  className={cn(
                    "translate-x-[50px] scale-150 py-2 opacity-0 duration-500  ",
                    isInView &&
                      " opacity-1 super flex  translate-x-0 scale-100",
                  )}
                  style={{ transitionDelay: time + "ms" }}
                  key={ind}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
