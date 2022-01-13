import { Collapse } from "@components/elements";
import classNames from "classnames";
import Link from "next/link";
import { SubMenuProps } from "./menu-item";

type IProps = {
  name: string;
  href: string;

  icon?: JSX.Element;
  isActive?: boolean;
  hasSubMenu?: boolean;
  subMenus?: SubMenuProps[];
  isOpened: boolean;
  onShowSubMenu: () => void;
};
export const ItemMenuMobile: React.FC<IProps> = ({
  name,
  href,
  icon,
  isActive,
  hasSubMenu = false,
  subMenus = [],
  isOpened = false,
  onShowSubMenu,
}) => {
  return (
    <>
      <li
        className=" border-b-2 w-full text-left px-3 py-4"
        tabIndex={0}
        role="menuitem"
        onKeyPress={onShowSubMenu}
        onClick={onShowSubMenu}
      >
        <a
          className={classNames(
            "flex group items-baseline transition-all duration-300 ease-in-out font-medium cursor-pointer text-base",
            { "text-primary-500": isActive }
          )}
          id="navbarDropdown"
          role="button"
          data-toggle="droppdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div
            className={classNames(
              "group-hover:text-primary-500 transition-all duration-300",
              {
                "text-primary-500": isActive,
              }
            )}
          >
            <span className="flex-1">{name}</span>
          </div>

          {icon && (
            <div className="ml-2 text-xs group-hover:text-primary-500 transition-all duration-300">
              <span>{icon}</span>
            </div>
          )}
        </a>

        
      </li>
      {hasSubMenu && (
          <Collapse isOpened={isOpened}>
            <ul className=" flex flex-col">
              {subMenus.map((subMenu, index) => (
                <li
                  key={index}
                  className="border-b-2 w-full text-left px-3 py-4"
                >
                  <a className="flex group items-baseline transition-all duration-300 ease-in-out font-medium cursor-pointer text-base">
                    {subMenu}
                  </a>
                </li>
              ))}
            </ul>
          </Collapse>
        )}
    </>
  );
};
