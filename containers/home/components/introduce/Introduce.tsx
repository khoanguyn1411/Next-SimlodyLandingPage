/* eslint-disable @next/next/no-img-element */
import { CurvesArrowIcon, SectionContainer } from "@components";
import { Button } from "@components/elements";
import { APP_EXPERIENCE_NOW_LINK } from "@constants";

interface Props {
  readonly onClickContact: () => void;
}

export const IntroduceSection: React.FC<Props> = ({ onClickContact }) => {
  const handleOpenLink = () => {
    window.open(APP_EXPERIENCE_NOW_LINK, "_blank");
  };
  return (
    <SectionContainer className="py-16 bg-primary-10 flex items-center">
      <div className="grid xl:grid-cols-2 gap-12 grid-cols-1">
        <div className="flex flex-col gap-9 h-full justify-center">
          <h2 className="text-4xl leading-tight font-medium text-gray-800 relative">
            Công cụ <span className="text-primary-800">quản trị tổ chức</span>{" "}
            hiện đại và hiệu quả
            <span
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
              className="text-primary-800 absolute xl:block hidden -right-16 top-14"
            >
              <CurvesArrowIcon size={80} />
            </span>
          </h2>
          <h3 className="text-xl text-gray-600">
            Gia tăng sức khoẻ tổ chức, nâng cao hiệu suất làm việc, và tập trung
            dữ liệu chỉ trong 1 nền tảng.
          </h3>

          <div className="flex gap-7">
            <Button
              text="Trải nghiệm ngay"
              className="w-44"
              type="primary"
              onClick={handleOpenLink}
            />
            <Button text="Liên hệ" className="w-44" onClick={onClickContact} />
          </div>
        </div>
        <div className="xl:flex justify-start hidden">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="500"
            className="w-full"
          >
            <img
              src={"/images/home/introduce.png"}
              alt="Introduction"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
