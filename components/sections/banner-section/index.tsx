import { Button } from "@components/elements";
import classNames from "classnames";
import { memo } from "react";

type IProps = {
  nameBanner: string;
  titleBanner: string;
  description: string;
  showBtnTrial?: boolean;
};
const _BannerSection: React.FC<IProps> = ({
  nameBanner,
  titleBanner,
  description,
  showBtnTrial = false,
}) => {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto my-auto md:py-24 py-8">
        <div className=" flex flex-col md:flex-row justify-center">
          <div
            className={classNames("w-full xl:w-2/3",
            "bg-[url('/product/backgroundProduct.png')] bg-no-repeat bg-[left_0_top_0] bg-[length:200px_auto] md:bg-contain"
            )}
            style={{
              // backgroundImage: "url('/product/backgroundProduct.png')",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
              // backgroundPosition: "left",
              height: "384px",
            }}
          >
            <div
              className={classNames(
                "flex flex-col items-center justify-center space-y-8 py-24"
              )}
            >
              <div className="text-primary-500 text-base font-semibold">
                <span>{nameBanner}</span>
              </div>

              <div className="font-semibold text-2xl lg:text-3xl">
                <h2>{titleBanner}</h2>
              </div>

              <div className="text-gray-400 text-xl">
                <span>{description}</span>
              </div>

              <div className="flex items-center justify-center">
                {showBtnTrial && (
                  <Button text="Get Free Trial Today" type="primary" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BannerSection=memo(_BannerSection)