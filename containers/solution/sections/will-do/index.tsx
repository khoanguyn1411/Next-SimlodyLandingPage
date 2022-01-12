import { ITab, Tabs } from "@components/elements";
import { ContentItem } from "@containers/product/components/content-section/content-item";
import { HeaderSection } from "@containers/solution/components";
import {
  CONTENTS_PROBLEMS,
  CONTENTS_PRODUCTS,
} from "@containers/solution/constant";
import { useMemo, useState } from "react";

const TABS: ITab[] = [
  {
    key: "PROBLEMS",
    name: "Discover Problems",
  },
  {
    key: "PRODUCT",
    name: "Development Product",
  },
  {
    key: "VALIDATE",
    name: "Validate & Roll-out",
  },
];

export const WillDo = () => {
  const [activeKey, setActiveKey] = useState("PROBLEMS");
  const handleChangeTab = (key: string) => {
    setActiveKey(key);
  };

  const renderContents = () => {
    switch (activeKey) {
      case "PROBLEMS":
        return CONTENTS_PROBLEMS;

      case "PRODUCT":
        return CONTENTS_PRODUCTS;
      default:
        return CONTENTS_PROBLEMS;
    }
  };

  const contents = renderContents();

  const renderContentSection = useMemo(() => {
    return (
      <>
        {contents.map((content, index) => (
          <ContentItem
            key={index}
            title={content.title}
            description={content.description}
            subDescription={content.subDescription}
            isReverse={content.isReverse}
            srcImg={content.srcImg}
          />
        ))}
      </>
    );
  }, [contents]);
  return (
    <section className="flex items-center justify-center">
      <div className="container space-y-16">
        <HeaderSection
          title="What we will do in this process"
          description="Give our customers our best solutions to make company grown better"
        />

        <div className="flex items-center justify-center">
          <Tabs tabs={TABS} activeKey={activeKey} onChange={handleChangeTab} />
        </div>

        <div className="space-y-24">
          {renderContentSection}
        </div>
      </div>
    </section>
  );
};
