import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

import "./../../css/styles.css";

type Props = {
  onClick: Dispatch<SetStateAction<object>>;
};

const Backdrop = (props: Props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop")!
  );
};

export default Backdrop;
