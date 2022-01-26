
import { InterestedSection } from "./sections";
import { JoinTeamSection } from "./sections/join-team";

export const JobContainer = () => {
  return (
    <div className="flex flex-col space-y-24 items-center justify-center py-24">
      <JoinTeamSection/>

      <InterestedSection/>
    </div>
  );
};
