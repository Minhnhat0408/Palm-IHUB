import Reveal from './animations/reveal';

export default function Feature() {
    return (
        <section className="relative px-6 py-20 sm:px-20" id="feature">
            <div className="flex flex-col items-center gap-y-5 md:gap-y-10">
                <h2 className="max-w-[800px] whitespace-nowrap  text-center text-4xl font-bold !leading-[1.1]  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    Giờ đây bàn tay bạn
                    <p className="mt-3">
                        chính là <span className="text-gradient ">chìa khoá</span>
                    </p>
                </h2>
                <h3 className="relative whitespace-nowrap  text-center text-2xl  font-semibold  lg:text-4xl ">
                    Với một cái vẫy tay, bạn có thể
                </h3>
                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10 xl:grid-cols-4 ">
                    <div className="group  relative cursor-pointer overflow-hidden  rounded-xl duration-500 hover:scale-105  hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/bãi xe.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để xác thực là cư dân và tự động mở barrier
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary  sm:block ">
                            Gửi xe vào bãi
                        </p>

                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold"> Gửi xe vào bãi</p>
                            <p className="text-lg">Vẫy tay để xác thực là cư dân và tự động mở barrier</p>
                        </Reveal>
                    </div>
                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/IMG_5341.webp" alt="gym" className=" aspect-square object-cover h-[450px] rounded-xl sm:h-auto" />
                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để tự động mở khóa cửa ra vào hoặc cửa lồng của tòa nhà
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Mở cửa ra vào
                        </p>

                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold"> Mở cửa ra vào</p>
                            <p className="text-lg">Vẫy tay để tự động mở khóa cửa ra vào hoặc cửa lồng của tòa nhà</p>
                        </Reveal>
                    </div>

                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/thang máy.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để xác thực là cư dân để có thể bấm chọn tầng thang máy
                            </p>
                        </div>

                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Phân tầng thang máy
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold"> Phân tầng thang máy</p>
                            <p className="text-lg"> Vẫy tay để xác thực là cư dân để có thể bấm chọn tầng thang máy</p>
                        </Reveal>
                    </div>
                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/gym.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />
                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để xác thực là thành viên và tự động mở cửa phòng tập (bể bơi)
                            </p>
                        </div>

                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Vào phòng tập/bể bơi
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold">Vào phòng tập/bể bơi</p>
                            <p className="text-lg">
                                Vẫy tay để xác thực là thành viên và tự động mở cửa phòng tập (bể bơi)
                            </p>
                        </Reveal>
                    </div>
                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/khu vui chơi.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />

                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để xác thực là cư dân để có thể vào khu vui chơi
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl  font-semibold group-hover:text-secondary   sm:block ">
                            Vào khu vui chơi
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold"> Vào khu vui chơi</p>
                            <p className="text-lg">Vẫy tay để xác thực là cư dân để có thể vào khu vui chơi</p>
                        </Reveal>
                    </div>
                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/siêu thị.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />

                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để xác nhận là thành viên của siêu thị, cửa hàng... mà không cần đọc số điện
                                thoại hay thẻ thành viên
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Xác nhận member
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold">Xác nhận member</p>
                            <p className="text-lg">
                                Vẫy tay để xác nhận là thành viên của siêu thị, cửa hàng... mà không cần đọc số điện
                                thoại hay thẻ thành viên
                            </p>
                        </Reveal>
                    </div>
                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/ward.jpg" alt="gym" className=" h-[450px] aspect-square rounded-xl sm:h-auto" />

                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để mở khóa tủ gửi đồ cá nhân của mình
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Mở tủ gửi đồ
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold">Mở tủ gửi đồ</p>
                            <p className="text-lg">Vẫy tay để mở khóa tủ gửi đồ cá nhân của mình</p>
                        </Reveal>
                    </div>

                    <div className="group  relative cursor-pointer  overflow-hidden rounded-xl duration-500 hover:scale-105 hover:shadow-lg sm:p-3 md:hover:scale-110 md:hover:shadow-2xl lg:p-5">
                        <div className="relative">
                            <img src="/tay xoay.webp" alt="gym" className=" h-[450px] rounded-xl sm:h-auto" />

                            <p className="bg-feature absolute bottom-0 p-4  text-white opacity-0 duration-500 sm:group-hover:opacity-100 ">
                                Vẫy tay để mở cửa xoay khi vào văn phòng, đồng thời để điểm danh và chấm công
                            </p>
                        </div>
                        <p className=" relative mt-5 hidden text-xl font-semibold group-hover:text-secondary   sm:block ">
                            Điểm danh, chấm công
                        </p>
                        <Reveal
                            hiddenY={70}
                            className="bg-glass absolute  bottom-0 block p-5 text-xl text-white sm:hidden"
                        >
                            <p className="font-bold">Điểm danh, chấm công</p>
                            <p className="text-lg">
                                Vẫy tay để mở cửa xoay khi vào văn phòng, đồng thời để điểm danh và chấm công
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
