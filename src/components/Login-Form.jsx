/*
Form that the user will login with
Has Form for Username, Password
*/

//imported components
import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

//style
import "../style/login_form.css";

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (inputUsername) => {
        setUsername(inputUsername.target.value);
    }

    const handlePasswordChange = (inputPassword) => {
        setPassword(inputPassword.target.value);
    }

    const handleSubmit = () => {
        //Replace this with logic for auth with mongodb
        alert("Add stuff here");
    }

    return(
        <div className="login_form">
            <div className="login_item">
                <div className="typography_holder">
                    <Typography className="login_label" fontSize={'250%'} textAlign={"center"}>Username:</Typography>                    
                </div>
                <div className="textfield_holder">
                    <TextField 
                        variant="standard" 
                        label="Username"
                        className="login_textfield"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div> 
            </div>
            <div className="login_item">
                <div className="typography_holder">
                    <Typography className="login_label" fontSize={'250%'} textAlign={"center"}>Password:</Typography>
                </div>
                <div className="textfield_holder">
                    <TextField 
                        variant="standard" 
                        label="Password"
                        className="login_textfield"
                        value={password}
                        onChange={handlePasswordChange}    
                    />
                </div>
            </div>
            <div className="login_item login_button_padding">
                <Button 
                    varient="contained" 
                    className="login_submit_button"
                    onClick={handleSubmit}
                >Login</Button>
            </div>
        </div>
    );
}

export default LoginForm;