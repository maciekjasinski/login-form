import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { AuthProvider } from "../../context";
import { theme } from "../../theme";
import { ProtectedRoute } from "../ProtectedRoute";
import { Container } from "./Layout.styles";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: "Source Code Pro", monospace;
  }
`

export const Layout = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Container>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute token={token} />}>
                  <Route index element={<Dashboard />} />
                </Route>
              </Routes>
            </Container>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
