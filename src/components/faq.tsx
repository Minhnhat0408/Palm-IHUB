import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
export default function FAQ() {
    return (
        <section className="relative h-[800px] overflow-hidden px-6 py-20 sm:h-[960px] sm:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <div className="absolute -left-1/2  -top-1/2  block ">
                <img src="/Gradient 2.webp" alt="palm" />
            </div>
            <div className="relative">
                <div className="z-10 flex flex-col items-center gap-y-4 sm:items-start lg:gap-y-10 ">
                    <h2 className="text-gradient w-1/2 text-center text-4xl font-bold sm:text-left sm:text-5xl lg:text-6xl 2xl:text-7xl">
                        FAQS
                    </h2>
                    <p className="text-2xl font-bold lg:text-4xl">Những câu hỏi thường gặp</p>

                    <Accordion type="single" collapsible className="w-full space-y-2 text-lg sm:text-2xl">
                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-1">
                            <AccordionTrigger>Nhận dạng bằng bàn tay có chính xác không?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Khoa học đã chứng minh mỗi người có một cấu trúc mạch máu duy nhất, vì vậy nhận dạng
                                mạch máu bàn tay đem lại độ chính xác vượt trội so với các công nghệ khác như khuôn mặt,
                                vân tay...
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-2">
                            <AccordionTrigger>Nhận dạng có nhanh không, tiện lợi không?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Thời gian nhận dạng chỉ trong 1 giây. Đây cũng là công nghệ nhận dạng không tiếp xúc,
                                nên người dùng không cần phải chạm vào thiết bị như vân tay
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-3">
                            <AccordionTrigger>Bàn tay bị ướt, bị bẩn có nhận dạng được không?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Công nghệ này sử dụng camera hồng ngoại chiếu xuyên qua lớp da để đọc tĩnh mạch, nên bàn
                                tay ướt hay bẩn vẫn có thể nhận dạng nhanh chóng
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-4">
                            <AccordionTrigger>Triển khai tại các tòa nhà có nhanh không?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Chúng tôi có đội ngũ kĩ sư chuyên nghiệp nên việc khảo sát và lắp đặt chỉ diễn ra trong
                                2-3 ngày.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-5">
                            <AccordionTrigger>Nếu tòa nhà đang dùng thẻ từ thì có lắp được không?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Nếu đã có sẵn thẻ từ thì việc lắp đặt diễn ra rất nhanh và thuận tiện. Chỉ cần thay thế
                                bộ đọc thẻ từ bằng thiết bị PalmID là được, không làm ảnh hưởng tới cấu trúc hạ tầng
                                khác của tòa nhà.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="rounded-xl bg-white px-4 sm:px-10 sm:py-2" value="item-6">
                            <AccordionTrigger>Chi phí và thanh toán như thế nào?</AccordionTrigger>
                            <AccordionContent className='sm:text-xl '>
                                Chúng tôi có chi phí rất hợp lý và cơ chế thanh toán linh hoạt. Khách hàng có thể lựa
                                chọn trả một lần hoặc thanh toán dần theo từng tháng.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
