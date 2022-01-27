import { Button } from "@components/elements";
import { EmailIcon } from "@components/home/icons";
import classnames from "classnames";
import Image from "next/image";
import avatar_1 from "../../images/avatar_1.png";
import avatar_2 from "../../images/avatar_2.png";

export const KeepInformationSection = () => {
  return (
    <section
      className={classnames(
        "bg-gray-50 my-24",
        // "bg-[url('/solution/vector_blue.png')] bg-no-repeat bg-left md:bg-contain"
      )}
    >
      <div
        data-aos="fade-up"
        className={classnames(
          "container",
          "bg-[url('/solution/vector_green.png')] bg-no-repeat bg-[right_4rem_bottom_0] bg-[length:0_auto] sm:bg-[length:250px_auto]  lg:bg-[length:400px_auto]"
        )}
      >
        <div className="flex flex-row wrap basis-full justify-center items-center py-16 md:py-0">
          <div className="basis-1/4">
            <Image src={avatar_1} alt="avatar" />
          </div>

          <div className="flex flex-col justify-center basis-1/2 flex-1 space-y-4">
            <h2 className="text-center font-medium text-base lg:text-2xl">
              Keep updated TungTung News
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-1 rounded-xl bg-white shadow-md overflow-hidden items-center px-6 py-4 gap-x-2">
                <EmailIcon />
                <input
                  placeholder="Enter your email"
                  className={classnames(
                    "flex-1 outline-none text-sm font-normal"
                  )}
                />
              </div>
              <Button text="Subscribe now" type="primary" />
            </div>
          </div>

          <div className="basis-1/4">
            <Image src={avatar_2} alt="avatar_2" />
          </div>
        </div>
      </div>
    </section>
  );
};
