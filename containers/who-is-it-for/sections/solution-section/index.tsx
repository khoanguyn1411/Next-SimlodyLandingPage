import { HeaderSection } from "@components";
import { SolutionItem, SolutionProps } from "./solution-item";

type IProps = {
  title: string;
  description: string;
  solutions: SolutionProps[];
};
export const SolutionSection: React.FC<IProps> = ({
  title,
  description,
  solutions,
}) => {
  return (
    <section className="flex items-center justify-center">
      <div className="container space-y-16">
        <HeaderSection
          title={title}
          description={description}
        />

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <SolutionItem
              key={index}
              icon={solution.icon}
              label={solution.label}
              color={solution.color}
              position={solution.position}
              title={solution.title}
              description={solution.description}
              srcImg={solution.srcImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
