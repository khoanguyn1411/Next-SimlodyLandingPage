import { CircleDashed } from "@components/icons/CircleDashed";
import React from "react";
import { Feature } from "../constant";
import { GeneralSection } from "./GeneralSection";

export const PropertyManagementSection: React.FC<Feature> = (props) => {
  return (
    <GeneralSection {...props}>
      <span className="absolute text-secondary-500 -right-52 top-10 -z-10">
        <CircleDashed size={520} />
      </span>
    </GeneralSection>
  );
};
