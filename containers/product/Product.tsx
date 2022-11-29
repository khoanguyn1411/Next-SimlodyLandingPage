import { WrapperContainer } from "@components";
import { BoxEmail } from "@containers/home/components";
import { FeatureSection } from "./components";
import { Introduction } from "./components/introduction";

export const ProductContainer: React.FC = () => {
  return (
    <WrapperContainer>
      <Introduction />
      <FeatureSection />
      <BoxEmail />
    </WrapperContainer>
  );
};
