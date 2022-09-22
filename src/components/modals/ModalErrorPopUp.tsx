import React from "react";
import ModalPopUp, { ModalProps } from "./ModalPopUp";

const ModalErrorPopUp = ({
  headerClass,
  title,
  open,
  closeModal,
  children,
}: ModalProps) => {
  return (
    <ModalPopUp
      headerClass={headerClass}
      title={title}
      open={!!open}
      closeModal={closeModal}
      footerClose
    >
      {children}
    </ModalPopUp>
  );
};

export default ModalErrorPopUp;
