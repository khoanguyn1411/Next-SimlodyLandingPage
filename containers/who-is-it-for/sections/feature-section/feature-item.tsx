import classNames from "classnames";

export type FeatureItemProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  color: "purple" | "blue" | "green";
};
export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  color,
}) => {
  const classes = {
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-500",
      hover: "hover:text-purple-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
      hover: "hover:text-green-600",
    },
    blue: {
      bg: "bg-primary-100",
      text: "text-primary-500",
      hover: "hover:text-primary-600",
    },
  };
  return (
    <div className="relative px-14 py-16 rounded-md shadow-lg space-y-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <span>{icon}</span>
      </div>

      <h2 className="text-2xl font-semibold">{title}</h2>
      <span className="text-center flex-1">{description}</span>

      <button
        className={classNames(
          `flex items-center  transition-all duration-300 justify-center text-base font-medium space-x-2`,
          classes[color].text,
          classes[color].hover
        )}
      >
        <span>Read more</span>
        <div
          className={classNames(
            "w-4 h-4 flex items-center justify-center rounded-full",
            classes[color].text,
            classes[color].bg
          )}
        >
          <span style={{ fontSize: "8px" }}>
            <i className="fa fa-arrow-right" />
          </span>
        </div>
      </button>
    </div>
  );
};
