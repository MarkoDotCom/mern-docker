import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";

const Wrapper_01 = () => {
  const [experiencias, setExperiencias] = useState([
    {
      role: "Analista de Integraciones",
      periodoInicio: "10/2020",
      periodoFin: "03/2022",
      company: "Buk",
      funciones: [
        "Manejo y desarrollo de información contable para empresas.",
        "Garantizar soluciones a preguntas planteadas por otros equipos de trabajo.",
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
        "Google",
        "Workspace",
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
        "Elaboración de dispositivos electrónicos.",
        "Instalación, mantenimiento y monitoreo de equipos de control centralizado.",
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
      company: "VTR (Fidelis)",
      funciones: [
        "Ejecución de carta comercial a empresas.",
        "Entregar utilidad mediante ventas para aprovechar comisiones.",
      ],
      stack: ["Elastix", "VTR Email", "Libre Office"],
    },
  ]);
  return (
    <Container>
      {experiencias.map((experiencia) => (
        <>
          <Card
            variant="outlined"
            sx={{
              // border:1,
              my: 2,
            }}
          >
            <Typography
              variant={"h5"}
              sx={{
                fontFamily: "Bowlby One SC",
                fontWeight: "bold",
                // border: 1,
              }}
            >
              {experiencia.role}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
              }}
            >
              {experiencia.periodoInicio} - {experiencia.periodoFin}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
              }}
            >
              {experiencia.company}
            </Typography>
            {experiencia.funciones.map((funcion) => (
              <Typography
                sx={{
                  fontFamily: "Ubuntu",
                }}
              >
                {funcion}
              </Typography>
            ))}

            <Grid direction="row">
              {experiencia.stack.map((item) => (
                <>
                  <Chip
                    sx={{
                      border: 1,
                      color: "#bb1919",
                      flexWrap: "wrap",

                      mt: 1,
                      mx: 0.25,
                    }}
                    variant="outlined"
                  >
                    {item}
                  </Chip>
                </>
              ))}
            </Grid>
          </Card>
        </>
      ))}
    </Container>
  );
};

export default Wrapper_01;
