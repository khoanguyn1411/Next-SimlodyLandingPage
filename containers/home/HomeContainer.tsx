import {
  BoxEmail,
  FeedbackSection,
  IntroduceSection,
  PartnerSection,
  WhyNeedSymlody,
} from "./components";

export const HomeContainer: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <IntroduceSection />
      <WhyNeedSymlody />
      <PartnerSection />
      <FeedbackSection />
      <BoxEmail />
    </div>
  );
};
