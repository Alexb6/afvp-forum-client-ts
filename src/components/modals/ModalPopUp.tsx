import React, { Dispatch, SetStateAction, FormEventHandler } from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./../backdrop/Backdrop";

import "./../../css/styles.css";

export type ModalProps = {
  headerClass?: string;
  title: string;
  closeModal: Dispatch<SetStateAction<object>>;
  onSubmit?: FormEventHandler;
  bodyClass?: string;
  children: string;
  footerClass?: string;
  footerClose: boolean;
  footerValidate?: boolean;
  open: boolean;
  errorMessage?: string;
};

const Modal = ({
  headerClass,
  title,
  closeModal,
  onSubmit,
  bodyClass,
  children,
  footerClass,
  footerClose,
  footerValidate,
}: ModalProps) => {
  const modal = (
    <div className="modal--container">
      <div className={`${headerClass} modal--header`}>
        <p>{title}</p>
        <span className="x--button" onClick={closeModal}>
          x
        </span>
      </div>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`${bodyClass} modal--body`}>
          <p>{children}</p>
        </div>
        <div className={`${footerClass} modal--footer`}>
          {footerClose && (
            <button className="button--close" onClick={closeModal}>
              Fermer
            </button>
          )}
          {footerValidate && (
            <div className="footer--validate">
              <button className="button--close" onClick={closeModal}>
                Fermer
              </button>
              <button className="button--validate" onClick={onSubmit}>
                Valider
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
  return ReactDom.createPortal(modal, document.getElementById("modal")!);
};

const ModalPopUp = (props: ModalProps) => {
  return (
    <>
      <CSSTransition
        in={props.open}
        timeout={500}
        classNames={"backdrop"}
        unmountOnExit={true}
      >
        <Backdrop onClick={props.closeModal} />
      </CSSTransition>
      <CSSTransition
        in={props.open}
        timeout={500}
        classNames={"modal"}
        unmountOnExit={true}
      >
        <Modal {...props} />
      </CSSTransition>
    </>
  );
};

export default ModalPopUp;
