import { useAuth } from "../../context"

export const useDashboard = () => {
  const { user, logout } = useAuth();
  
  return {
    ...user,
    logout
  }
}
