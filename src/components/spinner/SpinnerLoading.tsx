import React from "react";

import "./../../css/styles.css";

const SpinnerLoading = (props: { asOverlay: boolean }) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default SpinnerLoading;
