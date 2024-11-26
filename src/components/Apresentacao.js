import { Grid, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { keyframes } from "@emotion/react";

export default function Apresentacao() {
    const bounceAnimation = keyframes`
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    `;

    return (
        <Grid container spacing={0} sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Grid
                item
                xs
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flexGrow: 1,
                    textAlign: "center",
                }}
            >
                <Grid sx={{ display: "flex", textAlign: "center" }}>
                    <Typography
                        sx={{
                            fontSize: { lg: "3rem", xs: "2rem" },
                            color: "#fff",
                            fontWeight: "bold",
                            marginRight: "15px",
                            userSelect: "none",
                        }}
                    >
                        Otávio
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { lg: "3rem", xs: "2rem" },
                            color: "#fff",
                            fontWeight: "bold",
                            userSelect: "none",
                        }}
                    >
                        Rodrigues
                    </Typography>
                </Grid>
                <Grid sx={{ display: "flex", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: "800",
                            fontSize: { lg: "1.5rem", xs: "1rem" },
                            userSelect: "none",
                        }}
                    >
                        Desenvolvedor{" "}
                        <span style={{ color: "var(--roxo)" }}>Full </span>{" "}
                        <span style={{ color: "var(--cinza-fonte)" }}> Stack</span>
                    </Typography>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "15px", 
                            marginTop: "10px",
                        }}
                    >
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/otavio-r-9684aa162/" ><LinkedInIcon sx={{ color: "#fff", fontSize: "3rem", cursor: "pointer" }} /></a> 
                        <a rel="noreferrer" target="_blank" href="https://github.com/otavius1"><GitHubIcon sx={{ color: "#fff", fontSize: "3rem", cursor: "pointer" }} /></a>
                        <a rel="noreferrer" target="_blank" href="mailto:otavio.rodri3@gmail.com"><EmailIcon sx={{ color: "#fff", fontSize: "3rem", cursor: "pointer" }} /></a>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    height: "10vh",
                }}
            >
                <Button
                    sx={{
                        animation: `${bounceAnimation} 1.5s infinite`,
                        color: "#fff",
                        fontSize: "2rem",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        ":hover": { backgroundColor: "transparent" },
                    }}
                >
                    <KeyboardArrowDownIcon sx={{ fontSize: "5rem" }} />
                </Button>
            </Grid>
        </Grid>
    );
}
