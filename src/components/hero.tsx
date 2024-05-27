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
        className=" -scale-x-100 -bottom-[30px] absolute left-0 "
      >
        <img
          src="/Tay hero.webp"
          alt="palm"
          className="rotate-[0deg] w-[1300px] "
        />
      </Reveal>
      <LetterFalling
        initialDelay={300}
        hero
        className="text-9xl font-bold md:!text-[120px] xl:!text-[200px] ssm:text-6xl"
      >
        Palm ID
      </LetterFalling>
      <div className=" flex flex-col pb-16  items-center">
        <Reveal
          hiddenY={-50}
          duration={1}
          delay={1.5}
          className="font-bold text-5xl text-gradient py-3 "
        >
          Mở khoá cuộc sống bằng bàn tay
        </Reveal>
        <Reveal
          hiddenY={-50}
          duration={1}
          delay={2.3}
          className="font-bold text-4xl   "
        >
          Khám phá điều bí ẩn trong lòng bàn tay của bạn
        </Reveal>
      </div>

      <div className="h-[10vh]"></div>
    </section>
  );
}
