type Dispatch = (action: Action) => void;

export type Token = string;

export type User = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
}

export type Action = {
  type: "setToken",
  token: Token | null
} | {
  type: "setUserData",
  data: User | null
} | {
  type: "logout"
}

export interface State {
  user: User | null;
  token: Token | null
}

export interface AuthContextInterface extends State {
  authDispatch: Dispatch;
  logout: () => void;
}