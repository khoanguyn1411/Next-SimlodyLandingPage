import { SectionContainer } from "@components";
import React from "react";
import { MemberItem } from "./MemberItem";

export interface Member {
  readonly image: string;
  readonly name: string;
  readonly role: string;
}

const MEMBERS: readonly Member[] = [
  {
    image: "/images/about-us/members/huy-vu.jpg",
    name: "Vũ Quang Huy",
    role: "Founder",
  },
  {
    image: "/images/about-us/members/nhat-hao.jpeg",
    name: "Huỳnh Nhật Hào",
    role: "Front-end developer",
  },
  {
    image: "/images/about-us/members/linh-khanh.jpg",
    name: "Đặng Khánh Linh",
    role: "UI/UX designer",
  },
  {
    image: "/images/about-us/members/khoa-nguyen.png",
    name: "Nguyễn Hoàng Anh Khoa",
    role: "Front-end developer",
  },
];

export const Members: React.FC = () => {
  return (
    <SectionContainer
      animation="fade-right"
      className="py-28"
      title="Đội ngũ chúng tôi"
    >
      <div className="grid grid-cols-4 gap-11">
        {MEMBERS.map((item) => (
          <MemberItem key={item.name} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};
