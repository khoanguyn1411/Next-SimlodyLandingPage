import classNames from "classnames";
import { useMemo } from "react";

export type ITab = {
  key: string;
  name: string;
};
type ITabProps = {
  tab: ITab;
  activeKey: string;
  index: number;
  onClick: (value: string) => void;
};

const Tab: React.FC<ITabProps> = ({ tab, index, activeKey, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(tab.key);
    }
  };

  const isActive = useMemo(() => {
    return tab.key === activeKey;
  }, [activeKey, tab.key]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={classNames(
          "relative",
          "flex items-center space-x-2 justify-center",
          "outline-none focus:outline-none",
          "transition-colors duration-300",
          "cursor-pointer whitespace-nowrap",
          {
            "text-primary-500": isActive,
            "text-black hover:text-primary-500": !isActive,
          }
        )}
        onClick={handleClick}
        role="menuitem"
        tabIndex={0}
        onKeyPress={handleClick}
      >
        <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
          <span>{index}</span>
        </div>

        <div className="text-base">
          <span>{tab.name}</span>
        </div>
      </div>

      <div
        className={classNames(
          "w-full h-1 rounded-md",
          "outline-none focus:outline-none",
          "transition-colors duration-300",
          "cursor-pointer whitespace-nowrap",
          {
            "bg-primary-500": isActive,
          }
        )}
      ></div>
    </div>
  );
};

type ITabsProps = {
  tabs: ITab[];
  activeKey: string;
  onChange: (key: string) => void;
};
export const TabsSection: React.FC<ITabsProps> = ({
  tabs,
  activeKey,
  onChange,
}) => {
  return (
    <section className=" flex items-center justify-center">
      <div className="container ">
        <div
          className={classNames("flex items-center justify-center space-x-8 lg:space-x-24")}
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={tab.key}
                tab={tab}
                activeKey={activeKey}
                index={index + 1}
                onClick={onChange}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
