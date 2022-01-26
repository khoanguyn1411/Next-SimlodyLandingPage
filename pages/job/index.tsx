import { LayoutBase } from "@components";
import { JobContainer } from "@containers/job";

const JobPage = () => {
  return (
    <LayoutBase pageKey="Job" pageTitle="Job">
      <JobContainer />
    </LayoutBase>
  );
};
export default JobPage;
