import { Separator } from "./ui/separator";
import { Dot, Mail, MapPinIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="z-50 bg-black text-white">
      {/* mt-20 mb-5 sm:my-10  */}
      <div className="container grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-y-10 mb-14 py-10">
        <div className="w-full col-span-2 flex flex-col items-center justify-center text-center sm:items-start sm:text-start">
          {/* <h3 className="font-bold text-xl mt-4 ">Hub Global</h3> */}
          <h2 className=" my-4 uppercase font-bold text-4xl">
            Ctcp dữ liệu số IHUB
          </h2>
        </div>

        <div className="w-full flex flex-col items-center text-center sm:items-start sm:text-start">
          <h1 className="text-2xl font-bold mb-4">Helpful Links </h1>
          <div className="flex flex-col gap-y-2">
            <Link to={"/academy/courses"} className="text-base">
              Điều khoản & điều kiện
            </Link>
            <Link to={"/clubs"} className="text-base">
              Chính sách bảo mật
            </Link>
            <Link to={"/activities"} className="text-base">
              Hướng dẫn sử dụng
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center sm:items-start">
          <h1 className="text-2xl font-bold mb-4">Liên hệ</h1>
          <div className="space-y-2 flex flex-col items-center gap-[15px] sm:gap-0">
            <span className="w-full text-base flex flex-col gap-[10px] sm:flex-row items-center sm:items-start">
              <MapPinIcon className="min-w-[30px] text-[20px]" />
              <p className="text-center sm:text-justify">
                Tầng 3, Showtime D12 Giảng Võ, Quận Ba Đình, Việt Nam
              </p>
            </span>
            <span className="w-full text-base flex flex-col gap-[10px] sm:flex-row items-center">
              <Phone className="min-w-[30px] text-[20px]" />
              <p>0979 128 351</p>
            </span>
            <span className="w-full text-base flex flex-col gap-[10px] sm:flex-row items-center">
              <Mail className="min-w-[30px] text-[20px]" />{" "}
              <p>longnh@i-hub.vn</p>
            </span>
          </div>
        </div>
      </div>

      <Separator />
      <div className="container flex flex-col gap-[10px] items-center sm:flex-row sm:justify-between py-5">
        <div className="flex gap-x-2">
          <Link to={""} className="">
            Privacy Policy
          </Link>
          <Dot />
          <Link to={""} className="">
            Terms of Service
          </Link>
        </div>
        <p className="text-base">Reflect App, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
