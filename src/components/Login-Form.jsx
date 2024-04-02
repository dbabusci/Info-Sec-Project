/*
Form that the user will login with
Has Form for Username, Password
*/
import { TextField, Button, Container, Box, Typography } from "@mui/material";

function LoginForm(){
    return(
        <Container>
            <Box>
                <Typography>Username:</Typography>
                <TextField variant="standard" label="example-user"/>
            </Box>
            <Box>
                <Typography>Password:</Typography>
                <TextField variant="standard" label="password123"/>
            </Box>
            <Box>
                <Button varient="contained">Login</Button>
            </Box>
        </Container>
    );
}

export default LoginForm;