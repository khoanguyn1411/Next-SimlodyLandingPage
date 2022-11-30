import { Media } from "@components";
import { Button, Logo } from "@components/elements";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { ItemMenu } from "./MenuItem";

const MENUS = [
  {
    key: "Home",
    name: "Trang chủ",
    href: "/",
  },
  {
    key: "Product",
    name: "Sản phẩm",
    href: "/product",
  },
  {
    key: "About",
    name: "Giới thiệu",
    href: "/about",
  },
];

type IProps = {
  pageKey?: string;
  onOpen: () => void;
};
export const Header: React.FC<IProps> = React.memo(({ pageKey, onOpen }) => {
  const handleLink = () => {
    window.open("http://app.simlody.com/", "_blank");
  };
  return (
    <header className="bg-white h-header shadow sticky top-0 z-50">
      <div className="container flex justify-between flex-row mx-auto items-center h-full">
        <div className="flex items-center">
          <Media lessThan="xl">
            <button
              className={classNames(
                "flex outline-none focus:outline-none mr-4 items-center justify-center"
              )}
              onClick={onOpen}
            >
              <i className="text-base text-gray-400 fas fa-bars line-height-normal"></i>
            </button>
          </Media>

          {/* logo */}
          <Link href="/">
            <a>
              <Logo withText />
            </a>
          </Link>
        </div>

        {/* main */}
        <div className="flex gap-7 items-center">
          <Media greaterThanOrEqual="xl">
            <ul className="flex items-center list-none hide-scrollbar gap-5">
              {MENUS.map((menu, index) => (
                <ItemMenu
                  key={index}
                  name={menu.name}
                  href={menu.href}
                  isActive={pageKey === menu.key}
                />
              ))}
            </ul>
          </Media>
        </div>
        <Button text="Trải nghiệm ngay" type="primary" onClick={handleLink} />
      </div>
    </header>
  );
});

Header.displayName = "Header";
