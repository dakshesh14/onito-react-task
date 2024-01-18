import { combineReducers } from "redux";

import { userReducer } from "./user-reducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  users: userReducer,
});
