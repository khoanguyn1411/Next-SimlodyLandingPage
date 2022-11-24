import React from "react";
import { Collapse as ReactCollapse } from "react-collapse";

type IProps = {
  isOpened: boolean;
  children: JSX.Element;
};

export const Collapse: React.FC<IProps> = ({ isOpened, children }) => {
  const theme = {
    collapse: "ReactCollapse--collapse w-full duration-300",
    content: "ReactCollapse--content",
  };
  return (
    <ReactCollapse theme={theme} isOpened={isOpened}>
      {children}
    </ReactCollapse>
  );
};
