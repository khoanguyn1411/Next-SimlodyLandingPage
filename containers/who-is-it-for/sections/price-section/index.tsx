import { HeaderSection } from "@components";
import { PRICES } from "@containers/who-is-it-for/constant";
import { PriceItem } from "./price-item";

export const PriceSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container pb-12">
        <div className="flex flex-col space-y-24">
          <HeaderSection
            title="Pricing plans"
            description="Start building for free,then add a site plan to go alive. Unlock for all features"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {PRICES.map((price, index) => (
              <PriceItem
                key={index}
                title={price.title}
                price={price.price}
                supplies={price.supplies}
                titleBtn={price.titleBtn}
                isPopular={price.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
