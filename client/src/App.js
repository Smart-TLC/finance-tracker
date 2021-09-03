import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import checkTokenExpire from "./utils/checkTokenExpire";
import store from "./store";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import TransactionPage from './pages/Transaction/TransactionPage';
import CategoryDetailsPage from './pages/Category/CategoryDetailsPage';
import MonthlyTransPage from './pages/MonthlyTrans/MonthlyTransPage';
import ProgressPage from './pages/Progress/ProgressPage';
import CalendarPage from './pages/Calendar/CalendarPage';
import PrivateRoute from "./components/auth/privateRoute";
import Notfound from "./pages/Notfound/Notfound";
import Theme from "./Theme";

export default function App() {

  checkTokenExpire();

  return (
    <Provider store={store}>
      <Theme>
        <Switch>
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/auth/login" component={Login} />      
          <Redirect exact from="/" to="/auth/login" />  
          <PrivateRoute exact path="/transaction" component={TransactionPage}/>
          <PrivateRoute exact path="/monthlytransaction" component={MonthlyTransPage} />
          <PrivateRoute path="/category/:cate" component={CategoryDetailsPage} /> 
          <PrivateRoute exact path="/progress" component={ProgressPage} />
          <PrivateRoute exact path="/calendar" component={CalendarPage} />
          <Route>
            <Notfound />
          </Route>
        </Switch>
      </Theme>
    </Provider>
  );
}
