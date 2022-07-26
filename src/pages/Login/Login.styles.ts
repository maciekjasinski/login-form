import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin: 0 0 ${({ theme }) => theme.spacing * 10}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 300;
  }
  @media screen and (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing * 4}px;
  }
`;
