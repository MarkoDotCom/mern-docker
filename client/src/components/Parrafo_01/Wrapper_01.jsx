import React, { useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Typography01 from "./Typography_01";
import foto from "./Image01.jpg";
import Image from "mui-image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const Wrapper_01 = () => {
  const [parrafo] = useState(
    "Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interés como desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos."
  );

  return (
    <Container
      sx={{
        // py: 1,
        position: "relative",
        // display: "inline-block",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        // height: "10vh",
        // paddingBottom: "50%",
        // width: "50%",
        // pt:"12rem",
        // border:1,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        // alignItems="stretch"
        sx={{
          display: "flex",

          height: "90vh",
          // mt:"50,
          // margin:"auto",
          // width:"100%",
          // border: 2,
          // justifyContent: "center",
          alignItems: "center",
          // p:1
          // height:"100vh"
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            // border:  3,
            color: "#FFFFFF",
            justifyContent: "center",
            // top:"10px",
            // my: 5,
            // pl: 5,
          }}
          xs={6}
          // md={12}
        >
          <Box sx={{ boder: 1 }}>
            <Tooltip
              arrow
              title={
                <React.Fragment>
                  "Mantengo mis mejores expectativas para ser una{" "}
                  <b>gran contribución</b>, asi como con quienes me inviten a
                  ser parte de sus proyectos".
                  <Typography color="inherit" textAlign="right">
                    <i>Marco Sebastián González Barraza</i>
                  </Typography>
                </React.Fragment>
              }
            >
              <Avatar
                sx={{
                  width: 240,
                  height: 240,
                  border: 3,
                }}
                src={foto}
              ></Avatar>
            </Tooltip>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            p: "3rem",
            // border: 10,
            // boxSizing: "border-box"
            // pb: "100vh"
            // position: 'relative',
            // top:"35vh",
            // width:"100%",
            // bottom: 0,
            // height: "100%",

            // overflow: "auto",
            // display: 'flex',
            // flexDirection: 'column'
          }}
          xs={12}
          md={6}
        >
          <Typography01></Typography01>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wrapper_01;
