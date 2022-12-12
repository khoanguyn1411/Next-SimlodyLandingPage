/* eslint-disable @next/next/no-img-element */
import { CurvesArrowIcon, DoubleStars, SectionContainer } from "@components";
import { CircleDashed } from "@components/icons/CircleDashed";
import React from "react";

export const Culture: React.FC = () => {
  return (
    <SectionContainer
      animation="fade-up"
      additionalComponent={
        <span className="-right-20 -top-5 text-primary-800 absolute">
          <CircleDashed size={480} />
        </span>
      }
      className="opacity-90 py-16 flex items-center"
    >
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="col-span-1 flex gap-4 flex-col">
          <h1 className="font-semibold text-4xl">Văn hoá hiện đại</h1>
          <p className="text-lg">
            Với đội ngũ trẻ tuổi, vui nhộn và tinh thần trách nhiệm cao, chúng
            tôi luôn cố gắng phát triển để hoàn thiện bản thân hơn mỗi ngày
          </p>
        </div>

        <div className="col-span-1 relative">
          <img
            src={"/images/about-us/symlody-background.png"}
            alt="Symlody background"
            className="w-full"
          />
          <span className="absolute top-0 -left-14 scale-x-[-1]">
            <DoubleStars size={60} />
          </span>
          <span className="absolute -left-20 text-primary-400 bottom-10">
            <CurvesArrowIcon size={60} />
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};
