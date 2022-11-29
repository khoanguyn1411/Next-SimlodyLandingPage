import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@components/icons";
import classNames from "classnames";
import Link from "next/link";
import React, { memo } from "react";

const MENUS_FOOTER = [
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
  pageKey: string;
};
export const Footer: React.FC<IProps> = memo(({ pageKey }) => {
  return (
    <footer className="py-16 flex bg-primary-10 flex-1 shadow-inner">
      <div className="flex flex-col w-full md:w-2/5 mx-auto gap-8 items-center">
        <div className="flex flex-row justify-between">
          {MENUS_FOOTER.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <a
                className={classNames(
                  "hover:text-primary-500 transition-colors font-semibold text-base px-4 py-2",
                  {
                    "text-primary-800": pageKey === menu.key,
                    "text-gray-600": pageKey !== menu.key,
                  }
                )}
              >
                {menu.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/symlodyproduction"
            className="text-primary-800 hover:underline font-medium text-lg flex items-center gap-4"
          >
            <FacebookIcon size={23} />
            Fanpage của chúng tôi
          </a>
        </div>
        <div className="flex flex-1 justify-center">
          <span className="text-center text-gray-400 text-base font-normal">
            © 2022 - Copyright Symlody - symlody.com, All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
