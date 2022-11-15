import { LayoutBase } from "@components";
import { ProductContainer } from "@containers";

const ProductPage: React.FC = () => {
  return (
    <LayoutBase pageKey="Product" pageTitle="Sản phẩm">
      <ProductContainer />
    </LayoutBase>
  );
};

export default ProductPage;
