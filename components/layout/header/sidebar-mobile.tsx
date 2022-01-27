import { Drawer } from "@components/elements";
import { ItemMenuMobile } from "./ItemMenuMobile";
import Link from 'next/link';
import { Logo } from '@components/elements';

type IProps = {
  isOpen: boolean;
  onClose: () => void;
  pageKey?: string;
};

const MENUS_MOBILE = [
  {
    key: 'Product',
    name: 'Product',
    href: '/product',
    hasSubmenu: false,
  },
  {
    key: 'WhoItFor',
    name: "Who's It For",
    href: '',
    icon: <i className='fa fa-chevron-down' />,
    hasSubmenu: true,
    submenus: [
      {
        key: 'Small',
        name: 'Small enterprises',
        href: '/who-is-it-for/small',
      },
      {
        key: 'Medium',
        name: 'Medium-sized enterprises',
        href: '/who-is-it-for/medium',
      },
      {
        key: 'Large',
        name: 'Large enterprises',
        href: '/who-is-it-for/large',
      },
    ],
  },
  {
    key: 'Solution',
    name: 'Solution',
    href: '',
    icon: <i className='fa fa-chevron-down' />,
    hasSubmenu: true,
    submenus: [
      {
        key: 'Product',
        name: 'Product concept',
        href: '/solution/product',
      },
      {
        key: 'Saas',
        name: 'Saas',
        href: '/solution/saas',
      },
      {
        key: 'Odoo',
        name: 'Odoo',
        href: '/solution/odoo',
      },
    ],
  },
  {
    key: 'Blog',
    name: 'News',
    href: '/blogs',
    hasSubmenu: false,

  },
  {
    key: 'About',
    name: 'About us',
    href: '/about-us',
    hasSubmenu: false,

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
        <Link href='/'>
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
            icon={menu.icon}
            href={menu.href}
            isActive={menu.key===pageKey}
            hasSubMenu={menu.hasSubmenu}
            subMenus={menu.submenus}
          />
        ))}
      </ul>
    </Drawer>
  );
};
