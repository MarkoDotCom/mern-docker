import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
// import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import Icon01 from "./Icon_01";
// import Divider from "@mui/material/Divider";

const Wrapper_01 = () => {
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
    <Container>
      <Grid
        container
        sx={{
          // justifyContent: "center",
          // alignItems: "center",
          my: 1,
          // mx: 1,
          // width: "90%",
          // display: "flex",
          // border: 1,
          // justifyContent: "center",
        }}
        // direction="column"
        // alignItems="center"
        // justify="center"
      >
        {idiomas.map((idioma) => (
          <>
            <Grid
              item
              xs={6}
              sx={{
                // border:1,
                alignItems: "center",
                justifyContent: "center",
                // justify: "center",
                display: "flex",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  // border: 1,
                  my: 1,
                  mx: 1.5,
                  width: "100%",
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
                    sx={{
                      fontFamily: "Bowlby One SC",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      color: "#505050",
                      // border: 1,
                      // alignContent: "center",
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
                    }}
                  >
                    <Grid item>
                      <Icon01 icon="speak"></Icon01>
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
                      <Icon01 icon="writting"></Icon01>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{
                          ml: 0.6,
                          // border:1,
                          color: "#505050",
                          fontFamily: "Ubuntu",
                          display: "flex",
                          justifyContent: "center",
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
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Wrapper_01;
