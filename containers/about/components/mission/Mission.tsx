import { SectionContainer } from "@components";
import React from "react";
import { MissionItem } from "./MissionItem";

export interface Mission {
  readonly image: string;
  readonly title: string;
  readonly content: string;
}

const MISSIONS: readonly Mission[] = [
  {
    image: "/images/about-us/mission-target.png",
    title: "Sứ mệnh",
    content:
      "Tạo ra các sản phẩm phần mềm mang tính hiện đại, dễ tiếp cận đến người dùng, và mang lại giá trị hữu hình cho cộng đồng",
  },
  {
    image: "/images/about-us/mission-mountain.png",
    title: "Tầm nhìn",
    content:
      "Trở thành đội nhóm đầu tiên của UEL giúp các bạn sinh viên có thể tự do sáng tạo và vận dụng kiến thức chuyên ngành",
  },
];
export const Mission: React.FC = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-2 gap-24 items-center">
        {MISSIONS.map((item) => (
          <MissionItem key={item.title} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};
