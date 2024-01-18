// types and constants
import { ADD_USER } from "./types";
import { UserInfo } from "../../types";

export const addUser = (userInfo: UserInfo) => {
  return {
    type: ADD_USER,
    payload: userInfo,
  };
};
