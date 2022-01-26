import { Button } from "@components/elements";
import React, { memo } from "react";

export const OurMissionSection = memo(() => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className=' py-24 bg-[url("/images/about-us/mission-background.png")] bg-no-repeat bg-[length:100%_auto]'>
          <div className="flex flex-col pb-20">
            <div className="flex flex-col md:max-w-3xl mx-auto">
              <h4 className="text-gray-800 text-3xl font-semibold pb-4 text-center">
                Our mission
              </h4>
              <span className="text-xl text-gray-500 font-normal text-center">
                Our motivation is to build technology solutions with the best
                user experience, optimized for operation, for businesses,
                startups to develop business models.
              </span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Button text="Contact Us" type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
});

OurMissionSection.displayName = "OurMissionSection";
