import styled from "styled-components";
import { Container } from "../Login/Login.styles";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  > button {
    align-self: center;
  }
`;