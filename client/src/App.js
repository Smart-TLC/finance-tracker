import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import checkTokenExpire from "./utils/checkTokenExpire";
import store from "./store";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from './pages/Home';
import TransactionPage from './pages/Transaction/TransactionPage';
import CategoryDetailsPage from './pages/Category/CategoryDetailsPage';
import PrivateRoute from "./components/auth/privateRoute";

function App() {
  checkTokenExpire();

  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/transaction" component={TransactionPage} />
          <PrivateRoute path="/category/:cate" component={CategoryDetailsPage} /> 
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
