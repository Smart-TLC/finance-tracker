const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegister(data) {
  let errors = {};

  // Convert empty fields to string (because validator only works with string)
  for (var key in data) {
    data[key] = !isEmpty(data[key]) ? data[key] : "";
  }

  // Validate name
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Validate email
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Validate password
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!validator.isLength(data.password, { min: 8 })) {
    errors.password = "Password must be at least 8 characters";
  }

  // Validate confirmed password
  if (validator.isEmpty(data.confirmedPassword)) {
    errors.confirmedPassword = "Confirmed password is required";
  }

  if (!validator.equals(data.password, data.confirmedPassword)) {
    errors.confirmedPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
