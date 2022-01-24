import { Button } from "@components/elements";

type IProps = {
    title: string;
    description: string;
  };
  export const HeaderSection: React.FC<IProps> = ({ title, description }) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 px-8">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
  
        <span className="text-xl text-center text-gray-400">{description}</span>

      </div>
    );
  };
  