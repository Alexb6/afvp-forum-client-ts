import React from "react";

type Props = {
  className: string;
  children: string;
};
const CustomButton = ({ children, className, ...otherProps }: Props) => (
  <button className={className} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
