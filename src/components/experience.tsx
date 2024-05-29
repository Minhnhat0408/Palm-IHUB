import LetterAppear from "./animations/letter-appear";
import card from '/Card 13.svg'
import card2 from '/Card 14.svg'

export default function Experience() {
    return (
        <section className="py-20 px-20 relative">
            <div className="flex flex-col items-center gap-y-10">
                <h2 className="2xl:text-7xl  text-6xl font-bold text-center max-w-[800px]">
                    Một trải nghiệm {" "}
                    <LetterAppear className="text-secondary  inline-flex">
                        hoàn toàn khác biệt
                    </LetterAppear>
                </h2>
                <h3 className="font-bold text-4xl text-primary ">Mở khóa cuộc sống bằng lòng bàn tay</h3>
                <div className="back-gradient  text-white relative w-full rounded-2xl mt-10">
                    <div className="w-full  p-20 pb-0 ">
                        <div className="space-y-10 w-1/3">
                            <h3 className="font-bold text-5xl text-white">Chỉ cần bàn tay</h3>
                            <p className="text-3xl">Để xác thực bản thân không cần nữa những thẻ từ, chìa khóa...</p>

                        </div>

                    </div>
                    <div className="w-full relative pt-80  ">
                        <img src={card} alt="palm" className="absolute floating-box-animation top-20 left-1/2 -translate-x-1/2"/>
                        <img src={card2} alt="palm" className="absolute floating-box-animation-delay  -top-52 left-1/2 -translate-x-1/2"/>

                        <img src={'hand-exp.webp'} alt="palm"className="w-3/4" />

                        
                    </div>
                    <div className="w-full flex justify-end  p-20 pt-10">
                    <div className="space-y-10 w-1/3 ">

                            <h3 className="font-bold text-5xl text-white">Một cái hẩy nhẹ</h3>
                            <p className="text-3xl">Để mở ra tất cả, thật tiện lợi và tràn đầy cảm xúc.</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
