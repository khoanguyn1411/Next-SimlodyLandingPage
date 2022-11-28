import { SectionContainer } from "@components";
import { FEATURES } from "./constant";

export const FeatureSection: React.FC = () => {
  return (
    <SectionContainer title="Tính năng nổi bật" subtitle="Quản lý tổ chức">
      {FEATURES.map((feature, idx) => (
        <feature.section key={`${idx + feature.id}`} {...feature} />
      ))}
    </SectionContainer>
  );
};
