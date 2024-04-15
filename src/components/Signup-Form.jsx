//imported components
import { TextField, Button, Typography, Link } from "@mui/material";
import { useState } from "react";

//style
import '../style/signup_form.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleCheckPasswordChange = (e) => {
        setCheckPassword(e.target.value);
    }

    const handleSubmit = () => {
        //keep if else logic for actual implementation
        if(password == checkPassword){
            console.log(username);
            console.log(password);
        }
        else{
            alert("Passwords do not match");
        }
    }

    return(
        <div className="signup_form">
            <div className="signup_item">
                <Typography>Username/Email:</Typography>
                <TextField
                    variant="standard"
                    label="Username/Email"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="signup_item">
                <Typography>Password:</Typography>
                <TextField
                    variant="standard"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div className="signup_item">
                <Typography>Confirm Password:</Typography>
                <TextField
                    variant="standard"
                    label="Password"
                    value={checkPassword}
                    onChange={handleCheckPasswordChange}
                />
            </div>
            <div className="signup_item">
                <Button
                    onClick={handleSubmit}
                >Submit</Button>
            </div>
            <div>
                <Link href="/">Back to Login</Link>
            </div>
        </div>
    );
}

export default SignupForm;