
export default function Advantages() {
  return (
    <section className="py-20 px-20 relative">
      <div className="flex flex-col  gap-y-10">
        <h2 className="2xl:text-7xl  text-6xl ml-40 font-bold w-2/3">
          Thay thế hoàn toàn{" "}
          <span className="text-gradient  inline-flex">
            thẻ từ
          </span>
          trong các tòa nhà với ưu điểm vượt trội
        </h2>
        <div className="relative w-full mt-20 space-y-10">
          <div className="flex gap-x-10">
            <div className="bg-white rounded-2xl flex-1  p-10 space-y-6  ">
              <h3 className="text-gradient font-bold text-4xl">
                An ninh tuyệt đối
              </h3>
              <p className="text-2xl">
                Không thể lấy cắp, giả mạo hay sao chép
              </p>
              <div className="flex justify-center !mt-12">
                <img
                  src="lock.webp"
                  alt="nothinhg"
                  className=" rounded-2xl h-[400px]"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl flex-1  p-10 space-y-6 ">
              <h3 className="text-gradient font-bold text-4xl">
                Tiết kiệm chi phí
              </h3>
              <p className="text-2xl">
                Không mất chi phí làm lại thẻ khi bị mất, hỏng
              </p>
              <div className="flex justify-center !mt-12">
                <img
                  src="treadmill.webp"
                  alt="nothinhg"
                  className=" rounded-2xl h-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div className="bg-white flex-1 rounded-2xl  p-10 space-y-6  ">
              <h3 className="text-gradient font-bold text-4xl">
                Phân quyền linh hoạt
              </h3>
              <p className="text-2xl">
                Chia thang máy giờ cao điểm; cấp quyền tạm thời cho khách…
              </p>
              <div className="flex justify-center !mt-12">
                <img
                  src="elevator.webp"
                  alt="nothinhg"
                  className=" rounded-2xl h-[400px]"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl  p-10 space-y-6 flex-1 ">
              <h3 className="text-gradient font-bold text-4xl">
                Dịch vụ tốt hơn
              </h3>
              <p className="text-2xl">
                Chỉ cho phép cư dân sử dụng các tiện ích tòa nhà
              </p>
              <div className="flex justify-center !mt-12">
                <img
                  src="face.webp"
                  alt="nothinhg"
                  className=" rounded-2xl h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
