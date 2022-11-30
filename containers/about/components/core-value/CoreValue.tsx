import { SectionContainer } from "@components";
import React from "react";
import { CoreValueItems } from "./CoreValueItems";
export interface CoreValue {
  readonly title: string;
  readonly content: string;
}

const CORE_VALUES: readonly CoreValue[] = [
  {
    title: "Đồng lòng - Gắn kết",
    content:
      "Có đam mê và trách nhiệm với công việc, sẵn sàng hỗ trợ đồng đội khi gặp vấn đề.",
  },
  {
    title: "Lắng nghe - Thấu hiểu",
    content: "Tiếp thu ý kiến của nhau, đặt ưu tiên khách hàng lên đầu.",
  },
  {
    title: "Cam kết - Trách nhiệm",
    content:
      "Có khả năng làm nhiều công việc ở các vai trò khác nhau, luôn giữ chữ tín lên hàng đầu.",
  },
  {
    title: "Tìm tòi - Học hỏi",
    content:
      "Sẵn sàng học tập các kiến thức mới, áp dụng và chia sẻ với các thành viên.",
  },
];

export const CoreValue: React.FC = () => {
  return (
    <SectionContainer
      animation="fade-left"
      className="py-28 bg-primary-10"
      title="Giá trị cốt lõi"
    >
      <div className="grid grid-cols-2 gap-y-14 gap-x-40 items-center">
        {CORE_VALUES.map((item, index) => (
          <CoreValueItems key={item.title} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};
