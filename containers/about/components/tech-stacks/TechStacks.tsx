import { SectionContainer } from "@components";
import React from "react";
import { TechStackItem } from "./TechStackItem";

interface Image {
  readonly src: string;
  readonly alt: string;
}

export interface TechStack {
  readonly images: readonly Image[];
  readonly title: string;
  readonly content: string;
}

const TECH_STACK: readonly TechStack[] = [
  {
    title: "Big Data Stack",
    content:
      "Kho chứa dữ liệu lớn, quá trình phân tích dữ liệu. Được dùng bởi các ông lớn như LinkedIn, Uber.",
    images: [
      { src: "/images/about-us/tech-stack/elastic.svg", alt: "Elastic" },
    ],
  },
  {
    title: "Webapp Stack",
    content:
      "Tối ưu hóa thời gian phát triển website, dễ dàng build blocks để tái sử dụng.",
    images: [
      { src: "/images/about-us/tech-stack/react.png", alt: "React" },
      { src: "/images/about-us/tech-stack/python.png", alt: "Python" },
    ],
  },
  {
    title: "Design & Management",
    content:
      "Triển khai quy trình phát triển ứng dụng Agile, thiết kế giao diện người dùng đơn giản, dễ hiểu.",
    images: [
      { src: "/images/about-us/tech-stack/github.png", alt: "GitHub" },
      { src: "/images/about-us/tech-stack/jira.png", alt: "Jira" },
      { src: "/images/about-us/tech-stack/figma.png", alt: "Figma" },
    ],
  },
];

export const TechStacks: React.FC = () => {
  return (
    <SectionContainer
      animation="fade-up"
      className="bg-primary-10"
      title="Công nghệ sử dụng"
    >
      <div className="grid grid-cols-3 gap-24 items-stretch">
        {TECH_STACK.map((item) => (
          <TechStackItem key={item.title} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};
