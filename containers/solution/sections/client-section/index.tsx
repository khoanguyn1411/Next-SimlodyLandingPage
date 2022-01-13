import { HeaderSection } from "@components";
import Image from "next/image";
import client from "../../images/client.png";
export const ClientSection = () => {
  return (
    <>
      <div className="mb-8">
        <HeaderSection
          title="What our clients say"
          description="Always listen and empathize our customers to give they the best solutions"
        />
      </div>
      <section
        className="flex items-center justify-center bg-primary-50 py-12"
        style={{
          backgroundImage: "url('/solution/background-client.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-3 gap-16 items-center">
            <div className="col-span-1 flex items-center justify-center">
              <Image width={280} height={280} src={client} alt="" />
            </div>

            <div className="col-span-2">
              <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-xl lg:text-3xl text-primary-800">
                  Tungtung has been so helpful to my clients running on EOS.
                  Excellent structure for bussines !
                </h2>

                <div className="flex flex-col space-y-2 text-base">
                <span className="font-medium">Mayer Musk</span>
                <span className="text-primary-500">Project Manager, Slack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
