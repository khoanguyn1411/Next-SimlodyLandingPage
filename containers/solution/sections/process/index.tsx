import { HeaderSection } from "@components";

import { CartItem } from "./card-item";

export type ProcessProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  delay:string
};

type IProps = {
  title: string;
  description: string;
  processes: ProcessProps[];
};
export const ProcessSection: React.FC<IProps> = ({
  title,
  description,
  processes,
}) => {
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
          <HeaderSection title={title} description={description} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {processes.map((process, index) => (
              <CartItem
                key={index}
                title={process.title}
                description={process.description}
                icon={process.icon}
                delay={process.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
