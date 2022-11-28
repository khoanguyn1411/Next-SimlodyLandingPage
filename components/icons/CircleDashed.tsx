import React from "react";
import { IconProps } from "./type";

export const CircleDashed: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 661 661"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="330.5"
        cy="330.5"
        r="330"
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray="20 20"
      />
    </svg>
  );
};
