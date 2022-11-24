import { Drawer } from "@components/elements";
import { ItemMenuMobile } from "./ItemMenuMobile";
import Link from "next/link";
import { Logo } from "@components/elements";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
  pageKey?: string;
};

const MENUS_MOBILE = [
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

export const SidebarMobile: React.FC<IProps> = ({
  isOpen,
  pageKey,
  onClose,
}) => {
  return (
    <Drawer
      visible={isOpen}
      onClose={onClose}
      placement="left"
      width={272}
      shouldResponsive={false}
    >
      {/* logo */}
      <div className="pl-4 px-3 border-b-2 py-4">
        <Link href="/">
          <a>
            <Logo withText />
          </a>
        </Link>
      </div>

      <ul className="flex flex-col justify-start items-start">
        {MENUS_MOBILE.map((menu, index) => (
          <ItemMenuMobile
            key={index}
            name={menu.name}
            href={menu.href}
            isActive={menu.key === pageKey}
          />
        ))}
      </ul>
    </Drawer>
  );
};
