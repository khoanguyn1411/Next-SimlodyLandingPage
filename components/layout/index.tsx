import { Footer } from "./footer";
import { Header } from "./header";
import { Head, IHeadProps } from "./head";
import { SidebarMobile } from "./header/sidebar-mobile";
import { useState } from "react";

type IProps = {
  pageKey?: string;
  pageTitle?: string;
  head?: IHeadProps;
  children: JSX.Element;
};

export const LayoutBase: React.FC<IProps> = ({
  pageKey,
  pageTitle,
  head,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head pageTitle={pageTitle} {...head} />

      <Header pageKey={pageKey} onOpen={handleOpen} />

      <SidebarMobile isOpen={isOpen} pageKey={pageKey} onClose={handleClose} />

      <div>
        <main>{children}</main>
      </div>
      <Footer pageKey={pageKey}/>
    </>
  );
};
