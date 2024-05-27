import useProgressScroll from "@/hooks/useProgressScroll";
import { cn } from "@/lib/utils";

function ProgressIndicator() {
  const completion = useProgressScroll();
  //   const location = useLocation();
  return (
    <div className="relative z-10 h-1 w-full bg-white/60 ">
      <div
        style={{ transform: `translateX(${completion - 100}%)` }}
        className={cn("h-full  w-full bg-primary ")}
      ></div>
    </div>
  );
}

export default ProgressIndicator;
