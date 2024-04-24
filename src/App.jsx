import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import LoginPage from "./pages/Login-Page";
import PasswordViewPage from "./pages/Password-View-Page";
import SignupPage from "./pages/Signup-Page";
import TestPage from "./pages/Test-Page";

//style
import "./style/general_page.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="landing" element={<PasswordViewPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="test" element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App