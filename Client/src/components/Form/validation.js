const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /\d/;
const validate = (data) => {
  const errors = {};
  if (!regexEmail.test(data.email)) {
    errors.email = "El usuario debe ser un email";
  }
  if (!data.email) {
    errors.email = "Este campo es requerido";
  }
  if (data.email.length > 35) {
    errors.email = "No mas de 35 caracteres";
  }
  if (!regexPassword.test(data.password)) {
    errors.password = "La contraseña debe tener caracteres y numeros";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};
export default validate;
