//imported components
import { useState, useEffect } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

//custom functions/methods
import passwordStrength from "../methods/Password-Strength";
import generatePassword from "../methods/Password-Generator";

function NewPasswordForm(){
    //align items vertically maybe
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [strength, setStrength] = useState('');

    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = () => {
        alert("Temp");
    }

    const handleGeneratePassword = () => {
        let genPassword = generatePassword();
        setPassword(genPassword);
        setConfirmPassword(genPassword);
    }

    useEffect(() => {
        setStrength(passwordStrength(password));
    })

    return(
        <div>
            <div>
                <Typography>Website Name</Typography>
                <TextField
                    label="Website Name"
                    value={website}
                    onChange={handleWebsiteChange}
                />
            </div>
            <div>
                <Typography>Email/Username</Typography>
                <TextField
                    label="Email/Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <Typography>Password</Typography>
                <TextField
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <Typography>Confirm Password</Typography>
                <TextField
                    label="Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </div>
            <div>
                <Typography>{strength}</Typography>
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    <Typography>Submit</Typography>
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={handleGeneratePassword}
                >
                    <Typography>Generate Password</Typography>
                </Button>
            </div>
        </div>
    );
}

export default NewPasswordForm;