import { DashedLine } from "@components/icons/DashedLine";
import classNames from "classnames";
import { ReactNode } from "react";
type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  background?: ReactNode;
  additionalComponent?: ReactNode;
  isDashedSeparate?: boolean;
};
export const SectionContainer: React.FC<Props> = ({
  title,
  subtitle,
  isDashedSeparate = false,
  className,
  children,
  background,
  additionalComponent,
}) => {
  const hasTitleOrSubtitle = title || subtitle;
  return (
    <section className={classNames("py-12", className)}>
      {background && (
        <div className="absolute m-auto max-w-7xl -z-10 top-10 bottom-10 left-0 right-0">
          {background}
        </div>
      )}
      <div
        className="container flex flex-col gap-16"
        data-aos="fade-left"
        data-aos-once
        data-aos-delay="200"
        data-aos-duration="500"
      >
        {additionalComponent}
        {hasTitleOrSubtitle && (
          <div className="flex flex-col gap-5">
            {title && (
              <h1 className="text-4xl text-gray-800 text-center font-medium">
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className="text-2xl text-gray-400 text-center font-medium">
                {subtitle}
              </h2>
            )}
          </div>
        )}
        <div>{children}</div>
        {isDashedSeparate && (
          <span className="w-full text-primary-800 mt-8">
            <DashedLine />
          </span>
        )}
      </div>
    </section>
  );
};
