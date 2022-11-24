import { LayoutBase } from "@components";
import { HomeContainer } from "@containers";

export const HomePage: React.FC = () => {
  return (
    <LayoutBase pageKey="Home" pageTitle="">
      <HomeContainer />
    </LayoutBase>
  );
};
