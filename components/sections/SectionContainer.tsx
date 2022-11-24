import classNames from "classnames";
import { ReactNode } from "react";
type Props = {
  title?: string;
  subtitle?: string;
  className: string;
  children: ReactNode;
};
export const SectionContainer: React.FC<Props> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  return (
    <section className={classNames("py-12", className)}>
      <div className="container flex flex-col gap-6">
        <div className="gap-3">
          <h1 className="text-2xl text-gray-800 text-center font-medium">
            {title}
          </h1>
          <h2 className="text-lg text-gray-800 text-center font-medium">
            {subtitle}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
