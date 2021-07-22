import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";
import * as yup from "yup";
import {
  makeStyles,
  TextField,
  Container,
  FormControl,
  Button,
  FormHelperText,
} from "@material-ui/core";

const ValidationSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password's length must be greater than 8")
    .required("Password is required"),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Confirmed password not match")
    .required("Confirmed Password is required"),
});

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    background: "#fcfcfc",
    padding: 0,
    justifyContent: "space-between",
    height: "100%",
  },
  mg10: {
    margin: 10,
  },
  side: {
    width: "60%",
    backgroundColor: "aquamarine",
  },
  form: {
    display: "flex",
    textAlign: "center",
  },
  submitBtn: {
    margin: 10,
    marginTop: 30,
  },
  alert: {
    textAlign: "center",
    color: "red",
    fontSize: 15,
  },
}));

const Register = () => {
  const classes = useStyles();

  const [isError, setIsError] = useState(false);

  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
  }));

  const history = useHistory();

  // if account is already set
  if (state.auth.isAuthenticated) {
    history.push("/home");
  }

  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    onSubmit: (values) => {
      dispatch(registerUser(values, history));
      setIsError(true); // have errors from backend
    },
  });
  return (
    <Container maxWidth={false} className={classes.formContainer}>
      <Container className={classes.side}></Container>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "30%", padding: "5%" }}
      >
        <FormControl className={classes.form}>
          <h1 style={{ marginBottom: 30 }}>Create Account</h1>
          <FormHelperText className={classes.alert}>
            {isError ? state.errors.err : ""}
          </FormHelperText>
          <TextField
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="register-username"
            label="Username"
            variant="outlined"
            error={Boolean(formik.errors.name)}
            helperText={formik.errors.name}
          />
          <TextField
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="register-email"
            label="Email"
            variant="outlined"
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <TextField
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="register-password"
            label="Password"
            variant="outlined"
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
          <TextField
            type="password"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="register-confirm-password"
            label="Confirm Password"
            variant="outlined"
            error={Boolean(formik.errors.confirmedPassword)}
            helperText={formik.errors.confirmedPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Register
          </Button>
          <p>
            Already have an account?{" "}
            <Link to="/auth/login" style={{ color: "#000" }}>
              Log in
            </Link>
          </p>
        </FormControl>
      </form>
    </Container>
  );
};
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { registerUser })(Register);

export default Register;