import React from "react";
import { Button, Container } from "@material-ui/core";
import { logoutUser } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <h1>This is the main page. Sua UI cua trang nay nhe</h1>
        <Button color="primary" variant="contained" onClick={(e) => {
          e.preventDefault();
          dispatch(logoutUser());
        }}>
          Log Out
        </Button>
      </Container>
    </div>
  );
};

export default Home;
