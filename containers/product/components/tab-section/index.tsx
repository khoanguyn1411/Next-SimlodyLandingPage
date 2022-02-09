import classNames from "classnames";
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

const Tab: React.FC<ITabProps> = ({ tab, index, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(tab.key);
    }
  };

  return (
    <Link
      to={`${tab.key}`}
      smooth={true}
      spy={true}
      activeClass="active text-primary-500 expand-border-active"
      offset={-150}
      className={classNames("flex items-center transition ease-in-out px-4 xl:px-12 expand-border")}
    >
      <div className="flex flex-col items-center space-y-4">
        <div
          className={classNames(
            "relative h-20",
            "flex items-center space-x-2 justify-center",
            "outline-none focus:outline-none",
            "transition-colors duration-300",
            "cursor-pointer whitespace-nowrap",

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
    <section className="flex items-center justify-center sticky top-[72px] z-20 bg-white h-20 border-b"
    >
      <div className="container overflow-auto">
        <ul
          className={classNames(
            "flex items-center justify-center"
          )}
          style={{ minWidth: "768px" }}
        >
          {tabs.map((tab, index) => {
            return (
              <li key={index} className="list-none relative overflow-hidden">
                <Tab
                  key={tab.key}
                  tab={tab}
                  activeKey={activeKey}
                  index={index + 1}
                  onClick={onChange}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
