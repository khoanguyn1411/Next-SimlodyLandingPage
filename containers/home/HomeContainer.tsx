import { WrapperContainer } from "@components";
import {
  BoxEmail,
  FeedbackSection,
  IntroduceSection,
  PartnerSection,
  WhyNeedSymlody,
} from "./components";

export const HomeContainer: React.FC = () => {
  return (
    <WrapperContainer>
      <IntroduceSection />
      <WhyNeedSymlody />
      <PartnerSection />
      <FeedbackSection />
      <BoxEmail />
    </WrapperContainer>
  );
};
