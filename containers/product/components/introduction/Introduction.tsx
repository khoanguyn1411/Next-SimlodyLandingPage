/* eslint-disable @next/next/no-img-element */
import { DoubleStars, SectionContainer } from "@components";
import Image from "next/image";
import React from "react";

export const Introduction: React.FC = () => {
  return (
    <SectionContainer animation="fade-up">
      <div className="flex flex-col gap-8">
        <h1 className="text-center font-semibold text-4xl">
          <span className="text-primary-800">Symlody</span> là gì?
        </h1>
        <p className="text-center text-xl">
          Symlody quản lý tất cả các tác vụ của một tổ chức điển hình:{" "}
          <br className="hidden sm:block" />
          công việc, tài sản , sự kiện, thành viên và mục tiêu phát triển
        </p>
        <div className="relative flex justify-center items-center">
          <span className="absolute top-10 right-0">
            <DoubleStars size={60} />
          </span>
          <div className="relative w-5/6">
            <img
              alt="Introduction Background"
              src="/images/product/background_introduction.png"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
