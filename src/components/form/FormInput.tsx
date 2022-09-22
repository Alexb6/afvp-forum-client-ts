import React from "react";

import "./../../css/styles.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  type: string;
  name: string;
  required: boolean;
};

const FormInput = ({ onChange, label, value, ...otherProps }: Props) => (
  <div className="form-input">
    <input
      className="input-input"
      onChange={onChange}
      value={value}
      {...otherProps}
    />
    {label && (
      <label className={`${value && "shrink"} input-label`}>{label}</label>
    )}
  </div>
);

export default FormInput;
