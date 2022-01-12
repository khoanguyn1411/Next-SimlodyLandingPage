import { BannerSection } from "@components";
import { useState } from "react";
import { ITab, TabsSection } from "./components";
import { ActionableSection } from "./components/actionable-section";
import { ContentSection } from "./components/content-section";
import { PartnerSection } from "./components/partner-section";

const TABS: ITab[] = [
  {
    key: "MEETING",
    name: "Meeting",
  },
  {
    key: "MEASURABLE",
    name: "Measurables",
  },
  {
    key: "PROBLEM",
    name: "Big problems",
  },
  {
    key: "TODO",
    name: "Things to do",
  },
  {
    key: "MANAGER",
    name: "Manager",
  },
];

export const ProductContainer = () => {
  const [activeKey, setActiveKey] = useState("MEETING");
  const handleChangeTab = (key: string) => {
    setActiveKey(key);
  };
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 56px - 312px)" }}>
        <BannerSection
          nameBanner="TungTung’s products"
          titleBanner="All-in-one platform you need"
          description="Get ready to scale up your company !"
        />
        <div className="space-y-24">
          <TabsSection
            tabs={TABS}
            activeKey={activeKey}
            onChange={handleChangeTab}
          />

          <ContentSection />

          <ActionableSection />

          <PartnerSection />
        </div>
      </div>
    </>
  );
};
