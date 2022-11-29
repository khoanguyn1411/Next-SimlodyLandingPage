/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TechStack } from "./TechStacks";

type Props = TechStack;

export const TechStackItem: React.FC<Props> = ({ title, content, images }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 flex-wrap min-h-[100px]">
        {images.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} className="h-10 object-contain" />
        ))}
      </div>
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};
