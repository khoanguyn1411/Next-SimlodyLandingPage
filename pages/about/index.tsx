import { LayoutBase } from "@components";
import { AboutContainer } from "@containers";

const ProductPage: React.FC = () => {
  return (
    <LayoutBase pageKey="About" pageTitle="Giới thiệu">
      <AboutContainer />
    </LayoutBase>
  );
};

export default ProductPage;
