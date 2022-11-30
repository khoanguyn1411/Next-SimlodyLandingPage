import { WrapperContainer } from "@components";
import { useRef } from "react";
import {
  BoxEmail,
  FeedbackSection,
  IntroduceSection,
  PartnerSection,
  WhyNeedSymlody,
} from "./components";

export const HomeContainer: React.FC = () => {
  const boxEmailRef = useRef<HTMLDivElement>();
  const handleClickContact = () => {
    if (boxEmailRef?.current) {
      boxEmailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <WrapperContainer>
      <IntroduceSection onClickContact={handleClickContact} />
      <WhyNeedSymlody />
      <PartnerSection />
      <FeedbackSection />
      <div ref={boxEmailRef}>
        <BoxEmail />
      </div>
    </WrapperContainer>
  );
};
