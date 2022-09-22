import React from "react";

import "./../../css/styles.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  value: string;
  type: string;
  name: string;
  rows: number;
  required: boolean;
};

const FormTextArea = ({ onChange, label, value, ...otherProps }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "inherit";
    target.style.height = `${target.scrollHeight}px`;
  };
  return (
    <div className="form-textarea">
      <textarea
        className="textarea-textarea"
        onChange={onChange}
        {...otherProps}
        onKeyDown={handleKeyDown}
      ></textarea>
      {label && (
        <label className={`${value.length ? "shrink" : ""} textarea-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormTextArea;
