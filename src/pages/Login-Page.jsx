/*
Page for the login page
Successful login -> leads to table page
Unsuccessful login -> Have a popup
*/

//Imported Components
import { Container } from "@mui/material";

//Custom Components
import LoginForm from "../components/Login-Form";

function LoginPage() {
    return(
        <Container>
            <LoginForm/>
        </Container>
    );
}

export default LoginPage;