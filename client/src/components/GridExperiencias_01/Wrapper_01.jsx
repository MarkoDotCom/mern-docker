import * as React from "react";
import { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Icon01 from "./Icon_01";
import Divider from "@mui/material/Divider";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip01 from "./Tooltip01";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
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
        "Slack",
        "Gitlab",
        "PostgreSQL",
        "Gather",
        "Freshdesk",
        "Scrum",
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

  const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    return <Icon01 {...props} innerRef={ref}></Icon01>;
  });

  // const SomeContent = React.forwardRef((props, ref) => (
  //   <Icon01 {...props} ref={ref}></Icon01>
  // ));
  //   return
  // }
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          position: "relative",
          // border:3,
          pl: "4.4rem",
        }}
      >
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
                      mb: ".25rem",
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
                    <Tooltip title="Período de Contribución" arrow>
                      <Box sx={{ flexDirection: "row", display: "flex" }}>
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
                            {experiencia.periodoInicio}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <MyComponent icon="time"></MyComponent>
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
                            {experiencia.periodoFin}
                          </Typography>
                        </Grid>
                      </Box>
                    </Tooltip>
                  </Grid>
                  {/* aqui debe poner un grid ... */}
                  <Grid
                    container
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Tooltip arrow title="Nombre de Compañía">
                      <Box sx={{ flexDirection: "row", display: "flex" }}>
                        <Grid item>
                          <MyComponent icon="business"></MyComponent>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              ml: 0.25,
                              // border:1,
                              color: "#505050",
                              fontFamily: "Noto Sans",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {experiencia.company}
                          </Typography>
                        </Grid>
                      </Box>
                    </Tooltip>
                  </Grid>
                </Box>
                {/* <Divider /> */}
                <Box
                  sx={{
                    // border:1,
                    py: ".5rem",
                    mx: "1rem",
                  }}
                >
                  {experiencia.funciones.map((funcion, index) => (
                    <Fragment key={index}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Noto Sans",
                        }}
                      >
                        {funcion}
                      </Typography>
                    </Fragment>
                  ))}
                </Box>
                <Divider sx={{ mb: 1 }} />
                <Grid
                  // direction="row"
                  sx={{
                    // border:1,
                    mx: ".25rem",
                  }}
                >
                  {experiencia.stack.map((item, index) => (
                    <Fragment key={index}>
                      <Chip
                        sx={{
                          fontSize: "1rem",
                          border: 0,
                          color: "#fadddd",
                          flexWrap: "wrap",
                          my: 0.5,
                          mx: 0.25,
                          background:
                            "linear-gradient(342deg, rgba(137,58,180,1) 0%, rgba(253,29,84,1) 50%, rgba(252,199,69,1) 100%)",
                        }}
                        variant="outlined"
                        label={item}
                      >
                        {/* {item} */}
                      </Chip>
                    </Fragment>
                  ))}
                </Grid>
              </Card>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Wrapper_01;
