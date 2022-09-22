import React from "react";

import "./../../css/styles.css";

type Props = {
  children: string;
};

const FormErrorMessage = ({ children }: Props) => (
  <div className="form-error-message">{children}</div>
);

export default FormErrorMessage;
