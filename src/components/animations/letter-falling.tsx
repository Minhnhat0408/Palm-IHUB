import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetterFalling({
  children,
  className,
  initialDelay = 0,
  hero = false,
}: {
  children: string;
  hero?: boolean;
  initialDelay?: number;

  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = children.split("");
  const middleIndex = Math.floor(letters.length / 2);
  const colorList = [
    "#CB8AC6",
    "#D784A8",
    "#DD829C",
    "#E67E86",
    "#F37868",
    "#FD7450",
    "#FD7450",
  ];
  //   console.log(letters);
  return (
    <div
      ref={ref}
      className={cn("relative flex h-fit justify-center ", className)}
    >
      {letters.map((char, index) => {
        // Calculate delay based on distance from the middle
        const distanceFromMiddle = Math.abs(index - middleIndex);
        const delay = distanceFromMiddle * 100 + initialDelay; // Adjust this multiplier as needed

        return (
          <span
            key={index}
            className={cn(
              "transform translate-y-[-50px] opacity-0 transition duration-700 ",
              isInView && "opacity-100 translate-y-0"
            )}
            style={
              hero
                ? {
                    transitionDelay: `${delay}ms`,
                    color: colorList[index],
                  }
                : {
                    transitionDelay: `${delay}ms`,
                  }
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
}
