import { SectionContainer } from "@components";
import { FEATURES } from "./constant";

export const FeatureSection: React.FC = () => {
  return (
    <SectionContainer title="Tính năng nổi bật">
      <div className="flex flex-col gap-6">
        {FEATURES.map((feature, idx) => (
          <feature.section key={`${idx + feature.id}`} {...feature} />
        ))}
      </div>
    </SectionContainer>
  );
};
