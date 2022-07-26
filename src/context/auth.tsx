import axios from "axios";
import { useReducer, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "./reducers";
import { AuthStateContext, fetchUserData, initialValues, logoutCall } from "./utils";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);
  const navigate = useNavigate();

  const logout = () => {
    logoutCall().then(() => {
      navigate("/login");
      localStorage.clear();
      dispatch({ type: "logout" });
    })
  }

  const { 
    user, 
    token, 
  } = state;

  const value = {
    user,
    token,
    logout,
    authDispatch: dispatch,
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "setToken", token });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchUserData(token).then((res) => {
        dispatch({ type: "setUserData", data: res });
        navigate("/");
      })
    }
  }, [token])
  
  return (
    <AuthStateContext.Provider value={value}>
      {children}
    </AuthStateContext.Provider>
  )
}