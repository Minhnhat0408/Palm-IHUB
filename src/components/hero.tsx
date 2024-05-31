import LetterFalling from '@/components/animations/letter-falling';

import Reveal from '@/components/animations/reveal';
export default function Hero() {
    return (
        <section
            id="hero"
            className=" relative flex h-screen flex-col items-center justify-center gap-y-2 overflow-hidden"
        >
            <div className="sm:move-left-to-right absolute block scale-[200%] sm:-top-20 sm:scale-100">
                <img src="/Gradient 2.webp" alt="palm" />
            </div>
            <Reveal
                hiddenY={100}
                delay={0.5}
                duration={1}
                className=" absolute -left-1/2 bottom-[15%] -scale-x-100 sm:bottom-[5vw] sm:left-0 lg:-bottom-[50px] 2xl:-bottom-[5vw] "
            >
                <img src="/Tay hero.webp" alt="palm" className="rotate-[0deg] sm:w-4/5   " />
            </Reveal>
            <LetterFalling
                initialDelay={300}
                hero
                className="  z-10 text-[86px] font-bold leading-tight sm:text-8xl md:text-9xl xl:text-[180px] 2xl:text-[12vw] "
            >
                Palm ID
            </LetterFalling>
            <div className=" z-10 flex flex-col items-center gap-y-1  pb-16 xl:pb-36 2xl:gap-y-2">
                <Reveal
                    hiddenY={-50}
                    duration={1}
                    delay={1.5}
                    className="text-gradient text-center text-xl font-bold sm:text-3xl xl:pb-3 xl:text-[42px]  2xl:text-[2.9vw] "
                >
                    Mở khoá cuộc sống bằng bàn tay
                </Reveal>
                <Reveal
                    hiddenY={50}
                    duration={1}
                    delay={1.5}
                    className="text-center font-bold  sm:text-2xl xl:text-3xl 2xl:text-[2.3vw]   "
                >
                    Khám phá điều bí ẩn trong lòng <span className="block sm:inline">bàn tay của bạn</span>
                </Reveal>
            </div>
        </section>
    );
}
