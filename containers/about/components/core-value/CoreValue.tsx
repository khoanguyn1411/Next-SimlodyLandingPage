import { SectionContainer } from "@components";
import React from "react";
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
    <SectionContainer>
      <div className="grid grid-cols-2 gap-24 items-center">
        {CORE_VALUES.map((item) => (
          <CoreValue key={item.title} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};
