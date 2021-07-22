const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLogin(data) {
  let errors = {};

  // Convert empty fields to string (because validator only works with string)
  for (var key in data) {
    data[key] = !isEmpty(data[key]) ? data[key] : "";
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

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
