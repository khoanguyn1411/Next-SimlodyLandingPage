import { LayoutBase } from "@components";
import { ProductContainer } from "@containers";

export const ProductPage: React.FC = () => {
  return (
    <LayoutBase pageKey="Product" pageTitle="Sản phẩm">
      <ProductContainer />
    </LayoutBase>
  );
};
