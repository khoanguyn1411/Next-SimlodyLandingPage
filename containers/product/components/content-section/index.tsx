import { ContentItem } from "./content-item";

import { CONTENTS } from "./constant";

export const ContentSection = () => {
  return (
    <section className="flex items-center justify-center px-8 xl:px-0">
      <div className="overflow-x-hidden container space-y-24">
        {CONTENTS.map((content, index) => (
          <ContentItem
            key={index}
            id={content.id}
            title={content.title}
            description={content.description}
            subDescription={content.subDescription}
            position={content.position}
            srcImg={content.srcImg}
          />
        ))}
      </div>
    </section>
  );
};
