import { useRef } from 'react';
import Reveal from './animations/reveal';

import hand from '/scan.svg';

export default function About() {
    const isMobile = useRef(() => {
        if (window.innerWidth < 1024) {
            return {
                hiddenY: 200,
                initial: 'visible',
                delay: 1.2,
            };
        }
        return {
            hiddenY: 200,
            delay: 1,
        };
    });

    const textRevealStyle = useRef(() => {
        if (window.innerWidth < 1024) {
            return {
                scale: 0.5,
                delay: 1.2,
            };
        }
        return {
            hiddenX: -100,
        };
    });

    return (
        <section
            className="relative h-screen overflow-hidden bg-[#121212] px-6 py-40 sm:px-10  lg:py-20 xl:px-20"
            id="tech"
        >
            {/* <div className="absolute -top-20 left-0 right-0 hidden opacity-80 lg:block">
                <img src="/Gradient 2.webp" alt="palm" />
            </div> */}
            <div className=" grid h-full lg:grid-cols-2  ">
                {textRevealStyle && (
                    <Reveal
                        {...textRevealStyle.current()}
                        // initial='visible'
                        className="z-[10] flex flex-1 flex-col justify-center space-y-8 px-4 pb-10  text-justify text-lg text-white  sm:px-10 sm:text-2xl md:text-left xl:px-20"
                    >
                        <h2 className="text-gradient pb-3 text-center text-4xl font-bold sm:text-5xl  lg:text-6xl 2xl:text-7xl ">
                            Bạn có biết
                        </h2>
                        <p className=" font-semibold">
                            Bên dưới lớp da là một mạng lưới mạch máu phức tạp, cấu trúc không đổi và duy nhất đối với
                            từng người.
                        </p>
                        <p className=" font-semibold">
                            Chúng tôi đã phát triển công nghệ{' '}
                            <span className="text-gradient text-xl font-bold sm:text-3xl ">Palm ID</span> sử dụng tia
                            hồng ngoại để chụp lại cấu trúc này, và sử dụng nó như một chiếc chìa khóa nhằm giúp bạn xác
                            nhận danh tính trong các hoạt động của cuộc sống.
                        </p>
                    </Reveal>
                )}
                <div className="absolute left-0  top-1/2 flex w-full  -translate-y-1/2  justify-center opacity-60  sm:items-center   lg:relative  lg:top-0 lg:translate-y-0">
                    <div className="relative flex w-[40%] items-center sm:w-[30%] lg:w-[38%]  xl:w-[35%] 2xl:w-[30%] ">
                        <div className="aspect-square w-full opacity-65 lg:opacity-100">
                            <div className="box  aspect-square w-full bg-[#121212]"></div>
                        </div>
                        {isMobile && (
                            <Reveal
                                {...isMobile.current()}
                                className="absolute -left-[60%] w-[250%] lg:-left-[80%]  lg:w-[280%] "
                            >
                                <img src={hand} alt="about" className="  object-cover " />
                            </Reveal>
                        )}
                    </div>
                </div>
                {/* <div className="flex w-full items-center justify-center ">
                    <div className="box aspect-square w-1/2 bg-[#121212]"></div>
                </div> */}
            </div>
        </section>
    );
}
