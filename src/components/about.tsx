import Reveal from "./animations/reveal";

export default function About() {
  return (
    <section className="py-20 px-20 relative" id='tech'>
      <div className="absolute -top-20  left-0 right-0">
        <img src="/Gradient 2.webp" alt="palm" />
      </div>
      <div className=" grid grid-cols-2 ">
        <Reveal
          hiddenX={-100}
          className="space-y-8 px-20 pb-10 flex flex-col justify-center"
        >
          <h2 className="font-bold text-6xl">Bạn có biết</h2>
          <p className="text-2xl font-semibold">
            Bên dưới lớp da là một mạng lưới mạch máu phức tạp, cấu trúc không
            đổi và duy nhất đối với từng người.
          </p>
          <p className="text-2xl font-semibold">
            Chúng tôi đã phát triển công nghệ{" "}
            <span className="text-gradient font-bold">Palm ID</span> sử dụng tia
            hồng ngoại để chụp lại cấu trúc này, và sử dụng nó như một chiếc
            chìa khóa nhằm giúp bạn xác nhận danh tính trong các hoạt động của
            cuộc sống.
          </p>
        </Reveal>
        <div className="flex justify-center items-center">
          <Reveal scale={0.7}>
            <img src="/hand-orange.webp" alt="about" className="h-[75vh]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
