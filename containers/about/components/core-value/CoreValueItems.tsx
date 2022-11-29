import React from "react";
import { CoreValue } from "./CoreValue";

type Props = CoreValue;

export const CoreValueItems: React.FC<Props> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
