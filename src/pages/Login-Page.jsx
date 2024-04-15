/*
Page for the login page
Successful login -> leads to table page
Unsuccessful login -> Have a popup
*/

//Imported Components
import { Container } from "@mui/material";

//Custom Components
import LoginForm from "../components/Login-Form";
import Title from "../components/Title";

//style
import "../style/general_page.css";
import "../style/login_form.css"

function LoginPage() {
    return(
        <div className="login_page_container">
            <div className="login_title_container">
                <Title pageTitle={"Login"}/>
            </div>
            <div className="login_form_container">
                <LoginForm/>
            </div>
        </div>
    );
}

export default LoginPage;