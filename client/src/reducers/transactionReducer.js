import {
  GET_TRANSACTION,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
  CLEAR_TRANSACTION
} from "../actions/types";

const initialState = {
  transactions: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        transactions: action.payload.data,
      };
    case ADD_TRANSACTION: 
      return {
        transactions: [action.payload.data, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        transactions: state.transactions.filter((item) => item._id !== action.payload),
      };
    case UPDATE_TRANSACTION:
      return {
        transactions: state.transactions.map((item) => {
          if (item._id === action.payload.data._id) {
            return action.payload.data;
          }
          return item;
        }),
      };
    case CLEAR_TRANSACTION:
      return {
        transactions: []
      }
    default: 
      return state;
  }
}
