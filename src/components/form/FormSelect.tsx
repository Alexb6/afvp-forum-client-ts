import React from "react";

import "./../../css/styles.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  value: string;
  placeholder: string;
  options: string[];
};

const FormSelect = ({
  onChange,
  label,
  value,
  options,
  placeholder,
  ...otherProps
}: Props) => (
  <div className="form-select">
    {label && (
      <label className={`${value.length ? "shrink" : ""} input-label`}>
        {label}
      </label>
    )}
    <select
      className="select-input"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...otherProps}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => {
        return (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        );
      })}
    </select>
  </div>
);

export default FormSelect;
