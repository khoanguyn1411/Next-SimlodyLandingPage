import React from "react";

export const WrapperContainer: React.FC = ({ children }) => {
  return <div className="flex flex-col overflow-x-hidden">{children}</div>;
};
