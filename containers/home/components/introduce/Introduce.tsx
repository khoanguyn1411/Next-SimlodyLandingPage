import { Button } from "@components/elements";
import Image from "next/image";
export const IntroduceSection: React.FC = () => {
  return (
    <section
      className="py-12 opacity-75"
      style={{
        background:
          "radial-gradient(98.54% 152.74% at 98.54% 83.59%, rgba(253, 208, 211, 0.15) 0%, rgba(208, 234, 255, 0.15) 100%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col">
              <h2 className="text-4xl font-semibold text-gray-800">
                Công cụ{" "}
                <span className="text-primary-800">quản trị tổ chức</span> hiện
                đại và hiệu quả
              </h2>

              <h3 className="text-xl text-gray-400 mt-8">
                Gia tăng sức khoẻ tổ chức, nâng cao hiệu suất làm việc, và tập
                trung dữ liệu chỉ trong 1 nền tảng.
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Button text="Trải nghiệm ngay" type="primary" />
                <Button text="Liên hệ" />
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
              className="p-12 w-full h-96"
            >
              <Image
                src={"/images/home/introduce.png"}
                alt="introduce"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
