import classnames from "classnames";
import Image from "next/image";

export type SolutionProps = {
  position: "left" | "right";
  title: string;
  description: string;
  color: "orange" | "green" | "purple" | "blue";
  label: string;
  icon: JSX.Element;
  srcImg: any;
};
export const SolutionItem: React.FC<SolutionProps> = ({
  position,
  title,
  description,
  color,
  label,
  icon,
  srcImg,
}) => {
  const classes = {
    orange: {
      bg: "bg-orange-400",
      text: "text-orange-400",
    },
    green: {
      bg: "bg-green-400",
      text: "text-green-400",
    },
    blue: {
      bg: "bg-blue-400",
      text: "text-blue-400",
    },
    purple: {
      bg: "bg-purple-400",
      text: "text-purple-400",
    },
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
      {position === "right" ? (
        <div className="col-span-3">
          <Image src={srcImg} alt="background" />
        </div>
      ) : null}

      <div className="col-span-2 items-center justify-center flex">
        <div className="flex flex-1 flex-col py-4">
          <div className="flex flex-col pb-4">
            <div className="pb-4">
              <div
                className={classnames(
                  "flex items-center justify-center",
                  "w-10 h-10",
                  "rounded-xl",
                  classes[color].bg,
                  classes[color].text
                )}
              >
                {icon}
              </div>
            </div>
            <label
              className={classnames(
                "text-base font-semibold",
                classes[color].text
              )}
            >
              {label}
            </label>
          </div>
          <div className="flex flex-col pb-4">
            <h4 className="text-gray-800 text-3xl font-semibold pb-4">
              {title}
            </h4>
            <span
              className="text-gray-500 text-base font-normal"
              dangerouslySetInnerHTML={{
                __html: description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>
      </div>

      {position === "left" ? (
        <div className="col-span-3">
          <Image src={srcImg} alt="background" />
        </div>
      ) : null}
    </div>
  );
};
