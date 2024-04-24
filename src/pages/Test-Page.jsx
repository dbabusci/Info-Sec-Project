import { passwordEncrypt, passwordDecrypt } from "../methods/Password-Encryption";
import { TextField, Button, Typography, Link } from "@mui/material";
import { useState } from "react";

function TestPage(){
    const [password, setPassword] = useState('');
    const [encryptedPassword, setEncryptedPassword] = useState();
    const [decryptedPassword, setDecryptedPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEncryption = () => {
        let es = passwordEncrypt(password, "Secret");
        setEncryptedPassword(es);
    }

    const handleDecryption = () => {
        let ds = passwordDecrypt(encryptedPassword, "Secret");
        setDecryptedPassword(ds);
    }

    return(
        <div>
            <div>
                <TextField value={password} onChange={handlePasswordChange}/>
                <Button onClick={handleEncryption}>Test Encrypt</Button>
            </div>
            <div>
                <Button onClick={handleDecryption}>Test Decrypt</Button>
                <Typography>{decryptedPassword}</Typography>
            </div>
        </div>
    );
}

export default TestPage;