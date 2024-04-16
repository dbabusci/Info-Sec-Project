//imported components
import { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";

//custom functions/methods
import passwordStrength from "../methods/Password-Strength";
import generatePassword from "../methods/Password-Generator";

//style
import '../style/new_password_form.css';

function NewPasswordForm() {
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

    return (
        <div className="new_password_form_container">
            <div className="new_password_form_title_container">
                <Typography variant="h2">Create New Password</Typography>
            </div>
            <div className="form_container">
                <div className="new_password_form_item">
                    <Typography sx={{m: 1}}>Website Name:</Typography>
                    <TextField
                        sx={{m: 1}}
                        label="Website Name"
                        value={website}
                        onChange={handleWebsiteChange}
                    />
                </div>
                <div className="new_password_form_item">
                    <Typography sx={{m: 1}}>Email/Username:</Typography>
                    <TextField
                        sx={{m: 1}}
                        label="Email/Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="new_password_form_item">
                    <Typography sx={{m: 1}}>Password:</Typography>
                    <TextField
                        sx={{m: 1}}
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="new_password_form_item">
                    <Typography sx={{m: 1}}>Confirm Password:</Typography>
                    <TextField
                        sx={{m: 1}}
                        label="Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <div className="new_password_form_item">
                    <Typography>Password Strength: {strength}</Typography>
                </div>
                <div className="new_password_form_item">
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        <Typography>Submit</Typography>
                    </Button>
                </div>
                <div className="new_password_form_item">
                    <Button
                        variant="contained"
                        onClick={handleGeneratePassword}
                    >
                        <Typography>Generate Password</Typography>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewPasswordForm;