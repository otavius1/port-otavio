import { Divider, Grid, Typography } from "@mui/material";
import underConstruction from '../images/const.png'

export default function Projetos() {
    return (
        <Grid
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                backgroundColor: 'var(--laranja)',
                mt: '3%',
                mb: '5%',
                padding: '2rem',
                borderRadius: '25px',
                textAlign: 'center',
            }}
        >
            <Typography
                sx={{
                    fontSize: { lg: '2rem', xs: '2rem' },
                    fontWeight: 'bold',
                    color: '#fff',
                    mb: 2,
                    userSelect: 'none',
                }}
            >
                Projetos
            </Typography>

            <Divider
                sx={{
                    width: '80%',
                    backgroundColor: '#d9d9d9',
                    height: '2px',
                    mb: 3,
                }}
            />

            <img
                src={underConstruction}
                alt="Página em construção"
                style={{
                    maxWidth: '35%',
                    height: 'auto',
                    opacity: 0.8,
                }}
            />
            <Typography sx={{ fontWeight: 'bold', color: '#fff' }} >Ops! Esse carrossel ainda está em construção</Typography>
        </Grid>
    );
}
