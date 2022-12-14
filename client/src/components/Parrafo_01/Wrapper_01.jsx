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
        // height: "90vh",
        // justifyContent: "center",
        // alignItems: "center",
        // height: "10vh",
        // paddingBottom: "50%",
        // width: "50%",
        // pt:"12rem",
        color:"white",
        // border:3,
        // left:"4rem",
        // right:0,
        pl:"4.6rem"
        // width: "100vh"
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        // alignItems="stretch"
        sx={{
          // display: "flex",

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
            // border:  1,
            color: "#FFFFFF",
            justifyContent: "center",
            // top:"10px",
            // my: 5,
            py: 5,
          }}
          xs={12}
          md={6}
        >
          <Box sx={{  }}>
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
                  width: "18rem",
                  height: "18rem",
                  border: 3,
                  // mt: "2rem"
                }}
                src={foto}
              ></Avatar>
            </Tooltip>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            // p: "3rem",
            // border: 3,
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
