import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch} from "react-redux";
import { loginUser } from "../../actions/authActions";
import * as yup from "yup";
import {
  makeStyles,
  TextField,
  Container,
  FormControl,
  Button,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import Particles from 'react-particles-js';
import { getTransactions } from "../../actions/transactionAction";

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
    backgroundColor: "white",
    padding: 0,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  
  },
  mg10: {
    margin: 10,
  },
  side: {
    position:"fixed",
    left:0,
    top:0,
    width: "100%",
    maxWidth:"100%",
    height:"100%",
    backgroundColor: "navy",
  },
  form: {
    display: "flex",
    textAlign: "center",
    borderRadius: 10,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: theme.palette.background.paper,
    padding: 10
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
  title: {
    color: theme.palette.text.primary,
    marginBottom: 20,
  }
}));

const Login = () => {
  const classes = useStyles();

  const [isError, setIsError] = useState(false); 

  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
  }));

  const history = useHistory();
  const dispatch = useDispatch();

  // if account is already set
  if (state.auth.isAuthenticated) {
    dispatch(getTransactions(state.auth.user.id));
    history.push("/transaction");
  }

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
      <Container className={classes.side}>
      <Particles
        params={{
	        "particles": {
	          "number": {
	            "value": 80,
	          },
	          "size": {
	            "value": 8
	          } 
	        },
	        "interactivity": {
	          "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	          }
	        }
	      }} 
        height = "100vh"
      />
      </Container> 
      <form
        style={{ width: "30%", padding: "3%" }}
        onSubmit={formik.handleSubmit}
      >
        <FormControl className={classes.form}>
          <Typography variant="h4" className={classes.title}>Welcome to Budgeto!</Typography>
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
              Register!
            </Link>
          </p>
        </FormControl>
      </form>
      
    </Container>
 
  );
};

export default Login;
