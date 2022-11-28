import { BoxEmail } from "@containers/home/components";
import { FeatureSection } from "./components";
import { Introduction } from "./components/introduction";

export const ProductContainer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <Introduction />
        <FeatureSection />
        <BoxEmail />
      </div>
    </>
  );
};
