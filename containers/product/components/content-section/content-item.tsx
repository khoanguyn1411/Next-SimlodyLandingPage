import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import { LayoutItem } from "./layout-item";

type IProps = {
  title: string;
  description: string;
  subDescription: string[];
  srcImg: any;

  isReverse?: boolean;
};
export const ContentItem: React.FC<IProps> = ({
  title,
  description,
  subDescription = [],
  srcImg = "",
  isReverse,
}) => {
  const renderLayoutFirst = () => {
    if (isReverse) {
      return (
        <div className="flex flex-1 items-center">
          <Image
            className="rounded-md shadow-xl"
            src={srcImg}
            alt="Meeting Image"
          />
        </div>
      );
    }
    return (
      <div className="space-y-8 flex flex-col flex-1 justify-center h-full">
        <h2 className="text-3xl font-semibold">{title}</h2>

        {description && <span className="text-base">{description}</span>}

        <div className="space-y-4">
          {subDescription.map((des, index) => (
            <div key={index} className="space-x-2 flex">
              <span
                className="w-5 h-5 bg-primary-200 text-primary-400 rounded-full flex items-center justify-center "
                style={{ fontSize: "10px" }}
              >
                <i className="fa fa-check" />
              </span>

              <span className="text-base flex-1 text-gray-400">{des}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLayoutSecond = () => {
    if (isReverse) {
      return (
        <div className="space-y-8 flex flex-col flex-1 justify-center h-full">
          <h2 className="text-3xl font-semibold">{title}</h2>

          {description && <span className="text-base">{description}</span>}

          <div className="space-y-4">
            {subDescription.map((des, index) => (
              <div key={index} className="space-x-2 flex">
                <span
                  className="w-5 h-5 bg-primary-200 text-primary-400 rounded-full flex items-center justify-center "
                  style={{ fontSize: "10px" }}
                >
                  <i className="fa fa-check" />
                </span>

                <span className="text-base flex-1 text-gray-400">{des}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-1 items-center">
        <Image
          className="rounded-md shadow-xl"
          src={srcImg}
          alt="Meeting Image"
        />
      </div>
    );
  };

  return (
    <LayoutItem
      isReverse={isReverse}
      layoutFirst={renderLayoutFirst()}
      layoutSecond={renderLayoutSecond()}
    />
  );
};
