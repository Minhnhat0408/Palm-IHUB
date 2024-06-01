import { Mail, MapPinIcon, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="z-50 bg-black text-white">
            {/* mt-20 mb-5 sm:my-10  */}
            <div className="container grid grid-cols-1 gap-y-10 py-10 pb-20  sm:grid-cols-2 md:grid-cols-4">
                <div className="flex w-full flex-col items-center justify-center text-center sm:col-span-2 sm:items-start sm:text-start">
                    {/* <h3 className="font-bold text-xl mt-4 ">Hub Global</h3> */}
                    <h2 className=" my-4 text-4xl font-bold uppercase">Ctcp dữ liệu số IHUB</h2>
                </div>

                <div className="flex w-full flex-col items-start ">
                    <h1 className="mb-4 text-2xl font-bold">Bài viết </h1>
                    <div className="flex flex-col gap-y-2">
                        <Link to={'/academy/courses'} className="text-base">
                            Điều khoản & điều kiện
                        </Link>
                        <Link to={'/clubs'} className="text-base">
                            Chính sách bảo mật
                        </Link>
                        <Link to={'/activities'} className="text-base">
                            Hướng dẫn sử dụng
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start">
                    <h1 className="mb-4 text-2xl font-bold">Liên hệ</h1>
                    <div className="flex flex-col gap-[15px]   space-y-2 sm:gap-0">
                        <span className="flex w-full flex-row  items-start gap-[10px] text-base">
                            <MapPinIcon className="min-w-[30px] text-[20px]" />
                            <p className="text-justify">HUB Building, D12A Giảng Võ, Ba Đình, Hà Nội</p>
                        </span>
                        <span className="flex w-full flex-row  items-center gap-[10px] text-base">
                            <Phone className="min-w-[30px] text-[20px]" />
                            <p>0979 128 351</p>
                        </span>
                        <span className="flex w-full flex-row  items-center gap-[10px] text-base">
                            <Mail className="min-w-[30px] text-[20px]" /> <p>longnh@i-hub.vn</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* <Separator />
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
      </div> */}
        </footer>
    );
}
