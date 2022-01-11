import { ContentItem } from "./content-item";

import { CONTENTS } from "./constant";

export const ContentSection = () => {
  return (
    <section className="flex items-center justify-center mt-24 mb-24 px-8 xl:px-0">
      <div className="container space-y-24">
        {CONTENTS.map((content, index) => (
          <ContentItem
            key={index}
            title={content.title}
            description={content.description}
            subDescription={content.subDescription}
            isReverse={content.isReverse}
            srcImg={content.srcImg}
          />
        ))}
      </div>
    </section>
  );
};
