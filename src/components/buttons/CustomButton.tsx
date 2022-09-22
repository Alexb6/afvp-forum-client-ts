import React from "react";
import { ButtonProps } from "../../types/interfaces";

const CustomButton = ({ children, className, ...otherProps }: ButtonProps) => (
  <button className={className} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
