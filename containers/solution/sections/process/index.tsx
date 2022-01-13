import { HeaderSection } from "@containers/solution/components";
import {
  PlanningIcon,
  CollaborationIcon,
  VisualizationIcon,
} from "@containers/solution/icon";
import { CartItem } from "./card-item";

export type ProcessProps={
  title:string,
  description:string,
  icon:JSX.Element
}

type IProps={
  processes:ProcessProps[]
}
export const ProcessSection:React.FC<IProps> = ({processes}) => {

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

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-16">
            {processes.map((process, index) => (
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
