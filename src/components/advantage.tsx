export default function Advantages() {
    return (
        <section className="relative px-6 py-20 sm:px-20">
            <div className="flex flex-col  gap-y-10 items-center">
                <h2 className=" text-center text-4xl font-bold  sm:text-5xl lg:text-6xl  xl:w-2/3  2xl:text-7xl">
                    Thay thế hoàn toàn <span className="text-gradient  inline">thẻ từ</span> trong các tòa nhà với {" "}
                    <span className="text-gradient  inline">ưu điểm vượt trội</span>
                </h2>
                <div className="relative grid w-full grid-cols-1 gap-10 md:mt-20 md:grid-cols-2">
                    <div className="flex   flex-col gap-y-6 rounded-2xl bg-white p-10  ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">An ninh tuyệt đối</h3>
                        <p className="text-xl sm:text-2xl">Không thể lấy cắp, giả mạo hay sao chép</p>
                        <div className="mt-auto flex justify-center">
                            <img src="lock.webp" alt="nothinhg" className=" h-[300px] rounded-2xl lg:h-[400px]" />
                        </div>
                    </div>
                    <div className="flex   flex-col gap-y-6 rounded-2xl bg-white p-10 ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Tiết kiệm chi phí</h3>
                        <p className="text-xl sm:text-2xl">Không mất chi phí làm lại thẻ khi bị mất, hỏng</p>
                        <div className="mt-auto flex justify-center ">
                            <img src="treadmill.webp" alt="nothinhg" className=" h-[300px] rounded-2xl lg:h-[400px]" />
                        </div>
                    </div>

                    <div className=" flex  flex-col gap-y-6 rounded-2xl bg-white p-10  ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Phân quyền linh hoạt</h3>
                        <p className="text-xl sm:text-2xl">
                            Chia thang máy giờ cao điểm; cấp quyền tạm thời cho khách…
                        </p>
                        <div className="mt-auto flex justify-center">
                            <img src="elevator.webp" alt="nothinhg" className=" h-[300px] rounded-2xl lg:h-[400px]" />
                        </div>
                    </div>
                    <div className=" flex  flex-col gap-y-6 rounded-2xl bg-white p-10  ">
                        <h3 className="text-gradient text-3xl font-bold sm:text-4xl">Dịch vụ tốt hơn</h3>
                        <p className="text-xl sm:text-2xl">Chỉ cho phép cư dân sử dụng các tiện ích tòa nhà</p>
                        <div className="mt-auto flex justify-center">
                            <img src="face.webp" alt="nothinhg" className=" h-[300px] rounded-2xl lg:h-[400px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
