import classnames from "classnames";
import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const SIZE_MAPS = {
  small: {
    wrapper: "text-sm py-1 px-4 h-8",
    input: "text-sm",
  },
  middle: "",
  large: {
    wrapper: "text-lg py-4 px-4 h-12",
    input: "text-lg",
  },
};

const TYPE_MAPS = {
  primary: {
    wrapper: "bg-gray-100",
    input: "bg-gray-100",
  },
  default: {
    wrapper: "bg-white border",
    input: "bg-white",
  },
};

const key = {
  wrapper: "wrapper",
  input: "input",
};

const BORDERED_MAPS = {
  true: "border-1",
};

export type IProps = {
  placeholder?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: keyof typeof SIZE_MAPS;
  type?: keyof typeof TYPE_MAPS;
  htmlType?: "password" | "number" | "text";
  name?: string;
  value?: string | number;
  bordered?: boolean;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;

  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onPressTab?: React.KeyboardEventHandler<HTMLInputElement>;

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  disabled?: boolean;
  isAutoFocus?: boolean;
  shouldSelectOnFocus?: boolean;
};

export const Input: React.FC<IProps> = ({
  placeholder,
  htmlType = "text",
  
  size = "middle",
  type = "default",
  name,
  value,
  
  suffix,
  prefix,
  bordered = false,

  onChange,
  onKeyPress,
  onKeyDown,

  onPressEnter,
  onPressTab,

  onBlur,
  onFocus,

  disabled = false,
  isAutoFocus = false,
  shouldSelectOnFocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const uuid = useRef<string>();

  const onClickToFocus = useCallback(() => {
    inputRef.current?.focus?.();
    if (shouldSelectOnFocus) {
      inputRef.current?.select?.();
    }
  }, [shouldSelectOnFocus]);

  useEffect(() => {
    uuid.current = nanoid();
  }, []);

  useEffect(() => {
    if (isAutoFocus) {
      onClickToFocus();
    }
  }, [inputRef, isAutoFocus, onClickToFocus]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress) onKeyPress(e);

    const keyCode = e.code || e.key;

    if (keyCode === "Enter") {
      if (!onPressEnter) return;
      onPressEnter(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(e);

    const keyCode = e.code || e.key;

    if (keyCode === "Tab") {
      if (!onPressTab) return;
      onPressTab(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleSuffixClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={onClickToFocus}
        role="textbox"
        tabIndex={-1}
        onKeyPress={null}
        className={classnames(
          "relative w-full min-w-0 h-10 px-4 flex items-center outline-none text-gray-500 rounded-md",
          SIZE_MAPS[size][key.wrapper],
          TYPE_MAPS[type][key.wrapper],
          BORDERED_MAPS[bordered.toString()],
          {
            "ring-1 ring-primary-400": isFocused,
            "opacity-50 border-gray-300 border cursor-not-allowed": disabled,
          }
        )}
      >
         {prefix && (
          <div
            className="flex items-center justify-center mr-2"
            onClick={null}
            aria-hidden="true"
          >
            {prefix}
          </div>
        )}

        <input
          id={uuid.current}
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          type={htmlType}
          value={value}
          onChange={onChange}
          className={classnames(
            "relative w-full min-w-0 outline-none text-black inline-block",
            SIZE_MAPS[size][key.input],
            TYPE_MAPS[type][key.input]
          )}
          disabled={disabled}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={isAutoFocus}
        />

        {suffix && (
          <div
            className="flex items-center justify-center ml-2"
            onClick={handleSuffixClick}
            aria-hidden="true"
          >
            {suffix}
          </div>
        )}

      </div>
    </>
  );
};
