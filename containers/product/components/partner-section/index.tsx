import { Button } from "@components/elements";
import Image from "next/image";
import background from "../images/background.png";
import background2 from "../images/background2.png";
import background3 from "../images/background2.png";

export const PartnerSection = () => {
  return (
    <section
      className="flex items-center justify-center w-full"
      style={{
        background:
          "linear-gradient(96.03deg, #1096F0 1.05%, rgba(29, 65, 123, 0) 180.46%, #466986 180.46%)",
      }}
    >
      <div className="container">
        <div className=" flex flex-1 flex-col lg:flex-row gap-0 lg:gap-32">
          <div className="flex flex-1 justify-center items-center flex-col">
            <div className="flex flex-col items-center justify-center pb-8">
              <h4 className="text-3xl font-semibold text-gray-50 pb-4">
                Become our partner!
              </h4>
              <span className="text-gray-100 text-xl text-center">
                Be our standing to improve your company model and receive our
                consultant to get better...
              </span>
            </div>
            <div className="flex flex-row gap-4">
              <Button text="Subscribe now"type="primary" />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="">
              <div className="flex flex-row gap-4 pb-4">
                <Image src={background2} alt="Background 2" />
                <Image src={background3} alt="Background 3" />
              </div>
              <div className="-mb-2">
                <Image src={background} alt="Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
