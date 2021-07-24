import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../actions/authActions";
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
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password's length must be greater than 8")
    .required("Password is required"),
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

const Login = () => {
  const classes = useStyles();

  const [isError, setIsError] = useState(false); 

  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
  }));

  const history = useHistory();

  // if account is already set
  if (state.auth.isAuthenticated) {
    history.push("/transaction");
  }

  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUser(values, history));
      setIsError(true);
    },
  });

  return (
    <Container maxWidth={false} className={classes.formContainer}>
      <Container className={classes.side}></Container>
      <form
        style={{ width: "30%", padding: "5%" }}
        onSubmit={formik.handleSubmit}
      >
        <FormControl className={classes.form}>
          <h1 style={{ marginBottom: 30 }}>Welcome Back!</h1>
          <FormHelperText className={classes.alert}>
            {isError ? state.errors.err : ""}
          </FormHelperText>
          <TextField
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="login-email"
            label="Email"
            variant="outlined"
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <TextField
            type="password"
            name="password"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.mg10}
            id="login-password"
            label="Password"
            variant="outlined"
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Login
          </Button>
          <p>
            Don't have an account?{" "}
            <Link to="/auth/register" style={{ color: "#000" }}>
              Register
            </Link>
          </p>
        </FormControl>
      </form>
    </Container>
  );
};

export default Login;
