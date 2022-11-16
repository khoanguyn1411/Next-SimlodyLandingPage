import { BoxEmail } from "@containers/home/components";
import { FeatureSection } from "./components";

export const ProductContainer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <FeatureSection />
        <BoxEmail />
      </div>
    </>
  );
};
