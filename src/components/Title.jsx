import { Typography, Container } from "@mui/material";

function Title({pageTitle}){
    return(
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }}>
            <Typography sx={{ fontSize: "10vh" }}>{pageTitle}</Typography>
        </Container>
    );
}

export default Title;