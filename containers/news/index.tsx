import { BannerSection } from "@components";
import { ITab, Tabs } from "@components/elements";
import { useMemo, useState } from "react";
import { BlogItem, KeepInformationSection } from "./components";

type Props = {
  posts: {
    slug: string;
    frontMatter: {
      title: string;
      description: string;
      thumbnailUrl: string;
      date: string;
      resource?:string
      tag:string
      link:string
    };
  }[];
};

export const TABS_BLOG: ITab[] = [
  {
    key: "ALL",
    name: "All",
  },
  {
    key: "TECHNOLOGY",
    name: "Technology",
  },
  {
    key: "PRODUCT",
    name: "Product",
  },
  {
    key: "BUSINESS",
    name: "Business",
  },
];

export const NewsContainer: React.FC<Props> = ({ posts = [] }) => {
  const [activeKey, setActiveKey] = useState("ALL");

  const handleChangeTab = (key: string) => {
    setActiveKey(key);
  };

  const renderBlogs = useMemo(() => {
    return (
      <div data-aos="fade-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {posts.length > 0 &&
          posts.map((post, index) => <BlogItem key={index} post={post} />)}
      </div>
    );
  }, [posts]);

  return (
    <>
      <BannerSection
        nameBanner="Articles"
        titleBanner="From the blog"
        description="Get weekly articles in your inbox on how to grown your business"
      />

      <div className="container">
        <div className="flex items-center bg-white sticky top-[72px]  h-20 z-20 mb-16 justify-center px-0 lg:px-16 overflow-auto">
          <Tabs
            tabs={TABS_BLOG}
            activeKey={activeKey}
            onChange={handleChangeTab}
          />
        </div>
        {renderBlogs}
      </div>

      <KeepInformationSection />
    </>
  );
};
