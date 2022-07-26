import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { LoginForm } from './components/LoginForm';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AuthProvider } from './context';
import { theme } from './theme';
import { Routes, Route, Navigate, Outlet, BrowserRouter } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Layout } from './components/Layout';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Source Code Pro', monospace;
  }
`

const ProtectedRoute = ({ token, redirectPath = '/' }: { token: string | null, redirectPath?: string}) => {
  if (!token) {
    return <Navigate to={redirectPath} />
  }
  return <Outlet />
}

function App() {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     getData(token);
  //   }
  // }, [localStorage.getItem("token")])

  // const getData = (token: string) => {
  //   axios.get('/user', {
  //     headers: {
  //       token: token 
  //     }
  //   }).then((res) => {
  //     dispatch({ type: ""})
  //   });
  // }
  return (
    <Layout />
  );
}

export default App;
