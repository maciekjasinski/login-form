import { Button } from "../../components/LoginForm/LoginForm.styles"
import { useDashboard } from "./Dashboard.hooks"
import { StyledContainer } from "./Dashboard.styles";

export const Dashboard = () => {
  const { firstName, lastName, logout } = useDashboard();
  return (
    <StyledContainer>
      <h1>Welcome {firstName} {lastName}.</h1>
      <Button onClick={logout}>Logout</Button>
    </StyledContainer>
  )
}
