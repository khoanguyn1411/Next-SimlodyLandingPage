/* eslint-disable @next/next/no-img-element */
import { ColItem } from "./col-item";
import { description, title } from "./constant";
import actionable from "../images/test.jpg";
import Image from "next/image";

export const ActionableSection = () => {
  return (
    <section
      className="flex items-center justify-center mt-24 mb-24"
      style={{
        background:
          "linear-gradient(96.03deg, #1096F0 1.05%, rgba(29, 65, 123, 0) 180.46%, #466986 180.46%)",
      }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-1 gap-0 lg:gap-32">
          <div className="text-base text-white flex-1 flex items-center justify-center">
            <div className="flex flex-col justify-center space-y-16">
              <div className="flex flex-col space-y-4">
                <h2 className=" text-3xl font-semibold">{title}</h2>

                <span>{description}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ColItem
                  title="8K+"
                  description="Companies use our products from over the world"
                />
                <ColItem
                  title="25K+"
                  description="Countries have our customer"
                />
                <ColItem
                  title="98%"
                  description="Customers satisfaction with our products"
                />
                <ColItem
                  title="10k+"
                  description="Issues resolved by 3 years"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="">
              <div className="flex flex-row w-full">
                <Image
                  src={actionable}
                  alt="Background 2"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
