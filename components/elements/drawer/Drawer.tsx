import { BREAKPOINTS } from "@constants";
import useWindowSize from "hooks/useWindowSize";
import ReactDrawer from "rc-drawer";
import { useMemo } from "react";

interface IProps {
  title?: string;

  visible: boolean;
  placement?: "left" | "right";
  level?: string;
  width?: string | number;
  onClose: () => void;
  footer?: JSX.Element;
  id?: string;
  shouldResponsive?: boolean;
}

export const Drawer: React.FC<IProps> = ({
  title,

  visible,
  children,
  footer,
  onClose,
  placement = "right",
  level,
  width = "768px",
  id,
  shouldResponsive = true,
}) => {
  const windowSize = useWindowSize();

  const headerHeight = title ? 56 : 0;
  const footerHeight = footer ? 64 : 0;
  const maxHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;

  const drawerWidth = useMemo(() => {
    if (!shouldResponsive) {
      return width;
    }

    if (windowSize.width >= BREAKPOINTS.xl) {
      return width;
    }

    if (windowSize.width >= BREAKPOINTS.md) {
      return "calc(100vw - 32px)";
    }

    return "100vw";
  }, [shouldResponsive, width, windowSize?.width]);

  const props = !level
    ? {
        getContainer: null,
      }
    : {};

  return (
    <ReactDrawer
      // title={title}
      open={visible}
      onClose={onClose}
      handler={false}
      width={drawerWidth}
      placement={placement}
      id={id}
      level={level}
      levelMove={32}
      {...props}
    >
      {/* {title && (
        <Header
          title={title}
          subTitle={subTitle}
          right={right}
          onClose={onClose}
          level={level}
        />
      )} */}

      <div
        className=" overflow-auto overflow-x-hidden"
        style={{ height: maxHeight }}
      >
        {children}
      </div>

      {/* {footer && (
        <div className="flex items-center h-16 px-6 py-4 overflow-hidden border-t">
          {footer}
        </div>
      )} */}
    </ReactDrawer>
  );
};
