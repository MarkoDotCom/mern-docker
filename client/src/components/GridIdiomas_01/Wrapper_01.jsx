import React, { useState, Fragment } from "react";
// import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
// import Chip from "@mui/joy/Chip";
import Card from "@mui/material/Card";
import Icon01 from "./Icon_01";
// import Divider from "@mui/material/Divider";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', "Salsa"].join(","),
  },
});
theme = responsiveFontSizes(theme);

const Wrapper_01 = () => {
  const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    return <Icon01 {...props} innerRef={ref}></Icon01>;
  });
  const [idiomas] = useState([
    {
      idioma: "Español",
      nivelHablado: "Nativo",
      nivelEscrito: "Nativo",
    },
    {
      idioma: "Inglés",
      nivelHablado: "Medio",
      nivelEscrito: "Avanzado",
    },
  ]);
  return (
    <ThemeProvider theme={theme}>

    <Container sx={{
      position: "relative",
      // border:3,
      pl:"4.4rem"

    }}>
      <Grid
        container
        sx={{
          alignItems: "center",
          my: 1,
        }}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {idiomas.map((idioma, index) => (
          <Fragment key={index}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                // border:1,
                alignItems: "center",
                justifyContent: "center",
                // justify: "center",
                display: "flex",
              }}
            >
              <Card
                elevation={3}
                sx={{
                  my: 2,
                  mx: 2,
                  width: "90%",
                  // border:1,
                  p: "1.25rem",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  sx={{
                    // border: 1,
                    pb: 1,
                  }}
                >
                  <Typography
                    variant={"h5"}
                    align="center"
                    sx={{
                      fontFamily: "Noto Sans",
                      // fontFamily: "Salsa",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      color: "#505050",
                      mb:".25rem"
                    }}
                  >
                    {idioma.idioma}
                  </Typography>

                  {/* aqui debe poner un grid ... */}
                  <Grid
                    container
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      // border:1,
                      // x:"2rem",
                      display: "flex",
                    }}
                  >
                    <Grid item>
                      <Tooltip arrow title="Nivel Hablado">
                        <div>
                          <MyComponent icon="speak"></MyComponent>
                        </div>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#505050",
                          fontFamily: "Noto Sans",
                          display: "flex",
                          justifyContent: "center",
                          mx: 0.6,
                        }}
                      >
                        {idioma.nivelHablado}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      // border:1,
                    }}
                  >
                    <Grid item>
                      <Tooltip arrow title="Nivel Escrito">
                        <div>
                          <Icon01 icon="writting"></Icon01>
                        </div>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#505050",
                          fontFamily: "Noto Sans",
                          display: "flex",
                          justifyContent: "center",
                          mx: 0.6,
                        }}
                      >
                        {idioma.nivelEscrito}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item>
                  <Icon01 icon="business"></Icon01>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      ml: 0.5,
                      // border:1,
                      color: "#505050",
                      fontFamily: "Ubuntu",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {idioma.casa}
                  </Typography>
                </Grid>
              </Grid> */}
                </Box>
                {/* <Divider
              sx={
                {
                  // border: 1,
                }
              }
            ></Divider> */}
                {/* <Box
              sx={{
                // border:1,
                py: 1,
                mx: 5,

              }}
            ><Typography
              sx={{
                fontFamily: "Ubuntu",
                textAlign: "center",
              }}
            >
              {idioma.descripcion}
            </Typography></Box> */}

                {/* <Box
              sx={{
                // border:1,
                py: 1,
                mx: 5,
              }}
            >
              Funciones:
              {idioma.funciones.map((funcion) => (
                <Typography
                  sx={{
                    fontFamily: "Ubuntu",
                  }}
                >
                  {funcion}
                </Typography>
              ))}
            </Box>
            <Grid
              direction="row"
              sx={{
                // border:1,
                px: 5,
              }}
            >
              {idioma.stack.map((item) => (
                <Chip
                  sx={{
                    border: 0,
                    color: "#fadddd",
                    flexWrap: "wrap",
                    my: 0.5,
                    mx: 0.25,
                    background:
                      "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
                  }}
                  variant="outlined"
                >
                  {item}
                </Chip>
              ))}
            </Grid> */}
              </Card>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
    </ThemeProvider>
  );
};

export default Wrapper_01;
