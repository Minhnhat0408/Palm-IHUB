import FormRegister from './form-register';

import hand_contact from '/hand contact.svg';

export default function Contact() {
    return (
        <section className="relative sm:px-20 px-4 py-20">
            <div className="flex flex-col  items-center gap-y-10">
                <h2 className="max-w-[900px]  text-center text-4xl font-bold  sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    <span className="text-gradient ">An toàn hơn. Tiện lợi hơn.</span> Tại sao bạn không thử?
                </h2>
                <div className="back-gradient relative flex  w-full items-center justify-center rounded-2xl sm:p-10 p-4  text-center sm:text-2xl text-lg text-white lg:mt-10 lg:px-20 2xl:px-40 2xl:text-4xl">
                    Miễn phí toàn bộ thiết bị và thi công khi lắp đặt Giải pháp kiểm soát an ninh bằng bàn tay cho các
                    chung cư tại Hà Nội trong tháng 06/2024.
                </div>
                <div className="grid w-full grid-cols-1 gap-x-20 lg:grid-cols-2 ">
                    <div className=" h-[80vh] lg:flex hidden w-full items-center justify-center overflow-hidden">
                        <img src={hand_contact} alt="contact-1  " className=" h-[120vh] opacity-70" />
                        <h2 className="text-gradient absolute text-5xl  font-bold sm:text-6xl lg:text-7xl 2xl:text-8xl">
                            Palm Now
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-white  p-8  sm:p-20 " id={'contact'}>
                        <h2 className="text-4xl font-bold text-secondary">Liên hệ với chúng tôi</h2>
                        <FormRegister />
                    </div>
                </div>
            </div>
        </section>
    );
}
