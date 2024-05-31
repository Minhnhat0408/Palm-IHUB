import FormRegister from './form-register';

import hand_contact from '/hand contact.svg';

export default function Contact() {
    return (
        <section className="relative px-6 py-20 sm:px-20">
            <div className="flex flex-col  items-center gap-y-10">
                <h2 className="max-w-[900px]  text-center text-4xl  font-bold !leading-tight   sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    <span className="text-gradient ">An toàn hơn.</span>{" "}
                    <p className="sm:inline text-gradient">Tiện lợi hơn.</p> 
                    <p className="">Tại sao bạn không thử? </p>
                </h2>
                <div className="back-gradient relative flex  w-full items-center justify-center rounded-2xl p-4 text-center  text-lg text-white sm:p-10 sm:text-2xl lg:mt-10 lg:px-20 2xl:px-40 2xl:text-4xl">
                    Miễn phí toàn bộ thiết bị và thi công khi lắp đặt Giải pháp kiểm soát an ninh bằng bàn tay cho các
                    chung cư tại Hà Nội trong tháng 06/2024.
                </div>
                <div className="grid w-full grid-cols-1 gap-x-20 lg:grid-cols-2 ">
                    <div className=" hidden h-[80vh] w-full items-center justify-center overflow-hidden lg:flex">
                        <img src={hand_contact} alt="contact-1  " className=" h-[120vh] opacity-70" />
                        <div className=" bg-glass absolute space-y-3 rounded-2xl p-10 ">
                            <h2 className="text-gradient   text-5xl  font-bold sm:text-6xl lg:text-7xl 2xl:text-8xl">
                                Palm Now
                            </h2>
                            <p className="   whitespace-nowrap  text-3xl font-bold ">Hotline: 0979 128 351</p>
                            <p className="   whitespace-nowrap  text-3xl font-bold ">Email: longnh@i-hub.vn</p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white  p-8 px-6 sm:p-20 " id={'contact'}>
                        <h2 className="text-4xl font-bold text-secondary">Liên hệ với chúng tôi</h2>
                        <FormRegister />
                    </div>
                </div>
            </div>
        </section>
    );
}
