import { Collapse } from "@components/elements";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubMenuProps } from "./menu-item";

type IProps = {
  name?: string;
  href?: string;

  icon?: JSX.Element;
  isActive?: boolean;
  hasSubMenu?: boolean;
  subMenus?: SubMenuProps[];
};
export const ItemMenuMobile: React.FC<IProps> = ({
  name,
  href = "",
  icon,
  isActive,
  hasSubMenu = false,
  subMenus = [],
}) => {
  const router = useRouter();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleShowSubMenu = () => {
    setShowSubMenu((v) => !v);
  };
  return (
    <>
      <li
        className=" border-b-2 w-full text-left pl-4 px-3 py-4"
        tabIndex={0}
        role="menuitem"
        onKeyPress={handleShowSubMenu}
        onClick={handleShowSubMenu}
      >
        {href ? (
          <Link href={href}>
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
          </Link>
        ) : (
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
        )}
      </li>

      {hasSubMenu && (
        <Collapse isOpened={showSubMenu}>
          <ul className="w-full  flex flex-col">
            {subMenus.length > 0 &&
              subMenus.map((subMenu, index) => (
                <li
                  key={index}
                  className={classNames(
                    " w-full focus:bg-gray-100  text-left pl-6 pr-3 py-4",
                    { "text-primary-500": subMenu.href === router.asPath }
                  )}
                >
                  <Link href={subMenu.href}>
                    <a className="flex group items-baseline transition-all duration-300 ease-in-out font-medium cursor-pointer text-base">
                      {subMenu.name}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </Collapse>
      )}
    </>
  );
};
