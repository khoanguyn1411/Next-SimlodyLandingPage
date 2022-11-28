import { SectionContainer } from "@components";
import { WhyNeedSymlodyItem } from "./WhyNeedSymlodyItem";

export const WhyNeedSymlody: React.FC = () => {
  const ITEMS = [
    {
      src: "/images/home/need_symlody_1.png",
      content: "Tập trung vào hiệu suất công việc",
    },
    {
      src: "/images/home/need_symlody_2.png",
      content: "Liên kết giữa thành viên và tổ chức",
    },
    {
      src: "/images/home/need_symlody_3.png",
      content: "Xác định mục tiêu cho đội nhóm",
    },
    {
      src: "/images/home/need_symlody_4.png",
      content: "Dữ liệu tập trung tại 1 nơi",
    },
  ];

  return (
    <SectionContainer
      isDashedSeparate
      title="Tại sao Leader cần Symlody?"
      subtitle="Công cụ để xây dựng tổ chức năng suất và hiệu quả"
    >
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-14">
          {ITEMS.map((item, idx) => (
            <WhyNeedSymlodyItem
              key={idx}
              src={item.src}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
