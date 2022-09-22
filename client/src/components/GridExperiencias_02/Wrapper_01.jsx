import React, { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon01 from "./Icon_01";
import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/joy/Chip";
import Tooltip from "@mui/material/Tooltip";
// import Button from '@mui/material/Button';

const Wrapper_01 = () => {
  const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    return <Icon01 {...props} innerRef={ref}></Icon01>;
  });

  const [experiencias] = useState([
    {
      clase: "Titulo Profesional Asociado",
      casa: "DuocUC",
      titulo: "Analista Computacional",
      descripcion:
        "Conocimiento en lenguajes de programación, algoritmos complejos, enfoque lógico y metodologías ágiles para el apropiado desarrollo de proyectos, junto con habilidades de escritura para formular documentación y reportes.",
      periodo: "2019",
    },
    {
      clase: "Certificación Digital",
      casa: "Cisco",
      titulo: "IT Essentials: PC Hardware & Software",
      descripcion:
        "Conocimiento en diversos componentes de hardware, ensamblado de equipos, diagnósticos, instalación de sistemas operativos.",
      periodo: "2017",
    },
    {
      clase: "Certificación Digital",
      casa: "ETS TOEIC",
      titulo: "Listening & Reading",
      descripcion:
        "Conocimientos del idioma inglés en lectura y audiencia, en ambientes profesionales.",
      periodo: "2017",
    },
  ]);
  return (
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
        direction="column"
        alignItems="center"
        justify="center"
      >
        {experiencias.map((experiencia, index) => (
          <Fragment key={index}>
            <Card
              elevation={3}
              sx={{
                my: 2,
                mx: 2,
                width: "90%",
                // border:1,
                p:"1.25rem",
                borderRadius:"1rem"
              }}
            >
              <Box
                sx={{
                  // border: 1,
                  pb: 1,
                }}
              >
                <Typography
                  align="center"
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
                  {experiencia.titulo}
                </Typography>
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    // border:1
                  }}
                >
                  <Grid item>
                    <Tooltip arrow title="Tipo de Certificado">
                      <div>
                        <MyComponent icon={experiencia.clase}></MyComponent>
                      </div>
                    </Tooltip>
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
                      {experiencia.clase}
                    </Typography>
                  </Grid>
                </Grid>
                {/* aqui debe poner un grid ... */}
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Tooltip arrow title="Año de Certificación">
                      <div>
                        <MyComponent icon="task"></MyComponent>
                      </div>
                    </Tooltip>
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
                      {experiencia.periodo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Tooltip arrow title="Nombre de Institución">
                      <div>
                        <MyComponent icon="business"></MyComponent>
                      </div>
                    </Tooltip>
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
                      {experiencia.casa}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider
                sx={
                  {
                    // border: 1,
                  }
                }
              ></Divider>
              <Box
                sx={{
                  // border:1,
                  py: 1,
                  mx: 5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Ubuntu",
                    textAlign: "center",
                  }}
                >
                  {experiencia.descripcion}
                </Typography>
              </Box>

              {/* <Box
              sx={{
                // border:1,
                py: 1,
                mx: 5,
              }}
              >
              Funciones:
              {experiencia.funciones.map((funcion) => (
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
                {experiencia.stack.map((item) => (
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
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Wrapper_01;
