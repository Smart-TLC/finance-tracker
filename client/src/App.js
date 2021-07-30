import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import checkTokenExpire from "./utils/checkTokenExpire";
import store from "./store";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


import Login from "./components/auth/login";
import Register from "./components/auth/register";
import TransactionPage from './pages/Transaction/TransactionPage';
import CategoryDetailsPage from './pages/Category/CategoryDetailsPage';
import MonthlyTransPage from './pages/MonthlyTrans/MonthlyTransPage';
import PrivateRoute from "./components/auth/privateRoute";

export default function App() {
  checkTokenExpire();

  const theme = createTheme({
      palette: {
        primary: {
          main: '#26c6da',
          light: '#80deea',
          dark: '#0097a7',
        },
        secondary: {
            light: '#81d4fa',
            main: '#4fc3f7',
            dark: '#039be5',
        },
        typography: {
          fontFamily: 'Poppins',
          fontWeightLight: '200',
          fontWeightRegular: '300',
          fontWeightMedium: '400',
          fontWeightBold: '500',
        }
      }
    }
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/home" component={TransactionPage} />
          <PrivateRoute exact path="/monthlytransaction" component={MonthlyTransPage} />
          <PrivateRoute path="/category/:cate" component={CategoryDetailsPage} /> 
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}
