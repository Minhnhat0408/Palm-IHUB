import Reveal from "./animations/reveal";

export default function Feature() {
    return (
        <section className="relative px-6 py-20 sm:px-20" id="feature">
            <div className="flex flex-col items-center gap-y-5 md:gap-y-10">
                <h2 className="max-w-[800px]   whitespace-nowrap text-center text-4xl font-bold  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    Giờ đây bàn tay bạn
                    <p className="mt-3">
                        chính là <span className="text-gradient ">chìa khoá</span>
                    </p>
                </h2>
                <h3 className="relative whitespace-nowrap  text-center text-2xl  font-semibold  lg:text-4xl ">
                    Với một cái vẫy tay, bạn có thể
                </h3>
                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 xl:grid-cols-4 ">
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/gym.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Vào phòng gym</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Vào phòng gym</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/thang máy.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Phân tầng thang máy</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Phân tầng thang máy</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/khu vui chơi.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden   text-xl font-semibold   sm:block ">Vào khu vui chơi</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Vào khu vui chơi</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/siêu thị.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Xác nhận member</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold">Xác nhận member</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/kiosk.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Tủ gửi đồ</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Tủ gửi đồ</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/cửa.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Cửa ra vào</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Cửa ra vào</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/bãi xe.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Gửi xe</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Gửi xe</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                    <div className="relative  cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/tay xoay.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">Cửa xoay</p>
                        <Reveal hiddenY={70} className="absolute bg-glass  bottom-0 block p-5 text-xl text-white sm:hidden">
                            <p className="font-bold"> Cửa xoay</p>
                            <p className="text-lg">This is description with the purpose of demo</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
