import { cn } from '@/lib/utils';

export default function KeenSliderChildImage({
    src,
    className,
    setImage,
    title,
}: {
    src: string;
    className?: string;
    setImage: (src: string | null) => void;
    title: string;
}) {
    return (
        <div
            onClick={() => {
                setImage(null);
            }}
            className={cn(
                'keen-slider__slide group/item relative cursor-pointer justify-center overflow-hidden  ',
                className,
            )}
        >
            <img className="peer h-[400px] object-cover" src={src} alt={src.split('.')[0]} />
            {/* <div className=" text-white absolute bottom-0 left-0 flex w-full translate-y-10 flex-col justify-center bg-black/50 p-8 opacity-0  backdrop-blur duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
        <h1 className="mb-6 translate-y-20 text-white ssm:text-4xl text-2xl font-bold duration-500 hover:text-gradient group-hover/item:translate-y-0">
          {title}
        </h1>
      </div> */}
            <div className="absolute bottom-0 left-0 w-full p-5 bg-glass">
                <h3 className='text-white font-bold text-xl'>{title}</h3>
            </div>
        </div>
    );
}
