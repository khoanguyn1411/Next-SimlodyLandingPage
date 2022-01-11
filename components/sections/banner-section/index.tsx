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
    <section className="mt-24 mb-32 flex items-center justify-center">
      <div
        className="container mx-auto my-auto"
       
      >
        <div className=" flex flex-col md:flex-row gap-24 justify-center"
        
        >
          <div className="flex flex-col items-center justify-center space-y-8 py-24 px-48"
           style={{
            backgroundImage: "url('/product/backgroundProduct.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left",
          }}
          >
            <div className="text-primary-500 text-base font-semibold">
              <span>{nameBanner}</span>
            </div>

            <div className="font-semibold text-2xl lg:text-4xl">
              <h2>{titleBanner}</h2>
            </div>

            <div className="text-gray-400 text-xl">
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
