import LetterFalling from '@/components/animations/letter-falling';

import Reveal from '@/components/animations/reveal';
export default function Hero() {
    return (
        <section className=" relative flex h-screen flex-col items-center justify-center gap-y-2 overflow-hidden">
            <div className="sm:move-left-to-right absolute sm:-top-20 block">
                <img src="/Gradient 2.webp" alt="palm" />
            </div>
            <Reveal
                hiddenY={100}
                delay={0.5}
                duration={1}
                className=" absolute lg:-bottom-[50px] sm:bottom-[5vw] bottom-[15%] sm:left-0 -left-1/2 -scale-x-100 2xl:-bottom-[5vw] "
            >
                <img src="/Tay hero.webp" alt="palm" className="sm:w-4/5 rotate-[0deg]   " />
            </Reveal>
            <LetterFalling
                initialDelay={300}
                hero
                className="  z-10 md:text-9xl sm:text-8xl text-7xl font-bold leading-tight xl:text-[180px] 2xl:text-[12vw] "
            >
                Palm ID
            </LetterFalling>
            <div className=" z-10 flex flex-col items-center  xl:pb-36 pb-16">
                <Reveal
                    hiddenY={-50}
                    duration={1}
                    delay={1.5}
                    className="text-gradient text-center xl:pb-3 sm:text-3xl text-xl font-bold xl:text-5xl  2xl:text-[2.9vw] "
                >
                    Mở khoá cuộc sống bằng bàn tay
                </Reveal>
                <Reveal
                    hiddenY={-30}
                    duration={1}
                    delay={2.3}
                    className="sm:text-2xl text-center font-bold xl:text-3xl 2xl:text-[2.3vw]   "
                >
                    Khám phá điều bí ẩn trong lòng bàn tay của bạn
                </Reveal>
            </div>
        </section>
    );
}
