import { Container } from "@mui/material";
import {BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import LoginPage from "./pages/Login-Page";
import PasswordViewPage from "./pages/Password-View-Page";

//style
import "./style/general_page.css";

function App() {
  return(
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="landing" element={<PasswordViewPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App