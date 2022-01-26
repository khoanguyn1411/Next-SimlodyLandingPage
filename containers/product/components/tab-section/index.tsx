import classNames from "classnames";
import { useMemo } from "react";
import { Link } from "react-scroll";

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
    <Link
      to={`${tab.key}`}
      smooth={true}
      spy={true}
      activeClass="active text-primary-500"
      duration={500}
      offset={-150}
      className="flex items-center transition"
    >
      <div className="flex flex-col items-center space-y-4">
        <div
          className={classNames(
            "relative h-20",
            "flex items-center space-x-2 justify-center",
            "outline-none focus:outline-none",
            "transition-colors duration-300",
            "cursor-pointer whitespace-nowrap",
            {
              "text-primary-500 border-b-2 border-primary-500": isActive,
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

        {/* <div
          className={classNames(
            "w-full h-1 rounded-md",
            "outline-none focus:outline-none",
            "transition-colors duration-300",
            "cursor-pointer whitespace-nowrap",
            {
              "bg-primary-500": isActive,
            }
          )}
        ></div> */}
      </div>
    </Link>
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
    <section className="flex items-center justify-center sticky z-20 bg-white h-20 border-b"
    style={{top:"72px"}}
    >
      <div className="container overflow-auto">
        <div
          className={classNames(
            "flex items-center justify-center space-x-8 lg:space-x-24"
          )}
          style={{ minWidth: "768px" }}
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
