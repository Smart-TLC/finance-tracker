import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import checkTokenExpire from "./utils/checkTokenExpire";
import store from "./store";
import TransactionForm from "./components/TransactionForm";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import PrivateRoute from "./components/auth/privateRoute";

function App() {
  checkTokenExpire();

  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/test/TransactionForm" component={TransactionForm} />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
