import { useContext } from "react";
import { AuthStateContext } from "./utils";
import { AuthProvider } from "./auth";

const useAuth = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
