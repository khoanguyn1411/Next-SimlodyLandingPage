import {
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "@components/home/icons";
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
    <footer className="py-16 flex flex-1 shadow-inner">
      <div className="flex flex-col w-full md:w-2/5 mx-auto">
        <div className="flex flex-row justify-between pb-12">
          {MENUS_FOOTER.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <a
                className={classNames(
                  "hover:text-primary-500 font-semibold text-base text-gray-400 px-4 py-2",
                  { "text-primary-500": pageKey === menu.key }
                )}
              >
                {menu.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-row w-64 mx-auto justify-between pb-12">
          <a href="" className="text-blue-500 ">
            <FacebookIcon />
          </a>
         
          <a href="" className="text-blue-700 ">
            <LinkedInIcon />
          </a>
          <a href="" className="text-red-500 ">
            <YoutubeIcon />
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
