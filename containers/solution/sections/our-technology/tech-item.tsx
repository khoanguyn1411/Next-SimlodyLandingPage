import Image from "next/image";

type IProps = {
  title: string;
  description: string;
  srcImg: any;
  delay:string
};
export const TechItem: React.FC<IProps> = ({ title, description, srcImg,delay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="flex flex-col items-center justify-center px-4 h-80">
      <div className="flex items-center flex-1 "
      style={{height:"236px"}}
      >
        <Image src={srcImg} height={236} alt="" objectFit="contain"/>
      </div>

      <div className="flex flex-col space-y-4 ">
        <h2 className=" text-xl font-semibold">{title}</h2>

        <span className="text-gray-400 flex-1 text-base">{description}</span>
      </div>
    </div>
  );
};
