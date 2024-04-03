/*
Page for the login page
Successful login -> leads to table page
Unsuccessful login -> Have a popup
*/

//Imported Components
import { Container } from "@mui/material";

//Custom Components
import LoginForm from "../components/Login-Form";

//style
import "../style/general_page.css"

function LoginPage() {
    return(
        <div className="login_page_container">
            <LoginForm/>
        </div>
    );
}

export default LoginPage;