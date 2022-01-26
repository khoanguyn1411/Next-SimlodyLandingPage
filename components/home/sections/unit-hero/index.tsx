import { Button } from "@components/elements";
import Image from "next/image";
import React, { memo } from "react";
import background from "./background.png";

export const UnitHeroSection = memo(() => {
  return (
    <section className="bg-primary-50 flex py-32">
      <div className="overflow-x-hidden container mx-auto my-auto flex flex-col md:flex-row gap-24">
        <div className="flex flex-1 items-center">
          <div className="flex flex-col">
            <div className="title flex flex-col mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 py-4">
                Data to enrich your
              </h3>
              <h3 data-aos="fade-down" className="text-3xl md:text-4xl font-bold text-primary-500">
                platform business
              </h3>
            </div>
            <div className="description flex flex-col mb-8">
              <span className="text-gray-700 font-normal text-xl">
                Help your business grow revenue by building product concept and
                solution
              </span>
            </div>
            <div className="button flex flex-row space-x-4">
              <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500" className="w-40">
                <Button text="Get Started" type="primary" block />
              </div>
              <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500" className="w-40">
                <Button
                  text="Explore more"
                  icon={
                    <span
                      className="ml-2 rounded-full text-primary-500  flex items-center justify-center"
                      style={{ fontSize: "10px" }}
                    >
                      <i className="fa fa-chevron-right" />
                    </span>
                  }
                  block
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-1"
          style={{
            backgroundImage: "url('/home/background.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right",
          }}
        >
          <div  data-aos="fade-left" data-aos-delay="200" data-aos-duration="500" className="p-12">
            <Image src={background} alt="Background" />
          </div>
        </div>
      </div>
    </section>
  );
});

UnitHeroSection.displayName = "UnitHeroSection";
