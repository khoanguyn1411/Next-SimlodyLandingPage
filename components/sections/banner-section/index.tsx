import { Button } from "@components/elements";

type IProps = {
  nameBanner: string;
  titleBanner: string;
  description: string;
};
export const BannerSection: React.FC<IProps> = ({
  nameBanner,
  titleBanner,
  description,
}) => {
  return (
    <section className="pt-16 pb-32 flex items-center justify-center">
      <div className="container mx-auto my-auto flex flex-col md:flex-row gap-24 justify-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-primary-500 text-base">
            <span>{nameBanner}</span>
          </div>

          <div className="font-semibold text-2xl">
            <h2>{titleBanner}</h2>
          </div>

          <div className="text-gray-400 text-base">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
