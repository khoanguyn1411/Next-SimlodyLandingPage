import React from "react";
import { MemberManagementSection } from "./feature-sections/MemberManagementSection";
import { PropertyManagementSection } from "./feature-sections/PropertyManagementSection";
import { TaskManagementSection } from "./feature-sections/TaskManagementSection";

export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly contents: readonly string[];
  readonly image: string;
  readonly isRight: boolean;
  readonly section?: React.FC;
}

export const FEATURES: readonly Feature[] = [
  {
    id: "1",
    title: "Quản lý công việc",
    description:
      "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
    contents: [
      "Tạo nhiệm vụ đơn giản",
      "Kéo thả công việc dễ dàng",
      "Tương tác nhanh chóng",
    ],
    image: "/images/product/task_section.png",
    isRight: true,
    section: TaskManagementSection,
  },
  {
    id: "2",
    title: "Quản lý thành viên",
    description:
      "Thành viên của các phòng ban được quản lí một cách rõ ràng và đơn giản trong Symlody.",
    contents: [
      "Giao diện thân thiện",
      "Thông tin minh bạch",
      "Tương tác nhanh chóng",
    ],
    image: "/images/product/member_section.png",
    isRight: false,
    section: MemberManagementSection,
  },
  {
    id: "3",
    title: "Quản lý tài sản",
    description:
      "Tài sản của các phòng ban được quản lí một cách rõ ràng và đơn giản trong Symlody.",
    contents: [
      "Giao diện thân thiện",
      "Thông tin minh bạch",
      "Tương tác nhanh chóng",
    ],
    image: "/images/product/property_section.png",
    isRight: true,
    section: PropertyManagementSection,
  },
];
