import React from "react";
import { Logo, Button } from "@components/elements";
import { ItemMenu } from "./menu-item";
import Link from "next/link";
import classNames from "classnames";
import { Media } from "@components";

export const MENUS = [
  {
    key: "Product",
    name: "Product",
    href: "/product",
  },
  {
    key: "WhoItFor",
    name: "Who's It For",
    href: "/who-it-for",
    icon: <i className="fa fa-chevron-down" />,
    hasSubmenu: true,
    submenus: [
      "Small enterprises",
      "Medium-sized enterprises",
      "Large enterprises",
    ],
  },
  {
    key: "Solution",
    name: "Solution",
    href: "/solution",
    icon: <i className="fa fa-chevron-down" />,
    hasSubmenu: true,
    submenus: ["Product concept", "Saas", "Odoo"],
  },
  {
    key: "News",
    name: "News",
    href: "/news",
  },
  {
    key: "About",
    name: "About us",
    href: "/about",
  },
];

type IProps = {
  pageKey?: string;
  onOpen:()=>void
};
export const Header: React.FC<IProps> = React.memo(({ pageKey,onOpen }) => {
  return (
    <header className="bg-white h-14 shadow-md sticky top-0 z-50">
      <div className="container flex flex-row mx-auto items-center h-full justify-between">
        <div className="flex items-center space-x-4">
          <button
            className={classNames(
              "flex w-8 h-8 white rounded-full xl:hidden  outline-none focus:outline-none items-center justify-center"
            )}
            onClick={onOpen}
          >
            <i className="text-base text-gray-400 fas fa-bars line-height-normal"></i>
          </button>

          {/* logo */}
          <Link href="/">
            <a>
              <Logo withText />
            </a>
          </Link>
        </div>

        {/* main */}
        <Media greaterThanOrEqual="xl">
          <ul className="flex items-center overflow-y-auto list-none hide-scrollbar">
            {MENUS.map((menu, index) => (
              <ItemMenu
                key={index}
                name={menu.name}
                icon={menu.icon}
                href={menu.href}
                isActive={pageKey === menu.key}
                hasSubMenu={menu.hasSubmenu}
                subMenus={menu.submenus}
              />
            ))}
          </ul>
        </Media>

        {/* contact */}
        <div>
          <Button text="Contact Us" />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
