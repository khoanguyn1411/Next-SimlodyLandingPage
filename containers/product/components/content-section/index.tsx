import { ContentItem } from "./content-item";

import { CONTENTS } from "./constant";

export const ContentSection = () => {
  return (
    <section className="flex items-center justify-center px-8 xl:px-0">
      <div className="container space-y-24">
        {CONTENTS.map((content, index) => (
          <ContentItem
            key={index}
            id={content.key}
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
