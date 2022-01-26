import { Listbox, Transition } from "@headlessui/react";
import classnames from "classnames";
import { Fragment } from "react";

type ISelectOption={
    icon?: JSX.Element | string;
    name: string;
    value: string;
    suffix?: JSX.Element;
}
type IProps = {
  options: ISelectOption[];
  value?: string;
  onChange: (key: string) => void;
  placeholder?: string;
  maxHeight?: number | string;
};

export const SelectControl: React.FC<IProps> = ({
  options = [],
  value,
  onChange,
  placeholder,
  maxHeight,
}) => {
  const selected = options.find((option) => option.value === value);

  const handleChange = (selected: ISelectOption) => {
    if (onChange) {
      onChange(selected?.value);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className={classnames("relative flex h-10 items-center justify-between  py-4 text-left font-semibold bg-gray-100  text-gray-600 cursor-default focus:outline-none w-full px-4 space-x-2", {
                "ring-1 ring-primary-400": open,
              })}
            >
              {selected?.name ? (
                <div className="flex items-center truncate space-x-2">
                  <span className="block font-normal text-left text-black truncate">
                    {selected.name}
                  </span>
                </div>
              ) : (
                <span className="block font-normal text-gray-400 truncate">
                  {placeholder}
                </span>
              )}
              <span className="text-gray-400 pointer-events-none">
                <i className="fas fa-caret-down" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options
                static
                className={classnames("absolute inline-block z-10 w-full mt-1 overflow-auto bg-white shadow-lg max-h-56 rounded-md ring-1 ring-black ring-opacity-5")}
                style={{ maxHeight }}
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      classnames(
                        active ? "text-gray-600  bg-gray-100" : "text-gray-900",
                        "cursor-pointer select-none relative py-2 px-4"
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center space-x-2">
                          <span
                            className={classnames("block truncate", {
                              "font-medium": selected,
                            })}
                          >
                            {option.name}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
