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
    role: "Front-end Developer",
  },
  {
    image: "/images/about-us/members/linh-khanh.jpg",
    name: "Đặng Khánh Linh",
    role: "UI/UX Designer",
  },
  {
    image: "/images/about-us/members/khoa-nguyen.png",
    name: "Nguyễn Hoàng Anh Khoa",
    role: "Front-end Developer",
  },
  {
    image: "/images/about-us/members/bich-tram.jpg",
    name: "Võ Thị Bích Trâm",
    role: "Marketer",
  },
  {
    image: "/images/about-us/members/thuy-quynh.jpeg",
    name: "Nguyễn Trần Thúy Quỳnh",
    role: "Business Analysis",
  },

  {
    image: "/images/about-us/members/thuy-quynh.jpeg",
    name: "Nguyễn Huyền Thương",
    role: "Business Analysis",
  },
];

export const Members: React.FC = () => {
  return (
    <SectionContainer
      animation="fade-right"
      className="py-28"
      title="Đội ngũ chúng tôi"
    >
      <div className="flex-col gap-x-11 gap-y-14 flex">
        <div className="grid grid-cols-4 gap-11">
          {MEMBERS.slice(0, 4).map((item) => (
            <MemberItem key={item.name} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-11 self-center">
          {MEMBERS.slice(4, MEMBERS.length).map((item) => (
            <MemberItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
