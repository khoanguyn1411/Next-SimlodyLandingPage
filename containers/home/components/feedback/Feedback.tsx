import { SectionContainer } from "@components";
import styled from "@emotion/styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FeedbackItem } from "./FeedbackItem";
import { DEFAULT_PER_PAGE, FEEDBACKS } from "./util";

const CustomSplide = styled.div`
  .splide__pagination {
    bottom: -50px;
    gap: 10px;
    padding: 20px;
  }
  .splide__pagination__page {
    width: 30px;
    height: 1.5px;
    border-radius: 0;
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
        <Splide
          options={{
            perPage: DEFAULT_PER_PAGE,
            gap: 30,
            type: FEEDBACKS.length > DEFAULT_PER_PAGE ? "loop" : "slide",
            interval: 1000,
            autoplay: true,
            arrows: false,
          }}
        >
          {FEEDBACKS.map((card) => (
            <SplideSlide className="items-stretch" key={card.id}>
              <FeedbackItem key={card.id} {...card} />
            </SplideSlide>
          ))}
        </Splide>
      </CustomSplide>
    </SectionContainer>
  );
};
