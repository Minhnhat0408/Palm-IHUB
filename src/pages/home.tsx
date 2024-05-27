import LetterAppear from "@/components/animations/letter-appear";
import LetterFalling from "@/components/animations/letter-falling";

import Reveal from "@/components/animations/reveal";

export default function HomePage() {
  return (
    <main className="w-full h-[100vh] relative flex-col gap-y-10 flex items-center justify-center overflow-hidden">
      <LetterAppear className="font-bold text-5xl  ">
        Mở khoá cuộc sống bằng bàn tay
      </LetterAppear>
      <LetterAppear duration={40} className="font-bold text-4xl text-primary  ">
        Khám phá điều bí ẩn trong lòng bàn tay của bạn
      </LetterAppear>
      <LetterFalling
        initialDelay={300}
        hero
        className="text-8xl font-bold md:!text-[120px] xl:!text-[160px] ssm:text-6xl"
      >
        Palm ID
      </LetterFalling>
      <div className="h-40"></div>
      <div className="absolute -top-20 block move-left-to-right">
        <img src="/Gradient 2.webp" alt="palm" />
      </div>
      <Reveal
        hiddenY={100}
        delay={0.5}
        duration={1}
        className="w-2/3  -bottom-[160px] absolute right-0 "
      >
        <img src="/hand hero.webp" alt="palm" className="-rotate-[10deg]" />
      </Reveal>
    </main>
  );
}
