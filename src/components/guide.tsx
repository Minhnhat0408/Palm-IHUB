import { useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Guide() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const isInView3 = useInView(ref3);
    const [image, setImage] = useState('');

    const render = isInView1 ? 1 : isInView2 ? 2 : isInView3 ? 3 : null;
    useEffect(() => {
        if (render) {
            if (render === 1) {
                setImage('/image 3.webp');
            } else if (render === 2) {
                setImage('/image 9.webp');
            } else {
                setImage('/image 10.webp');
            }
        }
    }, [render]);
    return (
        <section className="relative  py-20">
            <h2 className="mb-20 text-center  text-4xl font-bold  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                Cách thức hoạt động
            </h2>
            <div className="relative grid grid-cols-1 md:grid-cols-2 ">
                <div className="sm:px-20 px-6 lg:ml-20 xl:px-32">
                    <div className="flex sm:h-screen mb-10 flex-col justify-center gap-y-5 md:gap-y-10">
                        <h3 ref={ref1} className="text-3xl font-bold md:text-5xl">
                            Bước 1: Cài đặt
                        </h3>
                        <p className="text-xl md:text-3xl">
                            Đặt thiết bị quét Palm ID tại cửa ra vào, thang máy, bãi gửi xe…
                        </p>
                        <img src={'/image 3.webp'} alt="gym" className="w-full rounded-2xl md:hidden lg:w-3/4 xl:w-2/3" />
                    </div>
                    <div className="flex sm:h-screen mb-10 flex-col justify-center gap-y-5 md:gap-y-10">
                        <h3 ref={ref2} className="text-3xl font-bold md:text-5xl">
                            Bước 2: Lấy mẫu
                        </h3>
                        <p className="text-xl md:text-3xl">
                            Người dùng đăng ký mẫu bằng cách đưa bàn tay lên trước thiết bị
                        </p>
                        <img src={'/image 9.webp'} alt="gym" className="w-full rounded-2xl md:hidden lg:w-3/4 xl:w-2/3" />
                    </div>
                    <div className="flex sm:h-screen mb-10 flex-col justify-center gap-y-5 md:gap-y-10">
                        <h3 ref={ref3} className="text-3xl font-bold md:text-5xl">
                            Bước 3: Sử dụng
                        </h3>
                        <p className="text-xl md:text-3xl">
                            Chỉ cần đưa tay để xác nhận mỗi lần muốn mở cửa hoặc sử dụng tiện ích
                        </p>
                        <img src={'/image 10.webp'} alt="gym" className="w-full rounded-2xl md:hidden lg:w-3/4 xl:w-2/3" />
                    </div>
                </div>

                <div className="sticky top-0 hidden h-screen items-center justify-center overflow-hidden pr-20 md:flex">
                    <div className="absolute -right-2/3 -z-[1]  block ">
                        <img src="/Gradient 2.webp" alt="palm" />
                    </div>
                    <motion.div
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
                </div>
            </div>
        </section>
    );
}
