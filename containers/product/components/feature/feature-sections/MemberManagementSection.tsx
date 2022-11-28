import { CircleDashed } from "@components/icons/CircleDashed";
import React from "react";
import { Feature } from "../constant";
import { GeneralSection } from "./GeneralSection";

export const MemberManagementSection: React.FC<Feature> = (props) => {
  return (
    <GeneralSection {...props}>
      <span className="absolute text-primary-800 -left-52 top-10 -z-10">
        <CircleDashed size={520} />
      </span>
    </GeneralSection>
  );
};
