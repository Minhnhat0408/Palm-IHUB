import LetterAppear from "./animations/letter-appear";

export default function Feature() {
  return (
    <section className="py-20 px-20 relative">
      <div className="flex flex-col items-center gap-y-10">
        <h2 className="2xl:text-7xl  text-6xl font-bold text-center max-w-[800px]">
          Giờ đây, bàn tay bạn chính là{" "}
          <LetterAppear className="text-secondary  inline-flex">
            chìa khoá
          </LetterAppear>
        </h2>
        <h3 className="font-bold text-4xl text-primary ">Với một cái vãy tay, bạn có thể</h3>
        <div className="grid grid-cols-4 gap-10 mt-10 ">
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/gym.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Vào phòng gym</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/thang máy.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Phân tầng thang máy</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/khu vui chơi.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Vào khu vui chơi</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/siêu thị.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Xác nhận member</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/kiosk.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Tủ gửi đồ</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/cửa.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Cửa ra vào</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/bãi xe.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Gửi xe</p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl hover:text-secondary cursor-pointer p-5 rounded-xl duration-500">
            <img src="/tay xoay.webp" alt="gym" className=" rounded-xl" />
            <p className=" text-xl mt-5 font-semibold">Cửa xoay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
