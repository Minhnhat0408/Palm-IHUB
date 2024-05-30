import Reveal from './animations/reveal';

export default function About() {
    return (
        <section className="relative h-screen overflow-hidden px-10 py-40  lg:py-20 xl:px-20" id="tech">
            <div className="absolute -top-20 left-0 right-0  hidden lg:block">
                <img src="/Gradient 2.webp" alt="palm" />
            </div>
            <div className=" grid lg:grid-cols-2 ">
                <Reveal
                    hiddenX={-100}
                    className="flex flex-col md:text-left text-center justify-center space-y-8 px-4 pb-10  text-lg sm:px-10 sm:text-2xl xl:px-20"
                >
                    <h2 className="2xl:text-7xl  lg:text-6xl sm:text-5xl text-4xl  font-bold ">Bạn có biết</h2>
                    <p className=" font-semibold">
                        Bên dưới lớp da là một mạng lưới mạch máu phức tạp, cấu trúc không đổi và duy nhất đối với từng
                        người.
                    </p>
                    <p className=" font-semibold">
                        Chúng tôi đã phát triển công nghệ <span className="text-gradient font-bold">Palm ID</span> sử
                        dụng tia hồng ngoại để chụp lại cấu trúc này, và sử dụng nó như một chiếc chìa khóa nhằm giúp
                        bạn xác nhận danh tính trong các hoạt động của cuộc sống.
                    </p>
                </Reveal>
                <div className="absolute left-0 top-20 flex  w-full   justify-center   opacity-60  sm:items-center lg:relative">
                    <Reveal scale={0.7}>
                        <img
                            src="/hand-orange.webp"
                            alt="about"
                            className="-left-10 h-[75vh]   object-cover  "
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
