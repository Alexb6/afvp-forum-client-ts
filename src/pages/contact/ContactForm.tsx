import React, { useState } from "react";
import FormInput from "./../../components/form/FormInput";
import FormTextArea from "./../../components/form/FormTextArea";
import CustomButton from "./../../components/buttons/CustomButton";
import FormErrorMessage from "./../../components/form/FormErrorMessage";
import { formEmailCheck, isFormValid } from "./../../utils/formCheckers";
import ModalValidPopUp from "../../components/modals/ModalValidPopup";
import ModalErrorPopUp from "../../components/modals/ModalErrorPopUp";
import { scrollToTop } from "./../../utils/scrollToTop";
import LoadingSpinner from "./../../components/spinner/SpinnerLoading";
import API_URL from "../../config/API_Url";
import { customError } from "../../types/interfaces";

import "./../../css/styles.css";

const ContactForm = () => {
  const [state, setState] = useState({
    inputFields: {
      name: "",
      email: "",
      message: "",
    },
    formErrors: { email: "" },
    isModalOpen: false,
    isLoading: false,
    error: { message: "", level: "" },
  });
  const {
    inputFields: { name, email, message },
    formErrors,
    isLoading,
    error,
    isModalOpen,
  } = state;

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (isFormValid(state.formErrors)) {
      try {
        setState({ ...state, isLoading: true });
        const response = await fetch(`${API_URL}/afvp/contact-us`, {
          method: "POST",
          credentials: "include",
          mode: "cors",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        const parseResponse = await response.json();
        if (!response.ok) {
          throw new Error(parseResponse);
        }
        setState({ ...state, isLoading: false, isModalOpen: true });
        scrollToTop();
        setState({
          ...state,
          inputFields: { name: "", email: "", message: "" },
        });
      } catch (err) {
        scrollToTop();
        setState({
          ...state,
          error: err as customError,
          isLoading: false,
        });
      }
    }
    setState({ ...state, isLoading: false });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const { formErrors } = state;
    if (name === "email") {
      formErrors.email =
        formEmailCheck(value) && value.length
          ? ""
          : `Le courriel n'a pas encore une forme correcte !`;
      setState({
        ...state,
        formErrors: { ...state.formErrors, [name]: value },
      });
    }
    setState({
      ...state,
      inputFields: { ...state.inputFields, [name]: value },
    });
  };

  const closeModal = () => setState({ ...state, isModalOpen: false });
  const openModal = () => setState({ ...state, isModalOpen: true });
  const errorHandler = () => setState({ ...state, error });

  return (
    <div className="contact-form col-md-6 col-sm-12 mb-3">
      <ModalValidPopUp
        open={isModalOpen}
        closeModal={closeModal}
        title="Message envoyé"
        footerClose
      >
        Votre message a été envoyé avec succès !
      </ModalValidPopUp>
      <ModalErrorPopUp
        title="Erreur de connexion"
        headerClass={error.level}
        open={!!error.message}
        closeModal={errorHandler}
        footerClose
      >
        {error.message}
      </ModalErrorPopUp>
      {isLoading && <LoadingSpinner asOverlay />}
      <h2 className="form-title">Envoyez un message</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          type="text"
          name="name"
          label="Nom & Prénom *"
          value={name}
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Courriel *"
          value={email}
          required
          onChange={handleChange}
        />
        {formErrors.email.length > 0 && email.length > 3 && (
          <FormErrorMessage>{formErrors.email}</FormErrorMessage>
        )}
        <FormTextArea
          type="textarea"
          name="message"
          label="Votre message... *"
          value={message}
          rows={3}
          required
          onChange={handleChange}
        />
        <CustomButton
          className="custom-button--positive--duck mb-3"
          type="submit"
        >
          envoyer
        </CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;
