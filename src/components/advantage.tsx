export default function Advantages() {
    return (
        <section className="relative px-6 py-20 sm:px-20">
            <div className="flex flex-col  items-center gap-y-10">
                <h2 className=" text-center text-4xl font-bold !leading-[1.1] sm:text-5xl lg:text-6xl  xl:w-2/3  2xl:text-7xl">
                    Thay thế hoàn toàn <span className="text-gradient  inline">thẻ từ</span> trong các tòa nhà, với ưu
                    điểm vượt trội
                </h2>
                <div className="relative grid w-full grid-cols-1 gap-10 md:mt-20 md:grid-cols-2">
                    <div className="flex   flex-col gap-y-6 rounded-2xl bg-white p-10 xl:px-20 ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">An ninh tuyệt đối</h3>
                        <p className="text-xl sm:text-2xl">
                            Tĩnh mạch bàn tay không thể bị lấy cắp, làm giả hay sao chép như thẻ từ
                        </p>
                        <div className="mt-auto flex justify-center">
                            <img
                                src="advan1.webp"
                                alt="nothinhg"
                                className=" h-[300px] w-full mix-blend-luminosity rounded-2xl object-cover lg:h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="flex   flex-col gap-y-6 rounded-2xl bg-white p-10 xl:px-20">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Tiết kiệm chi phí</h3>
                        <p className="text-xl sm:text-2xl">
                            Không mất thêm các chi phí trong quá trình sử dụng như thẻ từ hay phải làm lại do bị mất,
                            hỏng
                        </p>
                        <div className="mt-auto flex justify-center ">
                            <img
                                src="advan.webp"
                                alt="nothinhg"
                                className=" h-[300px] w-full mix-blend-luminosity rounded-2xl object-cover lg:h-[400px]"
                            />
                        </div>
                    </div>

                    <div className=" flex  flex-col gap-y-6 rounded-2xl bg-white p-10 xl:px-20 ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Phân quyền linh hoạt</h3>
                        <p className="text-xl sm:text-2xl">
                            Chủ động phân chia thang máy vào giờ cao điểm; cấp quyền ra vào tạm thời cho khách tới chơi
                        </p>
                        <div className="mt-auto flex justify-center">
                            <img
                                src="advan2.webp"
                                alt="nothinhg"
                                className=" h-[300px] w-full mix-blend-luminosity rounded-2xl object-cover lg:h-[400px]"
                            />
                        </div>
                    </div>
                    <div className=" flex  flex-col gap-y-6 rounded-2xl bg-white p-10 xl:px-20 ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Dịch vụ tốt hơn</h3>
                        <p className="text-xl sm:text-2xl">
                            Chỉ cho phép cư dân sử dụng các tiện ích tòa nhà, tránh thất thoát và quá tải bởi người lạ
                        </p>
                        <div className="mt-auto flex justify-center">
                            <img
                                src="face.webp"
                                alt="nothinhg"
                                className=" h-[300px] w-full mix-blend-luminosity rounded-2xl object-cover lg:h-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
