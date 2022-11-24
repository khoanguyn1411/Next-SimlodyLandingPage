import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { Fragment } from "react";

export type MenuItem = {
  value: string;
  name: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
};

type Props = {
  menus?: MenuItem[];
  overlay?: JSX.Element;

  placement?: "left" | "right";
  widthContainer?: string;
  maxHeight?: number | string;

  animation?: boolean;
  disabled?: boolean;

  onClick?: (key: string) => void;
};

export const Dropdown: React.FC<Props> = ({
  children,

  menus = [],
  overlay,

  placement = "right",
  widthContainer,
  maxHeight,

  animation = true,
  disabled,

  onClick,
}) => {
  const transition = animation
    ? {
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
      }
    : {};

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className="flex select-none focus:outline-none"
            disabled={disabled}
          >
            {children}
          </Menu.Button>

          <Transition show={open} as={Fragment} {...transition}>
            <Menu.Items
              static
              className={classNames(
                "absolute w-56 mt-2 z-50 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto",
                {
                  "left-0": placement === "left",
                  "right-0": placement !== "left",
                }
              )}
              style={{ maxHeight: maxHeight || 320, width: widthContainer }}
            >
              {overlay ? (
                <Menu.Item>{overlay}</Menu.Item>
              ) : (
                <div>
                  <div className="py-2">
                    {menus.map((m) => {
                      return (
                        <Menu.Item
                          key={m.value}
                          onClick={() => onClick && onClick(m.value)}
                        >
                          {({ active }) => {
                            const isActive = active;
                            return (
                              <div
                                className={classNames(
                                  "flex items-center px-4 py-2 cursor-pointer transition-all duration-300 hover:text-primary-400 select-none leading-5",
                                  {
                                    "bg-gray-100 text-gray-900": isActive,
                                    "text-gray-700": !isActive,
                                  }
                                )}
                              >
                                {m.prefix}
                                {m.name}
                                {m.suffix}
                              </div>
                            );
                          }}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </div>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
