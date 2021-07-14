import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
import store from "../store";
import { setCurrentUser, logoutUser } from "../actions/authActions";

const checkTokenExpire = () => {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = "./auth/login";
    }
  }
};

export default checkTokenExpire;