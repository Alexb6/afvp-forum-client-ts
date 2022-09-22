type formErrors = {
  email?: string;
};

const formEmailCheck = (email: string) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return emailRegex.test(email);
};

const formPasswordCheck = (password: string) => {
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  );
  return passwordRegex.test(password);
};

const formPasswordConfirmCheck = (password: string, passConfirm: string) => {
  return password === passConfirm ? true : false;
};

const isFormValid = (formErrors: formErrors) => {
  let isValid = true;
  // Check if there are error messages in the state
  Object.values(formErrors).forEach((val) => {
    val.length && (isValid = false);
  });
  return isValid;
};

export {
  formEmailCheck,
  formPasswordCheck,
  formPasswordConfirmCheck,
  isFormValid,
};
