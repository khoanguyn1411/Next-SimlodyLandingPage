/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Mission } from "./Mission";

type Props = Mission;

export const MissionItem: React.FC<Props> = ({ title, content, image }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-40">
        <img src={image} className="h-full" alt={title} />
      </div>
      <h2 className="font-bold text-3xl text-secondary-400 text-center">
        {title}
      </h2>
      <p className="text-center text-lg">{content}</p>
    </div>
  );
};
