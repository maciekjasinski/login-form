import axios from 'axios';
import { createContext } from 'react';
import { AuthContextInterface, State } from './types';

export const AuthStateContext = createContext<AuthContextInterface | undefined>(undefined);

export const initialValues = {
  user: null,
  token: null,
} as State;

export const fetchUserData = (token: string) => {
  return axios.get("/user").then((res) => {
    return res.data;
  })
}

export const logoutCall = () => {
  return axios.post("/logout").then((res) => {
    return res.data
  }).catch((err) => {
    const { message } = err.response.data;
    return message;
  })
}