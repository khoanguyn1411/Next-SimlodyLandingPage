import { BannerSection, SubscribeSection } from "@components";
import { ClientSection, ProcessSection } from "@containers/solution/sections";
import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  PROCESSES_LARGE,
  PROCESSES_MEDIUM,
  PROCESSES_SMALL,
  SOLUTION_LARGE,
  SOLUTION_MEDIUM,
  SOLUTION_SMALL,
} from "./constant";
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
        return {
          title: "Tungtung empathize your problems",
          description:
            "To meet the needs of the startup business, companies are having these problems",
          processes: PROCESSES_SMALL,
        };

      case "medium":
        return {
          title: "What problems are you facing?",
          description:
            "Business Leaders Weigh-In On Which Roadblocks Present the Greatest Challenge",
          processes: PROCESSES_MEDIUM,
        };

      case "large":
        return {
          title: "More large, more problems you have",
          description:
            "Take a breath and see what are you facing",
          processes: PROCESSES_LARGE,
        };

      default:
        return {
          title: "Tungtung empathize your problems",
          description:
            "To meet the needs of the startup business, companies are having these problems",
          processes: PROCESSES_SMALL,
        };
    }
  }, [type]);

  const solution = useMemo(() => {
    switch (type) {
      case "small":
        return {
          title: "Our solution for you",
          description:
            "To meet the needs of the startup business, you should do the following things:",
          solutions: SOLUTION_SMALL,
        };

        case "medium":
          return {
            title: "Choose the plans you need",
            description:
              "To meet the needs of the startup business, you should do the following things:",
            solutions: SOLUTION_MEDIUM,
          };

          case "large":
            return {
              title: "Productive product",
              description:
                "You will need more platform to make sure you are managing your compy effectively",
              solutions: SOLUTION_LARGE,
            };

      default:
        return {
          title: "Our solution for you",
          description:
            "To meet the needs of the startup business, you should do the following things:",
          solutions: SOLUTION_SMALL,
        };
    }
  }, [type]);

  return (
    <>
        <BannerSection
          nameBanner={contentBanner.nameBanner}
          titleBanner={contentBanner.titleBanner}
          description={contentBanner.description}
        />

        <div className="flex flex-col gap-y-24 pb-24">
          <ProcessSection
            title={process.title}
            description={process.description}
            processes={process.processes}
          />

          <SolutionSection
            title={solution.title}
            description={solution.description}
            solutions={solution.solutions}
          />

          <FeatureSection />

          <ClientSection />

          <PriceSection />

          <SubscribeSection />
        </div>
    </>
  );
};
