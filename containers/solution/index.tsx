import { BannerSection } from "@components";
import { PartnerSection } from "@containers/product/components";
import Image from "next/image";
import solution from "./images/solution.png";
import { Process } from "./sections";
import { ClientSection } from "./sections/client-section";
import { OurTechnology } from "./sections/our-technology";
import { WillDo } from "./sections/will-do";
export const SolutionContainer = () => {
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 56px - 312px)" }}>
        <BannerSection
          nameBanner="Building"
          titleBanner="Product Concept"
          description="Product Concept"
        />

        <div className="-mt-24 mb-24">
          <Image src={solution} alt="" />
        </div>

        <div className="flex flex-col space-y-24">
          <Process />

          <WillDo />

          <OurTechnology />

          <ClientSection />

          <PartnerSection />
        </div>
      </div>
    </>
  );
};
