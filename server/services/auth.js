const ERROR = require("../types/errors");

const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");

const User = require("../models/user");

// Register logic ( data is req.body )
const register = async (data) => {
  // form validation in backend
  const { errors, isValid } = validateRegister(data);

  // check validation
  if (!isValid)
    throw new Error(
      ERROR.REGISTER_VALIDATION_ERROR + ": " + JSON.stringify(errors)
    );

  // check if email has already existed and create user
  const user = await User.findOne({ email: data.email });
  if (user) throw new Error(ERROR.EMAIL_EXISTED);

  const newUser = new User({
    name: data.name,
    email: data.email,
  });

  // encrypt password
  newUser.generatePassword(data.password);

  // save user to database
  return newUser.save();
};

// Login logic
const login = async (data) => {
  // form validation in backend
  const { errors, isValid } = validateLogin(data);

  // check validation
  if (!isValid)
    throw new Error(
      ERROR.LOGIN_VALIDATION_ERROR + ": " + JSON.stringify(errors)
    );

  // check if user exists
  const user = await User.findOne({ email: data.email });
  if (!user) throw new Error(ERROR.USER_NOT_EXIST);

  // check if password match
  if (!user.validatePassword(data.password))
    throw new Error(ERROR.PASSWORD_NOT_MATCH);

  return user;
};

module.exports = { register, login };
