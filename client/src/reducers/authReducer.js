import { SET_CURRENT_USER, USER_LOADING, SWITCH_MODE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  setting: {
    darkMode: false,
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Boolean(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SWITCH_MODE:
      return {
        ...state,
        setting: {
          darkMode: action.payload,
        }
      };
    default:
      return state;
  }
}
