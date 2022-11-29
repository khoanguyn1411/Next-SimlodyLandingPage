import React from "react";
import { CoreValue } from "./CoreValue";

type Props = CoreValue & { readonly index: number };

export const CoreValueItems: React.FC<Props> = ({ title, content, index }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-primary-800 text-2xl">
        {index + 1}/ {title}
      </h1>
      <p className="text-xl">{content}</p>
    </div>
  );
};
