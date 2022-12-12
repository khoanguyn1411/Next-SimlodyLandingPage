/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Member } from "./Members";

type Props = Member;

export const MemberItem: React.FC<Props> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        className="rounded-full w-40 object-cover h-40"
        src={image}
        alt={name}
      />
      <div className="gap-2 flex flex-col">
        <h1 className="font-semibold text-xl text-center">{name}</h1>
        <span className="text-center text-gray-600 text-lg">{role}</span>
      </div>
    </div>
  );
};
