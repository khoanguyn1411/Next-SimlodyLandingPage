import classNames from "classnames";
import { ReactNode } from "react";
type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
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
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl text-gray-800 text-center font-medium">
            {title}
          </h1>
          <h2 className="text-3xl text-gray-400 text-center font-medium">
            {subtitle}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
