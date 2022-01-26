import { BannerSection } from "@components";
import React, { memo } from "react";
import {
  CoreValueSection,
  OurJourneySection,
  OurMissionSection,
  OurTeam,
  ZeroToHeroSection,
} from "./sections";
import Image from "next/image";
import our_team from "./images/our-team.png";

export const AboutUsContainer = memo(() => {
  return (
    <>
      <BannerSection
        titleBanner="All-in-one Culture"
        nameBanner="TungTung's team"
        description="We provide not only product but also spirit's work"
      />

      <div className="relative -mt-16">
        <Image src={our_team} objectFit="contain" alt="Our Team" />

        <div data-aos="fade-in" className="absolute top-0 w-full flex items-center justify-center h-full">
          <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
            Young, Dynamic and Enthusiastic Team
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-y-24 py-24">
        {/* <HeroUnitSection /> */}
        <OurTeam />
        <OurJourneySection />
        <CoreValueSection />
        <OurMissionSection />
        <ZeroToHeroSection />
      </div>
    </>
  );
});

AboutUsContainer.displayName = "AboutUsContainer";
