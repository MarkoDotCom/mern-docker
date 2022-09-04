import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "./Typography_01";
import foto from "./fotito.jpg";
import Image from "mui-image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const Wrapper_01 = () => {
  const [parrafo] = useState(
    "Colaborador interesado en mejorar sus habilidades tecnológicas en el desarrollo de software computacional. Ofrezco utilidad en áreas de interés como desarrollo de aplicaciones, redes, electrónica, robótica, ecología y botánica. Mantengo mis mejores expectativas para ser una gran contribución y también con quienes me inviten a ser parte de sus proyectos."
  );

  return (
    <Container
      sx={{
        py: 1,
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          // border: 1,
        }}
      >
        <Grid
          item
          sx={{
            // border: 1,
            display: "flex",
            justifyContent: "center",
            my:5,
            pl:5
          }}
          xs={5}
        >
          {/* <Image
                        src={foto}

          > */}

          <Box>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                
                // border: 1,
              }}
              src={foto}
              duration={2000}
              ></Avatar>
          </Box>
              {/* </Image> */}
        </Grid>
        <Grid
          item
          sx={
            {
              // border: 1,
            }
          }
          xs={7}
        >
          <Typography parrafo={parrafo}></Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wrapper_01;
