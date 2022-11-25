import { CurvesArrowIcon, SectionContainer } from "@components";
import { Button } from "@components/elements";
import Image from "next/image";
export const IntroduceSection: React.FC = () => {
  return (
    <SectionContainer className="opacity-90 py-28 flex items-center">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-9 h-full justify-center">
          <h2 className="text-5xl leading-tight font-medium text-gray-800 relative">
            Công cụ <span className="text-primary-800">quản trị tổ chức</span>{" "}
            hiện đại và hiệu quả
            <span
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
              className="text-primary-800 absolute -right-16 top-20"
            >
              <CurvesArrowIcon size={80} />
            </span>
          </h2>
          <h3 className="text-xl text-gray-600">
            Gia tăng sức khoẻ tổ chức, nâng cao hiệu suất làm việc, và tập trung
            dữ liệu chỉ trong 1 nền tảng.
          </h3>

          <div className="flex gap-7">
            <Button text="Trải nghiệm ngay" className="w-44" type="primary" />
            <Button text="Liên hệ" className="w-44" />
          </div>
        </div>
        <div className="flex justify-start">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="500"
            className="p-12 w-full h-96 relative"
          >
            <Image
              src={"/images/home/introduce.png"}
              alt="Introduction"
              layout="fill"
              objectFit="contain"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
