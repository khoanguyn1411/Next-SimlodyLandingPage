import Image from "next/image";
import { Element } from "react-scroll";

export type ContentItemProps = {
  id?: string;
  title: string;
  description: string;
  subDescription: string[];
  srcImg: any;

  position: "left" | "right";
};
export const ContentItem: React.FC<ContentItemProps> = ({
  id = "",
  title,
  description,
  subDescription = [],
  srcImg = "",
  position,
}) => {
  return (
    <Element name={id} className="element">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        {position === "right" ? (
          <div className="col-span-3 ">
            <div
              data-aos={position === "right" ? "fade-right" : "fade-left"}
              data-aos-offset="200"
              className="flex flex-1 items-center"
            >
              <Image
                className="rounded-md shadow-xl"
                src={srcImg}
                alt="Meeting Image"
              />
            </div>
          </div>
        ) : null}

        <div className="col-span-2">
          <div
            data-aos={position === "right" ? "fade-left" : "fade-right"}
            data-aos-offset="100"
            className="space-y-8 flex flex-col flex-1 justify-center h-full"
          >
            <h2 className="text-3xl font-semibold">{title}</h2>

            {description && <span className="text-base">{description}</span>}

            <div className="space-y-4">
              {subDescription.map((des, index) => (
                <div key={index} className="space-x-4 items-center flex">
                  <span
                    className="w-5 h-5 bg-primary-200 text-primary-400 rounded-full flex items-center justify-center "
                    style={{ fontSize: "8px" }}
                  >
                    <i className="fa fa-check" />
                  </span>

                  <span className="text-base flex-1 text-gray-400">{des}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {position === "left" ? (
          <div
            data-aos={position === "left" ? "fade-left" : "fade-right"}
            data-aos-offset="200"
            className="col-span-3 flex flex-1 items-center"
          >
            <Image
              className="rounded-md shadow-xl"
              src={srcImg}
              alt="Meeting Image"
            />
          </div>
        ) : null}
      </div>
    </Element>
  );
};
