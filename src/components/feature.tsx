export default function Feature() {
    return (
        <section className="relative px-6 py-20 sm:px-20" id="feature">
            <div className="flex flex-col items-center gap-y-5 md:gap-y-10">
                <h2 className="max-w-[800px]  text-center text-4xl font-bold  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    Giờ đây, bàn tay bạn chính là <span className="text-gradient ">chìa khoá</span>
                </h2>
                <h3 className="relative text-2xl  font-semibold  lg:text-4xl  text-center ">Với một cái vãy tay, bạn có thể</h3>
                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 xl:grid-cols-4 ">
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/gym.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Vào phòng gym
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Vào phòng gym</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/thang máy.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Phân tầng thang máy
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Phân tầng thang máy</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/khu vui chơi.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden   text-xl font-semibold   sm:block ">
                            Vào khu vui chơi
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Vào khu vui chơi</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/siêu thị.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Xác nhận member
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p>Xác nhận member</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/kiosk.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Tủ gửi đồ
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Tủ gửi đồ</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/cửa.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Cửa ra vào
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Cửa ra vào</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/bãi xe.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Gửi xe
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Gửi xe</p>
                        </div>
                    </div>
                    <div className="relative  cursor-pointer rounded-xl duration-500 hover:scale-105 hover:text-secondary hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <img src="/tay xoay.webp" alt="gym" className=" rounded-xl" />
                        <p className=" relative mt-5 hidden  text-xl font-semibold   sm:block ">
                            Cửa xoay
                        </p>
                        <div className="absolute sm:hidden block p-5 bottom-0 text-lg font-bold text-white">
                            <p> Cửa xoay</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
