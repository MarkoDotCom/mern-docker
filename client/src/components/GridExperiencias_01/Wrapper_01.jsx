import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import Icon01 from "./Icon_01";
import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";

const Wrapper_01 = () => {
  const [experiencias] = useState([
    {
      role: "Analista de Integraciones",
      periodoInicio: "10/2020",
      periodoFin: "03/2022",
      company: "Buk",
      funciones: [
        "· Manejo y desarrollo de información contable para empresas.",
        "· Garantizar soluciones a preguntas planteadas por otros equipos de trabajo.",
      ],
      stack: [
        "Ruby on Rails",
        "Gitlab",
        "PostgreSQL",
        "Slack",
        "Gather",
        "Freshdesk",
        "Sentry",
        "Trello",
        "Jira",
        "Google Workspace",
        "Linux Ubuntu",
        "Windows",
        "Linq",
        "Microsoft SQL Server",
        "Microsoft Office",
      ],
    },
    {
      role: "Soporte Informático & Técnico",
      periodoInicio: "01/2019",
      periodoFin: "10/2019",
      company: "SIAC Solutions",
      funciones: [
        "· Elaboración de dispositivos electrónicos.",
        "· Instalación, mantenimiento y monitoreo de equipos de control centralizado.",
      ],
      stack: [
        "Schneider Electric EcoStruxure Software",
        "AutoCAD",
        "JavaScript",
        "Google Workspace",
        "Arduino",
        "IDE",
        "C++",
        "TCP/IP",
        "Windows",
        "Modbus",
        "KNX",
        "Microsoft Office",
      ],
    },
    {
      role: "Agente de Ventas",
      periodoInicio: "01/2018",
      periodoFin: "12/2018",
      company: "VTR",
      funciones: [
        "· Ejecución de carta comercial a empresas.",
        "· Entregar utilidad mediante ventas para aprovechar comisiones.",
      ],
      stack: ["Elastix", "VTR Email", "Libre Office"],
    },
  ]);
  return (
    <Container>
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
        {experiencias.map((experiencia) => (
          <>
            <Card
              item
              variant="outlined"
              sx={{
                my: 1,
                mx: 2,
                width: "90%",
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
                  {experiencia.role}
                </Typography>
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        ml: 0.25,
                        // border:1,
                        color: "#505050",
                        fontFamily: "Ubuntu",
                        display: "flex",
                        justifyContent: "center",
                        mr: 0.6,
                      }}
                    >
                      {experiencia.periodoInicio}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Icon01 icon="time"></Icon01>
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
                      {experiencia.periodoFin}
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
                    <Icon01 icon="business"></Icon01>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        ml: 0.25,
                        // border:1,
                        color: "#505050",
                        fontFamily: "Ubuntu",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {experiencia.company}
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
              </Grid>
            </Card>
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Wrapper_01;
