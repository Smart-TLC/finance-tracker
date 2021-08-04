import axios from "../config/axios";
import {
  GET_ERRORS,
  GET_TRANSACTION,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "./types";

export const getTransactions = (data) => (dispatch) => {
  axios
    .get("/", {
      params: {
        id: data
      }
    })
    .then((res) => {
      dispatch({
        type: GET_TRANSACTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const addTransaction = (data) => (dispatch) => {
  axios
    .post("/", data)
    .then((res) => {
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deleteTransaction = (data) => (dispatch) => {
  axios
    .delete("/", {
      params: {
        id: data
      }
    })
    .then((res) => {
      dispatch({
        type: DELETE_TRANSACTION,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// do this feature after form Ui is complete
export const updateTransaction = (data) => (dispatch) => {
  axios
    .patch("/", data)
    .then((res) => {
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
