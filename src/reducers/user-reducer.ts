import { ADD_USER, Actions } from "../actions/types";

// types
import { UserInfo } from "../../types";

const initialState: UserInfo[] = [];

// reducer function for handling user actions
export const userReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
