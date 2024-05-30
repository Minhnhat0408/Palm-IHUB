import { useRef, useState } from "react";
import SliderMultiple from "./animations/slider-multiple";
import KeenSliderChildImage from "./keen-slider-child-image";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export default function Customer() {
  const [openImage, setOpenImage] = useState<string | null>();
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setOpenImage(null);
  });
  return (
    <section className="py-20 px-20 relative">
      <div className="flex flex-col  gap-y-10">
        <h2 className="2xl:text-7xl  text-6xl ml-40 font-bold w-1/2">
          Các dự án tiêu biểu đã triển khai
        </h2>

        <div className="flex w-full justify-center mt-10 ">
          <SliderMultiple className="  ">
            <KeenSliderChildImage
              src="CMC duy tan.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="Tòa nhà CMC Tower"
            />

            <KeenSliderChildImage
              src="D12 giang vo.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="D12 Showtime Giảng Võ"
            />
            <KeenSliderChildImage
              src="Delco.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="Công Ty Đầu Tư Xây Dựng Delco"
            />
            <KeenSliderChildImage
              src="UBNDTX.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="UBND Quận Thanh Xuân"
            />
            <KeenSliderChildImage
              src="UBNDTPHN.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="UBND TP Hà Nội"
            />
            <KeenSliderChildImage
              src="SouthAsiaBank.webp"
              setImage={setOpenImage}
              className="rounded-xl overflow-hidden"
              title="Ngân hàng Nam Á"
            />
          </SliderMultiple>
        </div>
        {openImage && (
          <div className="bg-black/60 z-[1000] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <img
              src={openImage}
              alt="openImage"
              ref={ref}
              className="h-[80vh] object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
