import { HeaderSection } from "@components";
import { SolutionItem } from "./solution-item";
import { PlatformIcon, FlexibleIcon } from "@containers/who-is-it-for/icons";
import problem_1 from "@containers/solution/images/problem_1.png"
import problem_2 from "@containers/solution/images/problem_2.png"

export const SolutionSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container space-y-16">
        <HeaderSection
          title="Our solution for you"
          description="To meet the needs of the startup business, you should do the following things:"
        />

        <div className="space-y-16">
          <SolutionItem
            icon={<PlatformIcon />}
            label="Platform"
            color="orange"
            position="left"
            title="Just one platform"
            description="Whatever your niche, we have the flexibility and customization you need to kickstart your team to turn your idea into a business. And notably, they are on the same platform as the EOS model™"
            srcImg={problem_1}
          />
          <SolutionItem
            icon={<FlexibleIcon />}
            label="Adapt"
            color="green"
            position="right"
            title="Flexible and easy to use"
            description={`Tungtung provide products easy to use and flexible enough to support any type of project.\nIf you have used tools like Jira, Asana, Trello. Surely this product is completely simple for you.`}
            srcImg={problem_2}
         />
        </div>
      </div>
    </section>
  );
};
