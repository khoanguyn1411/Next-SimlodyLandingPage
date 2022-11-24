import { LayoutBase } from "@components";
import { AboutContainer } from "@containers";

export const AboutPage: React.FC = () => {
  return (
    <LayoutBase pageKey="About" pageTitle="Giới thiệu">
      <AboutContainer />
    </LayoutBase>
  );
};
