import { CoreValue } from "./components/core-value";
import { Culture } from "./components/culture/Culture";
import { Mission } from "./components/mission";

export const AboutContainer: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Culture />
      <Mission />
      <CoreValue />
    </div>
  );
};
