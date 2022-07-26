import styled from "styled-components";

export const Container = styled.div`
  > form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing * 4}px;
    > input {
      height: 44px;
      box-sizing: border-box;
      padding: 0 ${({ theme }) => theme.spacing * 3}px;
      font-size: 14px;
      font-weight: 700;
      outline: none;
      background-color: ${({ theme }) => theme.colors.gray};
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.white};
      &::placeholder {
        color: ${({ theme }) => theme.colors.secondary};
      }
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
      &:active, &:focus {
        border: 1px solid ${({ theme }) => theme.colors.white};
      }
    }
  }
`

export const Button = styled.button`
  width: fit-content;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => theme.spacing * 4}px ${({ theme }) => theme.spacing * 6}px;
  font-weight: 700;
  font-size: 14px;
  transition: all ease-in-out .2s;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;
