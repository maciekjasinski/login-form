import { Token } from "../../context/types";

export interface ProtectedRouteProps {
  token: Token | null;
  redirectPath?: string;
}
