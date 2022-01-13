import { BannerSection } from "@components";
import { PartnerSection } from "@containers/product/components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import solution from "./images/solution.png";
import solutionSaas from "./images/solution_saas.png";
import solutionOdoo from "./images/solution-odoo.png";

import {
  ProcessSection,
  WillDoSection,
  ClientSection,
  OurTechnology,
} from "./sections";
import {
  PROCESSES_PRODUCT,
  PROCESSES_SASS,
  TABS_ODOO,
  TABS_SASS,
} from "./constant";
import { TABS_PRODUCT } from "./constant";

export const SolutionContainer = () => {
  const router = useRouter();
  const type = router.query?.type as string;

  const contentBanner = useMemo(() => {
    switch (type) {
      case "product":
        return {
          nameBanner: "Building",
          titleBanner: "Product Concept",
          description: "Product Concept",
        };
      case "saas":
        return {
          nameBanner: "Selling",
          titleBanner: "Saas : Software as a service",
          description: "Based-on-one platform",
        };
      case "odoo":
        return {
          nameBanner: "Selling",
          titleBanner: "Odoo: business management software",
          description: "Based-on-one platform",
        };
      default:
        return {
          nameBanner: "Building",
          titleBanner: "Product Concept",
          description: "Product Concept",
        };
    }
  }, [type]);

  const image = useMemo(() => {
    switch (type) {
      case "product":
        return solution;
      case "saas":
        return solutionSaas;
      case "odoo":
        return solutionOdoo;
      default:
        return solution;
    }
  }, [type]);

  const process = useMemo(() => {
    switch (type) {
      case "product":
        return PROCESSES_PRODUCT;

      case "saas":
        return PROCESSES_SASS;

      case "odoo":
        return PROCESSES_PRODUCT;

      default:
        return PROCESSES_PRODUCT;
    }
  }, [type]);

  const willDos = useMemo(() => {
    switch (type) {
      case "product":
        return {
          title: "What we will do in this process",
          description:
            "Give our customers our best solutions to make company grown better",
          tabs: TABS_PRODUCT,
          activeTab: "PROBLEMS",
        };

      case "saas":
        return {
          title: "5 successful Saas model: Your Ultimate Guide",
          description:
            "Give our customers our best solutions to make company grown better",
          tabs: TABS_SASS,
          activeTab: "CENTRALIZING",
        };

      case "odoo":
        return {
          title: "What we will do in this process",
          description:
            "Give our customers our best solutions to make company grown better",
          tabs: TABS_ODOO,
          activeTab: "HUMAN",
        };

      default:
        return {
          title: "What we will do in this process",
          description:
            "Give our customers our best solutions to make company grown better",
          tabs: TABS_PRODUCT,
          activeTab: "PROBLEMS",
        };
    }
  }, [type]);

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 56px - 312px)" }}>
        <BannerSection
          nameBanner={contentBanner.nameBanner}
          titleBanner={contentBanner.titleBanner}
          description={contentBanner.description}
        />

        <div className="-mt-24 mb-24">
          <Image src={image} alt="" />
        </div>

        <div className="flex flex-col space-y-24">
          <ProcessSection
            title="Why we should choose this process"
            description="Give our customers our best solutions to make company grown better"
            processes={process}
          />

          <WillDoSection
            title={willDos.title}
            description={willDos.description}
            tabs={willDos.tabs}
            activeTab={willDos.activeTab}
          />

          <OurTechnology />

          <ClientSection />

          <PartnerSection />
        </div>
      </div>
    </>
  );
};
