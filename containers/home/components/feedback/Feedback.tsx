import { SectionContainer } from "@components";
import styled from "@emotion/styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FeedbackItem } from "./FeedbackItem";
import { FEEDBACKS } from "./util";

const CustomSplide = styled.div`
  .splide__arrow {
    display: none;
  }
`;

export const FeedbackSection: React.FC = () => {
  return (
    <SectionContainer
      title="Khách hàng nói gì về  Symlody?"
      subtitle="Giải quyết nỗi đau mà người lãnh đạo đang gặp"
      className="pb-32 bg-[url('/images/home/bg_feedback.png')] bg-no-repeat bg-[length:100%_100%]"
    >
      <CustomSplide>
        <Splide options={{ perPage: 1, gap: 30 }}>
          {FEEDBACKS.map((card) => (
            <SplideSlide key={card.id}>
              <FeedbackItem key={card.id} {...card} />
            </SplideSlide>
          ))}
        </Splide>
      </CustomSplide>
    </SectionContainer>
  );
};
