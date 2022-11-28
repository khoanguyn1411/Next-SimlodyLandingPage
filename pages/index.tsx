import { LayoutBase } from "@components";
import { HomeContainer } from "@containers";

const HomePage: React.FC = () => {
  return (
    <LayoutBase pageKey="Home" pageTitle="">
      <HomeContainer />
    </LayoutBase>
  );
};

export default HomePage;
