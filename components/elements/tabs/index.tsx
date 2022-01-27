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
    <div
      className={classNames(
        "relative",
        "flex items-center font-medium px-4 py-2 my-1 rounded w-full justify-center",
        "outline-none focus:outline-none",
        "transition-colors duration-300",
        "cursor-pointer whitespace-nowrap",
        {
          "hover:bg-gray-200": !isActive,
          "bg-white shadow z-10": isActive,
        }
      )}
      onClick={handleClick}
      role="menuitem"
      tabIndex={0}
      onKeyPress={handleClick}
    >
      {tab.name}
    </div>

  );
};

type ITabsProps = {
  tabs: ITab[];
  activeKey: string;
  onChange: (key: string) => void;
};
export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  activeKey,
  onChange,
}) => {
  return (
    <div
      className={classNames(
        "inline-flex items-center w-full h-12 bg-gray-100 shadow-inner divide-x px-2 divide-gray-200 rounded-md"
      )}
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
  );
};
