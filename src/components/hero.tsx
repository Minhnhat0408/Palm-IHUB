import LetterFalling from "@/components/animations/letter-falling";

import Reveal from "@/components/animations/reveal";
export default function Hero() {
  return (
    <section className=" h-screen relative flex-col gap-y-2 flex items-center justify-center overflow-hidden">
      <div className="absolute -top-20 block move-left-to-right">
        <img src="/Gradient 2.webp" alt="palm" />
      </div>
      <Reveal
        hiddenY={100}
        delay={0.5}
        duration={1}
        className=" -scale-x-100 2xl:-bottom-[5vw] -bottom-[30px] absolute left-0 "
      >
        <img
          src="/Tay hero.webp"
          alt="palm"
          className="rotate-[0deg] 2xl:w-[1300px] w-3/4 "
        />
      </Reveal>
      <LetterFalling
        initialDelay={300}
        hero
        className="  font-bold text-[180px] 2xl:text-[12vw] 2xl:leading-[12vw] leading-[180px] z-10 "
      >
        Palm ID
      </LetterFalling>
      <div className=" flex flex-col pb-36 z-10  items-center">
        <Reveal
          hiddenY={-50}
          duration={1}
          delay={1.5}
          className="font-bold 2xl:text-[2.9vw] text-5xl text-gradient  pb-3 "
        >
          Mở khoá cuộc sống bằng bàn tay
        </Reveal>
        <Reveal
          hiddenY={-30}
          duration={1}
          delay={2.3}
          className="font-bold text-3xl  2xl:text-[2.3vw]   "
        >
          Khám phá điều bí ẩn trong lòng bàn tay của bạn
        </Reveal>
      </div>

   
    </section>
  );
}
