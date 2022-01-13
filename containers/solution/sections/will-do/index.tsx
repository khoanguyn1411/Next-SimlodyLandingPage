import { ITab, Tabs } from "@components/elements";
import { ContentItem } from "@containers/product/components/content-section/content-item";
import { HeaderSection } from "@containers/solution/components";
import {
  CONTENTS_ADAPT,
  CONTENTS_CENTRALIZING,
  CONTENTS_INTEGRATING,
  CONTENTS_PROBLEMS,
  CONTENTS_PRODUCTS,
  CONTENTS_REVOLUTION,
  CONTENTS_STAFFING,
  CONTENTS_VALIDATE,
} from "@containers/solution/constant";
import { useEffect, useMemo, useState } from "react";

type IProps = {
  title: string;
  description: string;
  tabs: ITab[];
  activeTab: string;
};
export const WillDoSection: React.FC<IProps> = ({
  title,
  description,
  tabs,
  activeTab,
}) => {
  console.log(activeTab);

  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    setActiveKey(activeTab);
  }, [activeTab]);

  const handleChangeTab = (key: string) => {
    setActiveKey(key);
  };
  const renderContents = () => {
    switch (activeKey) {
      // content page product concept
      case "PROBLEMS":
        return CONTENTS_PROBLEMS;

      case "PRODUCT":
        return CONTENTS_PRODUCTS;

      case "VALIDATE":
        return CONTENTS_VALIDATE;

      //content page saas chưa add hình
      case "CENTRALIZING":
        return CONTENTS_CENTRALIZING;
      case "INTEGRATING":
        return CONTENTS_INTEGRATING;
      case "REVOLUTION":
        return CONTENTS_REVOLUTION;
      case "ADAPT":
        return CONTENTS_ADAPT;
      case "STAFFING":
        return CONTENTS_STAFFING;
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
        <HeaderSection title={title} description={description} />

        <div className="flex items-center justify-center">
          <Tabs tabs={tabs} activeKey={activeKey} onChange={handleChangeTab} />
        </div>

        <div className="space-y-24">{renderContentSection}</div>
      </div>
    </section>
  );
};
