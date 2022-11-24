import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  className: string;
  children: ReactNode;
}

export const Section: React.FC<Props> = ({
  className,
  children,
  title,
  subtitle,
}) => {
  return (
    <section className={classNames("container flex-col gap-5", className)}>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
