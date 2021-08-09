import React, {useState} from "react";
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
import ProgressPage from './pages/Progress/ProgressPage';
import PrivateRoute from "./components/auth/privateRoute";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  checkTokenExpire();

  const lightTheme = createTheme({
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
  );

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      // primary: {
      //   main: '#ff9100',
      //   light: '#ff6d00',
      //   // dark: '#424242',
      // },
      // secondary: {
      //   main: '#e0e0e0',
      //   light: '#bdbdbd',
      //   // dark: '#424242',
      // },
      // typography: {
      //   fontFamily: 'Poppins',
      //   fontWeightLight: '200',
      //   fontWeightRegular: '300',
      //   fontWeightMedium: '400',
      //   fontWeightBold: '500',
      // }
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
console.log(darkMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/transaction" component={TransactionPage} darkMode={darkMode}/>
          <PrivateRoute exact path="/monthlytransaction" component={MonthlyTransPage} />
          <PrivateRoute path="/category/:cate" component={CategoryDetailsPage} /> 
          <PrivateRoute exact path="/progress" component={ProgressPage} />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}
