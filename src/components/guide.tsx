import Reveal from './animations/reveal';

export default function Guide() {
    return (
        <section className="relative px-6 py-20 xl:px-40 sm:px-20">
            <h2 className="sm:mb-40 mb-20 text-center  text-4xl font-bold  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                Cách thức hoạt động
            </h2>

            <div className=" sm:space-y-40 space-y-32  ">
                <Reveal scale={0.7} className="  grid sm:grid-cols-2 gap-x-10 ">
                    <div className=" mb-10 flex flex-col justify-center  gap-y-5 md:gap-y-10">
                        <h3 className="text-3xl font-bold md:text-5xl">Bước 1: Cài đặt</h3>
                        <p className="text-xl md:text-3xl">
                            Đặt thiết bị quét Palm ID tại cửa ra vào, thang máy, bãi gửi xe…
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={'/image 3.webp'} alt="gym" className="w-full rounded-2xl  lg:w-3/4 xl:w-2/3" />
                    </div>
                </Reveal>
                <Reveal scale={0.7} className="  grid sm:grid-cols-2 gap-x-10 ">
                    <div className=" mb-10 flex flex-col justify-center  gap-y-5 md:gap-y-10">
                        <h3 className="text-3xl font-bold md:text-5xl">Bước 2: Lấy mẫu</h3>

                        <p className="text-xl md:text-3xl">
                            Người dùng đăng ký mẫu bằng cách đưa bàn tay lên trước thiết bị
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={'/image 9.webp'} alt="gym" className="w-full rounded-2xl lg:w-3/4 xl:w-2/3" />
                    </div>
                </Reveal>
                <Reveal scale={0.7} className="  grid sm:grid-cols-2 gap-x-10 ">
                    <div className=" mb-10 flex flex-col justify-center  gap-y-5 md:gap-y-10">
                        <h3 className="text-3xl font-bold md:text-5xl">Bước 3: Sử dụng</h3>
                        <p className="text-xl md:text-3xl">
                            Chỉ cần đưa tay để xác nhận mỗi lần muốn mở cửa hoặc sử dụng tiện ích
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={'/image 10.webp'} alt="gym" className="w-full rounded-2xl lg:w-3/4 xl:w-2/3" />
                    </div>
                </Reveal>

                {/* <div className=" absolute    block overflow-hidden top-0 left-0 right-0 bottom-0 ">
                    <img src="/Gradient 2.webp" alt="palm" className='' />
                </div> */}
                {/* <div className="sticky top-0 hidden h-screen items-center justify-center overflow-hidden pr-20 md:flex">
                    {/* <motion.div
                        key={image}
                        exit={{
                            opacity: 0,
                            scale: 1.5,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                        }}
                        className="flex justify-center"
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <img src={image} alt="gym" className="w-full rounded-2xl lg:w-3/4 xl:w-2/3" />
                    </motion.div> 
                </div> */}
            </div>
        </section>
    );
}
