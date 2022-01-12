import { HeaderSection } from "@containers/solution/components";
import {
  PlanningIcon,
  CollaborationIcon,
  VisualizationIcon,
} from "@containers/solution/icon";
import { CartItem } from "./card-item";

export const Process = () => {
  const PROCESSES = [
    {
      title: "Planning",
      description:
        "Quickly import your data and hit the ground running with our drag-and-drop editor.hh",
      icon: <PlanningIcon />,
    },
    {
      title: "Collaboration",
      description: "Share, discuss and track activity on your roadmap.",
      icon: <CollaborationIcon />,
    },
    {
      title: "Visualization",
      description:
        "Personalize your plan with custom color palettes and flexible export options.",
      icon: <VisualizationIcon />,
    },
  ];
  return (
    <section className="flex items-center justify-center">
      <div
        className="container"
        style={{
          backgroundImage: "url('/solution/vector.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-32">
         <HeaderSection title="What we will do in this process" description="Give our customers our best solutions to make company grown better"/>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROCESSES.map((process, index) => (
              <CartItem
                key={index}
                title={process.title}
                description={process.description}
                icon={process.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
