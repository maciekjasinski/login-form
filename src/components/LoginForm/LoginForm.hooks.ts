import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context";

export const useLoginForm = () => {
  const { authDispatch } = useAuth();
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleSubmit = (values: any) => {
    setLoginErrorMessage("");
    axios.post('/login', values).then((res) => {
      const { token } = res.data;
      authDispatch({ type: "setToken", token });
    }).catch((err) => {
      const { message } = err.response.data;
      setLoginErrorMessage(message);
    })
  }

  return {
    handleSubmit,
    loginErrorMessage
  }
}
