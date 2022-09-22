import React from "react";
import ModalPopUp, { ModalProps } from "./ModalPopUp";

const ModalValidPopUp = ({ title, open, closeModal, children }: ModalProps) => {
  return (
    <ModalPopUp
      headerClass="valid"
      title={title}
      open={!!open}
      closeModal={closeModal}
      footerClose
    >
      {children}
    </ModalPopUp>
  );
};

export default ModalValidPopUp;
