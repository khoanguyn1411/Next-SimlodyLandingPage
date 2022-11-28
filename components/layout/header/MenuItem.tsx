import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export type SubMenuProps = {
  key: string;
  name: string;
  href: string;
};

type IProps = {
  name: string;
  href?: string;

  icon?: JSX.Element;
  isActive?: boolean;
  hasSubMenu?: boolean;
  subMenus?: SubMenuProps[];
};

export const ItemMenu: React.FC<IProps> = ({
  name,
  href = "",
  icon,
  isActive,
  hasSubMenu = false,
  subMenus = [],
}) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <li className="group dropdown">
      <Link href={href}>
        <a
          className={classNames(
            "flex group items-baseline text-gray-600 justify-center transition-all duration-300 ease-in-out font-medium cursor-pointer text-base",
            { "text-primary-800": isActive }
          )}
          id="navbarDropdown"
          role="button"
          data-toggle="droppdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div
            className={classNames(
              "group-hover:text-primary-800 transition-all duration-300",
              {
                "text-primary-800": isActive,
              }
            )}
          >
            <span className="flex-1">{name}</span>
          </div>

          {icon && (
            <div
              className={classNames(
                "ml-2 text-xs group-hover:text-primary-800 transition-all duration-300",
                { "text-primary-800": isActive }
              )}
            >
              <span>{icon}</span>
            </div>
          )}
        </a>
      </Link>

      {hasSubMenu && (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul className="top-0 mt-4 shadow-md w-64 rounded-md bg-white">
            {subMenus.map((subMenu, index) => (
              <li
                key={index}
                className={classNames(
                  "hover:bg-gray-100  group px-4 border-b transition-all duration-300",
                  { "bg-gray-100": subMenu.href === path }
                )}
              >
                <Link href={subMenu.href}>
                  <a
                    className={classNames(
                      "block py-4 font-seminbold text-base hover:text-primary-500 transition-all duration-300 cursor-pointer",
                      { "text-primary-500": subMenu.href === path }
                    )}
                  >
                    {subMenu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
