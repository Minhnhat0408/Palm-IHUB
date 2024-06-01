import { useRef, useState } from 'react';
import SliderMultiple from './animations/slider-multiple';
import KeenSliderChildImage from './keen-slider-child-image';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

export default function Customer() {
    const [openImage, setOpenImage] = useState<string | null>();
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        setOpenImage(null); 
    });
    return (
        <section className="relative sm:px-20 px-6 py-20">
            <div className="flex flex-col  gap-y-10">
                <h2 className="text-4xl font-bold !leading-tight  text-center sm:text-5xl lg:text-6xl  xl:ml-40 xl:w-1/2 xl:text-left 2xl:text-7xl">
                    Các dự án tiêu biểu đã triển khai
                </h2>

                <div className="mt-10 flex w-full justify-center ">
                    <SliderMultiple className="  ">
                        <KeenSliderChildImage
                            src="cmc.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="Tòa CMC Duy Tân"
                        />

                        <KeenSliderChildImage
                            src="d12.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="Tòa Showtime D12 Giảng Võ"
                        />
                        <KeenSliderChildImage
                            src="delco.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="Nhà máy Delco Bắc Ninh"
                        />
                        <KeenSliderChildImage
                            src="UBNDTX.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="UBND Quận Thanh Xuân"
                        />
                        <KeenSliderChildImage
                            src="UBNDTPHN.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="UBND TP Hà Nội"
                        />
                        <KeenSliderChildImage
                            src="SouthAsiaBank.webp"
                            setImage={setOpenImage}
                            className="overflow-hidden rounded-xl"
                            title="Ngân hàng Nam Á"
                        />
                    </SliderMultiple>
                </div>
                {openImage && (
                    <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-black/60">
                        <img src={openImage} alt="openImage" ref={ref} className="h-[80vh] object-cover" />
                    </div>
                )}
            </div>
        </section>
    );
}
