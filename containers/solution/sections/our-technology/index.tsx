import { HeaderSection } from "@containers/solution/components";
import { TechItem } from "./tech-item";
import data from "../../images/big-data.png";
import framework from "../../images/framework.png";
import manageTools from "../../images/manage-tool.png";

export const OurTechnology = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container space-y-16">
        <HeaderSection
          title="Our Technology"
          description="We build technology silution with the best user expierence, optimized operation for businesses, startups to devolop business model"
        />

        <div className="grid grid-cols-3 gap-8 items-center justify-center">
          <TechItem
            srcImg={data}
            title="Big Data Stack"
            description="Big data storage, data analysis processing. This is one of the stacks used by big companies like linkedIn, uber."
          />

          <TechItem
            srcImg={framework}
            title="Web, Mobile Stack"
            description="Optimize mobile and web application development time, easily build blocks for reuse, and optimize development resources."
          />

          <TechItem
            srcImg={manageTools}
            title="Design & Management"
            description="Agile software development process, fastest design to meet user testing needs, continuous feedback gathering and delivery."
          />
        </div>
      </div>
    </section>
  );
};
