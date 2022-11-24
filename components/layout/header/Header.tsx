import React from "react";
import { Logo, Button } from "@components/elements";
import { ItemMenu } from "./MenuItem";
import Link from "next/link";
import classNames from "classnames";
import { Media } from "@components";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const handleLink = () => {
    router.push("/contact-us");
  };
  return (
    <header className="bg-white h-header shadow sticky top-0 z-50">
      <div className="container flex flex-row mx-auto items-center h-full">
        <div className="flex items-center flex-1">
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
        <Media greaterThanOrEqual="xl">
          <ul className="flex items-center list-none hide-scrollbar">
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

        {/* contact */}
        <div>
          <Button text="Trải nghiệm ngay" type="primary" onClick={handleLink} />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
