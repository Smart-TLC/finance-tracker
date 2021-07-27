import {
  GET_TRANSACTION,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from "../actions/types";

const initialState = {
  transactions: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
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
        transactions: state.transactions.filter((item) => item._id != action.payload),
      };
    case UPDATE_TRANSACTION:
      return {
        transactions: state.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    default: 
      return state;
  }
}
