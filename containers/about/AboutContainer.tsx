import { BoxEmail } from "@containers/home/components";
import { CoreValue } from "./components/core-value";
import { Culture } from "./components/culture/Culture";
import { Members } from "./components/members";
import { Mission } from "./components/mission";
import { TechStacks } from "./components/tech-stacks";

export const AboutContainer: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Culture />
      <Mission />
      <CoreValue />
      <Members />
      <TechStacks />
      <BoxEmail />
    </div>
  );
};
