import { Action, State } from "./types";
import { initialValues } from "./utils";

export function authReducer(state: State, action: Action) {
  switch (action.type) {
    case "setToken": {
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return {
        ...state,
        token: action.token
      }
    }
    case "setUserData": {
      return {
        ...state,
        user: action.data
      }
    }
    case "logout": {
      return {
        ...initialValues
      }
    }
    default: {
      throw Error ("Error - unknown action type");
    }
  }
}
