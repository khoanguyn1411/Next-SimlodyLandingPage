import { ChangeEvent } from "react";

type Props = {
  value: boolean;
  label?: string;
  onChange: (value: boolean) => void;
};

export const Checkbox: React.FC<Props> = ({ label, value, onChange }) => {
  const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer space-x-3">
      <input
        type="checkbox"
        className="w-4 h-4 border shadow-inner outline-none appearance-none cursor-pointer form-tick rounded-md checked:bg-primary-400 checked:border-transparent transition-all duration-300"
        checked={value}
        onChange={_handleChange}
      />

      {label && <span className="text-sm select-none">{label}</span>}
    </label>
  );
};
