import classNames from "classnames";
import Link from "next/link";

type IProps = {
  name: string;
  href:string

  icon?: JSX.Element;
  isActive?: boolean;
};
export const MenuItem: React.FC<IProps> = ({ name,href, icon, isActive }) => {
  return (
    <li>
     <Link href={href}>
     <a
        className={classNames(
          "flex group items-baseline justify-center transition-all duration-300 ease-in-out font-medium cursor-pointer text-base",
          { "text-primary-500": isActive }
        )}
      >
        <div
          className={classNames("group-hover:text-primary-500 transition-all duration-300", {
            "text-primary-500": isActive,
          })}
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
    </li>
  );
};
