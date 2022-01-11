import classNames from "classnames";
import Link from "next/link";

type IProps = {
  name: string;
  href: string;

  icon?: JSX.Element;
  isActive?: boolean;
  hasSubMenu?: boolean;
  subMenus?: string[];
};

export const ItemMenu: React.FC<IProps> = ({
  name,
  href,
  icon,
  isActive,
  hasSubMenu = false,
  subMenus = [],
}) => {
  return (
    <li className="group dropdown mx-8">
     <Link href={href}>
     <a
        className={classNames(
          "flex group items-baseline justify-center transition-all duration-300 ease-in-out font-medium cursor-pointer text-base",
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

      {hasSubMenu && (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul className="top-0 mt-2 shadow-md w-64 rounded-md bg-white">
            {subMenus.map((subMenu, index) => (
              <li
                key={index}
                className="hover:bg-gray-100  group px-4 border-b transition-all duration-300"
              >
                <a className="block py-4 font-seminbold text-base hover:text-primary-500 transition-all duration-300 cursor-pointer">
                  {subMenu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
