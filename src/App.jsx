import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

//Pages
import LoginPage from "./pages/Login-Page";
import PasswordViewPage from "./pages/Password-View-Page";
import SignupPage from "./pages/Signup-Page";
import TestPage from "./pages/Test-Page";

//style
import "./style/general_page.css";

//custom components
import UserContext from "./components/User-Context";

function App() {
  const user = "";
  return (
    <UserContext Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="landing" element={<PasswordViewPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App