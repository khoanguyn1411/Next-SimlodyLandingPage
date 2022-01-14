import { BannerSection, SubscribeSection } from "@components";
import { ClientSection, ProcessSection } from "@containers/solution/sections";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { PROCESSES_SMALL } from "./constant";
import { FeatureSection, PriceSection, SolutionSection } from "./sections";

export const WhoIsItForContainer = () => {
  const router = useRouter();
  const type = router.query?.type as string;

  const contentBanner = useMemo(() => {
    switch (type) {
      case "small":
        return {
          nameBanner: "Small Enterprises",
          titleBanner: "GROWN UP YOUR COMPANY",
          description: "For your startup, by ourstartup",
        };
      case "medium":
        return {
          nameBanner: "Medium-sized enterprises",
          titleBanner: "SME",
          description: "TungTung helps small business create big solutions",
        };
      case "large":
        return {
          nameBanner: "Large-sized enterprises",
          titleBanner: "Accelerate enterprise innovation",
          description: "Connect, accelerate, and scale your entire enterprise",
        };
      default:
        return {
          nameBanner: "Small Enterprises",
          titleBanner: "GROWN UP YOUR COMPANY",
          description: "For your startup, by ourstartup",
        };
    }
  }, [type]);

  const process = useMemo(() => {
    switch (type) {
      case "small":
        return PROCESSES_SMALL;

      case "medium":
        return PROCESSES_SMALL;

      case "large":
        return PROCESSES_SMALL;

      default:
        return PROCESSES_SMALL;
    }
  }, [type]);

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 56px - 312px)" }}>
        <BannerSection
          nameBanner={contentBanner.nameBanner}
          titleBanner={contentBanner.titleBanner}
          description={contentBanner.description}
          showBtnTrial
        />

        <div className="flex flex-col space-y-24">
          <ProcessSection
            title="Tungtung empathize your problems"
            description="To meet the needs of the startup business, you should do the following things:"
            processes={process}
          />

          <SolutionSection />

          <FeatureSection />

          <ClientSection />

          <PriceSection />

          <SubscribeSection />
        </div>
      </div>
    </>
  );
};
