import { Drawer } from "@components/elements";
import { ItemMenuMobile } from "./ItemMenuMobile";
import { MENUS } from "./index";
import { useState } from "react";
type IProps = {
  isOpen: boolean;
  onClose: () => void;
  pageActive?: string;
};
export const SidebarMobile: React.FC<IProps> = ({
  isOpen,
  pageActive,
  onClose,
}) => {
    const [showSubMenu,setShowSubMenu]=useState(false)
    const handleShowSubMenu=()=>{
        setShowSubMenu(v=>!v)
    }
  return (
    <Drawer
      visible={isOpen}
      onClose={onClose}
      placement="left"
      width={272}
      shouldResponsive={false}
    >
        <ul className="flex flex-col justify-start items-start">
          {MENUS.map((menu, index) => (
            <ItemMenuMobile
              key={index}
              name={menu.name}
              icon={menu.icon}
              href={menu.href}
              isActive={false}
              hasSubMenu={menu.hasSubmenu}
              subMenus={menu.submenus}
              onShowSubMenu={handleShowSubMenu}
              isOpened={showSubMenu}
            />
          ))}
        </ul>
    </Drawer>
  );
};
