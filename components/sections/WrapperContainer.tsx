import classNames from "classnames";
import React, { PropsWithChildren } from "react";
type Props = PropsWithChildren<{ className?: string }>;

export const WrapperContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames("flex flex-col overflow-x-hidden", className)}>
      {children}
    </div>
  );
};
