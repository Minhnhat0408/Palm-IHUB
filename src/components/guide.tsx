// import LetterAppear from "./animations/letter-appear";

import { useInView, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Guide() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const isInView3 = useInView(ref3)
    const [image,setImage] = useState('')

    const render =  isInView1 ? 1 : isInView2 ? 2 : isInView3 ? 3 : null
    useEffect(() => {
            if(render) {
                if(render === 1) {
                    setImage('/image 3.webp')

                }
                else if(render === 2) {
                    setImage('/image 9.webp')
                }else{
                    setImage('/image 10.webp')
                }

            }
    },[render])
    return (
        <section className="py-20 px-20 relative">
            <h2 className="font-bold 2xl:text-7xl mb-20 text-6xl text-center">Cách thức hoạt động</h2>
            <div className="grid grid-cols-2 relative ">
                <div className="px-32">
                    <div className="h-screen flex flex-col justify-center gap-y-10">
                        <h3 ref={ref1} className="font-bold text-5xl">Bước 1: Cài đặt</h3>
                        <p className="text-3xl">Đặt thiết bị quét Palm ID tại cửa ra vào, thang máy, bãi gửi xe…</p>
                    </div>
                    <div className="h-screen flex flex-col justify-center gap-y-10">
                        <h3 ref={ref2} className="font-bold text-5xl">Bước 2: Lấy mẫu</h3>
                        <p className="text-3xl">Người dùng đăng ký mẫu bằng cách đưa bàn tay lên trước thiết bị</p>
                    </div>
                    <div className="h-screen flex flex-col justify-center gap-y-10">
                        <h3 ref={ref3} className="font-bold text-5xl">Bước 3: Sử dụng</h3>
                        <p className="text-3xl">Chỉ cần đưa tay để xác nhận mỗi lần muốn mở cửa hoặc sử dụng tiện ích</p>
                    </div>

                </div>
                <div className="sticky top-0 flex items-center justify-center h-screen">
              
                         <motion.div key={image} exit={{
                            opacity: 0,
                            scale: 1.5
                        }} animate={{
                            opacity: 1,
                            scale: 1
                        }} initial={{
                            opacity: 0,
                            scale: 0.5
                        }} className="flex justify-center" transition={{
                            duration: 0.7,
                            
                        }} >
                            <img src={image} alt="gym"  className="w-2/3"/>
                        </motion.div>
                     
                 
                </div>

            </div>
        </section>
    );
}
