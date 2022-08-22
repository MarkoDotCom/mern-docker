import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import Typography from '@mui/material/Typography';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Box_00 = () => {
  return (
  <Container sx={{ height: 200, backgroundColor: "#FFFFFF",         display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "Shrikhand",
    border: "1px solid"
  }}>
      <Grid container>
        <Grid item xs={6} sx={{
        fontFamily: "Shrikhand",
        border: "1px solid"

        }}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Nombre: <Typography variant="h6" sx={{fontWeight: "bold"}}>Marco González</Typography>
          </Box>
        </Grid>

        {/* ... */}

        {/* <Grid item xs={6}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Edad
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Nacionalidad
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Dirección
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Correo
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ fontFamily: "Rubik" }}
          >
            Teléfono
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Box_00;
