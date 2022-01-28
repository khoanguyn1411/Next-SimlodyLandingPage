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
    key: "About",
    name: "About",
    href: "/about-us",
  },
  {
    key: "Job",
    name: "Job",
    href: "/job",
  },
  {
    key: "Blog",
    name: "Blog",
    href: "/blogs",
  },
  {
    key: "Policy",
    name: "Privacy Policy",
    href: "/privacy-policy",
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
          <a href="" className="hover:text-primary-500 text-gray-400">
            <FacebookIcon />
          </a>
          <a href="" className="hover:text-primary-500 text-gray-400">
            <GoogleIcon />
          </a>
          <a href="" className="hover:text-primary-500 text-gray-400">
            <LinkedInIcon />
          </a>
          <a href="" className="hover:text-primary-500 text-gray-400">
            <YoutubeIcon />
          </a>
        </div>
        <div className="flex flex-1 justify-center">
          <span className="text-center text-gray-400 text-base font-normal">
            © 2019 - Copyright Tungtung JSC - Tungtung.vn. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
