import { HeaderSection } from "@components";
import { FEATURE_SMALL } from "@containers/who-is-it-for/constant";
import { FeatureItem } from "./feature-item";

export const FeatureSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-16">
          <HeaderSection
            title="Features for you"
            description="Helping businesses to grow revenue through building a simple self-operating model within 2 years with 5 pillars (Sales & Marketing, Finance & Accounting, Operations, Human Resources Team, Organizational Culture)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
            {FEATURE_SMALL.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
