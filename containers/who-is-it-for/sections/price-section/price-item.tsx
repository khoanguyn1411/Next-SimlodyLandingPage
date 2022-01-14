import { Button } from "@components/elements";
import classNames from "classnames";

type IProps = {
  title: string;
  price: string;
  supplies: string[];
  titleBtn: string;
  isPopular: boolean;
};
export const PriceItem: React.FC<IProps> = ({
  title,
  price,
  supplies = [],
  titleBtn,
  isPopular = false,
}) => {
  return (
    <div
      className={classNames(
        "relative border rounded-xl flex flex-col justify-between items-center px-6 py-6",
        {
          "shadow-md": isPopular,
        }
      )}
    >
      {isPopular && (
        <div className="bg-primary-500 rounded-md px-3 py-1 absolute top-0 left-0 -mt-4 ml-4">
          <span className="text-white font-medium">Most Popular</span>
        </div>
      )}
      <div className="flex flex-col flex-1 space-y-4 mb-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-base font-medium">{title}</h2>

          <span className="text-3xl font-semibold">{price}</span>

          <span className="text-base text-gray-400">
            All the basics for starting a new business
          </span>
        </div>

        <div className="flex flex-col space-y-2 flex-1">
          {supplies.map((supply, index) => (
            <div key={index} className="flex space-x-2">
              <div className="w-4 h-4 flex items-center justify-center bg-primary-400 rounded-sm">
                <span className="text-white" style={{ fontSize: "8px" }}>
                  <i className="fa fa-check" />
                </span>
              </div>

              <span className="text-gray-400">{supply}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <Button
          block
          text={titleBtn}
          type={isPopular ? "primary" : "default"}
        />
      </div>
    </div>
  );
};
