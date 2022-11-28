import { BackgroundFlower } from "@components";
import React from "react";
import { Feature } from "../constant";
import { GeneralSection } from "./GeneralSection";

export const TaskManagementSection: React.FC<Feature> = (props) => {
  return (
    <GeneralSection {...props}>
      <span className="absolute -right-10 -top-14">
        <BackgroundFlower />
      </span>
    </GeneralSection>
  );
};
