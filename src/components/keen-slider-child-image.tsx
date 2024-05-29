import { cn } from "@/lib/utils";

export default function KeenSliderChildImage({
  src,
  className,
  setImage,
}: {
  src: string;
  className?: string;
  setImage: (src: string) => void;
}) {
  return (
    <div
      onClick={() => {
        setImage(src);
      }}
      className={cn(
        "keen-slider__slide  cursor-pointer  ",
        className
      )}
    >
      <img className="h-[400px] object-cover" src={src} alt={src.split(".")[0]} />
    </div>
  );
}
