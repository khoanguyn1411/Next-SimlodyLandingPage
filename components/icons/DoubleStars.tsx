import React from "react";
import { IconProps } from "./type";

export const DoubleStars: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 85 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58 39C38.8 34.2 32 17.6667 31 10C25.4 32.4 8 38.6667 0 39C20.8 42.2 29.3333 59 31 67C31 52.6 49 42.3333 58 39Z"
        fill="#FFCD78"
      />
      <path
        d="M84.5263 15.2632C74.4211 12.7368 70.8421 4.03509 70.3158 0C67.3684 11.7895 58.2105 15.0877 54 15.2632C64.9474 16.9474 69.4386 25.7895 70.3158 30C70.3158 22.4211 79.7895 17.0175 84.5263 15.2632Z"
        fill="#FFCD78"
      />
    </svg>
  );
};
