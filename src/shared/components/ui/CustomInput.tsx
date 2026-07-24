import React from "react";

type Props = {
  name: string;
  type: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput({
  name,
  type,
  value,
  onChange,
  label,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>
        {label}
        <span className="required">*</span>
      </label>
      <input
        type={type}
        className="focus:border-brand-primary"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
