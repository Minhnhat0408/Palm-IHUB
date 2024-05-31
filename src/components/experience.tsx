
export default function Experience() {
    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-20">
            <div className="flex flex-col items-center gap-y-4 lg:gap-y-10">
                <h2 className="max-w-[800px] text-center  text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    Một trải nghiệm{' '}
                    <p className="text-gradient   inline-flex  leading-snug">hoàn toàn khác biệt</p>
                </h2>
                <h3 className="text-center uppercase font-bold  sm:text-2xl text-lg whitespace-nowrap  lg:text-4xl ">
                    Mở khóa cuộc sống bằng bàn tay
                </h3>
                <div className="back-gradient relative mt-10  w-full overflow-hidden rounded-2xl text-white lg:overflow-visible">
                    <div className="w-full  p-4 pb-0 sm:p-10 lg:p-20 ">
                        <div className="w-1/2 space-y-2 lg:w-1/3 lg:space-y-10">
                            <h3 className="text-xl  font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                Chỉ cần bàn tay
                            </h3>
                            <p className=" sm:text-xl lg:text-3xl ">
                                Để xác thực bản thân không cần nữa những thẻ từ, chìa khóa...
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full pt-60 sm:pt-80  ">
                        <img
                            src={'Card 13.png'}
                            alt="palm"
                            className="floating-box-animation absolute left-1/2 top-32 w-[200px] -translate-x-1/2 sm:top-40 sm:w-[300px] lg:top-20 lg:w-[389px]"
                        />
                        <img
                            src={'Card 14.png'}
                            alt="palm"
                            className="floating-box-animation-delay absolute -top-8 left-1/2  w-[200px]  -translate-x-1/2  sm:w-[300px] lg:-top-52 lg:w-[389px]"
                        />
                        <img
                            src={'Key-1.webp'}
                            alt="palm"
                            className="floating-box-animation-y absolute left-1/2 top-20 w-[200px] sm:top-20    sm:w-[300px] lg:top-0 lg:w-[400px] "
                        />

                        <img
                            src={'hand-exp.webp'}
                            alt="palm"
                            className="w-full -translate-x-20 scale-125 opacity-60 sm:scale-100 lg:w-3/4 lg:translate-x-0    "
                        />
                    </div>
                    <div className="flex w-full justify-end  p-4 pt-10 sm:p-10 lg:p-20">
                        <div className="w-1/2 space-y-2 lg:w-1/3 lg:space-y-10 ">
                            <h3 className="text-xl  font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                Một cái vẫy nhẹ
                            </h3>
                            <p className=" sm:text-xl lg:text-3xl">
                                Để mở ra tất cả, tiện lợi và tràn đầy cảm xúc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
