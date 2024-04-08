/*
Form that the user will login with
Has Form for Username, Password
*/
//imported components
import { TextField, Button, Container, Box, Typography } from "@mui/material";

//style
import "../style/login_form.css";

function LoginForm(){
    return(
        <div className="login_form">
            <div className="login_item"> 
                <Typography className="login_label" fontSize={'250%'} textAlign={"center"}>Username:</Typography>
                <TextField 
                    variant="standard" 
                    label="username"
                    className="login_textfield"
                />
            </div>
            <div className="login_item">
                <Typography className="login_label" fontSize={'250%'} textAlign={"center"}>Password:</Typography>
                <TextField 
                    variant="standard" 
                    label="password"
                    className="login_textfield"    
                />
            </div>
            <div className="login_item login_button_padding">
                <Button varient="contained" className="login_submit_button">Login</Button>
            </div>
        </div>
    );
}

export default LoginForm;