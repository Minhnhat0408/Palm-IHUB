import FormRegister from "./form-register";

import hand_contact from "/hand contact.svg";

export default function Contact() {
  return (
    <section className="py-20 px-20 relative">
      <div className="flex flex-col  gap-y-10 items-center">
        <h2 className="2xl:text-7xl  text-6xl font-bold text-center max-w-[900px]">
          <span className="text-gradient ">An toàn hơn. Tiện lợi hơn.</span> Tại
          sao bạn không thử?
        </h2>
        <div className="back-gradient text-4xl  text-white relative w-full rounded-2xl flex text-center py-10 px-40 items-center justify-center mt-10">
          Miễn phí toàn bộ thiết bị và thi công khi lắp đặt Giải pháp kiểm soát
          an ninh bằng bàn tay cho các chung cư tại Hà Nội trong tháng 06/2024.
        </div>
        <div className="grid grid-cols-2 w-full gap-x-20">
          <div className="w-full flex items-center h-[80vh] overflow-hidden justify-center">
            <img src={hand_contact} alt="contact-1  " className=" opacity-70 h-[120vh]" />
            <h2 className="absolute text-8xl font-bold text-gradient">
              Palm Now
            </h2>
          </div>

          <div className="p-20 py-10  bg-white rounded-2xl " id={"contact"}>
            <h2 className="text-4xl text-secondary font-bold">
              Liên hệ với chúng tôi
            </h2>
            <FormRegister />
          </div>
        </div>
      </div>
    </section>
  );
}
