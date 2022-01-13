type IProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};
export const FeatureItem: React.FC<IProps> = ({ title, description, icon }) => {
  return (
    <div className="relative px-14 py-16 rounded-md shadow-lg space-y-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <span>{icon}</span>
      </div>

      <h2 className="text-2xl font-semibold">{title}</h2>
      <span className="text-center flex-1">{description}</span>

      <button className="flex items-center text-primary-500 hover:text-primary-600 transition-all duration-300 justify-center text-base font-medium space-x-2">
        <span>Read more</span>
        <div className="w-4 h-4 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full">
          <span style={{ fontSize: "8px" }}>
            <i className="fa fa-arrow-right" />
          </span>
        </div>
      </button>
    </div>
  );
};
